import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { aboutIntro } from '@/content/hotel'
import { SITE } from '@/constants/site'
import { Button } from '@/components/common/Button'
import { Reveal } from '@/components/common/Reveal'

export function AboutPreview() {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0%', '0%'] : ['4%', '-4%'])

  return (
    <section id="welcome" ref={ref} className="relative overflow-hidden bg-section-linen py-12 md:py-16">
      <div className="pointer-events-none absolute inset-0 grain opacity-20" />

      <div className="container-page relative z-10">
        <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Dominant visual */}
          <Reveal className="relative overflow-hidden lg:col-span-7">
            <motion.div style={{ y: imageY }} className="h-full min-h-[300px] sm:min-h-[420px]">
              <img
                src="/images/about/about-lounge.webp"
                alt="Lounge seating at The Lavish Stay hotel in Pandeypur, Varanasi"
                width={1600}
                height={1200}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/55 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-7">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-soft">Since</p>
                  <p className="font-display text-3xl text-paper md:text-4xl">{SITE.openedYear}</p>
                </div>
                <p className="max-w-[14rem] text-right text-xs leading-relaxed text-paper/75 md:text-sm">
                  Opened in Pandeypur — a calm base for travelers exploring Varanasi.
                </p>
              </div>
            </motion.div>
          </Reveal>

          {/* Story panel */}
          <div className="flex w-full min-w-0 flex-col gap-5 lg:col-span-5">
            <Reveal className="flex w-full flex-1 flex-col justify-center border border-line/80 bg-paper/80 p-6 backdrop-blur-sm md:p-8">
              <p className="eyebrow mb-3">{aboutIntro.eyebrow}</p>
              <h2 className="text-3xl leading-[1.08] md:text-4xl lg:text-[2.65rem]">
                {aboutIntro.title}
              </h2>
              <p className="mt-4 text-base leading-[1.7] text-mute">{aboutIntro.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-mute/90">{aboutIntro.body}</p>
              <Button to="/about" variant="ghost" className="mt-7 w-fit rounded-full">
                Our Story
                <span aria-hidden="true">→</span>
              </Button>
            </Reveal>

            <Reveal delay={0.08} className="w-full shrink-0">
              <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[2.2/1]">
                <img
                  src="/images/about/about-cafe.webp"
                  alt="Bella Cucina café food at The Lavish Stay"
                  width={1400}
                  height={788}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-deep/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-[11px] uppercase tracking-[0.18em] text-paper">
                  On-site café · Bella Cucina
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
