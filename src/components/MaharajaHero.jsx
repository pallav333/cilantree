import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Calendar, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

// Dishes dataset using local public assets:
// /biryani.png, /fried rice.png, /masala dosa.png, /noodles.png
// Sequence for clockwise rotation: Biryani (0) -> Fried Rice (3) -> Masala Dosa (2) -> Chicken Noodles (1) -> Biryani (0)
const dishes = [
  {
    id: 'biryani',
    name: 'Hyderabadi Chicken Biryani',
    accentColor: '#F5A623',
    image: '/biryani.png',
    bgImage: '/biryani_background.png'
  },
  {
    id: 'chicken-noodles',
    name: 'Wok Chicken Noodles',
    accentColor: '#FF6B59',
    image: '/noodles.png',
    bgImage: '/noodles_background.png'
  },
  {
    id: 'masala-dosa',
    name: 'Golden Masala Dosa',
    accentColor: '#F7D070',
    image: '/masala dosa.png',
    bgImage: '/masala_dosa_background.png'
  },
  {
    id: 'fried-rice',
    name: 'Chicken Fried Rice',
    accentColor: '#E58C23',
    image: '/fried rice.png',
    bgImage: '/fried_rice_background.png'
  }
];

export default function MaharajaHero() {
  const [activeState, setActiveState] = useState(0);
  const [showHeroNav, setShowHeroNav] = useState(true);
  const sectionRef = useRef(null);

  // Scroll depth exit transforms (GPU-accelerated translate3d + opacity)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 0.95, 0.75]);

  // 1. Scroll listener to hide Hero navbar when scrolling down past Hero
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      if (window.scrollY > heroHeight * 0.4) {
        setShowHeroNav(false);
      } else {
        setShowHeroNav(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. Pure automatic state transition timer for clockwise carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveState((prev) => (prev + 1) % 4);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const activeDishIndex = (4 - (activeState % 4)) % 4;
  const activeDish = dishes[activeDishIndex];

  // CLOCKWISE POSITION MAPPING:
  // relPos = (dishIndex + activeState) % 4
  // State changes 0 -> 1 -> 2 -> 3:
  // CENTER (0) -> RIGHT (1) -> HIDDEN (2) -> LEFT (3) -> CENTER (0)
  const getDishPositionStyle = (dishIndex) => {
    const relPos = (dishIndex + activeState) % 4;

    switch (relPos) {
      case 0: // CENTER / ACTIVE
        return {
          left: '50%',
          bottom: '8%',
          transform: 'translate(-50%, 0%) scale(1.15)',
          opacity: 1,
          zIndex: 30
        };
      case 1: // RIGHT / PARTIALLY VISIBLE
        return {
          left: '82%',
          bottom: '-12%',
          transform: 'translate(-50%, 0%) scale(0.68)',
          opacity: 0.85,
          zIndex: 20
        };
      case 2: // COMPLETELY HIDDEN (Below viewport)
        return {
          left: '50%',
          bottom: '-60%',
          transform: 'translate(-50%, 0%) scale(0.4)',
          opacity: 0,
          zIndex: 10
        };
      case 3: // LEFT / PARTIALLY VISIBLE
        return {
          left: '18%',
          bottom: '-12%',
          transform: 'translate(-50%, 0%) scale(0.68)',
          opacity: 0.85,
          zIndex: 20
        };
      default:
        return {};
    }
  };

  return (
    <section ref={sectionRef} className="relative w-full h-screen min-h-[100vh] overflow-hidden select-none font-sans bg-[#5C1405]">
      {/* Scroll-driven Parallax Depth Wrapper */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity, willChange: 'transform, opacity' }}
        className="absolute inset-0 w-full h-full overflow-hidden origin-bottom pointer-events-none"
      >
        {/* LAYER 1: Full-Screen Background Image with Instant Simultaneous Crossfade */}
      <AnimatePresence>
        <motion.div
          key={activeDish.id + '-bg'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <img
            src={activeDish.bgImage}
            alt={`${activeDish.name} background`}
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle overlay gradient to ensure high readability and premium aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65" />
        </motion.div>
      </AnimatePresence>

      {/* Central Radial Ambient Glow Overlay - Hardware-accelerated radial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none z-10" 
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 65%)' }}
      />

      {/* ACTIVE DISH TITLE & SUBTITLE OVERLAY */}
      <div className="absolute top-32 md:top-36 left-0 right-0 z-30 text-center px-6 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDish.id + '-title'}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto space-y-3"
          >
            <span className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-[#C98B32] bg-black/25 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
              FEATURED SPECIALTY
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#FFFDF8] tracking-tight drop-shadow-lg">
              {activeDish.name}
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* LAYER 3: Four-Dish Clockwise Carousel System */}
      <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
        {dishes.map((dish, dishIndex) => {
          const style = getDishPositionStyle(dishIndex);

          return (
            <motion.div
              key={dish.id}
              initial={false}
              animate={{
                left: style.left,
                bottom: style.bottom,
                transform: style.transform,
                opacity: style.opacity
              }}
              transition={{
                duration: 1.2,
                ease: [0.4, 0, 0.2, 1]
              }}
              style={{
                position: 'absolute',
                zIndex: style.zIndex,
                pointerEvents: 'none'
              }}
              className="flex flex-col items-center pointer-events-none"
            >
              {/* Plate Container with Clean Overhead Perspective */}
              <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 rounded-full p-1 flex items-center justify-center">
                {/* Image container continuously rotates on the GPU compositor without orientation resets */}
                <div className="w-full h-full rounded-full overflow-hidden relative drop-shadow-2xl flex items-center justify-center spin-continuous">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-contain object-center rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
        </div>
      </motion.div>

      {/* LAYER 4: Fixed Header / Navigation (Appears only when viewing Hero section) */}
      <header
        className={`absolute top-0 left-0 right-0 z-50 px-8 md:px-16 py-8 flex items-center justify-between transition-all duration-500 ${showHeroNav ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        {/* Top-Left Restaurant Logo & Wordmark */}
        <Link to="/" className="flex items-center space-x-3 group focus:outline-none">
          <img 
            src="/Saffron-Circle-Logo.png" 
            alt="Saffron Circle Logo" 
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md" 
          />
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-bold tracking-[0.2em] text-[#FFFDF8] group-hover:text-[#CC842F] transition-colors duration-300 leading-tight">
              SAFFRON CIRCLE
            </span>
            <span className="text-[8px] md:text-[9px] tracking-[0.3em] font-semibold text-[#CE4527] uppercase">
              INDIAN FINE DINING
            </span>
          </div>
        </Link>

        {/* Top-Right Action Buttons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link
            to="/reservations"
            className="group inline-flex items-center space-x-2 bg-[#FFFDF8]/15 hover:bg-[#FFFDF8] text-[#FFFDF8] hover:text-[#CC842F] border border-[#FFFDF8]/40 text-xs font-bold tracking-widest px-6 py-3.5 rounded-lg backdrop-blur-md transition-all duration-300 shadow-lg"
          >
            <Calendar className="w-3.5 h-3.5 text-[#CE4527] group-hover:text-[#CC842F] transition-colors" />
            <span>RESERVE A TABLE</span>
          </Link>
          <Link
            to="/menu"
            className="inline-flex items-center space-x-2 bg-[#CC842F] hover:bg-[#B57326] text-[#FFFDF8] text-xs font-bold tracking-widest px-6 py-3.5 rounded-lg transition-all duration-300 shadow-xl hover:-translate-y-0.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>BOOK ONLINE</span>
          </Link>
        </div>
      </header>
    </section>
  );
}
