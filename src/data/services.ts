import type { LucideIcon } from 'lucide-react'
import { Building2, ClipboardCheck, Gem, House, PaintRoller, Hammer } from 'lucide-react'

export type Service = {
  slug: string
  title: string
  description: string
  icon: LucideIcon
  image: string
  imageAlt: string
}

/** As fotos dos serviços são ilustrativas (banco de imagens licenciado) e não representam obras da empresa. */
export const services: Service[] = [
  {
    slug: 'construcao-residencial',
    title: 'Construção residencial',
    description:
      'Construção de casas e projetos residenciais com atenção ao planejamento e à qualidade de execução.',
    icon: House,
    image: 'residencial',
    imageAlt: 'Fachada de residência contemporânea com revestimento em madeira e volumes escuros',
  },
  {
    slug: 'construcao-comercial',
    title: 'Construção comercial',
    description: 'Soluções construtivas para espaços comerciais e empreendimentos empresariais.',
    icon: Building2,
    image: 'comercial',
    imageAlt: 'Edifícios comerciais envidraçados vistos de baixo para cima',
  },
  {
    slug: 'reformas-e-modernizacao',
    title: 'Reformas e modernização',
    description:
      'Adequação e renovação de ambientes para melhorar funcionalidade, estética e aproveitamento dos espaços.',
    icon: Hammer,
    image: 'reformas',
    imageAlt: 'Sala de estar integrada e renovada, com painel de madeira e piso claro',
  },
  {
    slug: 'pintura-predial',
    title: 'Pintura predial',
    description:
      'Serviços de pintura e renovação de superfícies, com preparação adequada e atenção ao acabamento.',
    icon: PaintRoller,
    image: 'pintura',
    imageAlt: 'Rolo de pintura aplicando tinta sobre parede clara',
  },
  {
    slug: 'acabamentos-de-alto-padrao',
    title: 'Acabamentos de alto padrão',
    description:
      'Execução e instalação de revestimentos, pisos, elementos decorativos e outros acabamentos conforme o escopo contratado.',
    icon: Gem,
    image: 'acabamentos',
    imageAlt: 'Corredor residencial com piso de madeira e paredes em acabamento liso',
  },
  {
    slug: 'execucao-e-acompanhamento-de-obras',
    title: 'Execução e acompanhamento de obras',
    description:
      'Execução das etapas da obra conforme o escopo contratado, com organização do canteiro e comunicação com o cliente ao longo do processo.',
    icon: ClipboardCheck,
    image: 'execucao',
    imageAlt: 'Profissionais com equipamentos de segurança acompanhando um canteiro de obras',
  },
]
