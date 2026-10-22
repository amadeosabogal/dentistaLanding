export const CLINIC_WHATSAPP_NUMBER = '51907030003';

export const DEFAULT_BOOKING_MESSAGE = '¡Hola NovaDent! Deseo solicitar una cita de evaluación dental. ¿Cuáles son los horarios disponibles?';

/**
 * Open WhatsApp with a pre-filled message
 * @param {string} [customMessage] 
 */
export function openWhatsApp(customMessage) {
  const text = encodeURIComponent(customMessage || DEFAULT_BOOKING_MESSAGE);
  const url = `https://wa.me/${CLINIC_WHATSAPP_NUMBER}?text=${text}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Generate a specific booking message for a doctor
 */
export function getDoctorBookingMessage(doctorName, specialty) {
  return `¡Hola NovaDent! Deseo solicitar una cita de evaluación con ${doctorName}${specialty ? ` (${specialty})` : ''}. ¿Me podrían indicar los próximos horarios disponibles?`;
}

/**
 * Generate a specific booking message for a clinical treatment
 */
export function getTreatmentBookingMessage(treatmentName) {
  return `¡Hola NovaDent! Me interesa solicitar una cita de valoración para el tratamiento de ${treatmentName}. ¿Qué fechas y horarios tienen disponibles?`;
}
