import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookingModal from './components/BookingModal';
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app">
      <Navbar onBookClick={() => setIsModalOpen(true)} />
      <Routes>
        <Route path="/" element={<Home onBookClick={() => setIsModalOpen(true)} />} />
      </Routes>
      <Footer />
      {isModalOpen && <BookingModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default App;
