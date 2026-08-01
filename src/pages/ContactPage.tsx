import { SeoHead } from '@/components/common/SeoHead'
import { PageHero } from '@/components/common/PageHero'
import { ContactForm } from '@/components/contact/ContactForm'
import { SITE } from '@/constants/site'

export function ContactPage() {
  return (
    <>
      <SeoHead
        title="Contact"
        description="Get in touch with The Lavish Stay Hotels in Varanasi for bookings, queries, and assistance."
        path="/contact"
        image="/images/gallery/tls/tls-05.jpg"
      />
      <PageHero
        title="Contact"
        subtitle="We’re here to help with reservations, directions, and stay planning."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact' },
        ]}
      />
      <section className="section-pad bg-section-linen">
        <div className="container-page grid gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Get in touch</p>
            <h2 className="text-4xl md:text-5xl">Let’s plan your stay</h2>
            <p className="mt-5 max-w-md leading-relaxed text-mute">
              Welcome to The Lavish Stay in Varanasi. Reach out for bookings, special requests, or
              local guidance — our team will respond with care.
            </p>
            <dl className="mt-10 space-y-6 text-sm md:text-base">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.2em] text-mute">Address</dt>
                <dd className="mt-2 text-night">{SITE.address}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.2em] text-mute">Phone</dt>
                <dd className="mt-2">
                  <a href={`tel:${SITE.phone}`} className="text-night hover:text-brand">
                    {SITE.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.2em] text-mute">Email</dt>
                <dd className="mt-2">
                  <a href={`mailto:${SITE.email}`} className="text-night hover:text-brand">
                    {SITE.email}
                  </a>
                </dd>
              </div>
            </dl>
            <a
              href={SITE.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-[11px] font-semibold uppercase tracking-[0.22em] text-brand hover:text-brand-deep"
            >
              Get Directions
            </a>
          </div>
          <div className="border border-line/80 bg-paper p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="bg-fog">
        <iframe
          title="The Lavish Stay location map"
          src="https://www.google.com/maps?q=The+Lavish+Stay+Varanasi&output=embed"
          className="h-[440px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}
