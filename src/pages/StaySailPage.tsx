import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { FaWhatsapp, FaCheck, FaDownload } from 'react-icons/fa'
import { SeoHead } from '@/components/common/SeoHead'
import { Reveal } from '@/components/common/Reveal'
import { SectionIntro } from '@/components/events/SectionIntro'
import { FloatingWhatsApp } from '@/components/events/FloatingWhatsApp'
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
} from '@/content/events'

const ease = [0.22, 1, 0.36, 1] as const

const goldButton =
  'inline-flex items-center justify-center gap-2.5 rounded-full bg-gilt px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-night transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#d8bb84] motion-reduce:hover:translate-y-0'

function DownloadBrochure({ className = '' }: { className?: string }) {
  return (
    <a href={staySail.brochure} download={staySail.brochureFileName} className={className}>
      <FaDownload className="text-sm" aria-hidden="true" />
      Download brochure (PDF)
    </a>
  )
}

function HeroSection() {
  const reduceMotion = useReducedMotion()
  const fade = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: reduceMotion ? 0 : delay, ease },
  })

  return (
    <section
      data-avoid-fab
      aria-labelledby="ss-hero-heading"
      className="relative isolate flex min-h-[88svh] items-end overflow-hidden bg-night"
    >
      <img
        src={devDeepawali.image}
        alt=""
        aria-hidden="true"
        width={1200}
        height={675}
        fetchPriority="high"
        decoding="async"
        className="hero-ken-burns absolute inset-0 -z-10 h-full w-full object-cover object-[60%_55%]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night/90 via-night/55 to-night/25" />

      <div className="container-page pb-16 pt-36 md:pb-20">
        <nav aria-label="Breadcrumb" className="mb-6 text-[10px] uppercase tracking-[0.2em] text-paper/60">
          <Link to="/" className="hover:text-paper">
            Home
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <Link to={devDeepawali.path} className="hover:text-paper">
            Dev Deepawali
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <span className="text-paper/85">{staySail.shortTitle}</span>
        </nav>

        <motion.p
          {...fade(0.1)}
          className="inline-flex rounded-full border border-gilt/50 bg-night/35 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-gilt backdrop-blur-sm"
        >
          Full package tour · {devDeepawali.date}
        </motion.p>

        <motion.h1
          {...fade(0.2)}
          id="ss-hero-heading"
          className="mt-6 max-w-[12em] font-display text-5xl leading-[1.02] text-balance text-paper sm:text-6xl lg:text-7xl"
        >
          {staySail.title}
        </motion.h1>

        <motion.p {...fade(0.32)} className="mt-5 max-w-xl text-lg leading-relaxed text-paper/85 md:text-xl">
          {staySail.tagline}
        </motion.p>

        <motion.ul {...fade(0.4)} className="mt-6 flex flex-wrap gap-2 text-xs text-paper/85">
          {['3 nights · 4 days', 'Breakfast & dinner', 'Shared boat on the Ganges', 'Varanasi'].map(
            (item) => (
              <li key={item} className="rounded-full border border-paper/25 bg-night/25 px-3.5 py-1.5 backdrop-blur-sm">
                {item}
              </li>
            ),
          )}
        </motion.ul>

        <motion.div {...fade(0.5)} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href={staySail.enquiry} target="_blank" rel="noopener noreferrer" className={goldButton}>
            <FaWhatsapp className="text-base" aria-hidden="true" />
            Enquire on WhatsApp
          </a>
          <DownloadBrochure className="inline-flex items-center justify-center gap-2.5 rounded-full border border-paper/40 bg-night/20 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-paper backdrop-blur-sm transition-colors duration-300 hover:border-gilt hover:text-gilt" />
        </motion.div>
      </div>
    </section>
  )
}

