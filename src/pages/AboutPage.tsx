import { SeoHead } from '@/components/common/SeoHead'
import { PageHero } from '@/components/common/PageHero'
import { aboutIntro, aboutPage, facilities, stats } from '@/content/hotel'
import { CtaSection } from '@/components/common/CtaSection'
import { TimelineStory } from '@/components/home/TimelineStory'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/common/Button'
import { useBookingModal } from '@/contexts/BookingModalContext'
import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const storyHighlights = [
  'Boutique hotel in Pandeypur, Varanasi since 2023',
  'About 4.5 km from Varanasi Junction',
  'About 5.4 km from Kashi Vishwanath Temple',
  'Free parking, fibre Wi‑Fi, and Bella Cucina on site',
]

function useCountUp(target: number, active: boolean, reduceMotion: boolean | null) {
  const [value, setValue] = useState(reduceMotion ? target : 0)
  useEffect(() => {
    if (!active) return
    if (reduceMotion) {
      setValue(target)
      return
    }
    const start = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const progress = Math.min((now - start) / 1400, 1)
      setValue(Math.round(target * progress))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, target, reduceMotion])
  return value
}

export function AboutPage() {
  const { openBooking } = useBookingModal()
  const statsRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const node = statsRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true)
      },
      { threshold: 0.3 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <SeoHead
        title="About Our Hotel in Pandeypur"
        description="The Lavish Stay is a boutique hotel in Pandeypur, Varanasi — AC rooms, free parking, Bella Cucina café, near Kashi Vishwanath Temple and Varanasi Junction."
        path="/about"
        image="/images/about/about-lounge.webp"
      />
      <PageHero
        title="Our Story"
        subtitle="A boutique hotel in Pandeypur, Varanasi — calm rooms and easy access to the city’s sacred landmarks."
        image="/images/about/about-lounge.webp"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About' },
        ]}
      />

      <section className="section-pad bg-section-linen">
        <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <div className="relative overflow-hidden">
              <img
                src="/images/about/about-lounge.webp"
                alt="Lounge at The Lavish Stay hotel in Pandeypur, Varanasi"
                width={1600}
                height={1200}
                className="aspect-[16/11] w-full object-cover md:aspect-[16/10]"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5">
            <p className="eyebrow mb-4">{aboutIntro.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl">{aboutIntro.title}</h2>
            <p className="mt-4 max-w-md leading-relaxed text-mute">{aboutIntro.subtitle}</p>
            <ul className="mt-7 space-y-3">
              {storyHighlights.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-brand pl-4 text-sm text-night md:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button onClick={openBooking} className="rounded-full">
                Book Your Stay
              </Button>
              <Button to="/rooms" variant="ghost" className="rounded-full">
                View Rooms
                <span aria-hidden="true">→</span>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-page max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-4">Why Pandeypur</p>
            <h2 className="text-4xl md:text-5xl">Comfort between the city’s sacred rhythm</h2>
            <div className="mt-6 space-y-5 text-base leading-[1.8] text-mute md:text-[1.05rem]">
              <p>{aboutPage.body}</p>
              <p>{aboutPage.since}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <TimelineStory />

      <section ref={statsRef} className="section-pad bg-section-olive text-paper">
        <div className="container-page">
          <Reveal className="mb-10 max-w-xl">
            <p className="eyebrow mb-4 text-brand-soft">By the numbers</p>
            <h2 className="text-4xl text-paper md:text-5xl">A stay guests return to</h2>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((stat) => (
              <StatBlock key={stat.label} {...stat} active={active} reduceMotion={reduceMotion} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-section-sage">
        <div className="container-page">
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow mb-4">Stay essentials</p>
            <h2 className="text-4xl md:text-5xl">What guests rely on</h2>
            <p className="mt-4 max-w-lg text-mute">
              Practical comforts for arrivals, rest, and mornings at our hotel in Varanasi.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {facilities.slice(0, 3).map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="h-full border-t border-line pt-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-brand">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-2xl md:text-3xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute md:text-base">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title="Stay with The Lavish Stay" />
    </>
  )
}

function StatBlock({
  label,
  value,
  suffix,
  active,
  reduceMotion,
}: {
  label: string
  value: number
  suffix: string
  active: boolean
  reduceMotion: boolean | null
}) {
  const count = useCountUp(value, active, reduceMotion)
  return (
    <div className="border-t border-paper/20 pt-6">
      <p className="font-display text-4xl text-paper md:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-paper/60">{label}</p>
    </div>
  )
}
