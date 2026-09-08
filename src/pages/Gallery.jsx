import { motion } from 'framer-motion';
import MasonryGallery from '../components/MasonryGallery';
import { Camera, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GalleryPage() {
  return (
    <main className="pt-28 pb-20 bg-[#fde9ce] overflow-hidden">
      {/* Page Hero */}
      <section className="bg-[#242A33] bg-jali-pattern text-[#FAF3E8] py-20 md:py-28 relative overflow-hidden border-b border-[#333C48]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center space-x-2 bg-[#CC842F]/15 border border-[#CC842F]/40 px-3.5 py-1.5 rounded-full"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#CC842F]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#CC842F] uppercase">
                ATMOSPHERE &amp; CUISINE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif hero-heading font-bold text-[#FFFDF8]"
            >
              GALLERY.<br />
              <span className="italic font-normal text-[#CC842F]">A VISUAL FEAST.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-xl text-[#FAF3E8]/85 font-light max-w-xl leading-relaxed"
            >
              Immerse your senses in the vibrant colours, rich textures, and architectural serenity of Saffron Circle.
            </motion.p>
          </div>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2.5 bg-[#CE4527] hover:bg-[#B5351A] text-[#FFFDF8] text-xs font-bold tracking-widest px-6 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] transform border border-[#CC842F]/30"
          >
            <Camera className="w-4 h-4" />
            <span>FOLLOW @SAFFRONCIRCLE ON INSTAGRAM</span>
          </motion.a>
        </div>
      </section>

      {/* Full Gallery Component */}
      <MasonryGallery showHeader={false} />

      {/* Reservation CTA Footer */}
      <section className="py-20 bg-[#242A33] bg-jali-pattern text-[#FAF3E8] text-center relative overflow-hidden border-t border-[#333C48]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto px-6 space-y-4 relative z-10"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-[#CC842F] uppercase block">
            INDULGE IN PERSON
          </span>
          <h3 className="font-serif text-3xl md:text-5xl font-bold text-[#FFFDF8]">
            Ready to Taste the Craft?
          </h3>
          <p className="text-sm md:text-base font-light text-[#FAF3E8]/80 max-w-lg mx-auto leading-relaxed">
            Join us for lunch or dinner service at our Gourmet District location and let our culinary team guide your journey.
          </p>
          <div className="pt-4">
            <Link
              to="/reservations"
              className="inline-flex items-center space-x-3 bg-[#CE4527] hover:bg-[#B5351A] text-[#FFFDF8] text-xs font-bold tracking-widest px-8 py-4 rounded-md transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] transform"
            >
              <span>RESERVE YOUR TABLE NOW</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
