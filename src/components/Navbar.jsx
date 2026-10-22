import { ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

function Navbar({ onBookClick }) {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="nav-logo-accent">Nova</span>Dent
      </div>
      <div className="nav-links">
        <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Inicio</a>
        <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Servicios</a>
        <a href="#antes-despues" onClick={(e) => scrollToSection(e, 'antes-despues')}>Antes y Después</a>
        <a href="#cuerpo-medico" onClick={(e) => scrollToSection(e, 'cuerpo-medico')}>Especialistas</a>
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>Nosotros</a>
        <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')}>Testimonios</a>
      </div>
      <button 
        className="btn-primary" 
        onClick={() => onBookClick && onBookClick('¡Hola NovaDent! Deseo solicitar una cita de evaluación dental. ¿Cuáles son los horarios disponibles?')}
      >
        <FaWhatsapp size={16} style={{ color: '#25D366', marginRight: '3px' }} />
        RESERVAR CITA
        <ArrowRight size={15} style={{ marginLeft: '4px' }} />
      </button>
    </nav>
  );
}

export default Navbar;
