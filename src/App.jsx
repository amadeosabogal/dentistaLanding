import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FloatingWhatsAppBtn from './components/FloatingWhatsAppBtn';
import { openWhatsApp } from './utils/whatsapp';

function App() {
  const handleBookClick = (customMessage) => {
    openWhatsApp(typeof customMessage === 'string' ? customMessage : undefined);
  };

  return (
    <div className="app">
      <Navbar onBookClick={handleBookClick} />
      <Routes>
        <Route path="/" element={<Home onBookClick={handleBookClick} />} />
      </Routes>
      <Footer onBookClick={handleBookClick} />
      <FloatingWhatsAppBtn />
    </div>
  );
}

export default App;
