import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Dish metadata definition matching prompt specs exactly
const dishes = [
  {
    id: 'biryani',
    name: 'Royal Awadhi Dum Biryani',
    subtitle: 'Fragrant basmati, tender chicken, saffron & whole spices',
    bgColor: '#B84A17', // Saffron / Warm Spice Terracotta
    accentColor: '#F5A623',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80',
    spices: [
      { name: 'Star Anise', icon: '★', top: '22%', left: '15%', size: 'text-2xl' },
      { name: 'Cardamom', icon: '♠', top: '35%', right: '18%', size: 'text-xl' },
      { name: 'Cinnamon', icon: '❚', top: '70%', left: '20%', size: 'text-3xl' },
      { name: 'Saffron', icon: '✹', top: '65%', right: '22%', size: 'text-2xl' }
    ]
  },
  {
    id: 'fried-rice',
    name: 'Special Wok Fried Rice',
    subtitle: 'Fluffy long-grain rice with crisp veggies & aromatic oil',
    bgColor: '#1B3F2C', // Deep Herb Green
    accentColor: '#4EBA6F',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1000&q=80',
    spices: [
      { name: 'Chili', icon: '🌶', top: '25%', left: '18%', size: 'text-2xl' },
      { name: 'Spring Onion', icon: '🌿', top: '40%', right: '16%', size: 'text-2xl' },
      { name: 'Sesame', icon: '░', top: '72%', left: '22%', size: 'text-xl' },
      { name: 'Coriander', icon: '☘', top: '60%', right: '25%', size: 'text-2xl' }
    ]
  },
  {
    id: 'masala-dosa',
    name: 'Crispy Golden Masala Dosa',
    subtitle: 'Fermented crepe filled with spiced potato & served with chutneys',
    bgColor: '#9C6E19', // Golden Turmeric / Amber
    accentColor: '#F7D070',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1000&q=80',
    spices: [
      { name: 'Curry Leaf', icon: '🍃', top: '20%', left: '20%', size: 'text-2xl' },
      { name: 'Mustard Seed', icon: '•', top: '38%', right: '20%', size: 'text-3xl' },
      { name: 'Red Chili', icon: '🌶', top: '68%', left: '18%', size: 'text-2xl' },
      { name: 'Coconut', icon: '🥥', top: '62%', right: '18%', size: 'text-2xl' }
    ]
  },
  {
    id: 'chicken-noodles',
    name: 'Fiery Wok Chicken Noodles',
    subtitle: 'Hand-pulled noodles tossed with shredded chicken & chili sauce',
    bgColor: '#731811', // Crimson Chili Red
    accentColor: '#FF6B59',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=1000&q=80',
    spices: [
      { name: 'Chili Flakes', icon: '🔥', top: '24%', left: '16%', size: 'text-2xl' },
      { name: 'Garlic', icon: '🧄', top: '36%', right: '19%', size: 'text-2xl' },
      { name: 'Spring Onion', icon: '🌿', top: '70%', left: '24%', size: 'text-2xl' },
      { name: 'Pepper', icon: '✹', top: '64%', right: '20%', size: 'text-xl' }
    ]
  }
];

