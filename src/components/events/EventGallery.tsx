import { useEffect, useId, useRef, useState } from 'react'
import type { EventPhoto } from '@/content/events'
import { Reveal } from '@/components/common/Reveal'

type EventGalleryProps = {
  photos: EventPhoto[]
}

export function EventGallery({ photos }: EventGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastFocusRef = useRef<HTMLElement | null>(null)
  const dialogId = useId()
  const active = activeIndex !== null ? photos[activeIndex] : null

  function open(index: number) {
    lastFocusRef.current = document.activeElement as HTMLElement | null
    setActiveIndex(index)
  }

  function close() {
    setActiveIndex(null)
    lastFocusRef.current?.focus?.()
  }

  function step(delta: number) {
    setActiveIndex((current) =>
      current === null ? 0 : (current + delta + photos.length) % photos.length,
    )
  }

  useEffect(() => {
    if (activeIndex === null) return
    closeRef.current?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setActiveIndex(null)
        lastFocusRef.current?.focus?.()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        setActiveIndex((c) => (c === null ? 0 : (c + 1) % photos.length))
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setActiveIndex((c) => (c === null ? 0 : (c - 1 + photos.length) % photos.length))
      } else if (event.key === 'Tab') {
        const dialog = document.getElementById(dialogId)
        if (!dialog) return
        const focusable = dialog.querySelectorAll<HTMLElement>('button')
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [activeIndex, dialogId, photos.length])

  return (
    <>
      <div className="grid gap-4 md:grid-cols-12 md:gap-5">
        {photos.map((photo, index) => (
          <Reveal
            key={photo.src}
            delay={index * 0.06}
            className={
              index === 0
                ? 'md:col-span-8 md:row-span-2'
                : 'md:col-span-4'
            }
          >
            <button
              type="button"
              onClick={() => open(index)}
              aria-label={`View larger: ${photo.caption}`}
              className="group relative block h-full w-full overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                decoding="async"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:group-hover:scale-100 ${
                  index === 0 ? 'aspect-[4/3] md:aspect-auto md:h-full' : 'aspect-[4/3]'
                }`}
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/85 to-transparent p-4 text-left md:p-5">
                <span className="block text-sm text-paper md:text-base">{photo.caption}</span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {active && activeIndex !== null ? (
        <div
          id={dialogId}
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          onClick={close}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-night/95 p-4 backdrop-blur-sm"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="absolute right-5 top-5 z-10 rounded-full border border-paper/25 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-paper hover:border-gilt hover:text-gilt"
          >
            Close
          </button>

          {photos.length > 1 ? (
            <>
              <button
                type="button"
                aria-label="Previous photo"
                onClick={(event) => {
                  event.stopPropagation()
                  step(-1)
                }}
                className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-paper/25 text-paper hover:border-gilt hover:text-gilt md:left-6"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next photo"
                onClick={(event) => {
                  event.stopPropagation()
                  step(1)
                }}
                className="absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-paper/25 text-paper hover:border-gilt hover:text-gilt md:right-6"
              >
                →
              </button>
            </>
          ) : null}

          <figure className="max-h-[88vh] max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <img
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              className="max-h-[78vh] w-auto max-w-full rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-paper/80">
              {active.caption}
              <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-paper/45">
                {activeIndex + 1} / {photos.length}
              </span>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  )
}
