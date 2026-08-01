import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

type BookingModalContextValue = {
  isOpen: boolean
  openBooking: () => void
  closeBooking: () => void
}

const BookingModalContext = createContext<BookingModalContextValue | null>(null)

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openBooking = useCallback(() => setIsOpen(true), [])
  const closeBooking = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeBooking()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [isOpen, closeBooking])

  const value = useMemo(
    () => ({ isOpen, openBooking, closeBooking }),
    [isOpen, openBooking, closeBooking],
  )

  return (
    <BookingModalContext.Provider value={value}>{children}</BookingModalContext.Provider>
  )
}

export function useBookingModal() {
  const ctx = useContext(BookingModalContext)
  if (!ctx) {
    throw new Error('useBookingModal must be used within BookingModalProvider')
  }
  return ctx
}