export default function MaharajaHero() {
  // activeStateIndex: 0 = Biryani active, 1 = Fried Rice active, 2 = Masala Dosa active, 3 = Chicken Noodles active
  const [activeState, setActiveState] = useState(0);

  useEffect(() => {
    // 3.5s display duration + 1.2s orbital transition
    const interval = setInterval(() => {
      setActiveState((prev) => (prev + 1) % 4);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const activeDish = dishes[activeState];

  // Map each dish (0: Biryani, 1: Fried Rice, 2: Masala Dosa, 3: Chicken Noodles) to its current 4-carousel position
  // Position mapping formula for clockwise movement:
  // positionRelative = (dishIndex - activeState + 4) % 4
  // 0 -> CENTER ACTIVE
  // 1 -> RIGHT PARTIAL
  // 2 -> COMPLETELY HIDDEN
  // 3 -> LEFT PARTIAL
  const getDishPositionStyle = (dishIndex) => {
    const relPos = (dishIndex - activeState + 4) % 4;

    switch (relPos) {
      case 0: // CENTER / ACTIVE
        return {
          left: '50%',
          bottom: '8%',
          transform: 'translate(-50%, 0%) scale(1.15)',
          opacity: 1,
          zIndex: 30,
          pointerEvents: 'auto',
          isCenter: true
        };
      case 1: // RIGHT / PARTIALLY VISIBLE
        return {
          left: '82%',
          bottom: '-12%',
          transform: 'translate(-50%, 0%) scale(0.68)',
          opacity: 0.85,
          zIndex: 20,
          pointerEvents: 'auto',
          isCenter: false
        };
      case 2: // COMPLETELY HIDDEN (Below viewport)
        return {
          left: '50%',
          bottom: '-60%',
          transform: 'translate(-50%, 0%) scale(0.4)',
          opacity: 0,
          zIndex: 10,
          pointerEvents: 'none',
          isCenter: false
        };
      case 3: // LEFT / PARTIALLY VISIBLE
        return {
          left: '18%',
          bottom: '-12%',
          transform: 'translate(-50%, 0%) scale(0.68)',
          opacity: 0.85,
          zIndex: 20,
          pointerEvents: 'auto',
          isCenter: false
        };
      default:
        return {};
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[100vh] overflow-hidden select-none font-sans">
      {/* LAYER 1: Full-Screen Background Color Crossfade */}
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

      {/* LAYER 4: Fixed Header / Navigation (Z-Index 50) */}
      <header className="absolute top-0 left-0 right-0 z-50 px-8 md:px-16 py-8 flex items-center justify-between pointer-events-auto">
        {/* Top-Left Restaurant Logo Wordmark */}
        <Link to="/" className="flex flex-col group focus:outline-none">
          <span className="font-serif text-3xl md:text-4xl font-bold tracking-[0.25em] text-[#FFFDF7] group-hover:text-[#F5A623] transition-colors duration-300">
            MAHARAJA
          </span>
          <span className="text-[10px] tracking-[0.4em] font-semibold text-[#F5A623] uppercase -mt-1">
            ROYAL INDIAN CUISINE
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
                pointerEvents: style.pointerEvents
              }}
              onClick={() => setActiveState(dishIndex)}
              className="cursor-pointer group flex flex-col items-center"
            >
              {/* Plate / Bowl Container with Top-Down Perspective & Continuous Rotation on Active */}
              <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 rounded-full p-3 bg-white/15 backdrop-blur-sm border-2 border-white/30 shadow-2xl flex items-center justify-center">
                {/* Continuous 360 Spin Wrapper for Center Active Dish */}
                <div
                  className={`w-full h-full rounded-full overflow-hidden relative shadow-inner ${
                    style.isCenter ? 'animate-spin-slow' : ''
                  }`}
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover object-center rounded-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(0,0,0,0.4)] pointer-events-none" />
                </div>

                {/* Outer Decorative Ring for Active Center Dish */}
                {style.isCenter && (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1.05, opacity: 1 }}
                    className="absolute -inset-4 rounded-full border border-[#F5A623]/60 pointer-events-none"
                  />
                )}
              </div>

              {/* Side Dish Click Target / Indicator */}
              {!style.isCenter && style.opacity > 0 && (
                <div className="mt-2 text-center text-[#FFFDF7] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-black/50 px-3 py-1 rounded-full border border-white/20">
                    CLICK TO VIEW {dish.name.split(' ')[0]}
                  </span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* CAROUSEL CONTROLS & INDICATOR DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center space-x-3 bg-black/30 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/15">
        {dishes.map((dish, idx) => (
          <button
            key={dish.id}
            onClick={() => setActiveState(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              activeState === idx
                ? 'bg-[#F5A623] w-8'
                : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`View ${dish.name}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 35s linear infinite;
        }
      `}</style>
    </section>
  );
}
