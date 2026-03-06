import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black relative overflow-hidden text-brand-cream p-4">
      
      {/* Efecto "Glow" de agencia: Un resplandor naranja muy sutil en el fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-isla-orange opacity-20 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center gap-6 text-center relative z-10"
      >
        <img 
          src={logo} 
          alt="Isla Studio Logo" 
          className="h-24 md:h-32 w-auto mb-4"
        />

        <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter text-brand-cream">
          ISLA STUDIO
        </h1>
        <p className="text-xl md:text-2xl text-brand-cream font-light max-w-2xl mx-auto mt-2">
          Comunicación, Estrategia e Innovación Digital.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-12 relative z-10"
      >
        <a 
          href="#valores" 
          className="px-8 py-3 bg-brand-blue text-brand-cream font-bold rounded-full hover:bg-[#e66000] transition-all duration-300 transform hover:scale-105 inline-block"
        >
          Conocé nuestra filosofía
        </a>
      </motion.div>
    </section>
  );
}