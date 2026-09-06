import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SmoothScroll from './components/SmoothScroll';

import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Offerings from './pages/Offerings';
import Reservations from './pages/Reservations';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-[#F8F5EC] text-[#17201D] font-sans selection:bg-[#CE4527] selection:text-[#F8F5EC]">
        <ScrollToTop />
        <Navbar />
        {/* Main Content acting as curtain over the footer */}
        <main className="flex-1 relative z-10 bg-[#F8F5EC] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/offerings" element={<Offerings />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
