import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Clock,
  UserCheck,
  ShieldCheck,
  ScanFace,
  CreditCard,
  Quote
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import BeforeAfterSlider from './BeforeAfterSlider';

const CLINICAL_CASES = [
  {
    id: 'carillas-camila',
    category: 'carillas',
    categoryLabel: 'Diseño de Sonrisa & Carillas',
    badge: 'CASO ESTRELLA',
    title: 'Microcarillas de Cerámica E-Max y Contorneado Gingival',
    subtitle: 'Armonización estética y cierre de asimetrías dentales',
    patient: 'Camila Sandoval',
    patientAge: '29 años',
    doctor: 'Dra. Theresa Webb',
    doctorRole: 'Especialista en Odontología Estética',
    doctorAvatar: '/dra_theresa.jpg',
    duration: '2 sesiones (10 días)',
    beforeImage: '/cases/smile_before.jpg',
    afterImage: '/cases/smile_after.jpg',
    metrics: [
      { label: 'Brillo Natural', value: '+4 Tonos' },
      { label: 'Simetría Facial', value: '100%' },
      { label: 'Invasividad', value: 'Mínima (0 Dolor)' }
    ],
    quote: 'Siempre soñé con una sonrisa uniforme y luminosa. El resultado superó todo lo que imaginé; se ve tan natural que la gente elogia mi sonrisa sin notar que llevo carillas.',
    details: 'Tratamiento restaurador con microcarillas de cerámica pura ultrafinas (0.3 mm) sin desgaste agresivo del esmalte natural.'
  },
  {
    id: 'ortodoncia-mateo',
    category: 'ortodoncia',
    categoryLabel: 'Ortodoncia Invisible',
    badge: 'ALTA DEMANDA',
    title: 'Alineadores Transparentes y Corrección de Apiñamiento',
    subtitle: 'Alineación milimétrica sin brackets metálicos',
    patient: 'Mateo Fernández',
    patientAge: '26 años',
    doctor: 'Dr. Jonas Suherman',
    doctorRole: 'Ortodoncista Certificado',
    doctorAvatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&q=80',
    duration: '9 meses de tratamiento',
    beforeImage: '/cases/ortho_before.jpg',
    afterImage: '/cases/ortho_after.jpg',
    metrics: [
      { label: 'Alineación', value: '100% Precisa' },
      { label: 'Comodidad', value: 'Removible' },
      { label: 'Visibilidad', value: 'Prácticamente Invisible' }
    ],
    quote: 'Por mi trabajo en reuniones no quería brackets convencionales. Los alineadores fueron imperceptibles y en 9 meses transformaron mi mordida y mi seguridad.',
    details: 'Planificación digital 3D guiada por inteligencia artificial con férulas transparentes personalizadas de cambio quincenal.'
  },
  {
    id: 'diastema-valeria',
    category: 'carillas',
    categoryLabel: 'Carillas & Cierre de Diastema',
    badge: 'REHABILITACIÓN ESTÉTICA',
    title: 'Cierre de Diastema y Rejuvenecimiento Dental',
    subtitle: 'Solución definitiva para separación dental y desgaste de bordes',
    patient: 'Valeria Montes',
    patientAge: '46 años',
    doctor: 'Dr. Albert Flores',
    doctorRole: 'Rehabilitador Oral & Estética',
    doctorAvatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=150&q=80',
    duration: '3 sesiones clínicas',
    beforeImage: '/cases/carillas_before.jpg',
    afterImage: '/cases/carillas_after.jpg',
    metrics: [
      { label: 'Cierre de Espacio', value: '100% Hermético' },
      { label: 'Longevidad', value: '15+ Años' },
      { label: 'Rejuvenecimiento', value: 'Efecto Lifting' }
    ],
    quote: 'Tenía un complejo de más de dos décadas con el espacio entre mis dientes. Ver el antes y después en el espejo me devolvió la libertad de reír a carcajadas.',
    details: '8 carillas de porcelana feldespática estratificadas a mano para recrear la translucidez, textura y brillo anatómico exacto de los dientes naturales.'
  },
  {
    id: 'blanqueamiento-lucia',
    category: 'blanqueamiento',
    categoryLabel: 'Blanqueamiento Clínico Láser',
    badge: 'EFECTO INMEDIATO',
    title: 'Blanqueamiento Láser Philips Zoom y Eliminación de Manchas',
    subtitle: 'Reactivación del blanco puro sin sensibilidad dental',
    patient: 'Lucía Cárdenas',
    patientAge: '52 años',
    doctor: 'Dra. Theresa Webb',
    doctorRole: 'Especialista en Estética Dental',
    doctorAvatar: '/dra_theresa.jpg',
    duration: '1 sesión (60 minutos)',
    beforeImage: '/cases/whitening_before.jpg',
    afterImage: '/cases/whitening_after.jpg',
    metrics: [
      { label: 'Aclaramiento', value: '+8 Tonos' },
      { label: 'Tiempo', value: 'Solo 1 Hora' },
      { label: 'Sensibilidad', value: 'Cero Molestias' }
    ],
    quote: 'El café y el té habían oscurecido mis dientes por años. En solo una hora en la clínica salí con una sonrisa brillante y sin ninguna molestia.',
    details: 'Fotopolimerización LED fría activada con gel de peróxido de hidrógeno enriquecido con fosfato de calcio amorfo para proteger el esmalte.'
  }
];

