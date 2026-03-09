import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { memo } from "react";

const acentosGraficos = [
  { id: 1, text: "✦", top: "10%", left: "10%", size: "text-3xl" },
  { id: 2, text: "○", top: "15%", right: "15%", size: "text-4xl" },
  { id: 3, text: "//", top: "40%", left: "5%", size: "text-2xl" },
  { id: 4, text: "□", top: "50%", right: "8%", size: "text-5xl" },
  { id: 5, text: "✦", top: "75%", left: "12%", size: "text-4xl" },
  { id: 6, text: "○", top: "80%", right: "20%", size: "text-3xl" },
];

function Contacto() {
  return (
    <section id="contacto" className="py-24 bg-zinc-950 border-t border-zinc-900 text-brand-cream px-4 relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {acentosGraficos.map((acento) => (
        <motion.div
          key={acento.id}
          className={`absolute text-brand-blue/20 md:text-brand-blue/30 font-black pointer-events-none z-0 ${acento.size} drop-shadow-[0_0_10px_rgba(0,122,255,0.3)] will-change-transform`}
          style={{ top: acento.top, left: acento.left, right: acento.right }}
          // Animación solo mientras el componente está en pantalla
          whileInView={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          viewport={{ once: false, amount: 0.5 }} 
        >
          {acento.text}
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Impulsá tu presencia digital</h2>
          <p className="text-xl text-brand-cream mb-12 max-w-2xl mx-auto">
            ¿Listo para llevar tu marca al siguiente nivel? Escribinos para coordinar una reunión y armar una propuesta a tu medida.
          </p>

          <div className="flex flex-col items-center gap-6 mb-16">
            <div className="flex flex-col md:flex-row justify-center gap-4 w-full">
              <a
                href="https://wa.me/5492645063823"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] px-5 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-md shadow-green-500/10 flex-1 md:flex-none"
              >
                <div className="bg-white/20 p-2 rounded-full shrink-0">
                  <FaWhatsapp size={22} className="text-white" />
                </div>
                <p className="font-bold text-base leading-tight text-white">Juan Bataller</p>
              </a>

              <a
                href="https://wa.me/5492644437135"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] px-5 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-md shadow-green-500/10 flex-1 md:flex-none"
              >
                <div className="bg-white/20 p-2 rounded-full shrink-0">
                  <FaWhatsapp size={22} className="text-white" />
                </div>
                <p className="font-bold text-base leading-tight text-white">Santiago Castro</p>
              </a>
            </div>

            <div className="flex gap-6 items-center mt-4">
              <a href="https://www.instagram.com/studios_isla/" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center justify-center bg-zinc-900 border border-zinc-800 hover:border-pink-500 p-4 rounded-full transition-all group shadow-inner shadow-black/30">
                <Instagram size={24} className="text-pink-500 transition-transform group-hover:scale-110" />
              </a>
              
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

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          /* 1. shadow-inner: Clase predeterminada de Tailwind para sombra inset.
            2. border-zinc-700: Un borde un poquito más claro que el 800 para que se note el borde.
            3. shadow-[inset_0_4px_15px_rgba(0,0,0,0.8)]: Sombra profunda hacia adentro.
          */
          className="w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 border border-zinc-700 shadow-inner shadow-[inset_0_4px_15px_rgba(0,0,0,0.8)] relative group"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.4428521428867!2d-68.5289732!3d-31.539458899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96814026229500e9%3A0xfec2e1813c73216!2sEl%20Nuevo%20Diario!5e0!3m2!1ses-419!2sar!4v1773098548768!5m2!1ses-419!2sar"
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(0.5) contrast(1.1) brightness(0.9)' }} 
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
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

export default memo(Contacto);