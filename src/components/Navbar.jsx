import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Calendar, 
  Phone, 
  ArrowUpRight, 
  ChevronDown, 
  Gift, 
  UtensilsCrossed, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOfferingsOpen, setIsOfferingsOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
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

  // Close mobile menu and dropdown on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsOfferingsOpen(false);
  }, [location]);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsOfferingsOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsOfferingsOpen(false);
    }, 200);
  };

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'MENU', path: '/menu' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'OFFERINGS', path: '/offerings', hasDropdown: true },
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

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative py-2 flex items-center"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      to={link.path}
                      className={`text-xs font-semibold tracking-widest transition-colors duration-300 inline-flex items-center space-x-1.5 ${
                        isActive ? 'text-[#CE4527]' : 'text-[#29251F]/75 hover:text-[#CC842F]'
                      }`}
                      onClick={() => setIsOfferingsOpen(false)}
                    >
                      <span className="relative inline-block pb-1">
                        {link.name}
                        {isActive && (
                          <motion.div
                            layoutId="activeNavIndicator"
                            className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#CC842F] rounded-full"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </span>
                      <ChevronDown 
                        className={`w-3.5 h-3.5 -mt-0.5 transition-transform duration-300 ${
                          isOfferingsOpen ? 'rotate-180 text-[#CC842F]' : 'opacity-60'
                        }`} 
                      />
                    </Link>

                    {/* Offerings Dropdown Panel */}
                    <AnimatePresence>
                      {isOfferingsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full -left-20 w-80 bg-[#FAF3E8] border border-[#E9D9C2] rounded-2xl shadow-2xl p-4 space-y-2 z-50 overflow-hidden"
                        >
                          <div className="px-2 py-1 border-b border-[#E9D9C2]/60 flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-[#CC842F]">
                            <span>Our Offerings</span>
                            <Sparkles className="w-3 h-3 text-[#CC842F]" />
                          </div>

                          {/* Gift Cards Item */}
                          <Link
                            to="/offerings#gift-cards"
                            onClick={() => setIsOfferingsOpen(false)}
                            className="group/item flex items-start space-x-3 p-2.5 rounded-xl hover:bg-[#F5EBDD] transition-colors"
                          >
                            <div className="w-9 h-9 rounded-lg bg-[#CC842F]/15 flex items-center justify-center text-[#CC842F] group-hover/item:bg-[#CC842F] group-hover/item:text-[#FFFDF8] transition-colors shrink-0 mt-0.5">
                              <Gift className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h4 className="font-serif text-sm font-bold text-[#CE4527] group-hover/item:text-[#CC842F] transition-colors">
                                  Physical Gift Cards
                                </h4>
                                <span className="text-[8px] tracking-wider uppercase font-semibold bg-[#CC842F]/15 text-[#CC842F] px-1.5 py-0.5 rounded">
                                  In-Person
                                </span>
                              </div>
                              <p className="text-[11px] text-[#29251F]/70 leading-snug mt-0.5 font-light">
                                Hand-pressed keepsake gift cards issued directly at our restaurant.
                              </p>
                            </div>
                          </Link>

                          {/* Catering Services Item */}
                          <Link
                            to="/offerings#catering"
                            onClick={() => setIsOfferingsOpen(false)}
                            className="group/item flex items-start space-x-3 p-2.5 rounded-xl hover:bg-[#F5EBDD] transition-colors"
                          >
                            <div className="w-9 h-9 rounded-lg bg-[#CE4527]/15 flex items-center justify-center text-[#CE4527] group-hover/item:bg-[#CE4527] group-hover/item:text-[#FFFDF8] transition-colors shrink-0 mt-0.5">
                              <UtensilsCrossed className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h4 className="font-serif text-sm font-bold text-[#CE4527] group-hover/item:text-[#CC842F] transition-colors">
                                  Bespoke Catering
                                </h4>
                                <span className="text-[8px] tracking-wider uppercase font-semibold bg-[#CE4527]/15 text-[#CE4527] px-1.5 py-0.5 rounded">
                                  Private Events
                                </span>
                              </div>
                              <p className="text-[11px] text-[#29251F]/70 leading-snug mt-0.5 font-light">
                                Royal banquets, live tandoor stations, weddings &amp; corporate galas.
                              </p>
                            </div>
                          </Link>

                          {/* Full Section Link */}
                          <div className="pt-2 border-t border-[#E9D9C2]/60 px-1">
                            <Link
                              to="/offerings"
                              onClick={() => setIsOfferingsOpen(false)}
                              className="text-[10px] font-bold tracking-widest text-[#CC842F] hover:text-[#CE4527] flex items-center justify-between p-1.5 rounded-md hover:bg-[#F5EBDD] transition-colors uppercase"
                            >
                              <span>Explore All Offerings</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs font-semibold tracking-widest transition-colors duration-300 py-1 ${
                    isActive ? 'text-[#CE4527]' : 'text-[#29251F]/75 hover:text-[#CC842F]'
                  }`}
                >
                  <span className="relative inline-block pb-1">
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#CC842F] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </span>
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
            className="fixed inset-0 z-40 bg-[#CE4527] text-[#FAF3E8] pt-28 px-8 pb-12 flex flex-col justify-between md:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-5">
              <span className="text-[10px] tracking-[0.3em] font-semibold text-[#CC842F] uppercase border-b border-[#FAF3E8]/20 pb-3">
                Navigation
              </span>
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * idx, duration: 0.3 }}
                >
                  <Link
                    to={link.path}
                    className={`font-serif text-2xl md:text-3xl font-light tracking-wide flex items-center justify-between py-1.5 ${
                      location.pathname === link.path ? 'text-[#CC842F]' : 'text-[#FAF3E8] hover:text-[#CC842F]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-60" />
                  </Link>

                  {/* Mobile Subsection for Offerings */}
                  {link.hasDropdown && (
                    <div className="pl-4 mt-1 mb-2 space-y-2 border-l border-[#FAF3E8]/30">
                      <Link
                        to="/offerings#gift-cards"
                        className="flex items-center space-x-2 text-xs text-[#FAF3E8]/85 hover:text-[#CC842F] py-1"
                      >
                        <Gift className="w-3.5 h-3.5 text-[#CC842F]" />
                        <span>Physical Gift Cards (In-Person Only)</span>
                      </Link>
                      <Link
                        to="/offerings#catering"
                        className="flex items-center space-x-2 text-xs text-[#FAF3E8]/85 hover:text-[#CC842F] py-1"
                      >
                        <UtensilsCrossed className="w-3.5 h-3.5 text-[#CC842F]" />
                        <span>Private Event Catering</span>
                      </Link>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col space-y-4 border-t border-[#FAF3E8]/20 pt-6 mt-6">
              <Link
                to="/reservations"
                className="w-full text-center bg-[#CC842F] hover:bg-[#B57326] text-[#FFFDF8] text-xs font-bold tracking-widest py-3.5 rounded-md transition-colors duration-300 border border-[#FAF3E8]/30"
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

