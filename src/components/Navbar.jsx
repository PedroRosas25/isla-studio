import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; 
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Función mágica para hacer scroll y cerrar el menú correctamente
  const handleNavClick = (e, targetId) => {
    e.preventDefault(); // Evita el salto brusco
    setIsOpen(false); // Cierra el menú

    // Esperamos 150 milisegundos para que el menú empiece a cerrarse antes de bajar
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
      className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/85 backdrop-blur-md border-b border-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-4 h-24 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-4 group" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Isla Studio" className="h-14 w-auto transition-transform group-hover:scale-105" />
          <span className="text-brand-cream font-black text-3xl tracking-tighter hidden sm:block">
            ISLA STUDIO
          </span>
        </a>

        {/* MENÚ DE ESCRITORIO */}
        <div className="hidden md:flex items-center gap-10 text-base font-bold text-brand-cream uppercase tracking-wider">
          <a href="#valores" onClick={(e) => handleNavClick(e, 'valores')} className="hover:text-brand-blue transition-colors">Filosofía</a>
          <a href="#servicios" onClick={(e) => handleNavClick(e, 'servicios')} className="hover:text-brand-blue transition-colors">Servicios</a>
          <a href="#planes" onClick={(e) => handleNavClick(e, 'planes')} className="hover:text-brand-blue transition-colors">Planes</a>
          <a href="#equipo" onClick={(e) => handleNavClick(e, 'equipo')} className="hover:text-brand-blue transition-colors">Equipo</a>
        </div>

        {/* Botón CTA - ESCRITORIO */}
        <a 
          href="#contacto" 
          onClick={(e) => handleNavClick(e, 'contacto')}
          className="hidden md:inline-block px-8 py-3 bg-brand-blue text-brand-cream text-base font-bold rounded-full hover:bg-[#005bb5] transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(0,122,255,0.4)]"
        >
          Consultar Ahora
        </a>

        {/* Botón Hamburguesa - MÓVIL */}
        <button 
          className="md:hidden text-brand-cream hover:text-brand-blue transition-colors p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
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
            className="md:hidden absolute top-24 left-0 right-0 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-900 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6 text-center shadow-2xl">
              {/* Vínculos Móviles */}
              <a href="#valores" onClick={(e) => handleNavClick(e, 'valores')} className="block text-lg font-bold text-brand-cream uppercase tracking-wider hover:text-brand-blue transition-colors">Filosofía</a>
              <a href="#servicios" onClick={(e) => handleNavClick(e, 'servicios')} className="block text-lg font-bold text-brand-cream uppercase tracking-wider hover:text-brand-blue transition-colors">Servicios</a>
              <a href="#planes" onClick={(e) => handleNavClick(e, 'planes')} className="block text-lg font-bold text-brand-cream uppercase tracking-wider hover:text-brand-blue transition-colors">Planes</a>
              <a href="#equipo" onClick={(e) => handleNavClick(e, 'equipo')} className="block text-lg font-bold text-brand-cream uppercase tracking-wider hover:text-brand-blue transition-colors">Equipo</a>
              
              <a 
                href="#contacto" 
                onClick={(e) => handleNavClick(e, 'contacto')}
                className="mt-4 px-8 py-4 bg-brand-blue text-brand-cream text-lg font-bold rounded-full hover:bg-[#005bb5] transition-all shadow-[0_0_15px_rgba(0,122,255,0.4)] inline-block w-full"
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