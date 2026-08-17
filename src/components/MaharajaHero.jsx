import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

// Dishes dataset using local public assets:
// /biryani.png, /fried rice.png, /masala dosa.png, /noodles.png
// Sequence for clockwise rotation: Biryani (0) -> Fried Rice (3) -> Masala Dosa (2) -> Chicken Noodles (1) -> Biryani (0)
const dishes = [
  {
    id: 'biryani',
    name: 'Hyderabadi Chicken Biryani',
    subtitle: 'Aromatic long-grain basmati, saffron rice, tender chicken, fried onions & mint leaves',
    bgColor: '#B84A17', // Rich Saffron Terracotta
    accentColor: '#F5A623',
    image: '/biryani.png',
    spices: [
      { name: 'Star Anise', icon: '★', top: '22%', left: '15%', size: 'text-2xl' },
      { name: 'Cardamom', icon: '♠', top: '35%', right: '18%', size: 'text-xl' },
      { name: 'Cinnamon', icon: '❚', top: '70%', left: '20%', size: 'text-3xl' },
      { name: 'Saffron', icon: '✹', top: '65%', right: '22%', size: 'text-2xl' }
    ]
  },
  {
    id: 'chicken-noodles',
    name: 'Wok Chicken Noodles',
    subtitle: 'Stir-fried noodle strands tossed with chicken strips, scallions, chili & sesame seeds',
    bgColor: '#731811', // Deep Crimson Chili Red
    accentColor: '#FF6B59',
    image: '/noodles.png',
    spices: [
      { name: 'Chili Flakes', icon: '🔥', top: '24%', left: '16%', size: 'text-2xl' },
      { name: 'Garlic', icon: '🧄', top: '36%', right: '19%', size: 'text-2xl' },
      { name: 'Spring Onion', icon: '🌿', top: '70%', left: '24%', size: 'text-2xl' },
      { name: 'Pepper', icon: '✹', top: '64%', right: '20%', size: 'text-xl' }
    ]
  },
  {
    id: 'masala-dosa',
    name: 'Golden Masala Dosa',
    subtitle: 'Crisp golden crepe, yellow potato masala, creamy coconut chutney & rich sambar',
    bgColor: '#9C6E19', // Golden Turmeric / Amber
    accentColor: '#F7D070',
    image: '/masala dosa.png',
    spices: [
      { name: 'Curry Leaf', icon: '🍃', top: '20%', left: '20%', size: 'text-2xl' },
      { name: 'Mustard Seed', icon: '•', top: '38%', right: '20%', size: 'text-3xl' },
      { name: 'Red Chili', icon: '🌶', top: '68%', left: '18%', size: 'text-2xl' },
      { name: 'Coconut', icon: '🥥', top: '62%', right: '18%', size: 'text-2xl' }
    ]
  },
  {
    id: 'fried-rice',
    name: 'Chicken Fried Rice',
    subtitle: 'Wok-fried golden rice with diced carrots, green peas, scallions & scrambled egg',
    bgColor: '#1B3F2C', // Deep Herb Green
    accentColor: '#4EBA6F',
    image: '/fried rice.png',
    spices: [
      { name: 'Chili', icon: '🌶', top: '25%', left: '18%', size: 'text-2xl' },
      { name: 'Spring Onion', icon: '🌿', top: '40%', right: '16%', size: 'text-2xl' },
      { name: 'Sesame', icon: '░', top: '72%', left: '22%', size: 'text-xl' },
      { name: 'Coriander', icon: '☘', top: '60%', right: '25%', size: 'text-2xl' }
    ]
  }
];

