import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { locations } from '../data/locations';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink, Car } from 'lucide-react';

export default function LocationSection() {
  const [selectedLocId, setSelectedLocId] = useState(locations[0].id);
  const activeLoc = locations.find(l => l.id === selectedLocId);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const indiaGateParallaxY = useTransform(scrollYProgress, [0, 1], ['-16px', '20px']);

  return (
    <section ref={sectionRef} className="pt-10 md:pt-14 pb-20 md:pb-28 bg-[#F5EBDD] border-b border-[#E9D9C2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header with Title on Left and Animated India Gate on Right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <div className="flex items-center space-x-3 mb-3">
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-[1px] w-8 bg-[#CC842F] origin-left inline-block"
              />
              <span className="text-xs font-bold tracking-[0.25em] text-[#CC842F] uppercase">
                VISIT OUR SANCTUARIES
              </span>
            </div>
            <h2 className="font-serif section-heading font-bold text-[#CE4527]">
              COME DINE WITH US.
            </h2>
            <p className="text-[#29251F]/75 font-light text-base md:text-lg mt-2">
              Experience our elevated dining sanctuaries in key landmark destinations.
            </p>
          </motion.div>

          {/* India Gate Architectural Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: indiaGateParallaxY }}
            className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] self-center lg:self-end select-none pointer-events-none will-change-transform"
          >
            {/* GPU Ambient Levitation without JS tween collision */}
            <div className="ambient-levitate relative w-full aspect-[3/2]">
              <img
                src="/india_gate.png"
                alt="India Gate Outline"
                loading="eager"
                className="w-full h-full object-contain mix-blend-multiply opacity-65 hover:opacity-85 transition-opacity duration-300 drop-shadow-[0_2px_10px_rgba(204,132,47,0.1)]"
              />
            </div>
          </motion.div>
        </div>

        {/* Location Selector Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex space-x-4 mb-8 overflow-x-auto pb-2"
        >
          {locations.map(loc => (
            <button
              key={loc.id}
              onClick={() => setSelectedLocId(loc.id)}
              className={`text-xs font-bold tracking-widest px-6 py-3 rounded-xl border transition-all duration-300 ${
                selectedLocId === loc.id
                  ? 'bg-[#CE4527] text-[#FFFDF8] border-[#CE4527] shadow-md'
                  : 'bg-[#E9D9C2]/40 text-[#29251F]/70 border-[#E9D9C2] hover:border-[#CC842F]'
              }`}
            >
              {loc.name}
            </button>
          ))}
        </motion.div>

        {/* Location Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-[#E9D9C2]/30 p-8 md:p-12 rounded-2xl border border-[#E9D9C2] flex flex-col justify-between space-y-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLoc.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#CC842F] uppercase block mb-2">
                  RESTAURANT LOCATION
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#CE4527] mb-6">
                  {activeLoc.name}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-light text-[#29251F]/80">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-[#CC842F] mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-[#CC842F] block">ADDRESS</span>
                        <span>{activeLoc.address}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-[#CC842F] shrink-0" />
                      <div>
                        <span className="font-semibold text-[#CC842F] block">TELEPHONE</span>
                        <span>{activeLoc.phone}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-[#CC842F] shrink-0" />
                      <div>
                        <span className="font-semibold text-[#CC842F] block">EMAIL</span>
                        <span>{activeLoc.email}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 bg-[#FAF3E8] p-5 rounded-xl border border-[#E9D9C2]">
                    <div className="flex items-center space-x-2 text-[#CC842F] font-bold text-xs tracking-wider mb-2">
                      <Clock className="w-4 h-4 text-[#CC842F]" />
                      <span>DINING HOURS</span>
                    </div>
                    {activeLoc.hours.map((h, i) => (
                      <div key={i} className="flex justify-between text-xs py-1 border-b border-[#E9D9C2] last:border-0">
                        <span className="font-medium text-[#CE4527]">{h.days}</span>
                        <span className="text-[#29251F]/70">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="pt-6 border-t border-[#E9D9C2] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-xs text-[#29251F]/70">
                <Car className="w-4 h-4 text-[#CC842F]" />
                <span>{activeLoc.valetParking}</span>
              </div>

              <div className="flex items-center space-x-3">
                <a
                  href={activeLoc.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#CE4527] hover:bg-[#B5351A] text-[#FFFDF8] text-xs font-bold tracking-widest px-6 py-3 rounded-lg transition-colors border border-[#CC842F]/30"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#FFFDF8]" />
                  <span>GET DIRECTIONS</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Map Visual Graphic / Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 bg-[#CE4527] text-[#FAF3E8] p-8 md:p-12 rounded-2xl border border-[#CE4527] flex flex-col justify-between relative overflow-hidden shadow-lg"
          >
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#CC842F]/30 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#CC842F] uppercase block">
                ATTIRE & POLICIES
              </span>
              <h4 className="font-serif text-2xl font-bold text-[#FFFDF8]">Plan Your Visit</h4>
              <ul className="space-y-4 text-xs font-light text-[#FAF3E8]/90">
                <li className="flex items-start space-x-3">
                  <span className="text-[#CC842F] font-bold">◆</span>
                  <span>Dress Code: Smart casual or formal dining attire requested.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#CC842F] font-bold">◆</span>
                  <span>Reservations recommended for weekend dinner service.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#CC842F] font-bold">◆</span>
                  <span>Dietary Accommodations: Halal, Gluten-Free & Vegan options available.</span>
                </li>
              </ul>
            </div>

            <div className="relative z-10 pt-8 mt-6 border-t border-[#FAF3E8]/20">
              <a
                href={activeLoc.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest text-[#CC842F] hover:text-[#FFFDF8] transition-colors"
              >
                <span>OPEN INTERACTIVE GOOGLE MAPS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
