import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

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
        Dentalia
      </div>
      <div className="nav-links">
        <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Inicio</a>
        <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Servicios</a>
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>Nosotros</a>
        <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')}>Testimonios</a>
      </div>
      <button className="btn-primary" onClick={onBookClick}>
        RESERVAR CITA
        <ArrowRight size={16} style={{ marginLeft: '4px' }} />
      </button>
    </nav>
  );
}

export default Navbar;
