import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaMapMarkerAlt,
  FaStar,
  FaCoffee,
  FaWifi,
  FaParking,
} from 'react-icons/fa'
import { SITE } from '@/constants/site'
import { googleReviewsConfig } from '@/content/reviews'
import { useBookingModal } from '@/contexts/BookingModalContext'
import { twMerge } from '@/utils/cn'

const ease = [0.22, 1, 0.36, 1] as const

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
      const progress = Math.min((now - start) / 1600, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(target * eased)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, target, reduceMotion])

  return value
}

export function HeroBanner() {
  const ref = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const { openBooking } = useBookingModal()
  const reduceMotion = useReducedMotion()
  const [cardReady, setCardReady] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '18%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, reduceMotion ? 1.02 : 1.14])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, reduceMotion ? 0 : -48])
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 36, damping: 22 })
  const springY = useSpring(mouseY, { stiffness: 36, damping: 22 })
  const ambientX = useTransform(springX, [-0.5, 0.5], ['-1.6%', '1.6%'])
  const ambientY = useTransform(springY, [-0.5, 0.5], ['-1.2%', '1.2%'])

  const cardParallaxX = useTransform(springX, [-0.5, 0.5], reduceMotion ? [0, 0] : [10, -10])
  const cardParallaxY = useTransform(springY, [-0.5, 0.5], reduceMotion ? [0, 0] : [8, -8])
  const scrollCardY = useTransform(scrollYProgress, [0, 0.4], [0, reduceMotion ? 0 : 24])
  const cardY = useMotionTemplate`calc(${scrollCardY}px + ${cardParallaxY}px)`

  const rating = useCountUp(googleReviewsConfig.fallbackRating, cardReady, reduceMotion)

  useEffect(() => {
    if (reduceMotion) return
    const onMove = (e: PointerEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5)
      mouseY.set(e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [mouseX, mouseY, reduceMotion])

  useEffect(() => {
    const id = window.setTimeout(() => setCardReady(true), reduceMotion ? 0 : 950)
    return () => window.clearTimeout(id)
  }, [reduceMotion])

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-brand-deep">
      {/* Background */}
      <motion.div
        style={{
          y: imageY,
          scale: imageScale,
          x: reduceMotion ? 0 : ambientX,
        }}
        className="pointer-events-none absolute inset-[-4%]"
      >
        <motion.img
          src="/images/hero/hero-1.webp"
          alt="The Lavish Stay hotel in Varanasi"
          className={twMerge(
            'h-full w-full object-cover object-[62%_center]',
            !reduceMotion && 'hero-ken-burns',
          )}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0.25 : 1.55, ease }}
        />
      </motion.div>

      {/* Layered depth — darker copy side, brighter interior right */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-deep/86 via-brand-deep/38 to-brand-deep/[0.06]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-deep/92 via-brand-deep/15 to-brand-deep/48" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_38%,rgba(20,23,20,0.55)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_88%_42%,rgba(154,172,133,0.16),transparent_55%)]" />
      {!reduceMotion ? (
        <motion.div
          style={{ y: ambientY }}
          className="pointer-events-none absolute inset-0 hero-light-wash mix-blend-soft-light"
          aria-hidden="true"
        />
      ) : null}
      <div className="pointer-events-none absolute inset-0 grain opacity-[0.14]" />
      {!reduceMotion ? (
        <div className="pointer-events-none absolute inset-0 hero-ambient" aria-hidden="true" />
      ) : null}

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="container-page relative z-10 grid min-h-[100svh] items-end gap-12 pb-28 pt-28 md:grid-cols-12 md:items-center md:gap-10 md:pb-24 md:pt-24"
      >
        <div className="md:col-span-7 lg:col-span-6">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.28, ease }}
            className="text-[11px] font-semibold uppercase tracking-[0.4em] text-brand-soft"
          >
            {SITE.tagline}
          </motion.p>

          <h1 className="mt-7 font-display text-[3.4rem] leading-[0.92] tracking-[-0.02em] text-paper sm:text-6xl md:mt-8 md:text-7xl lg:text-[5.5rem]">
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                initial={reduceMotion ? false : { y: '108%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, delay: reduceMotion ? 0 : 0.4, ease }}
              >
                The Lavish
              </motion.span>
            </span>
            <span className="mt-0.5 block overflow-hidden pb-1">
              <motion.span
                className="block"
                initial={reduceMotion ? false : { y: '108%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, delay: reduceMotion ? 0 : 0.54, ease }}
              >
                Stay
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: reduceMotion ? 0 : 0.72, ease }}
            className="mt-8 max-w-[22rem] text-[1rem] leading-[1.85] text-paper/78 md:mt-9 md:max-w-[24rem] md:text-lg md:leading-[1.9]"
          >
            Where the city’s sacred rhythm softens into quiet rooms, warm light, and unhurried
            mornings.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: reduceMotion ? 0 : 0.92, ease }}
            className="mt-12 flex flex-wrap items-center gap-3.5"
          >
            <button
              type="button"
              onClick={openBooking}
              className="hero-cta-primary group inline-flex items-center gap-3 rounded-full bg-brand px-9 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-paper"
            >
              Book Your Stay
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 group-hover:translate-x-1.5"
              >
                →
              </span>
            </button>
            <Link
              to="/rooms"
              className="hero-cta-secondary group inline-flex items-center gap-3 rounded-full border border-paper/30 px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-paper"
            >
              Explore Rooms
              <span
                aria-hidden="true"
                className="inline-block opacity-60 transition-all duration-300 group-hover:translate-x-1.5 group-hover:opacity-100"
              >
                →
              </span>
            </Link>
          </motion.div>
        </div>

        <motion.aside
          style={{ x: cardParallaxX, y: cardY }}
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.95, delay: reduceMotion ? 0 : 1.05, ease }}
          className="md:col-span-5 md:justify-self-end lg:col-span-5"
          aria-label="Stay highlights"
        >
          <div
            ref={cardRef}
            className={twMerge(
              'hero-glass-card group/card relative w-full max-w-sm overflow-hidden rounded-3xl border border-paper/12 bg-paper/[0.09] p-6 shadow-[0_28px_70px_rgba(20,23,20,0.28)] backdrop-blur-2xl md:p-7',
              !reduceMotion && 'hero-glass-shimmer',
            )}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-soft">
              Concierge glance
            </p>

            <ul className="mt-7 space-y-6">
              <li className="flex items-start gap-4 border-b border-paper/[0.08] pb-6">
                <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paper/10 text-brand-soft">
                  <FaStar className="text-sm" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-paper/45">Guest rating</p>
                  <p className="mt-1.5 font-display text-3xl leading-none text-paper md:text-[2.1rem]">
                    {rating.toFixed(1)}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-paper/60">
                    {googleReviewsConfig.fallbackTotal}+ Google reviews
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4 border-b border-paper/[0.08] pb-6">
                <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paper/10 text-brand-soft">
                  <FaMapMarkerAlt className="text-sm" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-paper/45">Temple access</p>
                  <p className="mt-1.5 font-display text-3xl leading-none text-paper md:text-[2.1rem]">
                    5.4 km
                  </p>
                  <p className="mt-2 text-sm leading-snug text-paper/60">Kashi Vishwanath</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paper/10 text-brand-soft">
                  <span className="font-display text-sm text-brand-soft" aria-hidden="true">
                    {String(SITE.openedYear).slice(2)}
                  </span>
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-paper/45">Stay since</p>
                  <p className="mt-1.5 font-display text-3xl leading-none text-paper md:text-[2.1rem]">
                    {SITE.openedYear}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-paper/60">
                    Welcoming guests in Pandeypur
                  </p>
                </div>
              </li>
            </ul>

            <ul className="mt-7 flex flex-wrap gap-2.5">
              {(
                [
                  { label: 'Breakfast', icon: <FaCoffee aria-hidden="true" /> },
                  { label: 'Fibre Wi‑Fi', icon: <FaWifi aria-hidden="true" /> },
                  { label: 'Free parking', icon: <FaParking aria-hidden="true" /> },
                ] as const
              ).map((item) => (
                <li
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-paper/12 bg-paper/[0.06] px-3.5 py-2 text-[10px] uppercase tracking-[0.14em] text-paper/78"
                >
                  <span className="text-brand-soft">{item.icon}</span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </motion.div>

      <motion.a
        href="#welcome"
        style={{ opacity: scrollHintOpacity }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: reduceMotion ? 0 : 1.35, duration: 0.85, ease }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3.5 text-paper/55 transition-colors hover:text-paper md:bottom-8"
        aria-label="Scroll to explore"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.32em]">Discover</span>
        <span className="hero-scroll-line relative block h-12 w-px overflow-hidden bg-paper/25">
          <motion.span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-5 bg-gradient-to-b from-transparent via-paper to-transparent"
            animate={reduceMotion ? undefined : { y: ['-100%', '160%'] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.35 }}
          />
        </span>
        <motion.span
          aria-hidden="true"
          className="block text-[11px] leading-none tracking-[0.2em]"
          animate={reduceMotion ? undefined : { y: [0, 3, 0], opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  )
}
