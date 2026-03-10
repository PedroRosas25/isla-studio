import { useEffect, memo } from "react"; // Quitamos useState porque ya no se usa acá
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; 
import logo from "../assets/logo.png";

// 1. Recibimos isOpen y setIsOpen como argumentos (props)
function Navbar({ isOpen, setIsOpen }) {

  // 2. BORRAMOS la línea del useState que estaba acá.

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false); // Usamos la función que viene por props
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 z-[999] bg-zinc-950 flex flex-col overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[85%] h-full bg-brand-blue/[0.04] -skew-x-12 translate-x-28 pointer-events-none z-0 border-l border-brand-blue/10"></div>

            <div className="flex items-center justify-between px-6 h-16 shrink-0 z-10">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Isla Studio" className="h-8 w-auto"/>
                <span className="text-brand-cream font-black text-xl tracking-tighter italic uppercase">ISLA STUDIO</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-brand-cream p-2">
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex flex-col justify-center flex-grow px-10 gap-10 z-10">
              {['valores', 'servicios', 'planes', 'equipo', 'contacto'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.08 }}
                  className="relative group w-fit"
                >
                  <span className="absolute -left-6 -top-3 text-7xl font-black text-brand-blue/[0.04] italic pointer-events-none tracking-tighter z-0">
                    0{index + 1}
                  </span>
                  
                  <a 
                    onClick={(e) => handleNavClick(e, item)}
                    className="text-4xl font-serif text-brand-cream capitalize cursor-pointer tracking-tight
                               relative z-10 group-active:text-brand-blue transition-all duration-300 block"
                  >
                    {item === 'valores' ? 'Filosofía' : item}
                  </a>

                  <div className="w-10 h-[2px] bg-brand-blue mt-2 opacity-0 group-active:opacity-100 transition-opacity"></div>
                </motion.div>
              ))}
            </div>

            {/* 3. Footer invertido: Línea -> Palabra (Modificado) */}
            <div className="p-10 z-10 w-full">
              <div className="flex items-center gap-6">
                  
                  {/* 3.1 La línea a la izquierda (Aumentamos el flex-grow para que empuje) */}
                  <div className="h-[1px] flex-grow bg-zinc-800/50"></div>

                  {/* 3.2 La palabra a la derecha */}
                  <span className="text-[10px] text-brand-blue font-bold tracking-[0.5em] uppercase whitespace-nowrap">
                    Creative Studio
                    </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default memo(Navbar);