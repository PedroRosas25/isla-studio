import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Valores from './components/Valores'
import ServiciosDetallados from './components/ServiciosDetallados'
import Planes from './components/Planes'
import Equipo from './components/Equipo'
import Contacto from './components/Contacto'

function App() {
  return (
    <main className="bg-zinc-950 min-h-screen font-sans overflow-x-hidden">
      {/* La barra de navegación va primera */}
      <Navbar />
      
      <Hero />
      <Valores />
      <ServiciosDetallados />
      <Planes />
      <Equipo />
      <Contacto />
    </main>
  )
}

export default App