import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

function Home({ onBookClick }) {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 304; // 280px (card) + 24px (gap)
      carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <motion.section 
        id="home"
        className="hero" 
        style={{backgroundImage: 'url("https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.div 
            className="hero-title-container"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={fadeInUp} className="hero-title">Odontología<br/>Moderna con<br/>Cuidado Amable.</motion.h1>
            <motion.div variants={fadeInUp} className="hero-right-info">
              <p className="hero-subtitle">Atención dental experta para sonrisas saludables y seguras a cualquier edad, brindada con comodidad, precisión y confianza.</p>
              <div className="slider-controls">
                <ChevronLeft size={16} />
                <span>01</span>
                <div className="slider-line"></div>
                <span>05</span>
                <ChevronRight size={16} />
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-bottom"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="services-chips">
              <span className="chip active">Chequeos Dentales</span>
              <span className="chip">Limpieza Dental</span>
              <span className="chip">Empastes Dentales</span>
              <span className="chip">Tratamiento de Encías</span>
              <span className="chip">Retenedores</span>
            </motion.div>

            <motion.div variants={scaleIn} className="doctor-card">
              <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&q=80" alt="Dr. Jonas Suherman" className="doctor-img" />
              <div className="doctor-info">
                <h4>Dr. Jonas Suherman</h4>
                <p>Odontología Pediátrica</p>
                <div className="doctor-rating">
                  7 años de Experiencia <span style={{color: '#666'}}>(Calificación 4.8)</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <span className="section-subtitle">Nuestras Características /</span>
            <h2 className="section-title">Descubre Nuestros Servicios<br/>Dentales Exclusivos</h2>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <p className="section-desc">
              Experimenta una atención dental moderna brindada con comodidad, precisión y atención al detalle. Nuestra clínica ofrece un ambiente tranquilo y acogedor diseñado para que cada visita sea libre de estrés.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="services-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="reviews-snippet">
            <div className="review-avatars">
              <div className="avatars-group">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User 1" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="User 2" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="User 3" />
              </div>
              <div className="review-stats">
                <h3>750+</h3>
                <p>Reseñas</p>
              </div>
            </div>
            
            <div>
              <p className="review-text">Descubre reseñas de pacientes encantados sobre su experiencia de atención dental reconfortante y satisfactoria.</p>
              <div className="nav-buttons">
                <button className="nav-btn" onClick={() => scrollCarousel('left')}><ChevronLeft size={20}/></button>
                <button className="nav-btn" onClick={() => scrollCarousel('right')}><ChevronRight size={20}/></button>
              </div>
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} className="services-carousel" ref={carouselRef}>
            <motion.div variants={scaleIn} className="service-card">
              <img src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=400&q=80" alt="Limpieza Dental" />
              <div className="service-info">
                <h3>Limpieza<br/>Dental</h3>
              </div>
            </motion.div>
            <motion.div variants={scaleIn} className="service-card">
              <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=400&q=80" alt="Chequeos Dentales" />
              <div className="service-info">
                <h3>Chequeos<br/>Dentales</h3>
              </div>
            </motion.div>
            <motion.div variants={scaleIn} className="service-card">
              <img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=400&q=80" alt="Carillas Dentales" />
              <div className="service-info">
                <h3>Carillas<br/>Dentales</h3>
              </div>
            </motion.div>
            <motion.div variants={scaleIn} className="service-card">
              <img src="/ortodoncia.jpg" alt="Ortodoncia" />
              <div className="service-info">
                <h3>Ortodoncia</h3>
              </div>
            </motion.div>
            <motion.div variants={scaleIn} className="service-card">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80" alt="Implantes Dentales" />
              <div className="service-info">
                <h3>Implantes<br/>Dentales</h3>
              </div>
            </motion.div>
            <motion.div variants={scaleIn} className="service-card">
              <img src="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?auto=format&fit=crop&w=400&q=80" alt="Blanqueamiento" />
              <div className="service-info">
                <h3>Blanqueamiento</h3>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <motion.div 
          className="about-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="about-image">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80" 
              alt="Dentista y paciente" 
            />
          </motion.div>
          
          <motion.div variants={fadeInUp} className="about-content">
            <span className="section-subtitle">Sobre Dentalia /</span>
            <h2 className="section-title">Excelencia en<br/>Odontología con<br/>Atención Compasiva</h2>
            <p className="section-desc" style={{marginTop: '24px'}}>
              Descubre reseñas de pacientes encantados sobre su experiencia de atención dental reconfortante y satisfactoria.
            </p>
            
            <button className="read-more-btn">
              Leer más
              <ArrowUpRight size={16} />
            </button>
            
            <motion.div variants={staggerContainer} className="doctors-cards">
              <motion.div variants={scaleIn} className="doc-small-card">
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80" alt="Dr. Albert Flores" />
                <div className="doc-info">
                  <div>
                    <h4>Dr. Albert Flores</h4>
                    <p>Odontología Pediátrica</p>
                  </div>
                  <div className="service-arrow"><ArrowUpRight size={14}/></div>
                </div>
              </motion.div>
              <motion.div variants={scaleIn} className="doc-small-card">
                <img src="/dra_theresa.jpg" alt="Dr. Theresa Webb" />
                <div className="doc-info">
                  <div>
                    <h4>Dra. Theresa Webb</h4>
                    <p>Odontología Pediátrica</p>
                  </div>
                  <div className="service-arrow"><ArrowUpRight size={14}/></div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="stats-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="stat-item">
            <h2>98%</h2>
            <p>Tasa de<br/>Satisfacción</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="stat-item">
            <h2>50K</h2>
            <p>Sonrisas<br/>Transformadas</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="stat-item">
            <h2>4.9</h2>
            <p>Calificación<br/>de Clientes</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <motion.div 
          className="section-header" 
          style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <span className="section-subtitle">Testimonios /</span>
          <h2 className="section-title">Lo Que Dicen Nuestros Pacientes</h2>
        </motion.div>
        
        <motion.div 
          className="testimonials-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="testimonial-card">
            <div className="stars">
              <Star size={16} fill="#FFC107" color="#FFC107" />
              <Star size={16} fill="#FFC107" color="#FFC107" />
              <Star size={16} fill="#FFC107" color="#FFC107" />
              <Star size={16} fill="#FFC107" color="#FFC107" />
              <Star size={16} fill="#FFC107" color="#FFC107" />
            </div>
            <p className="testimonial-text">"La mejor experiencia dental que he tenido. El personal es increíblemente amable y profesional. Me sentí completamente tranquilo durante mi procedimiento."</p>
            <div className="testimonial-author">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" alt="Sarah Jenkins" />
              <div>
                <h4>Sarah Jenkins</h4>
                <p>Paciente</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="testimonial-card">
            <div className="stars">
              <Star size={16} fill="#FFC107" color="#FFC107" />
              <Star size={16} fill="#FFC107" color="#FFC107" />
              <Star size={16} fill="#FFC107" color="#FFC107" />
              <Star size={16} fill="#FFC107" color="#FFC107" />
              <Star size={16} fill="#FFC107" color="#FFC107" />
            </div>
            <p className="testimonial-text">"El Dr. Jonas fue increíble con mis hijos. Solían aterrorizarse del dentista, ¡pero ahora realmente esperan con ansias sus chequeos!"</p>
            <div className="testimonial-author">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Michael Chen" />
              <div>
                <h4>Michael Chen</h4>
                <p>Padre de dos</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="testimonial-card">
            <div className="stars">
              <Star size={16} fill="#FFC107" color="#FFC107" />
              <Star size={16} fill="#FFC107" color="#FFC107" />
              <Star size={16} fill="#FFC107" color="#FFC107" />
              <Star size={16} fill="#FFC107" color="#FFC107" />
              <Star size={16} fill="#FFC107" color="#FFC107" />
            </div>
            <p className="testimonial-text">"Recientemente me puse carillas dentales aquí y los resultados me cambiaron la vida. La precisión y atención al detalle son verdaderamente inigualables."</p>
            <div className="testimonial-author">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Elena Rodriguez" />
              <div>
                <h4>Elena Rodriguez</h4>
                <p>Paciente</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="cta-section"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="cta-content">
          <h2>¿Listo para una sonrisa más saludable?</h2>
          <p>Agenda tu cita hoy mismo y descubre la diferencia de una atención dental de excelencia y compasiva.</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary" 
            style={{ backgroundColor: 'var(--teal)', color: 'white', margin: '32px auto 0', border: 'none', padding: '16px 32px', fontSize: '16px' }}
            onClick={onBookClick}
          >
            RESERVAR CITA
            <ArrowRight size={18} style={{ marginLeft: '4px' }} />
          </motion.button>
        </div>
      </motion.section>
    </>
  );
}

export default Home;
