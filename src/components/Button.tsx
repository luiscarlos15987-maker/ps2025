import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'gold' | 'outline-light' | 'outline-dark' | 'navy' | 'ghost-light'

const variants: Record<Variant, string> = {
  gold: 'bg-gold text-navy-950 hover:bg-gold-light shadow-[0_10px_30px_-12px_rgb(198_161_91/0.7)]',
  navy: 'bg-navy text-white hover:bg-institutional',
  'outline-light': 'border border-white/35 text-white hover:border-gold hover:text-gold-light',
  'outline-dark': 'border border-navy/25 text-navy hover:border-gold hover:bg-navy hover:text-white',
  'ghost-light': 'text-white/85 hover:text-gold-light',
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
  icon?: ReactNode
  external?: boolean
  size?: 'md' | 'lg'
}

export function ButtonLink({
  variant = 'gold',
  icon,
  external,
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonLinkProps) {
  const sizing = size === 'lg' ? 'px-7 py-4 text-[0.95rem]' : 'px-5 py-3 text-sm'
  return (
    <a
      {...props}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-md font-semibold tracking-wide transition-all duration-300 ease-out-soft active:scale-[0.98] ${sizing} ${variants[variant]} ${className}`}
    >
      {icon}
      <span>{children}</span>
      {external && <span className="sr-only"> (abre em nova aba)</span>}
    </a>
  )
}
