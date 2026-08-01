import { SeoHead } from '@/components/common/SeoHead'
import { PageHero } from '@/components/common/PageHero'
import { privacySections, termsSections } from '@/content/legal'

function LegalPage({
  title,
  path,
  description,
  sections,
}: {
  title: string
  path: string
  description: string
  sections: Array<{ title: string; paragraphs: string[] }>
}) {
  return (
    <>
      <SeoHead title={title} description={description} path={path} />
      <PageHero
        title={title}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: title },
        ]}
      />
      <section className="section-pad">
        <div className="container-page max-w-3xl space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-4 text-3xl">{section.title}</h2>
              <div className="space-y-4 leading-relaxed text-stone">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
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
      sections={termsSections}
    />
  )
}
