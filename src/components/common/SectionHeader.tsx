import { motion } from 'framer-motion'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 max-w-3xl md:mb-16 ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow ? (
        <p className={`eyebrow mb-4 ${light ? 'text-brand-soft' : ''}`}>{eyebrow}</p>
      ) : null}
      <h2
        className={`text-4xl leading-[1.1] md:text-5xl lg:text-6xl ${
          light ? 'text-paper' : 'text-night'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed md:text-lg ${
            light ? 'text-paper/75' : 'text-mute'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  )
}
