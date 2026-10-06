import { useState } from 'react';
import { X, Calendar as CalendarIcon, Clock, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function BookingModal({ onClose }) {
  const [step, setStep] = useState(1); // 1: Date/Time, 2: Success
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const timeSlots = ['09:00 AM', '10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM', '05:00 PM'];

  const handleBook = (e) => {
    e.preventDefault();
    if (selectedDate && selectedTime) {
      setStep(2);
    }
  };

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div 
          className="modal-content"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}><X size={24} /></button>
          
          {step === 1 ? (
            <div className="modal-step-1">
              <div className="modal-header">
                <h2>Programar Cita</h2>
                <p>Selecciona la fecha y hora que mejor te acomode.</p>
              </div>
              
              <form onSubmit={handleBook} className="booking-form">
                <div className="form-group">
                  <label><CalendarIcon size={16} /> Fecha</label>
                  <input 
                    type="date" 
                    required 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className="form-group">
                  <label><Clock size={16} /> Horarios Disponibles</label>
                  <div className="time-slots">
                    {timeSlots.map(time => (
                      <div 
                        key={time} 
                        className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </div>
                    ))}
                  </div>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '20px' }} disabled={!selectedDate || !selectedTime}>
                  Confirmar Cita
                </button>
              </form>
            </div>
          ) : (
            <div className="modal-step-2 success-step">
              <CheckCircle size={64} color="var(--teal)" />
              <h2>¡Cita Confirmada!</h2>
              <p>Tu cita para el <strong>{selectedDate}</strong> a las <strong>{selectedTime}</strong> ha sido agendada con éxito en nuestro calendario.</p>
              <button className="btn-primary" onClick={onClose} style={{ marginTop: '24px' }}>Cerrar</button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default BookingModal;
