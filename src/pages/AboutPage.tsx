import { SeoHead } from '@/components/common/SeoHead'
import { PageHero } from '@/components/common/PageHero'
import { aboutIntro, aboutPage, facilities, stats } from '@/content/hotel'
import { CtaSection } from '@/components/common/CtaSection'
import { TimelineStory } from '@/components/home/TimelineStory'
import { Reveal } from '@/components/common/Reveal'
import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

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
        title="About"
        description="Learn about The Lavish Stay in Pandeypur, Varanasi — modern comfort near Kashi Vishwanath Temple and Varanasi Junction."
        path="/about"
        image="/images/about/about-lounge.jpg"
      />
      <PageHero
        title="Our Story"
        subtitle="A contemporary retreat shaped for travelers exploring Varanasi."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About' },
        ]}
      />

      <section className="section-pad bg-section-linen">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-4">{aboutIntro.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl">{aboutIntro.title}</h2>
            <p className="mt-5 text-lg text-mute">{aboutIntro.subtitle}</p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 leading-relaxed text-mute lg:col-span-7">
            <p>{aboutPage.body}</p>
            <p>{aboutPage.since}</p>
          </Reveal>
        </div>
      </section>

      <TimelineStory />

      <section ref={statsRef} className="section-pad bg-section-olive text-paper">
        <div className="container-page grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat) => (
            <StatBlock key={stat.label} {...stat} active={active} reduceMotion={reduceMotion} />
          ))}
        </div>
      </section>

      <section className="section-pad bg-section-sage">
        <div className="container-page">
          <Reveal className="mb-12 max-w-xl">
            <h2 className="text-4xl md:text-5xl">What guests rely on</h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {facilities.slice(0, 3).map((item) => (
              <article key={item.title} className="border-t border-line pt-6">
                <h3 className="mb-3 text-2xl">{item.title}</h3>
                <p className="text-mute">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
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
