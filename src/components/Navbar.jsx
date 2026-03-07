import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; 
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/60 backdrop-blur-lg border-b border-zinc-900/50"
    >
      {/* CAMBIO AQUÍ: h-16 en lugar de h-24 para que sea más fina */}
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        <a href="#" className="flex items-center gap-4 group" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Isla Studio" className="h-10 w-auto transition-transform group-hover:scale-105" />
          <span className="text-brand-cream font-black text-2xl tracking-tighter hidden sm:block">
            ISLA STUDIO
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10 text-base font-bold text-brand-cream uppercase tracking-wider">
          <a href="#valores" onClick={(e) => handleNavClick(e, 'valores')} className="hover:text-brand-blue transition-colors">Filosofía</a>
          <a href="#servicios" onClick={(e) => handleNavClick(e, 'servicios')} className="hover:text-brand-blue transition-colors">Servicios</a>
          <a href="#planes" onClick={(e) => handleNavClick(e, 'planes')} className="hover:text-brand-blue transition-colors">Planes</a>
          <a href="#equipo" onClick={(e) => handleNavClick(e, 'equipo')} className="hover:text-brand-blue transition-colors">Equipo</a>
        </div>

        <a 
          href="#contacto" 
          onClick={(e) => handleNavClick(e, 'contacto')}
          className="hidden md:inline-block px-6 py-2 bg-brand-blue text-brand-cream text-sm font-bold rounded-full hover:bg-[#005bb5] transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(0,122,255,0.4)]"
        >
          Consultar Ahora
        </a>

        <button 
          className="md:hidden text-brand-cream hover:text-brand-blue transition-colors p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            // ESTA ES LA CONFIGURACIÓN FINAL:
            // 1. z-[999] para que nada se ponga encima.
            // 2. bg-zinc-950/80 (Más oscuro que la navbar para tapar mejor el fondo).
            // 3. backdrop-blur-xl (Desenfoque más fuerte).
            // 4. border-b border-zinc-800/50 (Borde sutil para definir el bloque).
            className="md:hidden absolute top-16 left-0 right-0 z-[999] bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6 text-center">
              <a href="#valores" onClick={(e) => handleNavClick(e, 'valores')} className="block text-lg font-bold text-brand-cream uppercase tracking-wider hover:text-brand-blue transition-colors">Filosofía</a>
              <a href="#servicios" onClick={(e) => handleNavClick(e, 'servicios')} className="block text-lg font-bold text-brand-cream uppercase tracking-wider hover:text-brand-blue transition-colors">Servicios</a>
              <a href="#planes" onClick={(e) => handleNavClick(e, 'planes')} className="block text-lg font-bold text-brand-cream uppercase tracking-wider hover:text-brand-blue transition-colors">Planes</a>
              <a href="#equipo" onClick={(e) => handleNavClick(e, 'equipo')} className="block text-lg font-bold text-brand-cream uppercase tracking-wider hover:text-brand-blue transition-colors">Equipo</a>
              
              <a 
                href="#contacto" 
                onClick={(e) => handleNavClick(e, 'contacto')}
                className="mt-2 px-6 py-4 bg-brand-blue text-brand-cream text-lg font-bold rounded-full hover:bg-[#005bb5] transition-all shadow-[0_0_15px_rgba(0,122,255,0.4)] inline-block w-full"
              >
                Consultar Ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}