function EveningSection() {
  const { evening } = staySail
  return (
    <section aria-labelledby="ss-evening-heading" className="section-pad bg-section-cream">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gilt-deep">
            The evening
          </p>
          <h2 id="ss-evening-heading" className="mt-4 text-4xl leading-[1.1] text-night md:text-5xl">
            {evening.title}
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.18em] text-mute">{evening.subtitle}</p>
          <p className="mt-6 text-base leading-[1.85] text-night/80 md:text-lg">{evening.body}</p>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-5">
          <div className="h-full rounded-2xl border border-gilt/40 bg-paper p-7 md:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gilt-deep">
              {evening.whyBoatTitle}
            </p>
            <p className="mt-4 font-display text-2xl leading-snug text-night">{evening.whyBoat}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function StaySection() {
  const { stay } = staySail
  return (
    <section aria-labelledby="ss-stay-heading" className="section-pad bg-paper">
      <div className="container-page">
        <SectionIntro
          id="ss-stay-heading"
          eyebrow={`The stay · ${stay.summary}`}
          title={stay.title}
          description={stay.body}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {packageRooms.map((room, index) => (
            <Reveal key={room.id} delay={index * 0.08} className="h-full">
              <article
                aria-labelledby={`ss-room-${room.id}`}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_18px_50px_rgba(20,23,20,0.07)]"
              >
                <img
                  src={room.image}
                  alt={room.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3
                    id={`ss-room-${room.id}`}
                    className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gilt-deep"
                  >
                    {room.name}
                  </h3>
                  <p className="mt-3 font-display text-4xl text-night">{formatInr(room.price)}</p>
                  <p className="mt-1.5 text-sm text-mute">{roomRateTerms}</p>
                  <div className="mt-auto pt-6">
                    <a
                      href={room.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${goldButton} w-full px-6`}
                    >
                      <FaWhatsapp className="text-base" aria-hidden="true" />
                      Book {room.name}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <ul className="mt-10 flex flex-wrap gap-2.5">
            {stay.inclusions.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 rounded-full bg-fog px-4 py-2 text-sm text-night"
              >
                <FaCheck className="text-[10px] text-brand" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-mute">{stay.note}</p>
        </Reveal>
      </div>
    </section>
  )
}

function RiverSection() {
  return (
    <section
      aria-labelledby="ss-river-heading"
      className="section-pad bg-section-linen"
    >
      <div className="container-page">
        <SectionIntro
          id="ss-river-heading"
          eyebrow="On the river"
          title="Add your seats on the Ganges"
          description={`Shared boats, priced per person. ${boatRide.duration} on the river, boarding at ${boatRide.boardingPoint}.`}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {boats.map((boat, index) => (
            <Reveal key={boat.id} delay={index * 0.08} className="h-full">
              <article
                aria-labelledby={`ss-boat-${boat.id}`}
                className="grid h-full overflow-hidden rounded-2xl border border-line bg-paper sm:grid-cols-[2fr_3fr]"
              >
                <img
                  src={boat.image}
                  alt={boat.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] h-full w-full object-cover sm:aspect-auto"
                />
                <div className="flex flex-col p-6">
                  <h3 id={`ss-boat-${boat.id}`} className="text-2xl text-night">
                    {boat.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{boat.experience}</p>
                  <p className="mt-4 font-display text-3xl text-gilt-deep">
                    {formatInr(boat.price)}
                    <span className="ml-1.5 font-sans text-xs uppercase tracking-[0.16em] text-mute">
                      / {boat.priceUnit}
                    </span>
                  </p>
                  <div className="mt-auto pt-5">
                    <a
                      href={boat.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand hover:text-brand-deep"
                    >
                      <FaWhatsapp className="text-base" aria-hidden="true" />
                      {boat.bookLabel}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Duration', value: boatRide.duration },
              { label: 'Boarding', value: boatRide.boardingPoint },
              { label: 'Report by', value: boatRide.reportBy },
              ...boatRide.route,
            ].map((item) => (
              <div key={item.label} className="bg-paper p-5">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gilt-deep">
                  {item.label}
                </dt>
                <dd className="mt-2 text-night">{item.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 rounded-xl border border-gilt/40 bg-paper px-5 py-4 text-sm text-mute">
            {boatRide.note}
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function WhyUsSection() {
  return (
    <section aria-labelledby="ss-why-heading" className="section-pad bg-section-sage">
      <div className="container-page">
        <SectionIntro id="ss-why-heading" eyebrow="Why book with us" title="Why choose us" />
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            { title: 'On the river', items: whyChooseUs.river, dark: true },
            { title: 'At the hotel', items: whyChooseUs.hotel, dark: false },
          ].map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 0.08} className="h-full">
              <div
                className={`h-full rounded-2xl p-7 md:p-9 ${
                  group.dark ? 'bg-brand-deep text-paper' : 'border border-line bg-paper text-night'
                }`}
              >
                <h3 className={`text-2xl md:text-3xl ${group.dark ? 'text-paper' : 'text-night'}`}>
                  {group.title}
                </h3>
                <ol className={`mt-6 divide-y ${group.dark ? 'divide-paper/15' : 'divide-line'}`}>
                  {group.items.map((item, index) => (
                    <li key={item} className="flex gap-5 py-4">
                      <span
                        className={`font-display text-lg ${group.dark ? 'text-gilt' : 'text-gilt-deep'}`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className={group.dark ? 'text-paper/85' : 'text-night/80'}>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function TermsSection() {
  return (
    <section data-avoid-fab aria-labelledby="ss-terms-heading" className="section-pad bg-paper">
      <div className="container-page">
        <SectionIntro
          id="ss-terms-heading"
          eyebrow="Before you book"
          title="Terms"
          description="Book the stay and the boat together. Booking means these terms are accepted."
        />
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {packageTerms.map((group, index) => (
            <Reveal key={group.title} delay={(index % 2) * 0.08}>
              <h3 className="border-b border-line pb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-gilt-deep">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-night/80">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gilt-deep" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCtaSection() {
  return (
    <section
      data-avoid-fab
      aria-labelledby="ss-final-heading"
      className="relative isolate overflow-hidden bg-brand-deep"
    >
      <img
        src={devDeepawali.image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-deep/90 via-brand-deep/70 to-brand-deep/50" />

      <div className="container-page py-20 text-center md:py-28">
        <Reveal className="mx-auto max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gilt">
            {devDeepawali.date}
          </p>
          <h2 id="ss-final-heading" className="mt-4 text-4xl leading-[1.1] text-balance text-paper md:text-6xl">
            Rooms on these dates are limited
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-paper/85 md:text-lg">
            Message us on WhatsApp with your room and boat choice, and our team will confirm
            availability with you.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={staySail.enquiry} target="_blank" rel="noopener noreferrer" className={goldButton}>
              <FaWhatsapp className="text-base" aria-hidden="true" />
              Enquire on WhatsApp
            </a>
            <DownloadBrochure className="inline-flex items-center justify-center gap-2.5 rounded-full bg-paper px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-night transition-colors hover:bg-white" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function StaySailPage() {
  return (
    <div className="bg-paper">
      <SeoHead
        path={staySail.path}
        title={staySail.seoTitle}
        description={staySail.seoDescription}
        image={devDeepawali.image}
      />
      <HeroSection />
      <EveningSection />
      <StaySection />
      <RiverSection />
      <WhyUsSection />
      <TermsSection />
      <FinalCtaSection />
      <FloatingWhatsApp
        href={staySail.enquiry}
        label="Enquire about the Dev Deepawali Stay & Sail package on WhatsApp"
      />
    </div>
  )
}
