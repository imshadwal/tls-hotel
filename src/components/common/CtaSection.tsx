import { FaPhoneAlt } from 'react-icons/fa'
import { SITE } from '@/constants/site'
import { Button } from '@/components/common/Button'
import { Reveal } from '@/components/common/Reveal'
import { useBookingModal } from '@/contexts/BookingModalContext'

type CtaSectionProps = {
  title?: string
  description?: string
}

export function CtaSection({
  title = 'Your Varanasi chapter begins here',
  description = 'Secure your dates in a few taps — quiet rooms in Pandeypur, with the city close at hand.',
}: CtaSectionProps) {
  const { openBooking } = useBookingModal()

  return (
    <section className="relative overflow-hidden bg-brand-deep">
      <img
        src="/images/hero/hero-2.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        loading="lazy"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/92 via-brand/78 to-brand-deep/55" />

      <div className="container-page relative z-10 flex min-h-[52vh] flex-col justify-center py-16 md:min-h-[58vh] md:py-20">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-soft">
            Plan your stay
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] text-paper md:mt-5 md:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mt-4 max-w-[28rem] text-sm leading-[1.75] text-paper/75 md:mt-5 md:text-base">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
            <Button onClick={openBooking} variant="light" className="rounded-full">
              Check availability
              <span aria-hidden="true">→</span>
            </Button>
            <Button
              href={`tel:${SITE.phone}`}
              variant="ghost"
              className="rounded-full border-paper/30 text-paper hover:border-brand-soft hover:text-brand-soft"
            >
              <FaPhoneAlt className="text-[10px]" aria-hidden="true" />
              Call
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