export default function MaharajaHero() {
  const [activeState, setActiveState] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [showHeroNav, setShowHeroNav] = useState(true);
  const reqRef = useRef(null);
  const lastTimeRef = useRef(null);

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

  // 2. Continuous rotation loop that NEVER resets or snaps orientation
  useEffect(() => {
    const updateRotation = (time) => {
      if (lastTimeRef.current !== null) {
        const delta = time - lastTimeRef.current;
        // Smooth ~12 degrees/sec continuous rotation without orientation jumps
        setRotationAngle((prev) => (prev + delta * 0.012));
      }
      lastTimeRef.current = time;
      reqRef.current = requestAnimationFrame(updateRotation);
    };

    reqRef.current = requestAnimationFrame(updateRotation);
    return () => {
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
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
    <section className="relative w-full h-screen min-h-[100vh] overflow-hidden select-none font-sans">
      {/* LAYER 1: Full-Screen Solid Background Color Crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDish.id + '-bg'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          style={{ backgroundColor: activeDish.bgColor }}
          className="absolute inset-0 z-0"
        />
      </AnimatePresence>

      {/* LAYER 2: Food-specific Background Decorations & Spices */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDish.id + '-spices'}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-10 pointer-events-none"
        >
          {activeDish.spices.map((spice, idx) => (
            <motion.div
              key={idx}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 8, -8, 0]
              }}
              transition={{
                duration: 6 + idx * 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              style={{
                position: 'absolute',
                top: spice.top,
                left: spice.left,
                right: spice.right
              }}
              className={`${spice.size} text-white/20 font-serif drop-shadow-md`}
            >
              {spice.icon}
            </motion.div>
          ))}

          {/* Soft Central Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/10 blur-3xl pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* LAYER 4: Fixed Header / Navigation (Appears only when viewing Hero section) */}
      <header
        className={`absolute top-0 left-0 right-0 z-50 px-8 md:px-16 py-8 flex items-center justify-between transition-all duration-500 ${
          showHeroNav ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {/* Top-Left Restaurant Logo Wordmark: CILANTREE Indian Fine Dining */}
        <Link to="/" className="flex flex-col group focus:outline-none">
          <span className="font-serif text-3xl md:text-4xl font-bold tracking-[0.25em] text-[#FFFDF7] group-hover:text-[#F5A623] transition-colors duration-300">
            CILANTREE
          </span>
          <span className="text-[10px] tracking-[0.4em] font-semibold text-[#F5A623] uppercase -mt-1">
            INDIAN FINE DINING
          </span>
        </Link>

        {/* Top-Right Action Buttons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link
            to="/reservations"
            className="inline-flex items-center space-x-2 bg-[#FFFDF7]/15 hover:bg-[#FFFDF7] text-[#FFFDF7] hover:text-[#173F36] border border-[#FFFDF7]/40 text-xs font-bold tracking-widest px-6 py-3.5 rounded-lg backdrop-blur-md transition-all duration-300 shadow-lg"
          >
            <Calendar className="w-3.5 h-3.5 text-[#F5A623]" />
            <span>RESERVE A TABLE</span>
          </Link>
          <Link
            to="/menu"
            className="inline-flex items-center space-x-2 bg-[#F5A623] hover:bg-[#e09316] text-[#173F36] text-xs font-bold tracking-widest px-6 py-3.5 rounded-lg transition-all duration-300 shadow-xl hover:-translate-y-0.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>BOOK ONLINE</span>
          </Link>
        </div>
      </header>

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
            <span className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-[#F5A623] bg-black/25 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
              FEATURED SPECIALTY
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#FFFDF7] tracking-tight drop-shadow-lg">
              {activeDish.name}
            </h1>
            <p className="text-sm md:text-base text-[#FFFDF7]/85 font-light leading-relaxed max-w-lg mx-auto drop-shadow">
              {activeDish.subtitle}
            </p>
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
                {/* Image container continuously rotates without orientation resets */}
                <div
                  className="w-full h-full rounded-full overflow-hidden relative drop-shadow-2xl flex items-center justify-center"
                  style={{
                    transform: `rotate(${rotationAngle}deg)`
                  }}
                >
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
    </section>
  );
}
