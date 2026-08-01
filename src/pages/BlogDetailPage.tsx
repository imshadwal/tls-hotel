import { Link, useParams } from 'react-router-dom'
import { SeoHead } from '@/components/common/SeoHead'
import { PageHero } from '@/components/common/PageHero'
import { Button } from '@/components/common/Button'
import { CtaSection } from '@/components/common/CtaSection'
import { getPostBySlug, blogPosts } from '@/content/blog'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { useBookingModal } from '@/contexts/BookingModalContext'

export function BlogDetailPage() {
  const { slug } = useParams()
  const post = slug ? getPostBySlug(slug) : undefined
  const { openBooking } = useBookingModal()

  if (!post) return <NotFoundPage />

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2)

  return (
    <>
      <SeoHead
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.image}
        type="article"
      />
      <PageHero
        title={post.title}
        image={post.image}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Journal', path: '/blog' },
          { label: post.title },
        ]}
      />
      <article className="section-pad bg-section-linen">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_0.38fr]">
          <div>
            <p className="mb-8 text-[11px] uppercase tracking-[0.2em] text-mute">
              {new Date(post.date).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}{' '}
              · {post.category}
            </p>
            <div className="space-y-5 text-base leading-relaxed text-night/85 md:text-lg">
              {post.content.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap gap-3 border-t border-line pt-8">
              <Button onClick={openBooking} className="rounded-full">
                Book a stay
              </Button>
              <Button to="/contact" variant="ghost" className="rounded-full">
                Ask a question
              </Button>
            </div>
          </div>
          <aside>
            <h2 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
              More stories
            </h2>
            <ul className="space-y-5">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link to={`/blog/${item.slug}`} className="group block overflow-hidden">
                    <img
                      src={item.image}
                      alt=""
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <p className="mt-3 text-lg leading-snug text-night group-hover:text-brand">
                      {item.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </article>
      <CtaSection title="Ready to visit Varanasi?" />
    </>
  )
}
