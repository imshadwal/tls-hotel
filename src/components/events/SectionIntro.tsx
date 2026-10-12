import { Reveal } from '@/components/common/Reveal'

type SectionIntroProps = {
  id: string
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionIntro({ id, eyebrow, title, description, align = 'left' }: SectionIntroProps) {
  return (
    <Reveal className={`mb-10 max-w-2xl md:mb-14 ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gilt-deep">
        {eyebrow}
      </p>
      <h2 id={id} className="mt-4 text-4xl leading-[1.1] text-balance text-night md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-mute md:text-lg">{description}</p>
      ) : null}
    </Reveal>
  )
}
