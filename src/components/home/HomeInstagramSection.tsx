import { FaInstagram } from 'react-icons/fa'
import { Button } from '@/components/common/Button'
import { Reveal } from '@/components/common/Reveal'
import { instagramPostUrl, tlsInstagram, tlsInstagramPosts } from '@/content/instagram'

export function HomeInstagramSection() {
  return (
    <section className="section-pad overflow-hidden bg-section-sage">
      <div className="container-page">
        <Reveal className="mb-10 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">{tlsInstagram.eyebrow}</p>
            <h2 className="text-4xl text-night md:text-5xl">Stay moments</h2>
            <p className="mt-4 max-w-lg text-mute">
              {tlsInstagram.handle} · {tlsInstagram.followers} followers — tap any frame to open on
              Instagram.
            </p>
          </div>
          <Button
            href={tlsInstagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full self-start"
          >
            <FaInstagram aria-hidden="true" />
            Follow TLS
          </Button>
        </Reveal>

        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:grid-cols-6 md:gap-3">
          {tlsInstagramPosts.slice(0, 6).map((post) => (
            <a
              key={post.shortcode}
              href={instagramPostUrl(post.shortcode)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-fog"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-deep/0 transition-colors duration-300 group-hover:bg-brand-deep/35" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
