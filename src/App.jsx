import { Suspense, lazy, useState } from 'react'; // Agregamos useState
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WppFloat from "./components/WppFloat";

// Cargamos los componentes "pesados" solo cuando sean necesarios
const Valores = lazy(() => import('./components/Valores'));
const ServiciosDetallados = lazy(() => import('./components/ServiciosDetallados'));
const Planes = lazy(() => import('./components/Planes'));
const Equipo = lazy(() => import('./components/Equipo'));
const Contacto = lazy(() => import('./components/Contacto'));

function App() {
  // Creamos el estado aquí para que lo compartan el Navbar y el Botón de WPP
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="bg-zinc-950 min-h-screen overflow-x-hidden">
      {/* Pasamos el estado al Navbar para que lo controle */}
      <Navbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      
      <Hero />

      <Suspense fallback={<div className="h-20" />}>
        <Valores />
        <ServiciosDetallados />
        <Planes />
        <Equipo />
        <Contacto />
        
        {/* LÓGICA DE VISIBILIDAD: Solo se renderiza si el menú está cerrado */}
        {!isMenuOpen && <WppFloat />}
      </Suspense>
    </main>
  );
}

export default App;