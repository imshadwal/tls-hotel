import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { HiChevronDown, HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'
import { NAV_LINKS, NAV_OTHER_LINKS, SITE } from '@/constants/site'
import { Button } from '@/components/common/Button'
import { useBookingModal } from '@/contexts/BookingModalContext'
import { twMerge } from '@/utils/cn'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [otherOpen, setOtherOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const otherRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { openBooking } = useBookingModal()

  useEffect(() => {
    setOpen(false)
    setOtherOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!otherOpen) return
    const onPointerDown = (e: MouseEvent) => {
      if (otherRef.current && !otherRef.current.contains(e.target as Node)) {
        setOtherOpen(false)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOtherOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [otherOpen])

  const floating = scrolled || !isHome
  const otherActive = NAV_OTHER_LINKS.some((l) => l.path === location.pathname)

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-2 md:px-5 md:pt-2.5">
        <div
          className={twMerge(
            'pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full px-3 py-1 transition-all duration-500 md:px-5 md:py-1.5',
            floating
              ? 'border border-line/70 bg-paper/85 shadow-[0_14px_44px_rgba(20,23,20,0.1)] backdrop-blur-2xl'
              : 'border border-transparent bg-transparent',
          )}
        >
          <Link
            to="/"
            className="flex items-center gap-2.5 pl-0.5"
            aria-label={`${SITE.name} home`}
          >
            <img
              src="/images/brand/logo.png"
              alt=""
              width={44}
              height={44}
              decoding="async"
              className="h-10 w-10 object-contain md:h-11 md:w-11"
              aria-hidden="true"
            />
            <div className="leading-none">
              <p
                className={twMerge(
                  'font-display text-lg tracking-wide md:text-xl',
                  floating || open ? 'text-night' : 'text-paper',
                )}
              >
                {SITE.shortName}
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  twMerge(
                    'nav-link relative px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors',
                    floating
                      ? isActive
                        ? 'text-brand'
                        : 'text-night/70 hover:text-brand'
                      : isActive
                        ? 'text-paper'
                        : 'text-paper/75 hover:text-paper',
                    isActive && 'nav-link-active',
                    floating ? 'nav-link-solid' : 'nav-link-light',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div ref={otherRef} className="relative">
              <button
                type="button"
                aria-expanded={otherOpen}
                aria-haspopup="true"
                onClick={() => setOtherOpen((v) => !v)}
                className={twMerge(
                  'nav-link relative inline-flex items-center gap-1 px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors',
                  floating
                    ? otherActive || otherOpen
                      ? 'text-brand'
                      : 'text-night/70 hover:text-brand'
                    : otherActive || otherOpen
                      ? 'text-paper'
                      : 'text-paper/75 hover:text-paper',
                  floating ? 'nav-link-solid' : 'nav-link-light',
                )}
              >
                Other
                <HiChevronDown
                  className={twMerge(
                    'transition-transform duration-200',
                    otherOpen && 'rotate-180',
                  )}
                  size={14}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence>
                {otherOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 top-full z-50 mt-3 min-w-[11rem] overflow-hidden rounded-2xl border border-line/80 bg-paper py-2 shadow-[0_16px_40px_rgba(20,23,20,0.12)]"
                  >
                    {NAV_OTHER_LINKS.map((link) => (
                      <NavLink
                        key={`${link.label}-${link.path}`}
                        to={link.path}
                        className={({ isActive }) =>
                          twMerge(
                            'block px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors',
                            isActive
                              ? 'bg-brand/8 text-brand'
                              : 'text-night/75 hover:bg-fog hover:text-brand',
                          )
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              onClick={openBooking}
              className="nav-book-btn inline-flex rounded-full px-4 py-2 sm:px-6"
            >
              Book
            </Button>
            <button
              type="button"
              className={twMerge(
                'inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden',
                floating
                  ? 'border-night/10 text-night'
                  : 'border-paper/30 text-paper',
              )}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <HiOutlineX size={20} /> : <HiOutlineMenuAlt3 size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[45] bg-paper lg:hidden"
          >
            <nav
              className="flex h-full flex-col justify-start gap-1 overflow-y-auto px-8 pb-10 pt-28"
              aria-label="Mobile"
            >
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      twMerge(
                        'block py-2.5 font-display text-3xl sm:text-4xl',
                        isActive ? 'text-brand' : 'text-night',
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.05 * NAV_LINKS.length }}
                className="mt-6 text-[11px] font-medium uppercase tracking-[0.2em] text-mute"
              >
                Other
              </motion.p>
              {NAV_OTHER_LINKS.map((link, index) => (
                <motion.div
                  key={`${link.label}-${link.path}`}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * (NAV_LINKS.length + 1 + index) }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      twMerge(
                        'block py-2 font-display text-2xl',
                        isActive ? 'text-brand' : 'text-night/80',
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

              <Button
                onClick={() => {
                  setOpen(false)
                  openBooking()
                }}
                className="mt-8 w-fit rounded-full"
              >
                Book Now
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
