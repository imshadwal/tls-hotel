import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'

type PageHeroProps = {
  title: string
  subtitle?: string
  breadcrumbs?: Array<{ label: string; path?: string }>
  image?: string
  /** Shorter hero for text-heavy pages (legal, etc.) */
  compact?: boolean
}

function PageHero({
  title,
  subtitle,
  breadcrumbs = [],
  image = '/images/hero/hero-2.webp',
  compact = false,
}: PageHeroProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section
      className={
        compact
          ? 'relative flex min-h-[38vh] items-end overflow-hidden bg-brand-deep md:min-h-[42vh]'
          : 'relative flex min-h-[48vh] items-end overflow-hidden bg-brand-deep md:min-h-[54vh]'
      }
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-[0.48]"
        aria-hidden="true"
        decoding="async"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/80 via-brand-deep/50 to-brand-deep/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/35 to-transparent" />

      <div
        className={
          compact
            ? 'container-page relative z-10 pb-10 pt-36 md:pb-12 md:pt-40'
            : 'container-page relative z-10 pb-14 pt-36 md:pb-16 md:pt-40'
        }
      >
        {breadcrumbs.length > 0 ? (
          <nav
            aria-label="Breadcrumb"
            className="mb-4 font-sans text-[10px] uppercase tracking-[0.2em] text-paper/50"
          >
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  {index > 0 ? <span aria-hidden="true">/</span> : null}
                  {crumb.path ? (
                    <Link to={crumb.path} className="transition-colors hover:text-paper/80">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-paper/80">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.08 }}
          className={
            compact
              ? 'max-w-4xl font-display text-3xl leading-[1.1] text-paper md:text-5xl lg:text-6xl'
              : 'max-w-4xl font-display text-4xl leading-[1.08] text-paper md:text-6xl lg:text-7xl'
          }
        >
          {title}
        </motion.h1>
        {subtitle ? (
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.16 }}
            className="mt-4 max-w-[32rem] font-sans text-sm leading-[1.75] text-paper/72 md:mt-5 md:text-base"
          >
            {subtitle}
          </motion.p>
        ) : null}
      </div>
    </section>
  )
}

export { PageHero }
