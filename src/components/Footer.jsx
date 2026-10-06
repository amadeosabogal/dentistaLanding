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
            Dentalia
          </div>
          <p>Atención dental experta para sonrisas saludables y seguras a cualquier edad.</p>
          <div className="social-links">
            <a href="#"><FaFacebook size={20} /></a>
            <a href="#"><FaTwitter size={20} /></a>
            <a href="#"><FaInstagram size={20} /></a>
            <a href="#"><FaLinkedin size={20} /></a>
          </div>
        </div>

        <div className="footer-links-group">
          <h4>Navegación</h4>
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Inicio</a>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Servicios</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>Nosotros</a>
          <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')}>Testimonios</a>
        </div>

        <div className="footer-links-group">
          <h4>Servicios</h4>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Chequeos Dentales</a>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Limpieza Dental</a>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Carillas Dentales</a>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Odontopediatría</a>
        </div>

        <div className="footer-links-group">
          <h4>Legal</h4>
          <a href="#">Política de Privacidad</a>
          <a href="#">Términos de Servicio</a>
          <a href="#">Política de Cookies</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dentalia. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
