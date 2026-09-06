import { motion } from 'framer-motion';
import MenuSection from '../components/MenuSection';
import { Calendar, ShieldCheck, Sparkles, CheckCircle2, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MenuPage() {
  return (
    <main className="pt-28 pb-20 bg-[#F5EBDD] overflow-hidden">
      {/* Page Hero Header */}
      <section className="bg-[#242A33] bg-jali-pattern text-[#FAF3E8] py-20 md:py-28 relative overflow-hidden border-b border-[#333C48]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center space-x-2 bg-[#CC842F]/15 border border-[#CC842F]/40 px-3.5 py-1.5 rounded-full"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#CC842F]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#CC842F] uppercase">
                ARTISANAL CULINARY SELECTIONS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif hero-heading font-bold text-[#FFFDF8]"
            >
              DINING MENU.<br />
              <span className="italic font-normal text-[#CC842F]">HERITAGE &amp; INNOVATION.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-xl text-[#FAF3E8]/85 font-light max-w-xl leading-relaxed"
            >
              Explore our comprehensive range of regional curries, tandoori grills, artisan breads, and handcrafted Indian desserts.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Interactive Menu Component */}
      <MenuSection showHeader={false} />

      {/* Dietary Information & Allergy Banner with Luxury Framing */}
      <section className="py-20 bg-[#FAF3E8] border-t border-[#E9D9C2]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-4 mb-10"
          >
            <div className="inline-flex items-center justify-center space-x-3">
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-[1px] w-8 bg-[#CC842F] origin-right inline-block"
              />
              <span className="text-xs font-bold tracking-[0.2em] text-[#CC842F] uppercase">
                DIETARY &amp; ALLERGY NOTICE
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-[1px] w-8 bg-[#CC842F] origin-left inline-block"
              />
            </div>

            <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#CE4527]">
              Crafted for Every Palate
            </h3>

            <p className="text-sm md:text-base text-[#29251F]/75 font-light max-w-2xl mx-auto leading-relaxed">
              We cater with utmost devotion to personal health preferences, lifestyle choices, and religious practices.
            </p>
          </motion.div>

          {/* 3 Dietary Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#F5EBDD] p-6 rounded-2xl border border-[#E9D9C2] flex items-start space-x-3.5 shadow-sm"
            >
              <ShieldCheck className="w-6 h-6 text-[#CC842F] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-base font-bold text-[#CE4527]">100% Certified Halal</h4>
                <p className="text-xs text-[#29251F]/70 font-light mt-1 leading-relaxed">
                  All poultry, lamb, and beef selections are sourced from accredited organic halal suppliers.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#F5EBDD] p-6 rounded-2xl border border-[#E9D9C2] flex items-start space-x-3.5 shadow-sm"
            >
              <CheckCircle2 className="w-6 h-6 text-[#CC842F] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-base font-bold text-[#CE4527]">Vegan &amp; Gluten-Free</h4>
                <p className="text-xs text-[#29251F]/70 font-light mt-1 leading-relaxed">
                  Dedicated kitchen preparation zones and cookware to eliminate cross-contamination.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#F5EBDD] p-6 rounded-2xl border border-[#E9D9C2] flex items-start space-x-3.5 shadow-sm"
            >
              <HeartHandshake className="w-6 h-6 text-[#CC842F] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-base font-bold text-[#CE4527]">Bespoke Adaptations</h4>
                <p className="text-xs text-[#29251F]/70 font-light mt-1 leading-relaxed">
                  Inform your captain of any nut, dairy, or spice sensitivities for customized dish tailoring.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-center pt-2"
          >
            <Link
              to="/reservations"
              className="inline-flex items-center space-x-2 bg-[#CE4527] hover:bg-[#B5351A] text-[#FFFDF8] text-xs font-bold tracking-widest px-8 py-4 rounded-md transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] transform border border-[#CC842F]/30"
            >
              <Calendar className="w-4 h-4" />
              <span>RESERVE TABLE FOR DINING</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
