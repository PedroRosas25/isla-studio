import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // Requiere: npm install react-icons

export default function Contacto() {
  return (
    <section id="contacto" className="py-24 bg-zinc-950 border-t border-zinc-900 text-brand-cream px-4 relative overflow-hidden">
      
      {/* (Opcional: Tus símbolos geométricos de fondo aquí...) */}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Impulsá tu presencia digital</h2>
          <p className="text-xl text-brand-cream mb-12 max-w-2xl mx-auto">
            ¿Listo para llevar tu marca al siguiente nivel? Escribinos para coordinar una reunión y armar una propuesta a tu medida.
          </p>

          {/* --- ZONA DE CONTACTO --- */}
          <div className="flex flex-col items-center gap-6 mb-16">
            
            {/* 1. Botones de WhatsApp Redondeados y Compactos */}
            <div className="flex flex-col md:flex-row justify-center gap-4 w-full">
              
              {/* Botón Juan bataller */}
              <a
                href="https://wa.me/5492645063823"
                target="_blank"
                rel="noopener noreferrer"
                // 'rounded-full' para forma de píldora. Padding ajustado: px-5 py-3, gap-3.
                className="group flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] px-5 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-md shadow-green-500/10 flex-1 md:flex-none"
              >
                {/* Contenedor de icono p-2 para compacidad */}
                <div className="bg-white/20 p-2 rounded-full shrink-0">
                  <FaWhatsapp size={22} className="text-white" /> {/* Icono size 22 */}
                </div>
                <div className="text-left text-white">
                  <p className="font-bold text-base leading-tight">Juan Bataller</p>
                </div>
              </a>

              {/* Botón Santiago Castro */}
              <a
                href="https://wa.me/5492644437135"
                target="_blank"
                rel="noopener noreferrer"
                // 'rounded-full' para forma de píldora. Padding ajustado: px-5 py-3, gap-3.
                className="group flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] px-5 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-md shadow-green-500/10 flex-1 md:flex-none"
              >
                {/* Contenedor de icono p-2 para compacidad */}
                <div className="bg-white/20 p-2 rounded-full shrink-0">
                  <FaWhatsapp size={22} className="text-white" />
                </div>
                <div className="text-left text-white">
                  <p className="font-bold text-base leading-tight">Santiago Castro</p>
                </div>
              </a>
            </div>

            {/* 2. Botones de Instagram y Mail (Redondos y Debajo) */}
            <div className="flex gap-6 items-center mt-4">
              {/* Botón Instagram Redondo */}
              <a href="https://www.instagram.com/studios_isla/" target="_blank" rel="noopener noreferrer" 
                 // 'rounded-full' y p-5 para un círculo perfecto alrededor del icono.
                 className="flex items-center justify-center bg-zinc-900 border border-zinc-800 hover:border-pink-500 p-4 rounded-full transition-all group shadow-inner shadow-black/30">
                <Instagram size={24} className="text-pink-500 transition-transform group-hover:scale-110" />
                {/* No text here, just the logo */}
              </a>
              
              {/* Botón Email Redondo */}
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=islastudio39@gmail.com&su=Consulta+desde+la+Web" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-zinc-900 border border-zinc-800 hover:border-brand-blue p-4 rounded-full transition-all group shadow-inner shadow-black/30"
              >
                <Mail size={24} className="text-brand-blue transition-transform group-hover:scale-110" />
              </a>
            </div>

          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 mt-20"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter text-white">ISLA</span>
            <span className="text-2xl font-light text-white">STUDIO</span>
          </div>
          
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Isla Studio. Todos los derechos reservados.
          </p>

        </motion.div>
      </div>
    </section>
  );
}