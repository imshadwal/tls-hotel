import type { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { SITE } from '@/constants/site'
import {
  boatRide,
  boats,
  devDeepawali,
  formatInr,
  packageRooms,
  packageTerms,
  roomRateTerms,
  staySail,
  whyChooseUs,
  type Boat,
} from '@/content/events'

/** Print layout for the Stay & Sail brochure PDF (A4). Not linked from the site. */

const printCss = `
  @page { size: A4; margin: 0; }
  html, body { background: #e8ebe3; }
  .brochure-page { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  @media print {
    html, body { background: #fff; }
    .brochure-stack { gap: 0 !important; padding: 0 !important; }
    .brochure-page { break-after: page; box-shadow: none !important; }
  }
`

const contactLine = [SITE.phoneDisplay, 'tlshotels.com', SITE.email, '@tlshotels']

function PageFooter({ dark = false }: { dark?: boolean }) {
  return (
    <footer
      className={`mt-auto flex items-center justify-between gap-4 px-[14mm] py-[5mm] text-[10px] font-medium tracking-[0.06em] ${
        dark ? 'bg-night/70 text-paper/90' : 'bg-brand-deep text-paper'
      }`}
    >
      <span className="font-semibold uppercase tracking-[0.18em] text-gilt">{SITE.name}</span>
      <span className="flex gap-4">
        {contactLine.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </span>
    </footer>
  )
}

function PageHeader({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center justify-between">
      <p className="font-display text-sm italic text-gilt-deep">
        {number} — {label}
      </p>
      <img src="/images/brand/logo.png" alt="" className="h-9 w-9 rounded-full" />
    </div>
  )
}

function Page({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <section
      className={`brochure-page relative flex h-[297mm] w-[210mm] flex-col overflow-hidden bg-paper shadow-[0_10px_40px_rgba(20,23,20,0.15)] ${className}`}
    >
      {children}
    </section>
  )
}

function CoverPage() {
  return (
    <Page className="bg-night text-paper">
      <img
        src={devDeepawali.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[62%_50%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/45 to-night/10" />

      <div className="relative mt-auto px-[14mm] pb-[12mm]">
        <div className="inline-flex items-center gap-3 rounded-2xl border border-paper/15 bg-night/60 py-2.5 pl-2.5 pr-5 backdrop-blur-md">
          <img src="/images/brand/logo.png" alt="" className="h-11 w-11 rounded-full" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gilt">
            {SITE.name} · Presents
          </p>
        </div>

        <h1 className="mt-8 font-display text-[88px] leading-[0.92] text-paper">
          Dev
          <br />
          Deepawali
        </h1>
        <p className="mt-3 font-display text-4xl italic text-gilt">{staySail.shortTitle}</p>
        <p className="mt-5 text-lg text-paper/90">{staySail.tagline}</p>
        <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.3em] text-paper/80">
          {devDeepawali.date} · Varanasi
        </p>
      </div>
      <div className="relative">
        <PageFooter dark />
      </div>
    </Page>
  )
}

function EveningPage() {
  const { evening } = staySail
  return (
    <Page>
      <div className="flex flex-1 flex-col px-[14mm] pt-[12mm]">
        <PageHeader number="02" label="The evening" />
        <h2 className="mt-6 font-display text-6xl leading-none text-night">{evening.title}</h2>
        <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-gilt-deep">
          {evening.subtitle}
        </p>
        <p className="mt-6 text-[15px] leading-[1.8] text-night/80">{evening.body}</p>

        <div className="mt-8 rounded-2xl border border-gilt/50 bg-fog p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gilt-deep">
            {evening.whyBoatTitle}
          </p>
          <p className="mt-3 font-display text-xl leading-snug text-night">{evening.whyBoat}</p>
        </div>

        <figure className="mt-8 flex-1 pb-[10mm]">
          <img
            src="/images/events/motor-boat.jpg"
            alt=""
            className="h-full max-h-[95mm] w-full rounded-2xl object-cover"
          />
          <figcaption className="mt-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-mute">
            The river, after the lamps are lit
          </figcaption>
        </figure>
      </div>
      <PageFooter />
    </Page>
  )
}

function StayPage() {
  const { stay } = staySail
  return (
    <Page>
      <div className="flex flex-1 flex-col px-[14mm] pt-[12mm]">
        <PageHeader number="03" label="The stay" />
        <h2 className="mt-5 font-display text-[34px] leading-tight text-night">{stay.title}</h2>
        <p className="mt-1 font-display text-lg italic text-gilt-deep">{stay.summary}</p>
        <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-night">
          {stay.eyebrow}
        </p>
        <p className="mt-2 text-[13px] leading-relaxed text-night/75">{stay.body}</p>

        <div className="mt-5 space-y-4">
          {packageRooms.map((room) => (
            <div key={room.id} className="grid grid-cols-[1.25fr_1fr] items-center gap-6">
              <img src={room.image} alt="" className="h-[46mm] w-full rounded-xl object-cover" />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-gilt-deep">
                  {room.name}
                </p>
                <p className="mt-1.5 font-display text-4xl text-night">{formatInr(room.price)}</p>
                <p className="mt-1 text-[11px] leading-snug text-mute">{roomRateTerms}</p>
              </div>
            </div>
          ))}
        </div>

        <ul className="mt-5 flex flex-wrap gap-2">
          {stay.inclusions.map((item) => (
            <li key={item} className="rounded-full bg-fog px-3 py-1.5 text-[11px] text-night">
              ✓ {item}
            </li>
          ))}
        </ul>
        <p className="mt-3 pb-[8mm] text-[11px] leading-relaxed text-mute">
          {stay.note} {SITE.address}.
        </p>
      </div>
      <PageFooter />
    </Page>
  )
}

function BoatPage({ boat, number }: { boat: Boat; number: string }) {
  const details = [
    { label: 'Duration', value: boatRide.duration },
    { label: 'Boarding', value: boatRide.boardingPoint },
    ...boatRide.route,
    { label: 'Report by', value: boatRide.reportBy },
  ]

  return (
    <Page>
      <div className="flex flex-1 flex-col px-[14mm] pt-[12mm]">
        <PageHeader number={number} label="On the river" />
        <h2 className="mt-5 font-display text-5xl leading-none text-night">{boat.name}</h2>
        <p className="mt-4 max-w-[150mm] text-[14px] leading-relaxed text-night/75">
          {boat.experience}
        </p>

        <div className="mt-6 inline-flex w-fit items-baseline gap-2 rounded-xl bg-gilt px-6 py-3">
          <span className="font-display text-5xl text-night">{formatInr(boat.price)}</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-night/80">
            per {boat.priceUnit}
          </span>
        </div>

        <dl className="mt-7 grid grid-cols-2 gap-3">
          {details.map((item) => (
            <div key={item.label} className="rounded-xl border-l-2 border-gilt-deep bg-fog px-4 py-3">
              <dt className="text-[9px] font-semibold uppercase tracking-[0.24em] text-gilt-deep">
                {item.label}
              </dt>
              <dd className="mt-1 text-[13px] text-night">{item.value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-4 rounded-xl border border-gilt/50 bg-[#f6efe2] px-4 py-3 text-[12px] text-night/80">
          {boatRide.note}
        </p>

        <figure className="mt-6 min-h-0 flex-1 pb-[10mm]">
          <img src={boat.image} alt="" className="h-full max-h-[88mm] w-full rounded-2xl object-cover" />
          <figcaption className="mt-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-mute">
            {boat.category}
          </figcaption>
        </figure>
      </div>
      <PageFooter />
    </Page>
  )
}

function WhyUsPage() {
  const groups = [
    { title: 'On the river', items: whyChooseUs.river, dark: true },
    { title: 'At the hotel', items: whyChooseUs.hotel, dark: false },
  ]
  return (
    <Page>
      <div className="flex flex-1 flex-col px-[14mm] pt-[12mm] pb-[10mm]">
        <PageHeader number="06" label="Why us" />
        <h2 className="mt-5 font-display text-5xl text-night">Why choose us</h2>
        <div className="mt-8 grid grid-cols-2 gap-5">
          {groups.map((group) => (
            <div
              key={group.title}
              className={`rounded-2xl p-6 ${
                group.dark ? 'bg-brand-deep text-paper' : 'border border-line bg-fog text-night'
              }`}
            >
              <h3 className={`font-display text-2xl ${group.dark ? 'text-paper' : 'text-night'}`}>
                {group.title}
              </h3>
              <ol className={`mt-5 divide-y ${group.dark ? 'divide-paper/15' : 'divide-line'}`}>
                {group.items.map((item, index) => (
                  <li key={item} className="flex gap-4 py-3.5 text-[13px] leading-relaxed">
                    <span className={`font-display ${group.dark ? 'text-gilt' : 'text-gilt-deep'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={group.dark ? 'text-paper/90' : 'text-night/80'}>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
        <figure className="mt-6 min-h-0 flex-1">
          <img
            src={devDeepawali.image}
            alt=""
            className="h-full w-full rounded-2xl object-cover object-[60%_55%]"
          />
        </figure>
      </div>
      <PageFooter />
    </Page>
  )
}

function TermsPage() {
  return (
    <Page>
      <div className="flex flex-1 flex-col px-[14mm] pt-[12mm] pb-[8mm]">
        <PageHeader number="07" label="Before you book" />
        <h2 className="mt-5 font-display text-5xl text-night">Terms</h2>
        <p className="mt-2 text-[13px] text-night/75">Book the stay and the boat together.</p>

        <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-5">
          {packageTerms.map((group) => (
            <div key={group.title}>
              <h3 className="border-b border-line pb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-gilt-deep">
                {group.title}
              </h3>
              <ul className="mt-2.5 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2 text-[11.5px] leading-[1.6] text-night/80">
                    <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-gilt-deep" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-auto rounded-2xl bg-fog p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-gilt-deep">
            Book on WhatsApp or call
          </p>
          <p className="mt-1.5 font-display text-3xl text-night">{SITE.phoneDisplay}</p>
          <p className="mt-1.5 text-[11px] text-mute">
            {SITE.email} · tlshotels.com{staySail.path} · {SITE.address}
          </p>
        </div>
      </div>
      <PageFooter />
    </Page>
  )
}

export function StaySailBrochure() {
  return (
    <>
      <Helmet>
        <title>{`${staySail.title} — ${SITE.name}`}</title>
        <meta name="robots" content="noindex, nofollow" />
        <style>{printCss}</style>
      </Helmet>
      <div className="brochure-stack flex flex-col items-center gap-8 py-8 font-sans">
        <CoverPage />
        <EveningPage />
        <StayPage />
        <BoatPage boat={boats[0]} number="04" />
        <BoatPage boat={boats[1]} number="05" />
        <WhyUsPage />
        <TermsPage />
      </div>
    </>
  )
}
