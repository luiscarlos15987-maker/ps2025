import { createRoot } from 'react-dom/client'
import './styles.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ButtonLink } from './components/Button'
import { whatsappUrl } from './data/site'

document.documentElement.classList.add('js')

function App() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <section id="inicio" className="relative flex min-h-[90vh] items-center bg-navy text-white">
          <img src="/images/ilustrativas/hero-1280.webp" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="container-site relative">
            <h1 className="heading-display max-w-3xl text-5xl sm:text-7xl">Construindo excelência. Entregando confiança.</h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">Construção civil, reformas e acabamentos com qualidade, planejamento e atenção a cada detalhe.</p>
            <div className="mt-8"><ButtonLink href={whatsappUrl()} external size="lg">Solicitar orçamento</ButtonLink></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
