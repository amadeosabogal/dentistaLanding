import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="nav-logo-accent">Nova</span>Dent
          </div>
          <p>Atención odontológica avanzada y especialistas certificados para sonrisas saludables y estéticas a cualquier edad.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><FaFacebook size={20} /></a>
            <a href="#" aria-label="Twitter"><FaTwitter size={20} /></a>
            <a href="#" aria-label="Instagram"><FaInstagram size={20} /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
          </div>
        </div>

        <div className="footer-links-group">
          <h4>Navegación</h4>
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Inicio</a>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Servicios</a>
          <a href="#antes-despues" onClick={(e) => scrollToSection(e, 'antes-despues')}>Antes y Después</a>
          <a href="#cuerpo-medico" onClick={(e) => scrollToSection(e, 'cuerpo-medico')}>Cuerpo Médico</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>Nosotros</a>
          <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')}>Testimonios</a>
        </div>

        <div className="footer-links-group">
          <h4>Especialidades</h4>
          <a href="#cuerpo-medico" onClick={(e) => scrollToSection(e, 'cuerpo-medico')}>Estética & Carillas (Dra. Theresa)</a>
          <a href="#cuerpo-medico" onClick={(e) => scrollToSection(e, 'cuerpo-medico')}>Ortodoncia Invisible (Dr. Jonas)</a>
          <a href="#cuerpo-medico" onClick={(e) => scrollToSection(e, 'cuerpo-medico')}>Implantes & Cirugía (Dr. Albert)</a>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Limpieza y Prevención</a>
        </div>

        <div className="footer-links-group">
          <h4>Seguridad Clínica</h4>
          <a href="#cuerpo-medico" onClick={(e) => scrollToSection(e, 'cuerpo-medico')}>Registro C.O.P. y R.N.E.</a>
          <a href="#cuerpo-medico" onClick={(e) => scrollToSection(e, 'cuerpo-medico')}>Protocolos Bioseguridad</a>
          <a href="#">Términos y Condiciones</a>
          <a href="#">Política de Privacidad</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 NovaDent Clínica Odontológica Especializada. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
