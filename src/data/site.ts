/**
 * Dados institucionais centralizados.
 * Altere aqui para atualizar todo o site (cabeçalho, rodapé, contato, SEO e dados estruturados).
 * Revise cada informação com a empresa antes da publicação definitiva.
 */
export const site = {
  name: 'Lord Edificações',
  legalName: 'Lord Edificações Ltda.',
  tagline: 'Reformas e pinturas',
  /** Domínio público do site. Troque ao conectar o domínio próprio. */
  url: 'https://taupe-pasca-02eedb.netlify.app',
  city: 'Balneário Camboriú',
  state: 'SC',
  phoneDisplay: '(34) 99243-5327',
  /** Número no formato internacional, somente dígitos (55 + DDD + número). */
  phoneE164: '5534992435327',
  instagram: {
    handle: '@lordedificacoes',
    url: 'https://www.instagram.com/lordedificacoes/',
  },
  linktree: 'https://linktr.ee/lord.edificacoes',
  description:
    'Construção civil, reformas, pintura predial e acabamentos de alto padrão em Balneário Camboriú – SC. Planejamento, transparência e atenção a cada detalhe da obra.',
} as const

export const defaultWhatsAppMessage =
  'Olá, Lord Edificações! Gostaria de solicitar um orçamento.'

export function whatsappUrl(message: string = defaultWhatsAppMessage) {
  return `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(message)}`
}

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.city} - ${site.state}`,
)}`

export const navLinks = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Projetos', href: '/#projetos' },
  { label: 'Depoimentos', href: '/#depoimentos' },
  { label: 'Contato', href: '/contato' },
] as const
