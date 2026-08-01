import { SeoHead } from '@/components/common/SeoHead'
import { PageHero } from '@/components/common/PageHero'
import { BlogCard } from '@/components/common/BlogCard'
import { CtaSection } from '@/components/common/CtaSection'
import { blogPosts } from '@/content/blog'

export function BlogPage() {
  return (
    <>
      <SeoHead
        title="Journal"
        description="Travel tips, local guides, and hotel stories from The Lavish Stay in Varanasi."
        path="/blog"
        image="/images/blog/ghats.jpg"
      />
      <PageHero
        title="Journal"
        subtitle="Guides and stories to enrich your Varanasi visit."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Journal' },
        ]}
        image="/images/blog/ghats.jpg"
      />
      <section className="section-pad bg-section-linen">
        <div className="container-page grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
      <CtaSection title="Plan your Varanasi stay" />
    </>
  )
}
