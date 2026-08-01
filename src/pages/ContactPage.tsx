import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'
import { SeoHead } from '@/components/common/SeoHead'
import { PageHero } from '@/components/common/PageHero'
import { ContactForm } from '@/components/contact/ContactForm'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/common/Button'
import { CtaSection } from '@/components/common/CtaSection'
import { SITE } from '@/constants/site'
import { useBookingModal } from '@/contexts/BookingModalContext'

export function ContactPage() {
  const { openBooking } = useBookingModal()

  return (
    <>
      <SeoHead
        title="Contact Hotel in Pandeypur, Varanasi"
        description="Contact The Lavish Stay — boutique hotel in Pandeypur, Varanasi. Call, email, or message for bookings, directions, and stay assistance."
        path="/contact"
        image="/images/gallery/tls/tls-05.webp"
      />
      <PageHero
        title="Contact"
        subtitle="Reach our hotel in Pandeypur, Varanasi for reservations, directions, and stay planning."
        image="/images/gallery/tls/tls-05.webp"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact' },
        ]}
      />

      <section className="section-pad bg-section-linen">
        <div className="container-page grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-4">Get in touch</p>
            <h2 className="text-4xl md:text-5xl">Let’s plan your stay</h2>
            <p className="mt-5 max-w-md leading-relaxed text-mute">
              Welcome to The Lavish Stay in Pandeypur, Varanasi. Ask about rooms, Bella Cucina, or
              local guidance — our team will respond with care.
            </p>

            <div className="mt-8 space-y-5 text-sm md:text-base">
              <p className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-brand" aria-hidden="true" />
                <span>{SITE.address}</span>
              </p>
              <p className="flex gap-3">
                <FaPhoneAlt className="mt-1 shrink-0 text-brand" aria-hidden="true" />
                <a href={`tel:${SITE.phone}`} className="hover:text-brand">
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p className="flex gap-3">
                <FaEnvelope className="mt-1 shrink-0 text-brand" aria-hidden="true" />
                <a href={`mailto:${SITE.email}`} className="hover:text-brand">
                  {SITE.email}
                </a>
              </p>
              <p className="flex gap-3">
                <FaClock className="mt-1 shrink-0 text-brand" aria-hidden="true" />
                <span>Front desk available for reservation support daily</span>
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button onClick={openBooking} className="rounded-full">
                Book Online
              </Button>
              <Button
                href={SITE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                className="rounded-full"
              >
                Get Directions
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="border border-line/80 bg-paper p-6 md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                Send a message
              </p>
              <p className="mt-2 text-sm text-mute">
                Tell us your dates or questions — we’ll get back to you shortly.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-section-cream">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-4">Visit the hotel</p>
            <h2 className="text-4xl md:text-5xl">Find us in Pandeypur</h2>
            <p className="mt-5 text-mute">
              Free on-site parking and a clear approach from Varanasi Junction and common airport
              routes.
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-night md:text-base">
              {SITE.address}
            </p>
          </Reveal>
          <Reveal delay={0.08} className="overflow-hidden border border-line">
            <iframe
              title="The Lavish Stay location map — Pandeypur, Varanasi"
              src="https://www.google.com/maps?q=The+Lavish+Stay+Varanasi&output=embed"
              className="h-[360px] w-full border-0 md:h-full md:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>

      <CtaSection title="Prefer to book directly?" />
    </>
  )
}
