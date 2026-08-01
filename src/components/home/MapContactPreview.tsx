import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { SITE } from '@/constants/site'
import { Button } from '@/components/common/Button'
import { Reveal } from '@/components/common/Reveal'

export function MapContactPreview() {
  return (
    <section className="section-pad bg-section-linen text-night">
      <div className="container-page grid gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-4">Visit us</p>
          <h2 className="text-4xl md:text-5xl">Find us in Pandeypur</h2>
          <p className="mt-5 text-mute">
            The Lavish Stay is in Khajuri, Pandeypur — with free parking and straightforward access
            from Varanasi Junction and airport routes.
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
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button to="/contact" className="rounded-full">
              Contact
            </Button>
            <Button
              href={SITE.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              className="rounded-full"
            >
              Open in Maps
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="overflow-hidden border border-line">
          <iframe
            title="The Lavish Stay location map"
            src="https://www.google.com/maps?q=The+Lavish+Stay+Varanasi&output=embed"
            className="h-[360px] w-full border-0 md:h-full md:min-h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  )
}
