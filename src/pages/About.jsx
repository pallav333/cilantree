import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Flame, Compass, ArrowRight, Award, Utensils, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const narrativeRef = useRef(null);
  const { scrollYProgress: narrativeScroll } = useScroll({
    target: narrativeRef,
    offset: ['start end', 'end start']
  });

  const photoParallaxY = useTransform(narrativeScroll, [0, 1], ['-6%', '6%']);
  const badgeFloatY = useTransform(narrativeScroll, [0, 1], ['20px', '-20px']);

  return (
    <main className="pt-28 pb-20 bg-[#fde9ce] overflow-hidden">
      {/* Page Hero Header with Staggered Entrance */}
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
                HERITAGE &amp; VISION
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif hero-heading font-bold text-[#FFFDF8]"
            >
              OUR STORY.<br />
              <span className="italic font-normal text-[#CC842F]">THE SAFFRON CIRCLE JOURNEY.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-xl text-[#FAF3E8]/85 font-light leading-relaxed pt-2"
            >
              Founded on a passion for preserving centuries-old Awadhi and Royal Indian culinary traditions while creating an elevated, contemporary fine dining sanctuary.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Narrative Section with Parallax Image & Staggered Reveal */}
      <section ref={narrativeRef} className="py-20 md:py-28 border-b border-[#E9D9C2]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 space-y-6 text-[#29251F]/80 font-light text-base md:text-lg leading-relaxed"
            >
              <div className="flex items-center space-x-3 mb-2">
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-[1px] w-8 bg-[#CC842F] origin-left inline-block"
                />
                <span className="text-xs font-bold tracking-[0.25em] text-[#CC842F] uppercase">
                  OUR PHILOSOPHY
                </span>
              </div>

              <h2 className="font-serif section-heading font-bold text-[#CE4527] leading-tight">
                REDEFINING INDIAN FINE DINING
              </h2>

              <p>
                Saffron Circle was born out of a desire to break away from generic Indian curry clichés and introduce diners to the authentic, subtle regional complexities of Indian royal kitchens.
              </p>

              <p>
                Every dish is rooted in historical authenticity — from 24-hour slow-cooked wood-ember black dal to claypot-grilled meats infused with rare Ratanjot root and Kashmiri saffron.
              </p>

              {/* Feature Cards Grid */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#E9D9C2]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="bg-[#FAF3E8] p-4 rounded-xl border border-[#E9D9C2] flex items-start space-x-3.5 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-full bg-[#CE4527]/10 flex items-center justify-center text-[#CE4527] shrink-0 mt-0.5">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#CE4527]">Wood-Fired Tandoor</h4>
                    <p className="text-xs text-[#29251F]/70 font-light mt-0.5 leading-relaxed">
                      Authentic clay oven roasting over live white oak coals.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="bg-[#FAF3E8] p-4 rounded-xl border border-[#E9D9C2] flex items-start space-x-3.5 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-full bg-[#CC842F]/15 flex items-center justify-center text-[#CC842F] shrink-0 mt-0.5">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#CE4527]">Regional Sourcing</h4>
                    <p className="text-xs text-[#29251F]/70 font-light mt-0.5 leading-relaxed">
                      Heritage spices hand-picked from single-estate Indian growers.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Image Column with Parallax and Float Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF3E8] aspect-[4/3] bg-[#FAF3E8] relative group">
                <motion.img
                  style={{ y: photoParallaxY }}
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                  alt="Live Tandoori Oven Cooking"
                  className="w-full h-[115%] -top-[7.5%] relative object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Award Accent Badge */}
              <motion.div
                style={{ y: badgeFloatY }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 bg-[#242A33]/95 backdrop-blur-md text-[#FFFDF8] p-4 sm:p-5 rounded-2xl border border-[#CC842F]/40 shadow-2xl flex items-center space-x-3.5 max-w-xs"
              >
                <div className="w-10 h-10 rounded-full bg-[#CC842F] text-[#FFFDF8] flex items-center justify-center shrink-0 shadow-md">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#CC842F] uppercase block">
                    TIMELESS CRAFT
                  </span>
                  <p className="text-xs font-serif font-bold text-[#FFFDF8]">
                    Awadhi Slow-Dum Master Techniques
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars of Gastronomy Section */}
      <section className="py-20 md:py-28 bg-[#FAF3E8] border-b border-[#E9D9C2]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-3"
          >
            <span className="text-xs font-bold tracking-[0.25em] text-[#CC842F] uppercase">
              THE PILLARS OF OUR SANCTUARY
            </span>
            <h2 className="font-serif section-heading font-bold text-[#CE4527]">
              OUR CULINARY COMMITMENTS
            </h2>
            <p className="text-base text-[#29251F]/75 font-light">
              Every detail of your visit is orchestrating a symphony of scent, texture, temperature, and taste.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Utensils,
                title: 'Dum Pukht Technique',
                desc: 'Slow-cooking in sealed heavy clay and copper vessels over embers to trap aromatics and delicate spice notes.',
                tag: 'HISTORIC METHOD'
              },
              {
                icon: Flame,
                title: 'Wood-Ember Grilling',
                desc: 'Clay tandoor roasting at 700°F over hardwood charcoal, creating that unmistakable smoky crust and succulent tenderness.',
                tag: 'LIVE FIRE'
              },
              {
                icon: Compass,
                title: 'Single-Estate Spices',
                desc: 'Kashmiri saffron, Tellicherry black pepper, and stone-ground garam masala blended fresh each morning.',
                tag: 'PURITY & FLAVOUR'
              }
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="group bg-[#fde9ce] p-8 rounded-2xl border border-[#E9D9C2] hover:border-[#CC842F] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#CC842F]/15 text-[#CC842F] flex items-center justify-center group-hover:bg-[#CE4527] group-hover:text-[#FFFDF8] transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold tracking-widest text-[#CC842F] uppercase">
                        {pillar.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#CE4527] group-hover:text-[#CC842F] transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs md:text-sm text-[#29251F]/75 font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#E9D9C2]/80 flex items-center text-xs font-bold text-[#CC842F] tracking-widest">
                    <span>EXPLORE TRADITION</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Footer Banner with Smooth Entrance */}
      <section className="py-20 bg-[#242A33] bg-jali-pattern text-[#FAF3E8] text-center relative overflow-hidden border-t border-[#333C48]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto px-6 space-y-6 relative z-10"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-[#CC842F] uppercase block">
            JOIN US AT OUR TABLE
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#FFFDF8]">
            Experience the Heritage Firsthand
          </h2>
          <p className="text-sm md:text-base font-light text-[#FAF3E8]/80 max-w-xl mx-auto leading-relaxed">
            Reserve your table today for lunch or evening dinner service and enjoy a royal culinary escape.
          </p>
          <div className="pt-2">
            <Link
              to="/reservations"
              className="inline-flex items-center space-x-3 bg-[#CE4527] hover:bg-[#B5351A] text-[#FFFDF8] text-xs font-bold tracking-widest px-8 py-4 rounded-md transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] transform"
            >
              <span>BOOK A TABLE NOW</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
