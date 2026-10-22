import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Award,
  GraduationCap,
  CheckCircle,
  FileCheck2
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { openWhatsApp, getDoctorBookingMessage } from '../utils/whatsapp';

const DOCTORS = [
  {
    id: 'dra-theresa',
    name: 'Dra. Theresa Webb',
    role: 'Directora Clínica & Especialista en Estética y Rehabilitación Oral',
    image: '/doctors/dra_theresa_clinical.jpg',
    cop: '24891',
    rne: '10452',
    experience: '12+ años de experiencia',
    badge: 'DIRECTORA CLÍNICA',
    degrees: [
      'Maestría en Odontología Restauradora y Biomateriales (UPCH)',
      'Postgrado en Microcarillas y Adhesión Cerámica Avanzada (Univ. de Barcelona)',
      'Miembro Activo de la American Academy of Cosmetic Dentistry (AACD)'
    ],
    focus: ['Diseño de Sonrisa 3D', 'Microcarillas Cerámicas E-Max', 'Rehabilitación Estética'],
    whatsappMessage: getDoctorBookingMessage('la Dra. Theresa Webb', 'Estética y Rehabilitación Oral')
  },
  {
    id: 'dr-jonas',
    name: 'Dr. Jonas Suherman',
    role: 'Especialista en Ortodoncia y Ortopedia Dentomaxilofacial',
    image: '/doctors/dr_jonas_clinical.jpg',
    cop: '19834',
    rne: '08921',
    experience: '10+ años de experiencia',
    badge: 'ORTODONCISTA CERTIFICADO',
    degrees: [
      'Especialidad en Ortodoncia y Maloclusiones Complejas (UNMSM)',
      'Diplomado Internacional en Biomecánica y Alineadores Invisibles (Univ. de São Paulo)',
      'Certificación Platinum Elite Invisalign® & Spark Clear Aligners®'
    ],
    focus: ['Alineadores Invisibles', 'Ortodoncia Interceptiva', 'Corrección de Mordida'],
    whatsappMessage: getDoctorBookingMessage('el Dr. Jonas Suherman', 'Ortodoncia Invisible')
  },
  {
    id: 'dr-albert',
    name: 'Dr. Albert Flores',
    role: 'Especialista en Cirugía Oral, Implantología y Periodoncia',
    image: '/doctors/dr_albert_clinical.jpg',
    cop: '17420',
    rne: '06784',
    experience: '14+ años de experiencia',
    badge: 'CIRUJANO IMPLANTÓLOGO',
    degrees: [
      'Residencia Quirúrgica e Implantología de Carga Inmediata (Univ. de Berna, Suiza)',
      'Postgrado en Regeneración Tisular Guiada y Cirugía Guiada 3D (CIRO)',
      'Fellow Activo del International Team for Implantology (ITI - Suiza)'
    ],
    focus: ['Implantes Dentales Zirconio/Titanio', 'Cirugía Guiada 3D', 'Injertos Óseos'],
    whatsappMessage: getDoctorBookingMessage('el Dr. Albert Flores', 'Implantología y Cirugía Oral')
  }
];

const TRUST_PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Colegiatura Habilitada',
    desc: 'Todos nuestros odontólogos cuentan con registro COP activo y habilitado para ejercicio legal y ético.'
  },
  {
    icon: Award,
    title: 'Especialidad Registrada (RNE)',
    desc: 'Títulos de segunda especialidad profesional con Registro Nacional de Especialista emitido por el Estado.'
  },
  {
    icon: GraduationCap,
    title: 'Postgrados Internacionales',
    desc: 'Formación continua y pasantías en centros de referencia odontológica de Suiza, España y Brasil.'
  },
  {
    icon: FileCheck2,
    title: 'Bioseguridad Grado Quirúrgico',
    desc: 'Protocolos de esterilización hospitalaria con trazabilidad digital en cada instrumental clínico.'
  }
];

function MedicalCredentialsSection({ onBookClick }) {
  const handleDoctorClick = (customMsg) => {
    if (onBookClick) {
      onBookClick(customMsg);
    } else {
      openWhatsApp(customMsg);
    }
  };

  return (
    <section id="cuerpo-medico" className="med-section">
      <div className="med-container">
        {/* Section Header */}
        <div className="med-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="med-title"
          >
            Cuerpo Médico Especialista:<br />
            <span>Ciencia, Experiencia y Colegiatura Certificada</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="med-desc"
          >
            El paciente informado prioriza la seguridad clínica y la preparación académica por encima de cualquier oferta comercial. Conoce a los especialistas que cuidarán de tu salud y tu sonrisa.
          </motion.p>
        </div>

        {/* 4 Trust Pillars */}
        <div className="med-pillars-grid">
          {TRUST_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="med-pillar-card"
              >
                <div className="med-pillar-icon">
                  <Icon size={22} />
                </div>
                <div>
                  <h4>{pillar.title}</h4>
                  <p>{pillar.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Specialists Cards Grid */}
        <div className="med-doctors-grid">
          {DOCTORS.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="med-doctor-card"
            >
              {/* Doctor Photo */}
              <div className="med-doctor-photo-wrap">
                <img
                  src={doctor.image}
                  alt={`${doctor.name} en uniforme clínico`}
                  className="med-doctor-photo"
                />
                <div className="med-doctor-badge">{doctor.badge}</div>
                <div className="med-doctor-experience-tag">
                  <span>{doctor.experience}</span>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="med-doctor-body">
                <div className="med-doctor-heading">
                  <h3 className="med-doctor-name">{doctor.name}</h3>
                  <p className="med-doctor-role">{doctor.role}</p>
                </div>

                {/* Official Registration Numbers (COP & RNE) */}
                <div className="med-reg-box">
                  <div className="med-reg-item">
                    <span className="med-reg-label">Colegiatura Profesional:</span>
                    <div className="med-reg-val">
                      <CheckCircle size={15} className="text-teal" />
                      <strong>C.O.P. {doctor.cop}</strong>
                    </div>
                  </div>

                  <div className="med-reg-item">
                    <span className="med-reg-label">Registro Nacional Especialista:</span>
                    <div className="med-reg-val">
                      <CheckCircle size={15} className="text-teal" />
                      <strong>R.N.E. {doctor.rne}</strong>
                    </div>
                  </div>
                </div>

                {/* Postgraduates & Certifications */}
                <div className="med-degrees-section">
                  <h4 className="med-degrees-title">
                    <GraduationCap size={16} />
                    <span>Postgrados & Especialización:</span>
                  </h4>
                  <ul className="med-degrees-list">
                    {doctor.degrees.map((deg, i) => (
                      <li key={i}>
                        <span className="med-bullet">✓</span>
                        <span>{deg}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Treatment Focus Areas */}
                <div className="med-focus-chips">
                  {doctor.focus.map((f, i) => (
                    <span key={i} className="med-focus-chip">{f}</span>
                  ))}
                </div>

                {/* CTA to WhatsApp with this specialist */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="med-book-btn"
                  onClick={() => handleDoctorClick(doctor.whatsappMessage)}
                >
                  <FaWhatsapp size={19} className="med-whatsapp-icon" />
                  <span>Agendar Consulta con {doctor.name.split(' ')[0]} {doctor.name.split(' ')[1]}</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MedicalCredentialsSection;
