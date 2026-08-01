import { FaInstagram, FaRegHeart, FaRegComment, FaRegBookmark } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { bellaCucina } from '@/content/dining'
import { Button } from '@/components/common/Button'
import { Reveal } from '@/components/common/Reveal'
import { twMerge } from '@/utils/cn'

type BellaInstagramPostProps = {
  className?: string
  /** homepage uses shorter caption + Discover CTA */
  variant?: 'home' | 'page'
}

export function BellaInstagramPost({ className, variant = 'home' }: BellaInstagramPostProps) {
  const caption = variant === 'home' ? bellaCucina.description : bellaCucina.body
  const mediaSrc = variant === 'home' ? bellaCucina.heroImage : bellaCucina.image

  return (
    <Reveal className={twMerge('mx-auto w-full max-w-[420px]', className)}>
      <article className="overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_20px_50px_rgba(87,99,72,0.1)]">
        <header className="flex items-center gap-3 px-4 py-3">
          <a
            href={bellaCucina.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-0 flex-1 items-center gap-3"
          >
            <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gradient-to-tr from-brand via-brand-soft to-brand p-[2px]">
              <span className="block h-full w-full overflow-hidden rounded-full border-2 border-paper bg-fog">
                <img
                  src={bellaCucina.image}
                  alt=""
                  className="h-full w-full object-cover"
                  aria-hidden="true"
                />
              </span>
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold text-night">
                {bellaCucina.name}
              </span>
              <span className="block truncate text-xs text-mute">
                {bellaCucina.instagramHandle} · {bellaCucina.followers}
              </span>
            </span>
          </a>
          <a
            href={bellaCucina.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-brand px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-paper transition-colors hover:bg-brand-deep"
          >
            Follow
          </a>
        </header>

        <div className="relative aspect-square overflow-hidden bg-fog">
          <img
            src={mediaSrc}
            alt="Bella Cucina café at The Lavish Stay"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex items-center justify-between px-4 pt-3">
          <div className="flex items-center gap-4 text-night">
            <FaRegHeart className="h-[22px] w-[22px]" aria-hidden="true" />
            <FaRegComment className="h-[22px] w-[22px]" aria-hidden="true" />
            <FiSend className="h-[22px] w-[22px]" aria-hidden="true" />
          </div>
          <FaRegBookmark className="h-[22px] w-[22px] text-night" aria-hidden="true" />
        </div>

        <div className="px-4 pb-2 pt-3">
          <p className="mt-1 text-sm leading-relaxed text-night">
            <span className="font-semibold">{bellaCucina.instagramHandle.replace('@', '')}</span>{' '}
            <span className="text-mute">
              {variant === 'home' ? (
                <>
                  Pizza · Pasta · Coffee · Desserts at The Lavish Stay.{' '}
                  <span className="text-brand">#BellaCucina</span>
                </>
              ) : (
                caption
              )}
            </span>
          </p>
          {variant !== 'home' ? (
            <>
              <p className="mt-3 text-sm text-mute">{bellaCucina.highlights[0]}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-mute/80">
                {bellaCucina.tagline}
              </p>
            </>
          ) : (
            <p className="mt-2 text-xs text-mute">{bellaCucina.followers} followers</p>
          )}
        </div>

        {variant === 'home' ? null : (
        <div className="flex flex-wrap gap-2 border-t border-line px-4 py-4">
            <>
              <Button
                href={bellaCucina.menuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full px-5 py-3"
              >
                View Menu
              </Button>
              <Button
                href={bellaCucina.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                className="rounded-full px-5 py-3"
              >
                <FaInstagram aria-hidden="true" />
                Instagram
              </Button>
            </>
        </div>
        )}
      </article>
    </Reveal>
  )
}
