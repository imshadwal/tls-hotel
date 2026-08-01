import { Link } from 'react-router-dom'
import { SeoHead } from '@/components/common/SeoHead'
import { PageHero } from '@/components/common/PageHero'
import { privacySections, termsSections } from '@/content/legal'
import { SITE } from '@/constants/site'

function LegalPage({
  title,
  path,
  description,
  subtitle,
  sections,
}: {
  title: string
  path: string
  description: string
  subtitle: string
  sections: Array<{ title: string; paragraphs: string[] }>
}) {
  return (
    <>
      <SeoHead title={title} description={description} path={path} />
      <PageHero
        compact
        title={title}
        subtitle={subtitle}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: title },
        ]}
      />

      <section className="bg-section-linen py-12 md:py-16 lg:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
              The Lavish Stay · Varanasi
            </p>
            <p className="mt-3 font-sans text-sm leading-relaxed text-mute md:text-[15px]">
              Last updated {new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}.
              If you have questions about these terms, contact us at{' '}
              <a href={`mailto:${SITE.email}`} className="font-medium text-brand hover:text-brand-deep">
                {SITE.email}
              </a>
              .
            </p>

            <div className="mt-10 space-y-0 border-t border-line/80">
              {sections.map((section, index) => (
                <article
                  key={section.title}
                  id={section.title.toLowerCase().replace(/\s+/g, '-')}
                  className="scroll-mt-28 border-b border-line/80 py-9 md:py-11"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-sans text-[11px] font-semibold tabular-nums tracking-[0.18em] text-brand">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-display text-2xl leading-snug text-night md:text-[1.75rem]">
                      {section.title}
                    </h2>
                  </div>
                  <div className="mt-5 space-y-4 pl-0 md:pl-12">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 48)}
                        className="font-sans text-[15px] leading-[1.8] text-mute md:text-base md:leading-[1.85]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-line/80 bg-paper px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <div>
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                  Need help?
                </p>
                <p className="mt-2 max-w-sm font-sans text-sm leading-relaxed text-mute">
                  Our team can assist with bookings, stay policies, and website enquiries.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex w-fit items-center justify-center rounded-full bg-brand px-6 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-brand-deep"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy"
      description="Privacy Policy for The Lavish Stay hotel website and booking services."
      subtitle="How we collect, use, and protect your personal information when you visit or book with us."
      sections={privacySections}
    />
  )
}

export function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      path="/terms"
      description="Terms and Conditions for booking and staying at The Lavish Stay, Varanasi."
      subtitle="The booking, stay, and facility policies that apply when you reserve or visit The Lavish Stay."
      sections={termsSections}
    />
  )
}
