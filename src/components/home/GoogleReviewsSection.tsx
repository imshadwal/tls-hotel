import { FaGoogle, FaStar, FaExternalLinkAlt } from 'react-icons/fa'
import { Button } from '@/components/common/Button'
import { Reveal } from '@/components/common/Reveal'
import { googleReviewsConfig } from '@/content/reviews'
import { useGoogleReviews } from '@/hooks/useGoogleReviews'

function Stars({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' }) {
  const filled = Math.round(rating)
  const cls = size === 'md' ? 'text-sm' : 'text-[11px]'
  return (
    <div className={`flex items-center gap-0.5 ${cls}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar
          key={index}
          className={index < filled ? 'text-[#fbbc04]' : 'text-paper/25'}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

function StarsOnLight({ rating }: { rating: number }) {
  const filled = Math.round(rating)
  return (
    <div className="flex items-center gap-0.5 text-[11px]" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar
          key={index}
          className={index < filled ? 'text-[#fbbc04]' : 'text-line'}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

function ReviewSkeleton() {
  return (
    <article className="flex h-full flex-col bg-paper/90 p-5" aria-hidden="true">
      <div className="h-3 w-20 animate-pulse rounded bg-line/80" />
      <div className="mt-4 space-y-2">
        <div className="h-3 w-full animate-pulse rounded bg-line/70" />
        <div className="h-3 w-[92%] animate-pulse rounded bg-line/70" />
        <div className="h-3 w-[70%] animate-pulse rounded bg-line/70" />
      </div>
      <div className="mt-4 flex items-center gap-2.5 border-t border-line pt-4">
        <div className="h-8 w-8 animate-pulse rounded-full bg-line/80" />
        <div className="min-w-0 flex-1 space-y-2">
          <div className="h-3 w-24 animate-pulse rounded bg-line/80" />
          <div className="h-2 w-14 animate-pulse rounded bg-line/70" />
        </div>
      </div>
    </article>
  )
}

export function GoogleReviewsSection() {
  const { status, rating, total, reviews } = useGoogleReviews()
  const cards = reviews.slice(0, 4)
  const loading = status === 'loading'

  return (
    <section className="overflow-hidden bg-section-olive py-12 md:py-16">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
            <div className="flex min-w-0 items-center gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-paper/15 text-paper">
                <FaGoogle className="text-lg" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-soft">
                  Guest reviews
                </p>
                {loading ? (
                  <div className="mt-2 h-8 w-24 animate-pulse rounded bg-paper/15" />
                ) : (
                  <div className="mt-1 flex flex-wrap items-baseline gap-3">
                    <p className="font-display text-4xl leading-none text-paper md:text-5xl">
                      {rating > 0 ? rating.toFixed(1) : '—'}
                    </p>
                    <div>
                      <Stars rating={rating || 5} size="md" />
                      <p className="mt-1 text-xs text-paper/65">
                        {total
                          ? `${total.toLocaleString('en-IN')} Google reviews`
                          : 'On Google'}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <Button
              href={googleReviewsConfig.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="light"
              className="w-fit shrink-0 rounded-full"
            >
              Read on Google
              <FaExternalLinkAlt className="text-[10px]" aria-hidden="true" />
            </Button>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {loading
            ? Array.from({ length: 4 }, (_, index) => <ReviewSkeleton key={index} />)
            : cards.map((review, index) => (
                <Reveal key={`${review.name}-${index}`} delay={0.04 * index}>
                  <article className="flex h-full flex-col bg-paper p-5">
                    <StarsOnLight rating={review.rating} />
                    <p className="mt-3 line-clamp-4 flex-1 text-sm leading-relaxed text-night/85">
                      “{review.quote}”
                    </p>
                    <div className="mt-4 flex items-center gap-2.5 border-t border-line pt-4">
                      {review.profilePhotoUrl ? (
                        <img
                          src={review.profilePhotoUrl}
                          alt=""
                          className="h-8 w-8 rounded-full object-cover"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-xs font-semibold text-brand">
                          {review.name.charAt(0)}
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-night">{review.name}</p>
                        <p className="text-[10px] uppercase tracking-[0.14em] text-mute">
                          {review.relativeTime || 'Google'}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
        </div>
      </div>
    </section>
  )
}
