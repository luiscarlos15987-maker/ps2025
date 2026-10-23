type LogoProps = {
  variant?: 'light' | 'dark'
  className?: string
}

/** Marca LORD EDIFICAÇÕES: coroa sobre telhado, inspirada no símbolo usado pela empresa. */
export function LogoMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <path
        d="M17 13.5 19.5 6l4.5 5 4.5-5 2.5 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M16.5 16h15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M4 34 24 18l20 16"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M10 30v12h28V30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M21 42v-7h6v7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 33h3.5M30.5 33H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function Logo({ variant = 'light', className = '' }: LogoProps) {
  const text = variant === 'light' ? 'text-white' : 'text-navy'
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="h-10 w-10 shrink-0 text-gold" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.6rem] font-semibold tracking-[0.14em] ${text}`}>
          LORD
        </span>
        <span className="mt-1 text-[0.56rem] font-semibold tracking-[0.42em] text-gold">
          EDIFICAÇÕES
        </span>
      </span>
    </span>
  )
}
