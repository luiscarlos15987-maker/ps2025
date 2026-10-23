import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, whatsappUrl } from '../data/site'
import { Logo } from './Logo'
import { ButtonLink } from './Button'
import { WhatsAppIcon } from './BrandIcons'

type HeaderProps = {
  /** Em páginas sem hero escuro, o cabeçalho já começa com fundo sólido. */
  solid?: boolean
  current?: string
}

export function Header({ solid = false, current }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    panelRef.current?.querySelector<HTMLElement>('a')?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const filled = solid || scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-soft ${
        filled
          ? 'bg-navy/95 shadow-[0_10px_40px_-20px_rgb(0_0_0/0.6)] backdrop-blur-md'
          : 'bg-gradient-to-b from-navy-950/70 to-transparent'
      }`}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy-950"
      >
        Pular para o conteúdo
      </a>
      <div
        className={`container-site flex items-center justify-between transition-all duration-500 ${filled ? 'h-[4.5rem]' : 'h-20 lg:h-24'}`}
      >
        <a href="/" aria-label="Lord Edificações — página inicial" className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={current === link.href ? 'page' : undefined}
                  className="relative py-2 text-[0.82rem] font-medium tracking-[0.08em] text-white/80 uppercase transition-colors hover:text-white aria-[current=page]:text-gold after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink
            href={whatsappUrl()}
            external
            icon={<WhatsAppIcon className="h-4 w-4" />}
            className="hidden sm:inline-flex"
          >
            Orçamento
          </ButtonLink>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movel"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:border-gold hover:text-gold lg:hidden"
          >
            {open ? <X className="h-5 w-5" strokeWidth={1.6} /> : <Menu className="h-5 w-5" strokeWidth={1.6} />}
          </button>
        </div>
      </div>

      <div
        id="menu-movel"
        ref={panelRef}
        hidden={!open}
        className="blueprint h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-white/10 bg-navy lg:hidden"
      >
        <nav aria-label="Navegação móvel" className="container-site flex min-h-full flex-col py-8">
          <ul className="flex flex-col">
            {navLinks.map((link, i) => (
              <li key={link.href} className="border-b border-white/10">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={current === link.href ? 'page' : undefined}
                  className="flex items-baseline gap-5 py-5 text-white transition-colors hover:text-gold aria-[current=page]:text-gold"
                >
                  <span className="font-display text-sm text-gold/80">0{i + 1}</span>
                  <span className="font-display text-3xl">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-10">
            <ButtonLink
              href={whatsappUrl()}
              external
              size="lg"
              icon={<WhatsAppIcon className="h-5 w-5" />}
              className="w-full"
            >
              Solicitar orçamento pelo WhatsApp
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  )
}
