import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'
import { SeoHead } from '@/components/common/SeoHead'
import { Reveal } from '@/components/common/Reveal'
import { BoatCard } from '@/components/events/BoatCard'
import { EventGallery } from '@/components/events/EventGallery'
import { EventFaq } from '@/components/events/EventFaq'
import { FloatingWhatsApp } from '@/components/events/FloatingWhatsApp'
import {
  boats,
  bookingSteps,
  devDeepawali,
  devDeepawaliPage,
  eventFaqs,
  eventGallery,
  experienceHighlights,
  formatInr,
} from '@/content/events'

const ease = [0.22, 1, 0.36, 1] as const

function SectionIntro({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  id: string
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}) {
  return (
    <Reveal className={`mb-10 max-w-2xl md:mb-14 ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gilt-deep">
        {eyebrow}
      </p>
      <h2 id={id} className="mt-4 text-4xl leading-[1.1] text-balance text-night md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-mute md:text-lg">{description}</p>
      ) : null}
    </Reveal>
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
      aria-labelledby="dd-hero-heading"
      className="relative isolate flex min-h-[92svh] items-center overflow-hidden bg-night"
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
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night/90 via-night/70 to-night/35 md:from-night/80 md:via-night/45 md:to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-night/50 to-transparent" />

      <div className="container-page grid gap-12 pb-16 pt-32 md:pb-20 md:pt-36 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <nav aria-label="Breadcrumb" className="mb-6 text-[10px] uppercase tracking-[0.2em] text-paper/60">
            <Link to="/" className="hover:text-paper">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-paper/85">Dev Deepawali</span>
          </nav>

          <motion.p
            {...fade(0.1)}
            className="inline-flex rounded-full border border-gilt/50 bg-night/35 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-gilt backdrop-blur-sm"
          >
            {devDeepawaliPage.label}
          </motion.p>

          <motion.h1
            {...fade(0.2)}
            id="dd-hero-heading"
            className="mt-6 max-w-[12em] font-display text-5xl leading-[1.02] text-balance text-paper sm:text-6xl lg:text-7xl"
          >
            {devDeepawali.title}
          </motion.h1>

          <motion.p
            {...fade(0.32)}
            className="mt-6 max-w-xl text-base leading-[1.8] text-paper/85 md:text-lg"
          >
            {devDeepawaliPage.heroDescription}
          </motion.p>

          <motion.div {...fade(0.44)} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#boats"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gilt px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-night transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#d8bb84]"
            >
              Explore Boats
              <span aria-hidden="true">↓</span>
            </a>
            <a
              href={devDeepawaliPage.generalEnquiry}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-paper/40 bg-night/20 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-paper backdrop-blur-sm transition-colors duration-300 hover:border-gilt hover:text-gilt"
            >
              <FaWhatsapp className="text-base" aria-hidden="true" />
              Book on WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.aside
          {...fade(0.6)}
          aria-label="Boat options at a glance"
          className="lg:col-span-5 lg:justify-self-end"
        >
          <div className="w-full max-w-sm rounded-3xl bg-paper/95 p-6 shadow-[0_28px_70px_rgba(20,23,20,0.3)] backdrop-blur-xl md:p-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gilt-deep">
              Boats this Dev Deepawali
            </p>
            <ul className="mt-6 space-y-5">
              {boats.map((boat) => (
                <li
                  key={boat.id}
                  className="flex items-baseline justify-between gap-4 border-b border-line pb-5 last:border-0 last:pb-0"
                >
                  <span className="text-night">{boat.name}</span>
                  <span className="font-display text-2xl text-night">
                    {formatInr(boat.price)}
                    <span className="ml-1 font-sans text-[10px] uppercase tracking-[0.14em] text-mute">
                      /ride
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-2.5 text-sm text-mute">
              <FaMapMarkerAlt className="text-gilt-deep" aria-hidden="true" />
              Boarding at Rajghat
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section aria-labelledby="dd-experience-heading" className="section-pad bg-section-cream">
      <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="relative lg:col-span-6">
          <img
            src={devDeepawali.image}
            alt="Ghats of Varanasi glowing with lights on Dev Deepawali night, with boats on the Ganges"
            width={1200}
            height={675}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded-2xl object-cover object-[65%_55%]"
          />
          <img
            src="/images/events/motor-boat.jpg"
            alt="Festively lit boat carrying guests on the Ganges at dusk"
            width={1024}
            height={682}
            loading="lazy"
            decoding="async"
            className="absolute -bottom-8 right-4 hidden w-[46%] rounded-xl border-4 border-paper object-cover shadow-2xl sm:block md:-right-6"
          />
        </Reveal>

        <div className="lg:col-span-6">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gilt-deep">
              The experience
            </p>
            <h2
              id="dd-experience-heading"
              className="mt-4 text-4xl leading-[1.1] text-balance text-night md:text-5xl"
            >
              A Night That Belongs on Your Travel List
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-mute md:text-lg">
              On Dev Deepawali, Varanasi lights up its riverfront. From a boat on the Ganges you
              see it all at once — the ghats, the Aarti, and the river itself glowing beneath you.
            </p>
          </Reveal>

          <ol className="mt-10 space-y-7">
            {experienceHighlights.map((item, index) => (
              <Reveal key={item.title} delay={0.08 * index}>
                <li className="flex gap-5">
                  <span className="font-display text-2xl leading-none text-gilt-deep">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-sans text-base font-medium text-night">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-mute">{item.description}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function BoatsSection() {
  return (
    <section
      id="boats"
      data-avoid-fab
      aria-labelledby="dd-boats-heading"
      className="section-pad scroll-mt-20 bg-section-linen"
    >
      <div className="container-page">
        <SectionIntro
          id="dd-boats-heading"
          eyebrow="Choose your boat"
          title="Two ways to see Dev Deepawali from the river"
          description="Both boats board at Rajghat. Tap a booking button and WhatsApp opens with your request ready to send."
        />
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {boats.map((boat, index) => (
            <BoatCard key={boat.id} boat={boat} delay={index * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CompareSection() {
  const showCapacity = boats.some((boat) => boat.capacity)
  const showDuration = boats.some((boat) => boat.duration)

  const rows: Array<{ label: string; values: string[] }> = [
    { label: 'Boat category', values: boats.map((b) => b.category) },
    { label: 'Price', values: boats.map((b) => formatInr(b.price)) },
    { label: 'Ride type', values: boats.map((b) => b.rideType) },
    { label: 'Boarding point', values: boats.map((b) => b.boardingPoint) },
    ...(showDuration
      ? [{ label: 'Ride duration', values: boats.map((b) => b.duration ?? 'Ask on WhatsApp') }]
      : []),
    ...(showCapacity
      ? [{ label: 'Passenger capacity', values: boats.map((b) => b.capacity ?? 'Ask on WhatsApp') }]
      : []),
    { label: 'Experience', values: boats.map((b) => b.experience) },
  ]

  return (
    <section aria-labelledby="dd-compare-heading" className="section-pad bg-section-sage">
      <div className="container-page">
        <SectionIntro
          id="dd-compare-heading"
          eyebrow="Compare"
          title="Find the Right Boat for Your Experience"
        />

        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_18px_50px_rgba(20,23,20,0.06)]">
            <table className="w-full table-fixed text-left text-sm md:text-base">
              <caption className="sr-only">Motor Boat and Bajra Boat compared</caption>
              <thead className="bg-fog">
                <tr>
                  <th scope="col" className="w-[30%] p-4 md:p-6">
                    <span className="sr-only">Detail</span>
                  </th>
                  {boats.map((boat) => (
                    <th
                      key={boat.id}
                      scope="col"
                      className="p-4 font-display text-lg font-normal text-night md:p-6 md:text-2xl"
                    >
                      {boat.shortName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {rows.map((row) => (
                  <tr key={row.label}>
                    <th
                      scope="row"
                      className="p-4 align-top text-[10px] font-semibold uppercase tracking-[0.16em] text-gilt-deep md:p-6 md:text-[11px]"
                    >
                      {row.label}
                    </th>
                    {row.values.map((value, index) => (
                      <td key={`${row.label}-${index}`} className="p-4 align-top text-night/85 md:p-6">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {!showCapacity || !showDuration ? (
            <p className="mt-5 text-sm text-mute">
              Passenger capacity and ride duration are being finalised — our team will share them
              on WhatsApp when you enquire.
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  )
}

function GallerySection() {
  return (
    <section aria-labelledby="dd-gallery-heading" className="section-pad bg-paper">
      <div className="container-page">
        <SectionIntro
          id="dd-gallery-heading"
          eyebrow="Gallery"
          title="The Magic of Dev Deepawali"
          description="Tap any photograph to see it larger."
        />
        <EventGallery photos={eventGallery} />
      </div>
    </section>
  )
}

function HowToBookSection() {
  return (
    <section aria-labelledby="dd-steps-heading" className="section-pad bg-section-cream">
      <div className="container-page">
        <SectionIntro
          id="dd-steps-heading"
          eyebrow="How to book"
          title="Your Dev Deepawali Experience in Three Simple Steps"
          align="center"
        />

        <ol className="grid gap-6 md:grid-cols-3 md:gap-8">
          {bookingSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08} className="h-full">
              <li className="h-full rounded-2xl border border-line bg-paper p-7 md:p-8">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gilt-deep/40 font-display text-lg text-gilt-deep">
                  {index + 1}
                </span>
                <h3 className="mt-6 font-sans text-lg font-medium text-night">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section data-avoid-fab aria-labelledby="dd-faq-heading" className="section-pad bg-paper">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gilt-deep">FAQ</p>
          <h2
            id="dd-faq-heading"
            className="mt-4 text-4xl leading-[1.1] text-balance text-night md:text-5xl"
          >
            Questions before you book
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mute">
            Something not covered here? Our team answers on WhatsApp.
          </p>
          <a
            href={devDeepawaliPage.generalEnquiry}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand hover:text-brand-deep"
          >
            <FaWhatsapp className="text-base" aria-hidden="true" />
            Ask on WhatsApp
          </a>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-8">
          <EventFaq faqs={eventFaqs} />
        </Reveal>
      </div>
    </section>
  )
}

function FinalCtaSection() {
  return (
    <section
      data-avoid-fab
      aria-labelledby="dd-final-heading"
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
            {devDeepawali.eyebrow}
          </p>
          <h2
            id="dd-final-heading"
            className="mt-4 text-4xl leading-[1.1] text-balance text-paper md:text-6xl"
          >
            Experience Dev Deepawali from the Ganges
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-paper/85 md:text-lg">
            Make your Dev Deepawali memorable with a boat journey through the illuminated waters
            of Varanasi. Choose your boat and contact our team to enquire about availability.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            {boats.map((boat, index) => (
              <a
                key={boat.id}
                href={boat.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  index === 0
                    ? 'inline-flex items-center justify-center gap-2.5 rounded-full bg-gilt px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-night transition-colors hover:bg-[#d8bb84]'
                    : 'inline-flex items-center justify-center gap-2.5 rounded-full bg-paper px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-night transition-colors hover:bg-white'
                }
              >
                <FaWhatsapp className="text-base" aria-hidden="true" />
                {boat.bookLabel}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function DevDeepawaliPage() {
  return (
    <div className="bg-paper">
      <SeoHead
        path={devDeepawali.path}
        title={devDeepawaliPage.seoTitle}
        description={devDeepawaliPage.seoDescription}
        image={devDeepawali.image}
      />
      <HeroSection />
      <BoatsSection />
      <ExperienceSection />
      <CompareSection />
      <GallerySection />
      <HowToBookSection />
      <FaqSection />
      <FinalCtaSection />
      <FloatingWhatsApp
        href={devDeepawaliPage.generalEnquiry}
        label="Enquire about Dev Deepawali boats on WhatsApp"
      />
    </div>
  )
}
