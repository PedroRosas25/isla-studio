import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/85 backdrop-blur-md border-b border-zinc-900"
    >
      {/* Subimos el height de h-20 a h-24 para que quepan los elementos más grandes */}
      <div className="max-w-6xl mx-auto px-4 h-24 flex items-center justify-between">
        
        {/* Logo - Clickeable */}
        <a href="#" className="flex items-center gap-4 group">
          <img src={logo} alt="Isla Studio" className="h-14 w-auto transition-transform group-hover:scale-105" />
          {/* Nombre: subido a text-3xl */}
          <span className="text-brand-cream font-black text-3xl tracking-tighter hidden sm:block">
            ISLA STUDIO
          </span>
        </a>

        {/* Links de navegación: subidos a text-base y más separación (gap-10) */}
        <div className="hidden md:flex items-center gap-10 text-base font-bold text-brand-cream uppercase tracking-wider">
          <a href="#valores" className="hover:text-brand-blue transition-colors">Filosofía</a>
          <a href="#servicios" className="hover:text-brand-blue transition-colors">Servicios</a>
          <a href="#planes" className="hover:text-brand-blue transition-colors">Planes</a>
          <a href="#equipo" className="hover:text-brand-blue transition-colors">Equipo</a>
        </div>

        {/* Botón CTA - Un poco más grande el padding y texto */}
        <a 
          href="#contacto" 
          className="px-8 py-3 bg-brand-blue text-brand-cream text-base font-bold rounded-full hover:bg-[#005bb5] transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(0,122,255,0.4)]"
        >
          Consultar Ahora
        </a>

      </div>
    </motion.nav>
  );
}