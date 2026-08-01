import { aboutIntro } from '@/content/hotel'
import { SITE } from '@/constants/site'
import { Button } from '@/components/common/Button'
import { Reveal } from '@/components/common/Reveal'
import { useBookingModal } from '@/contexts/BookingModalContext'

const highlights = [
  'Air-conditioned rooms with private bathrooms',
  'Free on-site parking and fibre Wi‑Fi',
  'About 4.5 km from Varanasi Junction',
  'About 5.4 km from Kashi Vishwanath Temple',
]

export function AboutPreview() {
  const { openBooking } = useBookingModal()

  return (
    <section id="welcome" className="section-pad bg-section-linen">
      <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-7">
          <div className="relative overflow-hidden">
            <img
              src="/images/about/about-lounge.webp"
              alt="Lounge seating at The Lavish Stay hotel in Pandeypur, Varanasi"
              width={1600}
              height={1200}
              className="aspect-[16/11] w-full object-cover md:aspect-[16/10]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute bottom-4 left-4 rounded-full bg-paper/95 px-4 py-2.5 shadow-lg">
              <p className="text-[10px] uppercase tracking-[0.16em] text-mute">Since</p>
              <p className="font-display text-xl leading-none text-night">{SITE.openedYear}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-5">
          <p className="eyebrow mb-4">{aboutIntro.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl">{aboutIntro.title}</h2>
          <p className="mt-4 max-w-md leading-relaxed text-mute">{aboutIntro.subtitle}</p>

          <ul className="mt-7 space-y-3">
            {highlights.map((item) => (
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
            <Button to="/about" variant="ghost" className="rounded-full">
              Our Story
              <span aria-hidden="true">→</span>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
