import { motion } from "framer-motion";
import { MessageCircle, Instagram, Mail } from "lucide-react";

export default function Contacto() {
  return (
    <section id="contacto" className="py-24 bg-zinc-950 border-t border-zinc-900 text-brand-cream px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">Impulsá tu presencia digital</h2>
          <p className="text-xl text-brand-cream mb-12 max-w-2xl mx-auto">
            ¿Listo para llevar tu marca al siguiente nivel? Escribinos para coordinar una reunión y armar una propuesta a tu medida.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
            {/* Contacto Juan */}
            <a
              href="https://wa.me/5492645063823"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-4 bg-zinc-900 border border-zinc-800 hover:border-brand-blue px-8 py-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-zinc-800 p-3 rounded-full group-hover:bg-brand-blue transition-colors duration-300">
                <MessageCircle size={28} className="text-brand-cream" />
              </div>
              <div className="text-left">
                <p className="font-bold text-lg">Juan Bataller</p>
                <p className="text-sm text-brand-cream group-hover:text-gray-300">WhatsApp: 264 506 3823</p>
              </div>
            </a>

            {/* Contacto Santiago */}
            <a
              href="https://wa.me/5492644437135"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-4 bg-zinc-900 border border-zinc-800 hover:border-brand-blue px-8 py-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-zinc-800 p-3 rounded-full group-hover:bg-brand-blue transition-colors duration-300">
                <MessageCircle size={28} className="text-brand-cream" />
              </div>
              <div className="text-left">
                <p className="font-bold text-lg">Santiago Castro</p>
                <p className="text-sm text-brand-cream group-hover:text-gray-300">WhatsApp: 264 443 7135</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Footer / Pie de página */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter text-brand-cream">ISLA</span>
            <span className="text-2xl font-light text-brand-cream">STUDIO</span>
          </div>
          
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Isla Studio. Todos los derechos reservados.
          </p>

          {/* Redes Sociales - Aquí podés poner el link real al Instagram de la agencia */}
          <div className="flex gap-4">
            <a href="https://www.instagram.com/studios_isla/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-blue transition-colors">
              <Instagram size={24} />
            </a>
            <a href="mailto:islastudio39@gmail.com" className="text-gray-500 hover:text-brand-blue transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}