const CATEGORIES = [
  { id: 'todos', label: 'Todos los Casos' },
  { id: 'carillas', label: 'Diseño de Sonrisa & Carillas' },
  { id: 'ortodoncia', label: 'Ortodoncia Invisible' },
  { id: 'blanqueamiento', label: 'Blanqueamiento Láser' }
];

function BeforeAfterSection({ onBookClick }) {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter cases based on category
  const filteredCases = selectedCategory === 'todos'
    ? CLINICAL_CASES
    : CLINICAL_CASES.filter(c => c.category === selectedCategory);

  // Ensure index remains in bounds when filtering
  const activeCase = filteredCases[currentIndex] || filteredCases[0];

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredCases.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredCases.length) % filteredCases.length);
  };

  return (
    <section id="antes-despues" className="ba-section">
      <div className="ba-section-container">
        {/* Section Header */}
        <div className="ba-header">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="ba-section-title"
          >
            Transformaciones Reales:<br />
            <span>El Poder de una Nueva Sonrisa</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="ba-section-desc"
          >
            Desliza la barra interactiva para comparar el estado inicial y el resultado final alcanzado por nuestros pacientes en ortodoncia, diseño de sonrisa y carillas dentales.
          </motion.p>
        </div>

        {/* Filter Tabs & Navigation Controls */}
        <div className="ba-controls-bar">
          <div className="ba-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`ba-tab ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="ba-nav-arrows">
            <button
              type="button"
              className="ba-nav-arrow"
              onClick={handlePrev}
              aria-label="Caso anterior"
              disabled={filteredCases.length <= 1}
            >
              <ChevronLeft size={20} />
            </button>
            <span className="ba-counter">
              {String(currentIndex + 1).padStart(2, '0')} / {String(filteredCases.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              className="ba-nav-arrow"
              onClick={handleNext}
              aria-label="Caso siguiente"
              disabled={filteredCases.length <= 1}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Main Showcase Grid: Slider + Case Info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="ba-showcase-grid"
          >
            {/* Left: The Interactive Slider */}
            <div className="ba-showcase-visual">
              <BeforeAfterSlider
                beforeImage={activeCase.beforeImage}
                afterImage={activeCase.afterImage}
                beforeLabel="ANTES"
                afterLabel="DESPUÉS"
                alt={`Caso ${activeCase.patient} - ${activeCase.title}`}
              />

              {/* Thumbnails to switch quickly between cases */}
              <div className="ba-case-thumbnails">
                {filteredCases.map((c, idx) => (
                  <button
                    key={c.id}
                    type="button"
                    className={`ba-case-thumb-btn ${idx === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                  >
                    <img src={c.afterImage} alt={c.patient} className="ba-thumb-img" />
                    <div className="ba-thumb-text">
                      <span className="ba-thumb-name">{c.patient}</span>
                      <span className="ba-thumb-cat">{c.categoryLabel}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: The High-Converting Clinical Card */}
            <div className="ba-showcase-card">
              <div className="ba-card-top">
                <div className="ba-badge-row">
                  <span className="ba-case-category-pill">{activeCase.categoryLabel}</span>
                  <span className="ba-case-highlight-tag">{activeCase.badge}</span>
                </div>
                <h3 className="ba-case-title">{activeCase.title}</h3>
                <p className="ba-case-subtitle">{activeCase.subtitle}</p>
              </div>

              {/* Patient & Doctor Meta */}
              <div className="ba-meta-box">
                <div className="ba-meta-item">
                  <div className="ba-meta-icon"><UserCheck size={18} /></div>
                  <div>
                    <span className="ba-meta-label">Paciente</span>
                    <span className="ba-meta-val">{activeCase.patient} ({activeCase.patientAge})</span>
                  </div>
                </div>

                <div className="ba-meta-item">
                  <div className="ba-meta-icon"><Clock size={18} /></div>
                  <div>
                    <span className="ba-meta-label">Tiempo de Tratamiento</span>
                    <span className="ba-meta-val">{activeCase.duration}</span>
                  </div>
                </div>
              </div>

              {/* Clinical Metrics */}
              <div className="ba-metrics-grid">
                {activeCase.metrics.map((m, i) => (
                  <div key={i} className="ba-metric-pill">
                    <span className="ba-metric-value">{m.value}</span>
                    <span className="ba-metric-label">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Patient Testimonial Quote */}
              <div className="ba-quote-card">
                <Quote size={24} className="ba-quote-icon" />
                <p className="ba-quote-body">"{activeCase.quote}"</p>
                <div className="ba-verified-badge">
                  <CheckCircle2 size={14} className="ba-verified-icon" />
                  <span>Resultado Verificado en Clínica NovaDent</span>
                </div>
              </div>

              {/* Call to Action Button */}
              <div className="ba-card-cta">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="ba-cta-btn"
                  onClick={() => onBookClick && onBookClick(`¡Hola NovaDent! Me interesa agendar una cita de evaluación para el tratamiento de ${activeCase.title} (${activeCase.categoryLabel}). ¿Qué disponibilidad de horarios tienen?`)}
                >
                  <FaWhatsapp size={20} />
                  <span>CONSULTAR DISPONIBILIDAD POR WHATSAPP</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Clinical Guarantees & Trust Factors */}
        <div className="ba-guarantees-grid">
          <div className="ba-guarantee-card">
            <div className="ba-guarantee-icon"><ScanFace size={22} /></div>
            <div>
              <h4>Simulación Digital 3D</h4>
              <p>Visualiza el resultado final exacto de tu sonrisa en pantalla antes de comenzar cualquier procedimiento.</p>
            </div>
          </div>

          <div className="ba-guarantee-card">
            <div className="ba-guarantee-icon"><ShieldCheck size={22} /></div>
            <div>
              <h4>Garantía Clínica Certificada</h4>
              <p>Tratamientos respaldados por escrito con materiales biocompatibles de la más alta durabilidad mundial.</p>
            </div>
          </div>

          <div className="ba-guarantee-card">
            <div className="ba-guarantee-icon"><CreditCard size={22} /></div>
            <div>
              <h4>Financiamiento Sin Intereses</h4>
              <p>Accede a planes de pago flexibles hasta 24 meses para hacer realidad tu sonrisa sin comprometer tu presupuesto.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeforeAfterSection;
