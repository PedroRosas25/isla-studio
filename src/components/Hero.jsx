import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

// --- ELEMENTOS GEOMÉTRICOS EDITORIALES (Multiplicados y distribuidos) ---
// Enmarcan el centro sin tocar la "zona segura" donde están los textos
const acentosGraficos = [
  // Cuadrante Superior Izquierdo
  { id: 1, text: "✦", top: "12%", left: "8%", size: "text-3xl", delay: 0 },
  { id: 2, text: "○", top: "22%", left: "20%", size: "text-2xl", delay: 1 },
  { id: 3, text: "+", top: "35%", left: "5%", size: "text-4xl", delay: 2 },
  
  // Cuadrante Inferior Izquierdo
  { id: 4, text: "△", top: "65%", left: "10%", size: "text-3xl", delay: 0.5 },
  { id: 5, text: "//", top: "85%", left: "15%", size: "text-2xl", delay: 1.5 },
  { id: 6, text: "✦", top: "75%", left: "28%", size: "text-xl", delay: 2.5 },
  
  // Cuadrante Superior Derecho
  { id: 7, text: "□", top: "15%", right: "12%", size: "text-4xl", delay: 0.8 },
  { id: 8, text: "✦", top: "25%", right: "25%", size: "text-2xl", delay: 1.8 },
  { id: 9, text: "○", top: "40%", right: "6%", size: "text-3xl", delay: 0.2 },
  
  // Cuadrante Inferior Derecho
  { id: 10, text: "//", top: "68%", right: "14%", size: "text-xl", delay: 1.2 },
  { id: 11, text: "+", top: "82%", right: "22%", size: "text-3xl", delay: 2.2 },
  { id: 12, text: "△", top: "88%", right: "8%", size: "text-2xl", delay: 0.7 },
  
  // Bordes Centro-Arriba y Centro-Abajo (Para cerrar el marco)
  { id: 13, text: "✦", top: "8%", left: "45%", size: "text-xl", delay: 1.1 },
  { id: 14, text: "○", top: "12%", right: "40%", size: "text-sm", delay: 2.1 },
  { id: 15, text: "□", top: "90%", left: "40%", size: "text-xl", delay: 0.4 },
  { id: 16, text: "✦", top: "85%", right: "35%", size: "text-2xl", delay: 1.6 },
];

const palabrasDinamicas = [
  "tu Presencia Digital.",
  "tu Marca.",
  "tu Contenido Visual.",
  "tus Ventas."
];

export default function Hero() {
  const xMouse = useMotionValue(0);
  const yMouse = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      xMouse.set(e.clientX / window.innerWidth - 0.5);
      yMouse.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [xMouse, yMouse]);

  const smoothX = useSpring(xMouse, { damping: 50, stiffness: 100 });
  const smoothY = useSpring(yMouse, { damping: 50, stiffness: 100 });

  // Movimiento lateral para los acentos geométricos del fondo
  const movX = useTransform(smoothX, [-0.5, 0.5], [40, -40]);
  const movY = useTransform(smoothY, [-0.5, 0.5], [40, -40]);

  // Rotación 3D súper suave para el bloque central
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-8deg", "8deg"]);

  const [indexPalabra, setIndexPalabra] = useState(0);
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndexPalabra((prev) => (prev + 1) % palabrasDinamicas.length);
    }, 2500);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <section 
      style={{ perspective: "1000px" }}
      className="relative min-h-screen flex flex-col justify-center items-center bg-[#151618] overflow-hidden"
    >
      
      {/* FONDO MÁS OSCURO CON BRILLO SUTIL */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,122,255,0.06)_0%,transparent_70%)] pointer-events-none z-0"></div>

      {/* --- GEOMETRÍA REACTIVA (Ahora llenando todo el lienzo perimetral) --- */}
      {acentosGraficos.map((acento) => (
        <motion.div
          key={acento.id}
          className={`absolute text-brand-blue/30 font-light pointer-events-none z-0 hidden md:block ${acento.size}`}
          style={{
            top: acento.top,
            left: acento.left,
            right: acento.right,
            x: movX,
            y: movY,
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: acento.delay }}
        >
          {acento.text}
        </motion.div>
      ))}

      {/* --- BLOQUE CENTRAL 3D --- */}
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-4xl mx-auto -mt-10"
      >
        
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [-5, 5, -5] }}
          style={{ z: 60 }}
          transition={{ 
            opacity: { duration: 1 },
            scale: { duration: 1 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" } 
          }}
        >
          <img 
            src={logo} 
            alt="Isla Studio Logo" 
            className="h-28 md:h-36 w-auto mb-6 drop-shadow-2xl"
          />
        </motion.div>

        {/* TÍTULO */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ z: 40 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter text-brand-cream"
        >
          ISLA STUDIO
        </motion.h1>

        {/* LÍNEA DIVISORIA */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "80px", opacity: 1 }}
          style={{ z: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-1 bg-brand-blue rounded-full mb-6"
        />

        {/* TEXTO DINÁMICO */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ z: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl text-brand-grey font-light mb-12 flex flex-col md:flex-row items-center justify-center gap-2"
        >
          <span>Impulsamos y elevamos</span>
          
          <div className="relative w-[220px] md:w-[280px] h-[32px] md:h-[40px] flex items-center justify-center md:justify-start">
            <AnimatePresence mode="wait">
              <motion.span
                key={indexPalabra}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="text-brand-cream font-bold absolute left-0 text-center w-full md:text-left md:w-auto"
              >
                {palabrasDinamicas[indexPalabra]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* BOTÓN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ z: 50 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a 
            href="#valores" 
            className="px-8 py-3.5 border border-brand-blue bg-brand-blue text-brand-cream font-bold rounded-full hover:bg-[#005bb5] transition-all duration-300 backdrop-blur-sm shadow-[0_0_20px_rgba(0,122,255,0.3)] hover:shadow-[0_0_30px_rgba(0,122,255,0.6)]"
          >
            Descubrir Isla
          </a>
        </motion.div>
      </motion.div>

      {/* INDICADOR DE SCROLL */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-grey z-10"
      >
        <span className="text-xs tracking-[0.2em] uppercase font-bold opacity-70">Deslizar</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="opacity-70 text-brand-blue" />
        </motion.div>
      </motion.div>

    </section>
  );
}