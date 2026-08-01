import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { galleryImages } from '@/content/hotel'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/common/Button'

export function GalleryPreview() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  function scrollBy(dir: -1 | 1) {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.75, 420), behavior: 'smooth' })
  }

  return (
    <section className="overflow-hidden bg-section-stone py-12 md:py-16">
      <div className="container-page mb-6 flex flex-col justify-between gap-5 md:mb-8 md:flex-row md:items-end">
        <Reveal>
          <p className="eyebrow mb-4">Gallery</p>
          <h2 className="max-w-xl text-4xl md:text-5xl lg:text-6xl">Atmosphere in frames</h2>
        </Reveal>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper/70 text-night transition-colors hover:border-brand hover:text-brand"
            aria-label="Scroll gallery left"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper/70 text-night transition-colors hover:border-brand hover:text-brand"
            aria-label="Scroll gallery right"
          >
            →
          </button>
          <Button to="/gallery" variant="ghost" className="rounded-full">
            Open Gallery
          </Button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 scrollbar-none sm:px-8 lg:px-12"
        style={{ scrollbarWidth: 'none' }}
      >
        {galleryImages.map((image, index) => (
          <Link
            key={`${image.src}-${index}`}
            to="/gallery"
            className={`group relative shrink-0 snap-start overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${
              index % 3 === 0
                ? 'h-[22rem] w-[18rem] md:h-[26rem] md:w-[22rem]'
                : 'h-[22rem] w-[14rem] md:h-[26rem] md:w-[17rem]'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 group-focus-visible:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-brand-deep/80 to-transparent p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
              <p className="text-[10px] uppercase tracking-[0.18em] text-brand-soft">
                {image.category}
              </p>
              <p className="mt-1 text-sm text-paper">{image.alt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
