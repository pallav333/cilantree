import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, Phone, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      
      // Track scrolled past hero
      if (window.scrollY >= heroHeight * 0.75) {
        setIsPastHero(true);
      } else {
        setIsPastHero(false);
      }

      // Track compact background padding
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'MENU', path: '/menu' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'CONTACT', path: '/contact' }
  ];

  // Show CILANTREE Navbar on non-home pages OR after scrolling past Hero on home page
  const showNavbar = !isHomePage || isPastHero;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showNavbar
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-full opacity-0 pointer-events-none'
        } ${
          isScrolled
            ? 'bg-[#F8F5EC]/95 backdrop-blur-md py-4 shadow-sm border-b border-[#E8E0CF]'
            : 'bg-[#F8F5EC] py-6 border-b border-[#E8E0CF]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group focus:outline-none"
            aria-label="Cilantree Restaurant Home"
          >
            <div className="flex flex-col">
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-widest text-[#173F36] group-hover:text-[#C98B32] transition-colors duration-300">
                CILANTREE
              </span>
              <span className="text-[9px] tracking-[0.3em] font-medium text-[#C98B32] uppercase -mt-1">
                Indian Fine Dining
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs font-semibold tracking-widest transition-colors duration-300 relative py-1 ${
                    isActive ? 'text-[#173F36]' : 'text-[#17201D]/75 hover:text-[#173F36]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C98B32]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Reservation CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/reservations"
              className="inline-flex items-center justify-center space-x-2 bg-[#173F36] hover:bg-[#102A43] text-[#F8F5EC] text-xs font-semibold tracking-widest px-6 py-3 rounded-md transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C98B32]" />
              <span>RESERVE A TABLE</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#173F36] focus:outline-none focus:ring-2 focus:ring-[#173F36]/20 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#173F36] text-[#F8F5EC] pt-28 px-8 pb-12 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-[10px] tracking-[0.3em] font-semibold text-[#C98B32] uppercase border-b border-[#F8F5EC]/10 pb-3">
                Navigation
              </span>
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                >
                  <Link
                    to={link.path}
                    className={`font-serif text-3xl font-light tracking-wide flex items-center justify-between py-2 ${
                      location.pathname === link.path ? 'text-[#C98B32]' : 'text-[#F8F5EC] hover:text-[#C98B32]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-60" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col space-y-6 border-t border-[#F8F5EC]/10 pt-6">
              <Link
                to="/reservations"
                className="w-full text-center bg-[#C98B32] hover:bg-[#b07827] text-[#173F36] text-xs font-bold tracking-widest py-4 rounded-md transition-colors duration-300"
              >
                RESERVE A TABLE
              </Link>
              <div className="flex justify-between items-center text-xs text-[#F8F5EC]/70">
                <span className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-[#C98B32]" />
                  <span>+1 (555) 348-2890</span>
                </span>
                <span>Gourmet District, SF</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
