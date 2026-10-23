export type Testimonial = {
  /** Nome ou identificação aprovada pelo próprio cliente. */
  author: string
  /** Contexto opcional, ex.: "Reforma de apartamento". Use apenas se confirmado. */
  context?: string
  /** Nota de 1 a 5, conforme a avaliação original. */
  rating: 1 | 2 | 3 | 4 | 5
  /** Texto integral e autorizado do depoimento. */
  text: string
  /** Origem da avaliação, ex.: "Google". */
  source?: string
}

/**
 * Depoimentos reais e autorizados.
 * Adicione itens somente após verificar texto integral, autoria e permissão de uso.
 * Enquanto a lista estiver vazia, a seção exibe um estado de "em breve".
 */
export const testimonials: Testimonial[] = []
