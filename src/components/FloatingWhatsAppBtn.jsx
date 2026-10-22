import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { X } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

function FloatingWhatsAppBtn() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(true);

  const handleClick = () => {
    openWhatsApp('¡Hola NovaDent! Deseo solicitar información sobre disponibilidad de citas.');
  };

  return (
    <div className="floating-wsp-wrapper">
      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="floating-wsp-tooltip"
          >
            <button 
              type="button" 
              className="floating-wsp-close"
              onClick={(e) => {
                e.stopPropagation();
                setIsTooltipVisible(false);
              }}
              aria-label="Cerrar aviso"
            >
              <X size={12} />
            </button>
            <div className="floating-wsp-avatar-dot" />
            <div className="floating-wsp-text" onClick={handleClick}>
              <strong>¿Necesitas agendar tu cita?</strong>
              <span>Escríbenos directamente por WhatsApp</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        className="floating-wsp-btn"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={handleClick}
        aria-label="Contactar por WhatsApp al 907030003"
      >
        <span className="floating-wsp-ping" />
        <FaWhatsapp size={32} />
      </motion.button>
    </div>
  );
}

export default FloatingWhatsAppBtn;
