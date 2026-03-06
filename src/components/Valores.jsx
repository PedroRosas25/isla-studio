import { motion } from "framer-motion";
import { Target, Zap, Cpu } from "lucide-react";

// Actualizamos los íconos para que reaccionen al pasar el mouse ("group-hover")
const valores = [
  {
    icono: <Target size={32} className="text-brand-cream group-hover:text-brand-cream transition-colors duration-500" />,
    titulo: "Orientados a Resultados",
    descripcion: "Acompañamos a marcas y empresas en su presencia digital mediante estrategias de contenido creativas y profesionales, siempre adaptadas a los objetivos de cada cliente."
  },
  {
    icono: <Cpu size={32} className="text-brand-cream group-hover:text-brand-cream transition-colors duration-500" />,
    titulo: "Innovación & Tecnología",
    descripcion: "Nuestro enfoque se basa en el uso de herramientas tecnológicas avanzadas, incluyendo Inteligencia Artificial, para optimizar la calidad y el impacto de lo que producimos."
  },
  {
    icono: <Zap size={32} className="text-brand-cream group-hover:text-brand-cream transition-colors duration-500" />,
    titulo: "Planificación Estratégica",
    descripcion: "No publicamos por publicar. Garantizamos coherencia estética, narrativa visual y un seguimiento de métricas reales para asegurar el crecimiento."
  }
];

export default function Valores() {
  return (
    <section id="valores" className="py-24 bg-zinc-950 border-t border-zinc-900 text-brand-cream px-4 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">Nuestra Filosofía</h2>
          <p className="text-xl text-brand-cream max-w-3xl mx-auto">
            Somos una agencia especializada en comunicación, marketing digital y producción audiovisual.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valores.map((valor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              // Acá agregamos la "reactividad": hover:-translate-y-2 y el shadow naranja
              className="group relative p-8 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-isla-orange/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(255,107,0,0.15)] overflow-hidden"
            >
              {/* Resplandor interno sutil que aparece en el hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-isla-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* El contenedor del ícono se vuelve naranja, crece y gira un poquito */}
                <div className="bg-zinc-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-isla-orange group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(255,107,0,0.4)]">
                  {valor.icono}
                </div>
                
                {/* El título también reacciona levemente cambiando a blanco puro */}
                <h3 className="text-2xl font-bold mb-4 text-gray-200 group-hover:text-brand-cream transition-colors duration-300">
                  {valor.titulo}
                </h3>
                
                <p className="text-brand-cream leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {valor.descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}