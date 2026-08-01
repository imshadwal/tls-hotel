import { Link } from 'react-router-dom'
import type { BlogPost } from '@/types'

type BlogCardProps = {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group">
      <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </Link>
      <div className="pt-5">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
          {post.category}
        </p>
        <h3 className="mb-3 text-2xl leading-snug">
          <Link to={`/blog/${post.slug}`} className="hover:text-gold">
            {post.title}
          </Link>
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-stone">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal hover:text-gold"
        >
          Read Article
        </Link>
      </div>
    </article>
  )
}
