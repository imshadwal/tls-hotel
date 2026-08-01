import { nearbyAttractions } from '@/content/hotel'
import { Reveal } from '@/components/common/Reveal'
import { twMerge } from '@/utils/cn'

export function AttractionsSection() {
  return (
    <section className="relative overflow-hidden bg-section-cream py-12 md:py-16">
      <div className="pointer-events-none absolute inset-0 grain opacity-30" />

      <div className="container-page relative z-10">
        <Reveal className="mb-10 max-w-xl">
          <p className="eyebrow mb-4">Explore Varanasi</p>
          <h2 className="text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
            Near our hotel in Pandeypur
          </h2>
          <p className="mt-5 max-w-[28rem] text-base leading-[1.75] text-mute">
            Temples, ghats, and Varanasi Junction — handy distances from The Lavish Stay for
            first-time visitors and pilgrims.
          </p>
        </Reveal>

        <div className="space-y-12 md:space-y-16">
          {nearbyAttractions.map((item, index) => {
            const reverse = index % 2 === 1
            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <article
                  className={twMerge(
                    'grid items-end gap-6 md:grid-cols-12 md:gap-10',
                    reverse && 'md:text-right',
                  )}
                >
                  <p
                    className={twMerge(
                      'font-display text-6xl leading-none text-brand/20 md:col-span-3 md:text-7xl lg:text-8xl',
                      reverse && 'md:col-start-10 md:order-2',
                    )}
                  >
                    {item.distance}
                  </p>
                  <div
                    className={twMerge(
                      'md:col-span-7',
                      reverse ? 'md:col-start-2 md:order-1' : 'md:col-start-5',
                    )}
                  >
                    <p className="text-[11px] uppercase tracking-[0.22em] text-brand">
                      0{index + 1}
                    </p>
                    <h3 className="mt-3 text-3xl md:text-4xl lg:text-5xl">{item.title}</h3>
                    <p
                      className={twMerge(
                        'mt-4 max-w-md text-base leading-relaxed text-mute',
                        reverse && 'md:ml-auto',
                      )}
                    >
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
