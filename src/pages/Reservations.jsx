import { motion } from 'framer-motion';
import ReservationForm from '../components/ReservationForm';
import LocationSection from '../components/LocationSection';
import { Sparkles, Shirt, Users, Clock } from 'lucide-react';

export default function ReservationsPage() {
  return (
    <main className="pt-28 pb-20 bg-[#F5EBDD] overflow-hidden">
      {/* Page Hero */}
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
                TABLE RESERVATIONS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif hero-heading font-bold text-[#FFFDF8]"
            >
              RESERVE YOUR TABLE.<br />
              <span className="italic font-normal text-[#CC842F]">A ROYAL WELCOME.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-xl text-[#FAF3E8]/85 font-light max-w-xl leading-relaxed"
            >
              Select your preferred date, party size, and dining location. We hold reservations for up to 15 minutes past scheduled arrival.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Reservation Form */}
      <section className="border-b border-[#E9D9C2]">
        <ReservationForm />
      </section>

      {/* Dining Policy Cards with Staggered Entrance */}
      <section className="py-20 md:py-28 bg-[#FAF3E8] border-b border-[#E9D9C2]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-2xl mx-auto mb-16 space-y-3"
          >
            <div className="inline-flex items-center justify-center space-x-3">
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-[1px] w-8 bg-[#CC842F] origin-right inline-block"
              />
              <span className="text-xs font-bold tracking-[0.25em] text-[#CC842F] uppercase">
                DINING POLICIES &amp; ACCESSIBILITY
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-[1px] w-8 bg-[#CC842F] origin-left inline-block"
              />
            </div>
            <h2 className="font-serif section-heading font-bold text-[#CE4527]">
              ESSENTIAL INFORMATION
            </h2>
            <p className="text-base text-[#29251F]/75 font-light">
              Helpful guidelines to ensure a sublime dining atmosphere for all guests.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shirt,
                title: 'Dress Code Policy',
                desc: 'Smart casual or formal attire is requested in our main dining sanctuary. Athletic wear, tank tops, and beach footwear are kindly prohibited.',
                badge: 'ATTIRE'
              },
              {
                icon: Users,
                title: 'Large Group Dining',
                desc: 'For parties of 8 or more guests, please contact our private dining concierge directly at concierge@saffroncircle.com for chef’s tasting menu arrangements.',
                badge: 'PARTIES 8+'
              },
              {
                icon: Clock,
                title: 'Cancellation Grace',
                desc: 'We kindly request at least 24 hours notice for table cancellations or party size reductions to accommodate waiting guests.',
                badge: 'TIMING'
              }
            ].map((policy, idx) => {
              const Icon = policy.icon;
              return (
                <motion.div
                  key={policy.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[#F5EBDD] p-8 rounded-2xl border border-[#E9D9C2] hover:border-[#CC842F] shadow-sm hover:shadow-xl transition-all duration-500 space-y-4 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#CC842F]/15 text-[#CC842F] flex items-center justify-center group-hover:bg-[#CE4527] group-hover:text-[#FFFDF8] transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold tracking-widest text-[#CC842F] uppercase">
                        {policy.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#CE4527] group-hover:text-[#CC842F] transition-colors">
                      {policy.title}
                    </h3>

                    <p className="text-xs md:text-sm text-[#29251F]/75 font-light leading-relaxed">
                      {policy.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E9D9C2] flex items-center justify-between text-[11px] font-semibold text-[#CC842F]">
                    <span>SANCTUARY POLICY</span>
                    <span>✓ VERIFIED</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Locations */}
      <LocationSection />
    </main>
  );
}
