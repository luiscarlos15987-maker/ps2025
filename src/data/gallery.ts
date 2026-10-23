export const galleryCategories = [
  { id: 'todos', label: 'Todos' },
  { id: 'edificios', label: 'Edifícios e fachadas' },
  { id: 'interiores', label: 'Interiores e marcenaria' },
  { id: 'acabamentos', label: 'Acabamentos' },
  { id: 'obras', label: 'Obras em execução' },
  { id: 'equipe', label: 'Equipe e eventos' },
] as const

export type GalleryCategory = Exclude<(typeof galleryCategories)[number]['id'], 'todos'>

export type GalleryItem = {
  src: string
  alt: string
  caption: string
  category: GalleryCategory
}

/**
 * Fotos publicadas no perfil @lordedificacoes.
 * As legendas são descritivas: nomes de empreendimentos, clientes e endereços
 * só devem ser adicionados após confirmação da empresa.
 * Substitua os arquivos em /public/images/portfolio pelas fotos originais em alta resolução.
 */
export const gallery: GalleryItem[] = [
  {
    src: '/images/portfolio/fachada-torre.webp',
    alt: 'Torre residencial alta com fachada envidraçada vista de baixo',
    caption: 'Edifício residencial em altura',
    category: 'edificios',
  },
  {
    src: '/images/portfolio/interior-jantar.webp',
    alt: 'Espaço de convivência com mesas redondas brancas e cadeiras estofadas',
    caption: 'Ambiente interno de convivência',
    category: 'interiores',
  },
  {
    src: '/images/portfolio/obra-pintura-fita.webp',
    alt: 'Pintores com uniforme Lord e capacete aplicando fita de proteção em parede',
    caption: 'Preparação de superfície para pintura',
    category: 'obras',
  },
  {
    src: '/images/portfolio/acabamento-textura.webp',
    alt: 'Detalhe de parede com acabamento texturizado em dois tons',
    caption: 'Acabamento decorativo texturizado',
    category: 'acabamentos',
  },
  {
    src: '/images/portfolio/edificio-aereo.webp',
    alt: 'Vista aérea de edifício comercial branco em área urbana',
    caption: 'Edifício comercial',
    category: 'edificios',
  },
  {
    src: '/images/portfolio/marcenaria-gaveteiro.webp',
    alt: 'Gaveteiro planejado em tom bege com puxadores metálicos',
    caption: 'Móvel planejado e marcenaria',
    category: 'interiores',
  },
  {
    src: '/images/portfolio/equipe-pintores.webp',
    alt: 'Três profissionais da equipe de pintura posando em obra',
    caption: 'Equipe de pintura',
    category: 'equipe',
  },
  {
    src: '/images/portfolio/obra-vistoria.webp',
    alt: 'Profissional de capacete branco vistoriando parede rebocada ao lado de quadro elétrico',
    caption: 'Vistoria de etapa da obra',
    category: 'obras',
  },
  {
    src: '/images/portfolio/obra-porcelanato.webp',
    alt: 'Placas de porcelanato embaladas e piso protegido com manta em ambiente em obra',
    caption: 'Proteção de piso e revestimentos',
    category: 'acabamentos',
  },
  {
    src: '/images/portfolio/equipe-uniforme.webp',
    alt: 'Profissional com camiseta Lord Acabamentos e capacete amarelo',
    caption: 'Equipe em campo',
    category: 'equipe',
  },
  {
    src: '/images/portfolio/obra-equipe-capacete.webp',
    alt: 'Dois profissionais abraçados em frente a uma obra, um deles de capacete',
    caption: 'Acompanhamento em obra',
    category: 'obras',
  },
  {
    src: '/images/portfolio/evento-construsul.webp',
    alt: 'Representante da Lord Edificações em painel da feira Construsul',
    caption: 'Participação na feira Construsul',
    category: 'equipe',
  },
  {
    src: '/images/portfolio/equipe-evento-sacada.webp',
    alt: 'Dois representantes da empresa em sacada com vista para montanhas',
    caption: 'Encontro de negócios',
    category: 'equipe',
  },
  {
    src: '/images/portfolio/evento-bni.webp',
    alt: 'Representante da empresa em evento empresarial BNI',
    caption: 'Evento empresarial BNI',
    category: 'equipe',
  },
]
