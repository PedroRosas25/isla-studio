import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      // fixed y z-50 hacen que se quede pegada arriba de todo
      // backdrop-blur-md le da el efecto de vidrio difuminado
      className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/85 backdrop-blur-md border-b border-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Logo - Clickeable para ir al inicio (href="#") */}
        <a href="#" className="flex items-center gap-3 group">
          <img src={logo} alt="Isla Studio" className="h-10 w-auto transition-transform group-hover:scale-105" />
          {/* El nombre se oculta en celulares muy chicos para que no choque con el botón */}
          <span className="text-brand-cream font-black text-xl tracking-tighter hidden sm:block">
            ISLA STUDIO
          </span>
        </a>

        {/* Links de navegación (Visibles en PC, ocultos en móvil para no amontonar) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-cream">
          <a href="#valores" className="hover:text-isla-orange transition-colors">Filosofía</a>
          <a href="#servicios" className="hover:text-isla-orange transition-colors">Servicios</a>
          <a href="#planes" className="hover:text-isla-orange transition-colors">Planes</a>
          <a href="#equipo" className="hover:text-isla-orange transition-colors">Equipo</a>
        </div>

        {/* Botón CTA (Call to Action) súper resaltado */}
        <a 
          href="#contacto" 
          className="px-6 py-2.5 bg-brand.blue text-brand-cream text-sm font-bold rounded-full hover:bg-[#e66000] transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(255,107,0,0.4)]"
        >
          Consultar Ahora
        </a>

      </div>
    </motion.nav>
  );
}