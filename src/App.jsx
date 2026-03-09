import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Cargamos los componentes "pesados" solo cuando sean necesarios
const Valores = lazy(() => import('./components/Valores'));
const ServiciosDetallados = lazy(() => import('./components/ServiciosDetallados'));
const Planes = lazy(() => import('./components/Planes'));
const Equipo = lazy(() => import('./components/Equipo'));
const Contacto = lazy(() => import('./components/Contacto'));

function App() {
  return (
    <main className="bg-zinc-950 min-h-screen overflow-x-hidden">
      <Navbar />
      
      <Hero />

      {/* Suspense muestra un estado de carga opcional mientras se descarga el JS del componente */}
      <Suspense fallback={<div className="h-20" />}>
        <Valores />
        <ServiciosDetallados />
        <Planes />
        <Equipo />
        <Contacto />
      </Suspense>
    </main>
  );
}

export default App;