import { FaInstagram, FaPhoneAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import { SeoHead } from '@/components/common/SeoHead'
import { PageHero } from '@/components/common/PageHero'
import { CtaSection } from '@/components/common/CtaSection'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/common/Button'
import { InstagramShowcase } from '@/components/dining/InstagramShowcase'
import { bellaCucina, bellaInstagramPosts } from '@/content/dining'

export function DiningPage() {
  return (
    <>
      <SeoHead
        title="Bella Cucina"
        description={bellaCucina.description}
        path="/dining"
        image={bellaCucina.heroImage}
      />
      <PageHero
        title="Bella Cucina"
        subtitle={bellaCucina.tagline}
        image={bellaCucina.heroImage}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Dining' },
        ]}
      />

      <section className="section-pad bg-section-cream">
        <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <div className="relative overflow-hidden">
              <img
                src={bellaCucina.image}
                alt="Bella Cucina café at The Lavish Stay"
                className="aspect-[16/11] w-full object-cover md:aspect-[16/10]"
              />
              <a
                href={bellaCucina.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 inline-flex items-center gap-3 rounded-full bg-paper/95 px-4 py-2.5 shadow-lg transition-colors hover:bg-paper"
              >
                <FaInstagram className="text-brand" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-night">{bellaCucina.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-mute">
                    {bellaCucina.instagramHandle}
                  </p>
                </div>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">
            <p className="eyebrow mb-4">{bellaCucina.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl">{bellaCucina.title}</h2>
            <p className="mt-4 max-w-md leading-relaxed text-mute">{bellaCucina.body}</p>

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

            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                href={bellaCucina.menuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full"
              >
                View Menu
              </Button>
              <Button
                href={bellaCucina.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                className="rounded-full"
              >
                <FaInstagram aria-hidden="true" />
                Instagram
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-page">
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow mb-4">The menu mood</p>
            <h2 className="text-4xl md:text-5xl">What Bella is known for</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {bellaCucina.signatures.map((item, index) => (
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

      <section className="section-pad overflow-hidden bg-section-sage">
        <div className="container-page">
          <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-4">On Instagram</p>
              <h2 className="text-4xl text-night md:text-5xl">
                {bellaCucina.instagramHandle}
              </h2>
              <p className="mt-4 max-w-lg text-mute">
                A quieter look at Bella — tap any frame to open the post on Instagram.
                {` ${bellaCucina.followers} followers.`}
              </p>
            </div>
            <Button
              href={bellaCucina.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full self-start"
            >
              <FaInstagram aria-hidden="true" />
              Follow Bella
            </Button>
          </Reveal>

          <InstagramShowcase
            posts={bellaInstagramPosts}
            profileUrl={bellaCucina.instagramUrl}
            handle={bellaCucina.instagramHandle}
          />
        </div>
      </section>

      <section className="section-pad bg-section-linen text-night">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-4">Visit Bella</p>
            <h2 className="text-4xl md:text-5xl">Open daily for café hours</h2>
            <p className="mt-5 text-mute">
              Reserve a table via Instagram DM, call the café directly, or ask the hotel front desk
              during your stay.
            </p>
            <div className="mt-8 space-y-5 text-sm md:text-base">
              <p className="flex gap-3">
                <FaClock className="mt-1 shrink-0 text-brand" aria-hidden="true" />
                <span>
                  Weekdays {bellaCucina.hours.weekdays}
                  <br />
                  Weekends {bellaCucina.hours.weekend}
                </span>
              </p>
              <p className="flex gap-3">
                <FaPhoneAlt className="mt-1 shrink-0 text-brand" aria-hidden="true" />
                <a href={`tel:${bellaCucina.phone}`} className="hover:text-brand">
                  {bellaCucina.phoneDisplay}
                </a>
              </p>
              <p className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-brand" aria-hidden="true" />
                <a
                  href={bellaCucina.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand"
                >
                  {bellaCucina.address}
                </a>
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                href={bellaCucina.menuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full"
              >
                Order / Menu
              </Button>
              <Button href={`tel:${bellaCucina.phone}`} variant="ghost" className="rounded-full">
                Call Café
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="overflow-hidden border border-line">
            <iframe
              title="Bella Cucina location map"
              src="https://www.google.com/maps?q=Bella+Cucina+The+Lavish+Stay+Varanasi&output=embed"
              className="h-[360px] w-full border-0 md:h-full md:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>

      <CtaSection title="Stay at TLS. Dine at Bella." />
    </>
  )
}
