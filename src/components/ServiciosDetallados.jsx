import { motion } from "framer-motion";
import { useState } from "react";
import { Smartphone, Video, Globe, TrendingUp, Megaphone, Lightbulb } from "lucide-react";

const servicios = [
  {
    titulo: "Gestión de Redes y Contenidos",
    descripcion: "Planificación mensual y producción de piezas audiovisuales para Instagram, TikTok y YouTube. Incluimos la automatización de mensajes privados para optimizar la atención.",
    icono: <Smartphone size={32} className="text-isla-orange" />
  },
  {
    titulo: "Filmmaking y Edición Profesional",
    descripcion: "Grabación en locación y edición de primer nivel. Implementamos herramientas de IA para potenciar la calidad, el dinamismo y la innovación.",
    icono: <Video size={32} className="text-isla-orange" />
  },
  {
    titulo: "Programación Web y Automatizaciones",
    descripcion: "Desarrollamos páginas web, landing pages y sistemas a medida. Transformamos tu negocio físico en una sucursal digital optimizada para vender 24/7.",
    icono: <Globe size={32} className="text-isla-orange" />
  },
  {
    titulo: "Alianzas y Publicidad en Medios",
    descripcion: "Potenciamos tu marca mediante convenios exclusivos con los principales medios locales, garantizando espacios publicitarios preferenciales.",
    icono: <Megaphone size={32} className="text-isla-orange" />
  },
  {
    titulo: "Análisis, Métricas y Optimización",
    descripcion: "Monitoreamos el desempeño de tus redes con reportes periódicos para realizar ajustes estratégicos basados en datos reales.",
    icono: <TrendingUp size={32} className="text-isla-orange" />
  },
  {
    titulo: "Innovación y Fechas Clave",
    descripcion: "Desarrollamos campañas específicas para fechas comerciales y actualizamos constantemente las dinámicas para mantener una comunicación moderna.",
    icono: <Lightbulb size={32} className="text-isla-orange" />
  }
];

export default function ServiciosDetallados() {
  // Estado para guardar la posición del mouse
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Función que actualiza las coordenadas cuando movemos el mouse sobre la sección
  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  return (
    <section 
      id="servicios" 
      className="py-24 bg-zinc-900 text-brand-cream px-4 relative overflow-hidden group"
      onMouseMove={handleMouseMove} // Escuchamos el movimiento del mouse
    >
      
      {/* EL EFECTO MÁGICO: Un orbe naranja difuminado que sigue al cursor */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,107,0,0.06), transparent 80%)`
        }}
      />

      {/* Una grilla de fondo súper sutil para darle textura tecnológica */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">Nuestros Servicios</h2>
          <p className="text-xl text-brand-cream max-w-3xl mx-auto">
            Soluciones integrales de comunicación adaptadas a las necesidades de tu marca.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              // Agregamos un fondo semi-transparente (bg-zinc-950/80) y backdrop-blur para que interactúe con el orbe de fondo
              className="flex flex-col p-8 bg-zinc-950/80 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-isla-orange transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 transition-colors w-fit mb-6">
                {servicio.icono}
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3">{servicio.titulo}</h3>
                <p className="text-brand-cream leading-relaxed">
                  {servicio.descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}