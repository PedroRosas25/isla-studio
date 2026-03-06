import { motion } from "framer-motion";
import { User } from "lucide-react";

const equipo = [
  {
    nombre: "Juan C. Bataller",
    cargo: "Co-Founder & Director General",
    descripcion: "Estrategia de negocios y dirección general de la agencia.",
    imagen: "/equipo/juan.jpg" // Ruta a la foto en la carpeta public
  },
  {
    nombre: "Santiago Castro",
    cargo: "Co-Founder & Director Creativo",
    descripcion: "Dirección de arte, alianzas estratégicas y relaciones públicas.",
    imagen: "/equipo/santiago.jpg"
  },
  {
    nombre: "Andrés Yurcic",
    cargo: "Director Audiovisual / Filmmaker",
    descripcion: "Grabación en locación y edición de video con implementación de IA.",
    imagen: "/equipo/andres.jpg"
  },
  {
    nombre: "Pedro Rosas",
    cargo: "Tech Lead & Web Developer",
    descripcion: "Desarrollo de software, automatizaciones y arquitectura web.",
    imagen: "/equipo/pedro.jpg"
  }
];

export default function Equipo() {
  return (
    <section id="equipo" className="py-24 bg-zinc-900 border-t border-zinc-800 text-brand-cream px-4">
      <div className="max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">Nuestro Equipo</h2>
          <p className="text-xl text-brand-cream max-w-2xl mx-auto">
            Las mentes detrás de Isla Studio. Combinamos estrategia, arte y código para escalar tu negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipo.map((miembro, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              {/* Contenedor de la foto */}
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-zinc-800 border-4 border-zinc-950 group-hover:border-brand-blue transition-colors duration-300">
                {/* El onError hace que si todavía no pusiste la foto real, 
                  se muestre un ícono de usuario por defecto en vez de un error roto.
                */}
                <img 
                  src={miembro.imagen} 
                  alt={miembro.nombre}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback si no hay foto */}
                <div className="hidden absolute inset-0 bg-zinc-800 items-center justify-center">
                  <User size={64} className="text-zinc-600" />
                </div>
              </div>

              {/* Textos */}
              <h3 className="text-2xl font-bold mb-1">{miembro.nombre}</h3>
              <p className="text-brand-blue font-semibold text-sm mb-3 uppercase tracking-wider">
                {miembro.cargo}
              </p>
              <p className="text-brand-cream text-sm leading-relaxed px-4">
                {miembro.descripcion}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}