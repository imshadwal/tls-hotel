import { useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

type Faq = {
  question: string
  answer: string
}

type EventFaqProps = {
  faqs: Faq[]
}

export function EventFaq({ faqs }: EventFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()
  const reduceMotion = useReducedMotion()

  return (
    <ul className="divide-y divide-line border-y border-line">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        const buttonId = `${baseId}-q-${index}`
        const panelId = `${baseId}-a-${index}`

        return (
          <li key={faq.question}>
            <h3 className="font-sans text-base text-night md:text-lg">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-gilt-deep md:py-6"
              >
                <span>{faq.question}</span>
                <span
                  aria-hidden="true"
                  className={`relative inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                    isOpen ? 'border-gilt-deep text-gilt-deep' : 'border-line text-mute'
                  }`}
                >
                  <span className="absolute h-px w-3 bg-current" />
                  <span
                    className={`absolute h-3 w-px bg-current transition-transform duration-300 ${
                      isOpen ? 'scale-y-0' : 'scale-y-100'
                    }`}
                  />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 pr-12 text-sm leading-relaxed text-mute md:text-base">
                    {faq.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </li>
        )
      })}
    </ul>
  )
}
