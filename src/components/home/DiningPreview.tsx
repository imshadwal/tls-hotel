import { FaInstagram, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import { bellaCucina } from '@/content/dining'
import { Button } from '@/components/common/Button'
import { Reveal } from '@/components/common/Reveal'
import { BellaInstagramPost } from '@/components/dining/BellaInstagramPost'

export function DiningPreview() {
  return (
    <section className="section-pad overflow-hidden bg-section-cream">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5 xl:col-span-4">
            <BellaInstagramPost variant="home" className="mx-0 max-w-none" />
          </div>

          <Reveal delay={0.06} className="lg:col-span-7 xl:col-span-8">
            <p className="eyebrow mb-4">{bellaCucina.eyebrow}</p>
            <h2 className="max-w-xl text-4xl md:text-5xl">{bellaCucina.name}</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-mute">
              {bellaCucina.tagline}
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-mute">{bellaCucina.description}</p>

            <ul className="mt-7 space-y-3">
              {bellaCucina.highlights.slice(0, 3).map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-brand pl-4 text-sm text-night md:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-3 text-sm text-mute">
              <p className="flex items-start gap-2.5">
                <FaClock className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                <span>
                  Weekdays {bellaCucina.hours.weekdays}
                  <br />
                  Weekends {bellaCucina.hours.weekend}
                </span>
              </p>
              <p className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                <span>On-site at The Lavish Stay, Pandeypur</span>
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button to="/dining" className="rounded-full">
                Discover Bella
                <span aria-hidden="true">→</span>
              </Button>
              <Button
                href={bellaCucina.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                className="rounded-full"
              >
                <FaInstagram aria-hidden="true" />
                {bellaCucina.instagramHandle}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
