import { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; 
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

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
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/60 backdrop-blur-lg border-b border-zinc-900/50"
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-4 group" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="Isla Studio" className="h-10 w-auto transition-transform group-hover:scale-105" />
            <span className="text-brand-cream font-black text-2xl tracking-tighter hidden sm:block">
              ISLA STUDIO
            </span>
          </a>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-10 text-base font-bold text-brand-cream uppercase tracking-wider">
            {['valores', 'servicios', 'planes', 'equipo'].map((item) => (
              <a key={item} href={`#${item}`} onClick={(e) => handleNavClick(e, item)} className="hover:text-brand-blue transition-colors capitalize">
                {item === 'valores' ? 'Filosofía' : item}
              </a>
            ))}
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
      </motion.nav>

      {/* Menú Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-[999] bg-zinc-950 flex flex-col"
          >
            {/* Header del menú */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-zinc-800 shrink-0">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Isla Studio" className="h-8 w-auto"/>
                <span className="text-brand-cream font-black text-lg">ISLA STUDIO</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-brand-cream p-2">
                <X size={28} />
              </button>
            </div>

            {/* Links centrados */}
            <div className="flex flex-col items-center justify-center flex-grow gap-8">
              {['valores', 'servicios', 'planes', 'equipo'].map((item, index) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-3xl font-bold text-brand-cream hover:text-brand-blue transition-colors capitalize cursor-pointer"
                >
                  {item === 'valores' ? 'Filosofía' : item}
                </motion.a>
              ))}
            </div>

            {/* Botón CTA posicionado abajo */}
            <div className="px-6 pb-12 pt-4 shrink-0">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                href="#contacto"
                onClick={(e) => handleNavClick(e, 'contacto')}
                className="block w-full text-center px-6 py-3 bg-brand-blue text-brand-cream text-lg font-bold rounded-full shadow-[0_0_25px_rgba(0,122,255,0.5)]"
              >
                Consultar Ahora
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default memo(Navbar);