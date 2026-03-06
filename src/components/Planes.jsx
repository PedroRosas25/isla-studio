import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect } from "react";
import { CheckCircle2, Package, LayoutGrid } from "lucide-react";

const planesIntegrales = [
  { nombre: "Plan Mensual", duracion: "1 mes", descripcion: "Renovación mensual. Precio estándar del servicio.", destacado: false },
  { nombre: "Plan Trimestral", duracion: "3 meses", descripcion: "Mayor previsibilidad y mejora en el valor.", destacado: true },
  { nombre: "Plan Semestral", duracion: "6 meses", descripcion: "Planificación a mediano plazo con mejores condiciones.", destacado: false },
  { nombre: "Plan Anual", duracion: "12 meses", descripcion: "Estrategia sostenida con la mejor relación costo-beneficio.", destacado: false }
];

const serviciosModulares = [
  { categoria: "Marketing y Redes", incluye: ["Planificación mensual", "Producción para IG/TikTok/YT", "Automatización de mensajes", "Reportes de métricas"] },
  { categoria: "Filmmaking", incluye: ["Grabación en locación", "Edición profesional", "IA para calidad", "Cobertura de eventos"] },
  { categoria: "Programación Web", incluye: ["Landing Pages", "E-commerce", "Sistemas a medida", "Integración con automatizaciones"] }
];

export default function Planes() {
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 300 });

  // ¡Acá aumentamos drásticamente el rango de movimiento!
  const x1 = useTransform(smoothX, [-800, 800], [60, -60]);
  const y1 = useTransform(smoothY, [-800, 800], [60, -60]);
  
  const x2 = useTransform(smoothX, [-800, 800], [120, -120]);
  const y2 = useTransform(smoothY, [-800, 800], [120, -120]);

  return (
    <section id="planes" className="py-24 bg-zinc-950 border-t border-zinc-900 text-brand-cream px-4 relative overflow-hidden">
      
      {/* ORBE 1: Naranja MUCHO más visible */}
      <motion.div 
        style={{ x: x1, y: y1 }}
        className="pointer-events-none absolute top-10 right-10 md:right-1/4 w-[300px] h-[300px] bg-isla-orange/20 blur-[80px] rounded-full z-0"
      />
      
      {/* ORBE 2: Gris claro MUCHO más visible */}
      <motion.div 
        style={{ x: x2, y: y2 }}
        className="pointer-events-none absolute bottom-10 left-10 md:left-1/4 w-[250px] h-[250px] bg-white/10 blur-[60px] rounded-full z-0"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">Planes y Cotizaciones</h2>
          <p className="text-xl text-brand-cream max-w-3xl mx-auto">
            Trabajamos con modalidades adaptables a las necesidades y proyecciones de tu negocio.
          </p>
        </motion.div>

        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
            <LayoutGrid className="text-isla-orange" size={28} />
            <h3 className="text-3xl font-bold">Contratación Modular</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviciosModulares.map((mod, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-zinc-900/60 backdrop-blur-md p-8 rounded-2xl border border-zinc-800 hover:border-isla-orange transition-all hover:-translate-y-1"
              >
                <h4 className="text-xl font-bold mb-6 text-isla-orange">{mod.categoria}</h4>
                <ul className="space-y-4">
                  {mod.incluye.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
            <Package className="text-isla-orange" size={28} />
            <h3 className="text-3xl font-bold">Planes Integrales</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {planesIntegrales.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl border flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  plan.destacado 
                    ? 'bg-zinc-900/80 backdrop-blur-md border-isla-orange shadow-[0_0_30px_rgba(255,107,0,0.15)]' 
                    : 'bg-zinc-950/60 backdrop-blur-md border-zinc-800 hover:border-isla-orange/50'
                }`}
              >
                {plan.destacado && (
                  <div className="absolute top-0 right-0 bg-isla-orange text-brand-cream text-xs font-bold px-3 py-1 rounded-bl-lg z-20">
                    RECOMENDADO
                  </div>
                )}
                <div className="relative z-10 flex flex-col h-full">
                    <h4 className="text-2xl font-bold mb-2">{plan.nombre}</h4>
                    <p className="text-isla-orange font-semibold mb-4 text-sm">Contrato: {plan.duracion}</p>
                    <p className="text-brand-cream text-sm flex-grow">{plan.descripcion}</p>
                    
                    <a href="#contacto" className={`mt-6 w-full py-3 rounded-xl font-bold text-center transition-all ${
                    plan.destacado
                        ? 'bg-isla-orange text-brand-cream hover:bg-[#e66000]'
                        : 'bg-zinc-800 text-brand-cream hover:bg-zinc-700'
                    }`}>
                    Consultar Valor
                    </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 p-4 bg-zinc-900/50 rounded-xl border border-zinc-800 text-sm text-gray-500 text-center relative z-10"
        >
          <p><strong>Aclaración:</strong> El costo de la publicidad paga o difusión en medios locales se cotiza de manera independiente según el medio y alcance deseado.</p>
        </motion.div>

      </div>
    </section>
  );
}