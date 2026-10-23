import { MapPin, Phone } from 'lucide-react'
import { mapsUrl, navLinks, site, whatsappUrl } from '../data/site'
import { Logo } from './Logo'
import { InstagramIcon, WhatsAppIcon } from './BrandIcons'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white/70">
      <div className="pointer-events-none absolute inset-0 blueprint opacity-60" aria-hidden="true" />
      <div className="container-site relative grid gap-12 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            Construção civil, reformas, pintura predial e acabamentos com planejamento,
            transparência e atenção a cada detalhe, em {site.city} – {site.state}.
          </p>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2.5 text-sm text-white transition-colors hover:text-gold"
          >
            <InstagramIcon className="h-5 w-5 text-gold" />
            {site.instagram.handle}
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </div>

        <nav aria-label="Links do rodapé" className="lg:col-span-3">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">Navegação</h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
            <li className="col-span-2">
              <a href="/politica-de-privacidade" className="transition-colors hover:text-white">
                Política de Privacidade
              </a>
            </li>
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">Contato</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 transition-colors hover:text-white"
              >
                <WhatsAppIcon className="h-4 w-4 text-gold" />
                WhatsApp {site.phoneDisplay}
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:+${site.phoneE164}`}
                className="inline-flex items-center gap-3 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-gold" strokeWidth={1.6} />
                Ligar: {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 transition-colors hover:text-white"
              >
                <MapPin className="h-4 w-4 text-gold" strokeWidth={1.6} />
                {site.city} – {site.state}
                <span className="sr-only"> (abre o Google Maps em nova aba)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. Todos os direitos reservados.
          </p>
          <p>Imagens identificadas como ilustrativas não representam obras executadas pela empresa.</p>
        </div>
      </div>
    </footer>
  )
}
