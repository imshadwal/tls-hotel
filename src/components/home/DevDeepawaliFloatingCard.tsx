import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { devDeepawali } from '@/content/events'
import { useBookingModal } from '@/contexts/BookingModalContext'

const SECTION_ID = 'dev-deepawali'

/** Hidden while the homepage Dev Deepawali section is on screen. */
export function DevDeepawaliFloatingCard() {
  const { isOpen: bookingOpen } = useBookingModal()
  const [sectionInView, setSectionInView] = useState(false)

  useEffect(() => {
    const section = document.getElementById(SECTION_ID)
    if (!section) return
    const observer = new IntersectionObserver(
      ([entry]) => setSectionInView(entry.isIntersecting),
      { rootMargin: '-15% 0px -15% 0px', threshold: 0 },
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const visible = !sectionInView && !bookingOpen

  return (
    <AnimatePresence>
      {visible ? (
        <motion.aside
          key="dd-card"
          aria-label={devDeepawali.title}
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 40, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-[calc(var(--sticky-booking-offset)+0.75rem)] z-40 transition-[bottom] duration-300 sm:inset-x-auto sm:right-4 sm:w-[22rem] lg:bottom-auto lg:right-5 lg:top-1/2 lg:w-64 lg:-translate-y-1/2"
        >
          <Link
            to={devDeepawali.path}
            aria-label={`${devDeepawali.cta}: ${devDeepawali.title}, ${devDeepawali.eyebrow}`}
            className="group flex items-center gap-3 overflow-hidden rounded-2xl bg-night p-2 pr-4 text-paper shadow-[0_20px_50px_rgba(20,23,20,0.35)] ring-1 ring-paper/10 lg:block lg:p-0"
          >
            <span className="relative block h-14 w-16 shrink-0 overflow-hidden rounded-xl lg:aspect-[16/9] lg:h-auto lg:w-full lg:rounded-none">
              <img
                src={devDeepawali.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-[65%_55%] transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <span className="absolute inset-0 hidden bg-gradient-to-t from-night via-night/10 to-transparent lg:block" />
            </span>
            <span className="block min-w-0 flex-1 lg:px-4 lg:pb-4 lg:pt-1">
              <span
                className="block font-display text-[17px] leading-tight text-paper lg:text-xl"
              >
                {devDeepawali.title}
              </span>
              <span className="mt-1 block text-[11px] font-medium tracking-[0.08em] text-gilt">
                {devDeepawali.eyebrow}
              </span>
              <span className="mt-4 hidden w-full items-center justify-center gap-2 rounded-full bg-gilt px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-night transition-colors group-hover:bg-paper lg:inline-flex">
                {devDeepawali.cta}
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </span>
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gilt text-night transition-transform group-hover:translate-x-0.5 lg:hidden"
            >
              →
            </span>
          </Link>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  )
}
