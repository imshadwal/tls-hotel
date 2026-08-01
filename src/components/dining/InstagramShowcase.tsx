import { FaInstagram } from 'react-icons/fa'
import { instagramPostUrl } from '@/content/instagram'
import { twMerge } from '@/utils/cn'

type Post = {
  shortcode: string
  caption: string
  image: string
}

type InstagramShowcaseProps = {
  posts: ReadonlyArray<Post>
  profileUrl: string
  handle: string
}

/**
 * On-brand Instagram showcase — local thumbnails, links open Instagram.
 */
export function InstagramShowcase({ posts, profileUrl, handle }: InstagramShowcaseProps) {
  return (
    <div className="-mx-5 sm:-mx-8 lg:mx-0">
      <div className="flex gap-4 overflow-x-auto px-5 pb-2 sm:px-8 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
        {posts.map((post) => (
          <a
            key={post.shortcode}
            href={instagramPostUrl(post.shortcode)}
            target="_blank"
            rel="noopener noreferrer"
            className={twMerge(
              'group relative block aspect-[4/5] w-[85vw] max-w-md shrink-0 overflow-hidden bg-fog sm:w-[60vw] lg:w-auto lg:max-w-none lg:aspect-[3/4]',
            )}
          >
            <img
              src={post.image}
              alt={post.caption}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-brand/25 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-paper/90 text-night backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <FaInstagram aria-hidden="true" />
              <span className="sr-only">View on Instagram</span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
              <p className="font-display text-xl leading-snug text-paper md:text-2xl">
                {post.caption}
              </p>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-soft transition-colors group-hover:text-paper">
                View on Instagram →
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 flex justify-center lg:hidden">
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand"
        >
          <FaInstagram aria-hidden="true" />
          More on {handle}
        </a>
      </div>
    </div>
  )
}
