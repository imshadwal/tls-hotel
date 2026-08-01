import { useEffect, useId, useRef, useState } from 'react'
import { galleryImages, type GalleryItem } from '@/content/hotel'
import { Reveal } from '@/components/common/Reveal'
import { twMerge } from '@/utils/cn'

const categories = ['All', 'Rooms', 'Interiors', 'Dining', 'Lifestyle'] as const

type GalleryGridProps = {
  limit?: number
  showFilters?: boolean
}

export function GalleryGrid({ limit, showFilters = true }: GalleryGridProps) {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastFocusRef = useRef<HTMLElement | null>(null)
  const dialogId = useId()

  const filtered =
    filter === 'All' ? galleryImages : galleryImages.filter((item) => item.category === filter)
  const images = limit ? filtered.slice(0, limit) : filtered
  const hero = images[0]
  const featured = images.slice(1, 3)
  const rest = images.slice(3)
  const active = activeIndex !== null ? images[activeIndex] ?? null : null

  function openAt(item: GalleryItem) {
    const index = images.findIndex((image) => image.src === item.src)
    if (index < 0) return
    lastFocusRef.current = document.activeElement as HTMLElement | null
    setActiveIndex(index)
  }

  function closeLightbox() {
    setActiveIndex(null)
    lastFocusRef.current?.focus?.()
  }

  useEffect(() => {
    if (activeIndex === null) return

    closeRef.current?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeLightbox()
        return
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        setActiveIndex((current) =>
          current === null ? 0 : (current + 1) % images.length,
        )
        return
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setActiveIndex((current) =>
          current === null ? 0 : (current - 1 + images.length) % images.length,
        )
        return
      }
      if (event.key === 'Tab') {
        const dialog = document.getElementById(dialogId)
        if (!dialog) return
        const focusable = dialog.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [activeIndex, dialogId, images.length])

  return (
    <>
      {showFilters ? (
        <div className="mb-12 flex flex-wrap gap-2" role="tablist" aria-label="Gallery categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={filter === category}
              onClick={() => setFilter(category)}
              className={twMerge(
                'rounded-full border px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors',
                filter === category
                  ? 'border-brand bg-brand text-paper'
                  : 'border-line text-mute hover:border-brand hover:text-brand',
              )}
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}

      {images.length === 0 ? (
        <div className="border border-dashed border-line bg-paper/60 px-6 py-16 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
            Gallery
          </p>
          <p className="mt-3 font-display text-2xl text-night">No frames in this category yet</p>
          <p className="mx-auto mt-3 max-w-sm text-sm text-mute">
            Try another filter, or browse All to see the full collection.
          </p>
          <button
            type="button"
            onClick={() => setFilter('All')}
            className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand hover:text-brand-deep"
          >
            Show all
          </button>
        </div>
      ) : null}

      {hero ? (
        <Reveal className="mb-4 md:mb-5">
          <button
            type="button"
            className="group relative block w-full overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            onClick={() => openAt(hero)}
            aria-label={`View ${hero.alt}`}
          >
            <img
              src={hero.src}
              alt={hero.alt}
              className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] md:aspect-[21/9]"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-deep/80 to-transparent p-5 md:p-8">
              <p className="text-[10px] uppercase tracking-[0.18em] text-brand-soft">{hero.category}</p>
              <p className="mt-1 font-display text-2xl text-paper md:text-3xl">{hero.alt}</p>
            </div>
          </button>
        </Reveal>
      ) : null}

      {featured.length > 0 ? (
        <div className="mb-4 grid gap-4 md:mb-5 md:grid-cols-2 md:gap-5">
          {featured.map((image, index) => (
            <Reveal key={`featured-${image.src}`} delay={index * 0.05}>
              <button
                type="button"
                className="group relative block w-full overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                onClick={() => openAt(image)}
                aria-label={`View ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 md:aspect-[16/11]"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-deep/75 to-transparent p-5 opacity-90">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-brand-soft">
                    {image.category}
                  </p>
                  <p className="mt-1 text-sm text-paper">{image.alt}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      ) : null}

      {rest.length > 0 ? (
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {rest.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              className={`mb-4 block w-full break-inside-avoid overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${
                index % 4 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'
              }`}
              onClick={() => openAt(image)}
              aria-label={`View ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      ) : null}

      {active && activeIndex !== null ? (
        <div
          id={dialogId}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-brand-deep/92 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={closeLightbox}
        >
          <button
            ref={closeRef}
            type="button"
            className="absolute right-5 top-5 z-10 rounded-full border border-paper/25 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-paper hover:border-paper/60"
            onClick={closeLightbox}
          >
            Close
          </button>

          {images.length > 1 ? (
            <>
              <button
                type="button"
                className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-paper/25 text-paper hover:border-paper/60 md:left-6"
                aria-label="Previous image"
                onClick={(event) => {
                  event.stopPropagation()
                  setActiveIndex((current) =>
                    current === null ? 0 : (current - 1 + images.length) % images.length,
                  )
                }}
              >
                ←
              </button>
              <button
                type="button"
                className="absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-paper/25 text-paper hover:border-paper/60 md:right-6"
                aria-label="Next image"
                onClick={(event) => {
                  event.stopPropagation()
                  setActiveIndex((current) =>
                    current === null ? 0 : (current + 1) % images.length,
                  )
                }}
              >
                →
              </button>
            </>
          ) : null}

          <figure
            className="relative max-h-[88vh] max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[80vh] max-w-full object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-paper/80">
              {active.alt}
              <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-paper/45">
                {activeIndex + 1} / {images.length} · Arrow keys to browse
              </span>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  )
}
