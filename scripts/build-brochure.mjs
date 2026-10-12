// Prints the Stay & Sail brochure route to PDF with headless Chrome.
// Needs the dev server running: `npm run dev`, then `npm run brochure`.
// Drives Chrome over the DevTools protocol so it can wait for web fonts and images.
import { spawn } from 'node:child_process'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'

const baseUrl = process.env.BROCHURE_BASE_URL ?? 'http://localhost:5173'
const chromePath = process.env.CHROME_PATH ?? 'google-chrome'
const output = resolve('public/brochures/dev-deepawali-2026-stay-and-sail.pdf')
const port = 9333
const profile = mkdtempSync(join(tmpdir(), 'brochure-chrome-'))

const chrome = spawn(
  chromePath,
  [
    '--headless=new',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profile}`,
    'about:blank',
  ],
  { stdio: 'ignore' },
)

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function pageSocketUrl() {
  for (let attempt = 0; attempt < 50; attempt++) {
    try {
      const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()
      const page = targets.find((t) => t.type === 'page')
      if (page) return page.webSocketDebuggerUrl
    } catch {
      // Chrome not listening yet
    }
    await sleep(200)
  }
  throw new Error('Chrome did not start')
}

function connect(url) {
  const ws = new WebSocket(url)
  let nextId = 1
  const pending = new Map()
  ws.addEventListener('message', (event) => {
    const msg = JSON.parse(event.data)
    if (msg.id && pending.has(msg.id)) {
      const { resolve: done, reject } = pending.get(msg.id)
      pending.delete(msg.id)
      if (msg.error) reject(new Error(msg.error.message))
      else done(msg.result)
    }
  })
  const send = (method, params = {}) =>
    new Promise((done, reject) => {
      const id = nextId++
      pending.set(id, { resolve: done, reject })
      ws.send(JSON.stringify({ id, method, params }))
    })
  return new Promise((ready) => ws.addEventListener('open', () => ready({ ws, send })))
}

try {
  const { ws, send } = await connect(await pageSocketUrl())
  await send('Page.enable')
  await send('Page.navigate', { url: `${baseUrl}/print/dev-deepawali-stay-and-sail` })

  const readyCheck = `(async () => {
    if (!document.querySelector('.brochure-page')) return false
    await document.fonts.ready
    const images = [...document.images]
    await Promise.all(images.map((img) => img.complete ? null : new Promise((r) => { img.onload = img.onerror = r })))
    return images.every((img) => img.naturalWidth > 0)
  })()`

  let ready = false
  for (let attempt = 0; attempt < 60 && !ready; attempt++) {
    await sleep(500)
    const { result } = await send('Runtime.evaluate', { expression: readyCheck, awaitPromise: true, returnByValue: true })
    ready = result.value === true
  }
  if (!ready) throw new Error('Brochure page did not finish loading (fonts or images)')

  const { data } = await send('Page.printToPDF', {
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: false,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  })
  mkdirSync(dirname(output), { recursive: true })
  writeFileSync(output, Buffer.from(data, 'base64'))
  ws.close()
  console.log(`Brochure written to ${output}`)
} finally {
  chrome.kill()
  await sleep(300)
  rmSync(profile, { recursive: true, force: true })
}
