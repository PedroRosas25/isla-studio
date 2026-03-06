import { motion } from "framer-motion";
import { Smartphone, Video, Code, Megaphone } from "lucide-react";

// Lista de servicios basados en la propuesta comercial
const serviciosList = [
  {
    titulo: "Marketing y Redes",
    descripcion: "Planificación y gestión de contenidos mensuales con automatizaciones para atención al cliente.",
    icono: <Smartphone size={40} className="text-isla-orange mb-4" />
  },
  {
    titulo: "Filmmaking y Edición",
    descripcion: "Grabación en locación y edición profesional. Usamos IA para maximizar la calidad y el dinamismo.",
    icono: <Video size={40} className="text-isla-orange mb-4" />
  },
  {
    titulo: "Desarrollo Web",
    descripcion: "Creación de Landing Pages, E-commerce y sistemas a medida para que tu negocio venda 24/7.",
    icono: <Code size={40} className="text-isla-orange mb-4" />
  },
  {
    titulo: "Alianzas y Publicidad",
    descripcion: "Posicionamos tu marca con pauta en los medios de comunicación más influyentes de la provincia.",
    icono: <Megaphone size={40} className="text-isla-orange mb-4" />
  }
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-zinc-900 text-brand-cream px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Nuestros Servicios</h2>
          <p className="text-brand-cream text-lg max-w-2xl mx-auto">
            Acompañamos a marcas, comercios y empresas en el desarrollo de su presencia digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviciosList.map((servicio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-isla-orange transition-colors duration-300"
            >
              {servicio.icono}
              <h3 className="text-xl font-bold mb-3">{servicio.titulo}</h3>
              <p className="text-brand-cream text-sm leading-relaxed">
                {servicio.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}