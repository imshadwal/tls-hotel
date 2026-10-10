import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

type FloatingWhatsAppProps = {
  href: string
  label?: string
}

/** Hides itself while any `[data-avoid-fab]` element or the footer is on screen. */
export function FloatingWhatsApp({ href, label = 'Enquire on WhatsApp' }: FloatingWhatsAppProps) {
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const targets = [
      ...document.querySelectorAll<HTMLElement>('[data-avoid-fab]'),
      document.getElementById('site-footer'),
    ].filter((el): el is HTMLElement => el !== null)

    const visible = new Set<Element>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target)
          else visible.delete(entry.target)
        }
        setHidden(visible.size > 0)
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0 },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <AnimatePresence>
      {!hidden ? (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 right-4 z-40 inline-flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_40px_rgba(0,0,0,0.35)] transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
        >
          <FaWhatsapp className="text-2xl" aria-hidden="true" />
        </motion.a>
      ) : null}
    </AnimatePresence>
  )
}
