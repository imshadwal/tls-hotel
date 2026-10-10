import { devDeepawali } from '@/content/events'
import { Button } from '@/components/common/Button'
import { Reveal } from '@/components/common/Reveal'

export function DevDeepawaliSection() {
  return (
    <section
      id="dev-deepawali"
      aria-labelledby="dev-deepawali-heading"
      className="scroll-mt-24 bg-paper py-8 sm:py-10 lg:py-14"
    >
      <div className="container-page">
        <div className="grid overflow-hidden bg-night lg:grid-cols-[42fr_58fr] lg:items-stretch">
          <div className="order-1 flex items-center">
            <Reveal className="w-full px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
              <h2
                id="dev-deepawali-heading"
                className="max-w-[11em] text-4xl leading-[1.28] text-balance md:text-5xl"
              >
                <span className="box-decoration-clone rounded-sm bg-brand-soft px-2.5 py-0.5 text-night">
                  {devDeepawali.title}
                </span>
              </h2>
              <p className="mt-4 text-[13px] font-medium tracking-[0.08em] text-brand-soft">
                {devDeepawali.eyebrow}
              </p>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-paper/84">
                {devDeepawali.lead}
              </p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/62">
                {devDeepawali.body}
              </p>
              <div className="mt-8">
                <Button
                  to={devDeepawali.path}
                  variant="light"
                  className="group w-full rounded-full lg:w-auto"
                >
                  {devDeepawali.cta}
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="relative order-2 aspect-[16/9] sm:aspect-[16/8] lg:aspect-auto lg:min-h-[34rem]">
            <img
              src={devDeepawali.image}
              alt={devDeepawali.imageAlt}
              width={1200}
              height={675}
              className="absolute inset-0 h-full w-full object-cover object-[62%_58%] lg:object-[70%_56%]"
              loading="lazy"
              decoding="async"
            />
            <div
              className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-night/35 to-transparent lg:block"
              aria-hidden="true"
            />
            <p className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5">
              <span className="inline-flex rounded-full border border-paper/20 bg-night/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/90 backdrop-blur-md">
                On the Ganges
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
