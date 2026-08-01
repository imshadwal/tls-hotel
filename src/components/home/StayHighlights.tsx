import { facilities } from '@/content/hotel'
import { Reveal } from '@/components/common/Reveal'

const featured = facilities.slice(0, 3)

export function StayHighlights() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-page">
        <Reveal className="mb-12 max-w-2xl">
          <p className="eyebrow mb-4">The stay essentials</p>
          <h2 className="text-4xl md:text-5xl">What guests rely on</h2>
          <p className="mt-4 max-w-lg text-mute">
            Practical comfort for pilgrims, families, and travelers exploring Varanasi from Pandeypur.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="h-full border-t border-line pt-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-brand">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-2xl md:text-3xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute md:text-base">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
