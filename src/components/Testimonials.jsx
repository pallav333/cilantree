import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-28 md:py-36 bg-[#242A33] bg-jali-pattern text-[#FAF3E8] relative overflow-hidden">
      {/* Background Decorative Graphic */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(204,132,47,0.12) 0%, rgba(204,132,47,0) 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-3 mb-16"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-[#CE4527] uppercase">
            PRESS & REVIEWS
          </span>
          <h2 className="font-serif section-heading font-bold text-[#FFFDF8]">
            WHAT OUR GUESTS SAY
          </h2>
        </motion.div>

        {/* Quote Card Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-[#CE4527]/90 backdrop-blur-md p-8 md:p-16 rounded-3xl border border-[#FAF3E8]/15 shadow-2xl min-h-[320px] flex flex-col justify-between"
        >
          <Quote className="w-12 h-12 text-[#CC842F]/30 absolute top-8 left-8 md:top-12 md:left-12 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 relative z-10 pt-4"
            >
              {/* Star Rating */}
              <div className="flex space-x-1 text-[#C99A3D]">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C99A3D]" />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-serif text-xl md:text-3xl font-light italic leading-relaxed text-[#FFFDF8]">
                “{current.quote}”
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4 pt-4 border-t border-[#FAF3E8]/20">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#CC842F]"
                />
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#FFFDF8]">{current.name}</h4>
                  <p className="text-xs text-[#CC842F] font-semibold tracking-wider uppercase">
                    {current.role} • {current.publication}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-end space-x-3 pt-6">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-[#CC842F] hover:bg-[#B57326] text-[#FFFDF8] flex items-center justify-center transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5 text-[#FFFDF8]" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-[#CC842F] hover:bg-[#B57326] text-[#FFFDF8] flex items-center justify-center transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
