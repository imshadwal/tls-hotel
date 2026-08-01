import { SITE } from '@/constants/site'
import { Button } from '@/components/common/Button'
import { Reveal } from '@/components/common/Reveal'

export function MapContactPreview() {
  return (
    <section className="relative overflow-hidden bg-section-linen py-12 md:py-16">
      <div className="container-page relative z-10">
        <Reveal className="mb-8 max-w-xl">
          <p className="eyebrow mb-4">Location</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl">Find us in Pandeypur</h2>
        </Reveal>

        <div className="relative">
          <div className="overflow-hidden border border-brand/10 shadow-[0_24px_60px_rgba(87,99,72,0.1)]">
            <iframe
              title="The Lavish Stay location map"
              src="https://www.google.com/maps?q=The+Lavish+Stay+Varanasi&output=embed"
              className="h-[420px] w-full border-0 md:h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <Reveal
            delay={0.08}
            className="relative z-10 mx-auto mt-[-4.5rem] max-w-lg border border-line/80 bg-paper/95 p-7 shadow-[0_20px_50px_rgba(20,23,20,0.12)] backdrop-blur-md md:absolute md:bottom-10 md:left-10 md:mt-0 md:max-w-sm md:p-8"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand">
              Visit
            </p>
            <p className="mt-4 text-sm leading-relaxed text-mute">{SITE.address}</p>
            <p className="mt-4 text-sm">
              <a href={`tel:${SITE.phone}`} className="font-medium text-night hover:text-brand">
                {SITE.phoneDisplay}
              </a>
            </p>
            <p className="mt-1 text-sm">
              <a href={`mailto:${SITE.email}`} className="text-mute hover:text-brand">
                {SITE.email}
              </a>
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/contact" className="rounded-full px-6 py-3">
                Contact
              </Button>
              <Button
                href={SITE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                className="rounded-full px-6 py-3"
              >
                Open Map
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
