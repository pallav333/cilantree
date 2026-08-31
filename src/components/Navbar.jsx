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

  // Show SAFFRON CIRCLE Navbar on non-home pages OR after scrolling past Hero on home page
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
            ? 'bg-[#FAF3E8]/95 backdrop-blur-md py-4 shadow-sm border-b border-[#E9D9C2]'
            : 'bg-[#FAF3E8] py-6 border-b border-[#E9D9C2]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group focus:outline-none"
            aria-label="Saffron Circle Restaurant Home"
          >
            <img 
              src="/Saffron-Circle-Logo.png" 
              alt="Saffron Circle Logo" 
              className="h-9 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="flex flex-col">
              <span className="font-serif text-base md:text-lg font-bold tracking-widest text-[#CE4527] group-hover:text-[#CC842F] transition-colors duration-300 leading-tight">
                SAFFRON CIRCLE
              </span>
              <span className="text-[8px] md:text-[9px] tracking-[0.25em] font-semibold text-[#CC842F] uppercase">
                Indian Fine Dining
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs font-semibold tracking-widest transition-colors duration-300 relative py-1 ${
                    isActive ? 'text-[#CE4527]' : 'text-[#29251F]/75 hover:text-[#CC842F]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#CC842F]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Primary CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/reservations"
              className="inline-flex items-center justify-center space-x-2 bg-[#CE4527] hover:bg-[#B5351A] text-[#FFFDF8] text-xs font-semibold tracking-widest px-6 py-3 rounded-md transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-3.5 h-3.5 text-[#FFFDF8]" />
              <span>RESERVE A TABLE</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#CE4527] focus:outline-none focus:ring-2 focus:ring-[#CE4527]/20 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#CE4527] text-[#FAF3E8] pt-28 px-8 pb-12 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-[10px] tracking-[0.3em] font-semibold text-[#CC842F] uppercase border-b border-[#FAF3E8]/20 pb-3">
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
                      location.pathname === link.path ? 'text-[#CC842F]' : 'text-[#FAF3E8] hover:text-[#CC842F]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-60" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col space-y-6 border-t border-[#FAF3E8]/20 pt-6">
              <Link
                to="/reservations"
                className="w-full text-center bg-[#CC842F] hover:bg-[#B57326] text-[#FFFDF8] text-xs font-bold tracking-widest py-4 rounded-md transition-colors duration-300 border border-[#FAF3E8]/30"
              >
                RESERVE A TABLE
              </Link>
              <div className="flex justify-between items-center text-xs text-[#FAF3E8]/90">
                <span className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-[#CC842F]" />
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
