import { AISuite } from './components/AISuite'
import { ConsultationModal } from './components/ConsultationModal'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Logistics } from './components/Logistics'
import { Pricing } from './components/Pricing'
import { Problem } from './components/Problem'
import { Solution } from './components/Solution'
import { Trust } from './components/Trust'
import { WhatsAppFAB } from './components/WhatsAppFAB'
import { ModalProvider } from './context/ModalContext'

export default function App() {
  return (
    <ModalProvider>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Logistics />
        <AISuite />
        <Pricing />
        <Trust />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFAB />
      <ConsultationModal />
    </ModalProvider>
  )
}
