import { SeoHead } from '@/components/common/SeoHead'
import { PageHero } from '@/components/common/PageHero'
import { GalleryGrid } from '@/components/gallery/GalleryGrid'
import { CtaSection } from '@/components/common/CtaSection'
import { Reveal } from '@/components/common/Reveal'

export function GalleryPage() {
  return (
    <>
      <SeoHead
        title="Gallery"
        description="Explore photos of rooms, interiors, and amenities at The Lavish Stay, Varanasi."
        path="/gallery"
        image="/images/gallery/tls/tls-08.jpg"
      />
      <PageHero
        title="Gallery"
        subtitle="Rooms, interiors, dining, and lifestyle — curated frames from The Lavish Stay."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Gallery' },
        ]}
        image="/images/gallery/tls/tls-08.jpg"
      />
      <section className="overflow-hidden bg-section-stone py-20 md:py-28">
        <div className="container-page">
          <Reveal className="mb-12 max-w-lg">
            <p className="eyebrow mb-4">Look inside</p>
            <h2 className="text-3xl md:text-4xl">A quieter look at the stay</h2>
          </Reveal>
          <GalleryGrid />
        </div>
      </section>
      <CtaSection />
    </>
  )
}
