import { nearbyAttractions } from '@/content/hotel'
import { Reveal } from '@/components/common/Reveal'

export function AttractionsSection() {
  return (
    <section className="section-pad bg-section-cream">
      <div className="container-page">
        <Reveal className="mb-12 max-w-2xl">
          <p className="eyebrow mb-4">Explore Varanasi</p>
          <h2 className="text-4xl md:text-5xl">Near our hotel in Pandeypur</h2>
          <p className="mt-4 max-w-lg text-mute">
            Temples, ghats, and the junction — handy distances for first-time visitors and pilgrims.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {nearbyAttractions.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="h-full border-t border-line pt-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-brand">{item.distance}</p>
                <h3 className="mt-3 text-xl md:text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
