import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
  id?: string
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  tone = 'dark',
  align = 'left',
  id,
}: SectionHeadingProps) {
  const dark = tone === 'dark'
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className={`eyebrow ${dark ? 'text-gold-dark' : 'text-gold'}`}>
        <span className="font-display text-sm tracking-[0.1em]">{index}</span>
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`heading-display mt-5 text-[2.35rem] sm:text-5xl lg:text-[3.6rem] ${dark ? 'text-navy' : 'text-white'}`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-6 text-base leading-relaxed sm:text-lg ${dark ? 'text-graphite/75' : 'text-white/70'}`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  )
}
