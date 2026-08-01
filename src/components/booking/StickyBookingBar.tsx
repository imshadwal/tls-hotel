import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { SITE } from '@/constants/site'
import { BookingWidget } from '@/components/booking/BookingWidget'
import { useBookingModal } from '@/contexts/BookingModalContext'

export function StickyBookingBar() {
  const { isOpen } = useBookingModal()
  const { pathname } = useLocation()
  const barRef = useRef<HTMLDivElement>(null)
  const [pastHero, setPastHero] = useState(false)
  const [nearFooter, setNearFooter] = useState(false)

  const onContact = pathname === '/contact'
  const visible = pastHero && !isOpen && !onContact && !nearFooter

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.65)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const footer = document.getElementById('site-footer')
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => setNearFooter(entry.isIntersecting),
      { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0 },
    )
    observer.observe(footer)
    return () => observer.disconnect()
  }, [pathname])

  useEffect(() => {
    if (!visible) {
      document.documentElement.style.setProperty('--sticky-booking-offset', '0px')
      return
    }

    const el = barRef.current
    if (!el) return

    const syncOffset = () => {
      const height = Math.ceil(el.getBoundingClientRect().height)
      document.documentElement.style.setProperty(
        '--sticky-booking-offset',
        `${height + 8}px`,
      )
    }

    syncOffset()
    const ro = new ResizeObserver(syncOffset)
    ro.observe(el)
    window.addEventListener('resize', syncOffset)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', syncOffset)
      document.documentElement.style.setProperty('--sticky-booking-offset', '0px')
    }
  }, [visible])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none fixed inset-x-0 bottom-0 z-50 p-2.5 sm:p-3 md:p-4"
        >
          <div
            ref={barRef}
            className="pointer-events-auto mx-auto flex max-w-6xl items-center gap-2 rounded-2xl bg-brand-deep px-2.5 py-2 shadow-[0_18px_50px_rgba(20,23,20,0.35)] ring-1 ring-paper/10 sm:gap-3 sm:px-3 sm:py-2.5 md:gap-5 md:px-5 md:py-3"
          >
            <div className="hidden min-w-0 shrink-0 border-r border-paper/15 pr-5 xl:block">
              <p className="font-display text-lg leading-none text-paper">{SITE.shortName}</p>
              <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-brand-soft">
                Reserve a stay
              </p>
            </div>
            <BookingWidget variant="compact" className="min-w-0 flex-1" />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
