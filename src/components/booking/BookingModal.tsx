import { useEffect, useId, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlineX } from 'react-icons/hi'
import { useBookingModal } from '@/contexts/BookingModalContext'
import { BookingWidget } from '@/components/booking/BookingWidget'
import { SITE } from '@/constants/site'

export function BookingModal() {
  const { isOpen, closeBooking } = useBookingModal()
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastFocusRef = useRef<HTMLElement | null>(null)
  const dialogId = useId()

  useEffect(() => {
    if (!isOpen) return

    lastFocusRef.current = document.activeElement as HTMLElement | null
    closeRef.current?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return
      const dialog = document.getElementById(dialogId)
      if (!dialog) return
      const focusable = dialog.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
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

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      lastFocusRef.current?.focus?.()
    }
  }, [isOpen, dialogId])

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.32 }}
        >
          <motion.button
            type="button"
            aria-label="Close booking"
            className="absolute inset-0 bg-brand-deep/60 backdrop-blur-md"
            onClick={closeBooking}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(154,172,133,0.18),transparent_55%)]"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.div
            id={dialogId}
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
            initial={{ opacity: 0, y: 64, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28, mass: 0.85 }}
            className="relative z-10 w-full max-w-xl overflow-hidden rounded-t-[1.75rem] border border-line/70 bg-paper p-6 shadow-[0_30px_80px_rgba(20,23,20,0.28)] sm:rounded-[1.75rem] sm:p-8"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-brand/[0.07] to-transparent"
            />

            <div className="relative mb-7 flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand">
                  Reservations
                </p>
                <h2
                  id="booking-modal-title"
                  className="mt-2 font-display text-3xl leading-tight text-night md:text-4xl"
                >
                  Choose your dates
                </h2>
                <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-mute">
                  Select dates, guests, and rooms, then continue to the secure booking engine for{' '}
                  {SITE.name}.
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={closeBooking}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-night transition-all duration-300 hover:border-brand hover:bg-fog hover:text-brand"
                aria-label="Close"
              >
                <HiOutlineX size={18} />
              </button>
            </div>

            <div className="relative">
              <BookingWidget variant="panel" />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
