import { Reveal } from '@/components/common/Reveal'

const milestones = [
  {
    year: '2023',
    title: 'Doors open in Pandeypur',
    body: 'The Lavish Stay welcomes its first guests — modern rooms designed for calm after exploring Varanasi.',
  },
  {
    year: 'Location',
    title: 'Close to what matters',
    body: 'About 4.5 km from Varanasi Junction and 5.4 km from Kashi Vishwanath Temple — practical for pilgrims and travelers.',
  },
  {
    year: 'Stay',
    title: 'Comfort, refined',
    body: 'Air-conditioned rooms, private bathrooms, fibre internet, breakfast, and attentive service.',
  },
  {
    year: 'May 2025',
    title: 'Bella Cucina opens',
    body: 'Our on-site café, Bella Cucina, opens its doors — pizza, pasta, coffee, and desserts in a calm, beautifully themed space for guests and locals alike.',
  },
  {
    year: 'Today',
    title: 'A trusted Varanasi base',
    body: 'Guests return for quiet surroundings, warm hospitality, and easy access to the city’s sacred landmarks.',
  },
]

export function TimelineStory() {
  return (
    <section className="section-pad bg-fog">
      <div className="container-page">
        <Reveal className="mb-10 max-w-2xl md:mb-14">
          <p className="eyebrow mb-4">Our journey</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl">A timeline of place and purpose</h2>
        </Reveal>

        {/* Mobile: simple stacked timeline with clear left gutter */}
        <div className="relative md:hidden">
          <div className="absolute bottom-2 left-[11px] top-2 w-px bg-line" aria-hidden="true" />
          <ol className="space-y-8">
            {milestones.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <li className="relative pl-10">
                  <span
                    className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-4 border-fog bg-brand"
                    aria-hidden="true"
                  />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                    {item.year}
                  </p>
                  <h3 className="mt-2 text-xl leading-snug">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{item.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Desktop: alternating two-column timeline */}
        <div className="relative hidden md:block">
          <div
            className="absolute bottom-0 left-1/2 top-2 w-px -translate-x-px bg-line"
            aria-hidden="true"
          />
          {milestones.map((item, index) => {
            const left = index % 2 === 0
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <div
                  className={`relative grid grid-cols-2 gap-16 py-8 ${
                    left ? '' : '[&>*:first-child]:order-2'
                  }`}
                >
                  <div className={left ? 'pr-10 text-right' : 'pl-10 text-left'}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">
                      {item.year}
                    </p>
                    <h3 className="mt-2 text-3xl">{item.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-mute">{item.body}</p>
                  </div>
                  <div
                    className="absolute left-1/2 top-10 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-fog bg-brand"
                    aria-hidden="true"
                  />
                  <div />
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
