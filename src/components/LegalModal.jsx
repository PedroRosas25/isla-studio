import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const LegalModal = ({ isOpen, onClose, title, content }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* QUITAMOS backdrop-blur-sm y ponemos un negro más opaco */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 z-[1000] cursor-pointer"
          />
          
          <motion.div
            // Animación simplificada: solo opacidad y un slide sutil
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            // Forzamos al navegador a usar la tarjeta de video
            style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
            className="fixed inset-4 md:inset-x-1/4 md:inset-y-20 z-[1001] bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between px-8 py-6 border-b border-zinc-900 bg-zinc-950 shrink-0">
              <h2 className="text-xl font-bold text-brand-cream">{title}</h2>
              <button onClick={onClose} className="p-2 text-zinc-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-8 text-zinc-400 text-sm leading-relaxed overscroll-contain">
              {content}
            </div>
            
            <div className="p-6 border-t border-zinc-900 bg-zinc-950 flex justify-end shrink-0">
              <button onClick={onClose} className="px-6 py-2 bg-brand-blue text-brand-cream font-bold rounded-full text-xs">
                Cerrar
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LegalModal;