import { SeoHead } from '@/components/common/SeoHead'
import { PageHero } from '@/components/common/PageHero'
import { GalleryGrid } from '@/components/gallery/GalleryGrid'
import { CtaSection } from '@/components/common/CtaSection'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/common/Button'
import { useBookingModal } from '@/contexts/BookingModalContext'

const galleryHighlights = [
  'Guest rooms and suites',
  'Interiors and lounge spaces',
  'Bella Cucina café moments',
  'Lifestyle around the property',
]

export function GalleryPage() {
  const { openBooking } = useBookingModal()

  return (
    <>
      <SeoHead
        title="Hotel Gallery — Varanasi"
        description="Photo gallery of The Lavish Stay hotel in Pandeypur, Varanasi — rooms, interiors, Bella Cucina dining, and property lifestyle."
        path="/gallery"
        image="/images/gallery/tls/tls-08.webp"
      />
      <PageHero
        title="Gallery"
        subtitle="A visual tour of our boutique hotel in Pandeypur — rooms, interiors, dining, and stay moments."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Gallery' },
        ]}
        image="/images/gallery/tls/tls-08.webp"
      />

      <section className="section-pad bg-section-linen">
        <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <div className="relative overflow-hidden">
              <img
                src="/images/gallery/tls/tls-08.webp"
                alt="Corridor seating at The Lavish Stay hotel in Varanasi"
                className="aspect-[16/11] w-full object-cover md:aspect-[16/10]"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5">
            <p className="eyebrow mb-4">Look inside</p>
            <h2 className="text-4xl md:text-5xl">A quieter look at the stay</h2>
            <p className="mt-4 max-w-md leading-relaxed text-mute">
              Browse frames from The Lavish Stay — our hotel in Pandeypur, Varanasi — before you
              book.
            </p>
            <ul className="mt-7 space-y-3">
              {galleryHighlights.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-brand pl-4 text-sm text-night md:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button onClick={openBooking} className="rounded-full">
                Book Your Stay
              </Button>
              <Button to="/rooms" variant="ghost" className="rounded-full">
                View Rooms
                <span aria-hidden="true">→</span>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad overflow-hidden bg-section-stone">
        <div className="container-page">
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow mb-4">Collection</p>
            <h2 className="text-4xl md:text-5xl">Atmosphere in frames</h2>
            <p className="mt-4 max-w-lg text-mute">
              Filter by rooms, interiors, dining, or lifestyle — tap any image to view larger.
            </p>
          </Reveal>
          <GalleryGrid />
        </div>
      </section>

      <CtaSection title="Ready to stay in Varanasi?" />
    </>
  )
}
