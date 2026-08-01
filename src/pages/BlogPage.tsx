import { SeoHead } from '@/components/common/SeoHead'
import { PageHero } from '@/components/common/PageHero'
import { BlogCard } from '@/components/common/BlogCard'
import { CtaSection } from '@/components/common/CtaSection'
import { Reveal } from '@/components/common/Reveal'
import { blogPosts } from '@/content/blog'

export function BlogPage() {
  return (
    <>
      <SeoHead
        title="Varanasi Travel Journal"
        description="Travel tips, ghat guides, and stay advice from The Lavish Stay — boutique hotel in Pandeypur, Varanasi."
        path="/blog"
        image="/images/blog/ghats.jpg"
      />
      <PageHero
        title="Journal"
        subtitle="Guides and stories to enrich your Varanasi visit — written from our hotel in Pandeypur."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Journal' },
        ]}
        image="/images/blog/ghats.jpg"
      />

      <section className="section-pad bg-section-linen">
        <div className="container-page">
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow mb-4">From TLS</p>
            <h2 className="text-4xl md:text-5xl">Stories for your Varanasi stay</h2>
            <p className="mt-4 max-w-lg text-mute">
              Practical notes on ghats, food, and how to reach The Lavish Stay — helpful before you
              book a hotel in Varanasi.
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection title="Plan your Varanasi stay" />
    </>
  )
}
