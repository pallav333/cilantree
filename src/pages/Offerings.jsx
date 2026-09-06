import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Gift, 
  UtensilsCrossed, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  ArrowRight,
  Info,
  Award
} from 'lucide-react';

export default function Offerings() {
  const giftSectionRef = useRef(null);
  const { scrollYProgress: giftScroll } = useScroll({
    target: giftSectionRef,
    offset: ['start end', 'end start']
  });

  const cardParallaxY = useTransform(giftScroll, [0, 1], ['-12px', '16px']);
  const charminarParallaxY = useTransform(giftScroll, [0, 1], ['-16px', '20px']);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Corporate Dinner',
    guestCount: '25-50 Guests',
    eventDate: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="pt-28 pb-24 bg-[#F5EBDD] overflow-hidden">
      {/* Editorial Page Hero */}
      <section className="bg-[#242A33] bg-jali-pattern text-[#FAF3E8] py-20 md:py-28 relative overflow-hidden border-b border-[#333C48]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center space-x-2 bg-[#CC842F]/20 border border-[#CC842F]/40 px-4 py-1.5 rounded-full"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#CC842F]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#CC842F] uppercase">
                EXCLUSIVE OFFERINGS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif hero-heading font-bold text-[#FFFDF8] tracking-tight"
            >
              GIFT CARDS &amp; <br />
              <span className="italic font-normal text-[#CC842F]">BESPOKE CATERING.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-xl text-[#FAF3E8]/80 font-light max-w-2xl leading-relaxed"
            >
              Share the timeless artistry of royal Indian gastronomy through our hand-pressed physical gift cards or bring the complete Saffron Circle culinary theatre to your private celebrations.
            </motion.p>
          </div>

          {/* Quick Anchor Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-[#333C48]/60"
          >
            <a
              href="#gift-cards"
              className="inline-flex items-center space-x-2 bg-[#FAF3E8]/10 hover:bg-[#FAF3E8]/20 text-[#FFFDF8] px-5 py-2.5 rounded-full text-xs font-bold tracking-widest border border-white/20 transition-colors"
            >
              <Gift className="w-3.5 h-3.5 text-[#CC842F]" />
              <span>PHYSICAL GIFT CARDS</span>
            </a>
            <a
              href="#catering"
              className="inline-flex items-center space-x-2 bg-[#FAF3E8]/10 hover:bg-[#FAF3E8]/20 text-[#FFFDF8] px-5 py-2.5 rounded-full text-xs font-bold tracking-widest border border-white/20 transition-colors"
            >
              <UtensilsCrossed className="w-3.5 h-3.5 text-[#CC842F]" />
              <span>PRIVATE CATERING</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: PHYSICAL GIFT CARDS */}
      <section ref={giftSectionRef} id="gift-cards" className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12 border-b border-[#E9D9C2]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Visual Presentation: Physical Gift Card & Charminar Monument Accent */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-center lg:items-start justify-start"
          >
            <div className="w-full max-w-xl space-y-5">
              {/* Physical Gift Card Display with Parallax */}
              <motion.div style={{ y: cardParallaxY }} className="relative">
                <img 
                  src="/gift_card.png" 
                  alt="Saffron Circle Gift Card" 
                  className="w-full h-auto object-contain block select-none drop-shadow-[0_12px_30px_rgba(41,37,31,0.15)] hover:scale-[1.01] transition-transform duration-500"
                />
              </motion.div>

              {/* Artisanal Keepsake Packaging Description */}
              <div className="bg-[#FAF3E8] p-4 rounded-xl border border-[#CC842F]/40 shadow-sm flex items-center space-x-3.5 text-xs text-[#29251F]">
                <div className="w-8 h-8 rounded-full bg-[#CC842F]/15 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-[#CC842F]" />
                </div>
                <div>
                  <strong className="block text-[#CE4527] font-serif text-sm">Artisanal Keepsake Packaging</strong>
                  <span className="text-[#29251F]/75">Hand-pressed gift card presented to you in a premium saffron envelope.</span>
                </div>
              </div>

              {/* Charminar Architectural Heritage Illustration with Parallax */}
              <motion.div style={{ y: charminarParallaxY }} className="pt-2 flex flex-col items-center justify-center select-none">
                <div className="ambient-levitate relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] aspect-[4/3]">
                  <img
                    src="/charminar.png"
                    alt="Charminar Architectural Heritage"
                    loading="lazy"
                    className="w-full h-full object-contain mix-blend-multiply opacity-75 hover:opacity-90 transition-opacity duration-300 drop-shadow-[0_2px_12px_rgba(204,132,47,0.12)]"
                  />
                </div>
                <span className="text-[10px] tracking-[0.25em] font-semibold text-[#CC842F] uppercase -mt-1 text-center">
                  Royal Culinary Heritage &amp; Timeless Craft
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Physical-Only Gift Card Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6 order-1 lg:order-2"
          >
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-[1px] w-8 bg-[#CC842F] origin-left inline-block"
                />
                <span className="text-xs font-bold tracking-[0.25em] text-[#CC842F] uppercase">
                  IN-PERSON EXCLUSIVE
                </span>
              </div>
              <h2 className="font-serif section-heading font-bold text-[#CE4527]">
                THE GIFT OF ROYAL DINING
              </h2>
              <p className="text-[#29251F]/75 font-light text-base md:text-lg mt-3 leading-relaxed">
                Whether celebrating milestones, anniversaries, or simply treating someone special to the unforgettable spices of India, our signature gift cards deliver a memorable culinary journey.
              </p>
            </div>

            {/* Crucial Physical-Only Notice Banner */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[#FAF3E8] border-l-4 border-[#CC842F] p-5 rounded-r-xl shadow-sm space-y-2"
            >
              <div className="flex items-center space-x-2 text-[#CE4527]">
                <Info className="w-5 h-5 text-[#CC842F] shrink-0" />
                <h4 className="font-serif font-bold text-base">Important Notice: Physical Gift Cards Only</h4>
              </div>
              <p className="text-xs md:text-sm text-[#29251F]/80 leading-relaxed font-light">
                Please note that <strong className="font-semibold text-[#29251F]">Saffron Circle gift cards are issued exclusively as physical cards directly at our restaurant</strong>. We do not provide digital or electronic gift cards online via our website. Each card is personally crafted, verified, and handed to you in luxury wax-sealed stationery for an authentic tactile gifting experience.
              </p>
            </motion.div>

            {/* Key Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: 'Custom Denominations', desc: '$50, $100, $250, $500, or any bespoke value of your choice.' },
                { title: 'No Expiration Date', desc: 'Valid across our full dinner menu, tasting feasts, and botanic craft cocktails.' },
                { title: 'Concierge Pickup', desc: 'Collect at our host stand anytime during regular dinner service hours.' },
                { title: 'Advance Preparation', desc: 'Call ahead and we will have your gift card wrapped and ready at the front desk.' }
              ].map((feat, idx) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
                  className="flex items-start space-x-3 bg-[#FAF3E8] p-4 rounded-xl border border-[#E9D9C2] shadow-sm hover:border-[#CC842F] transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#CC842F] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-xs text-[#29251F] uppercase tracking-wider">{feat.title}</h5>
                    <p className="text-xs text-[#29251F]/70 mt-1">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA action row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center gap-4"
            >
              <a
                href="tel:+15553482890"
                className="inline-flex items-center space-x-2 bg-[#CE4527] hover:bg-[#B5351A] text-[#FFFDF8] text-xs font-bold tracking-widest px-6 py-3.5 rounded-md transition-all shadow-md hover:shadow-lg hover:scale-[1.02] transform"
              >
                <Phone className="w-4 h-4 text-[#FFFDF8]" />
                <span>CALL CONCIERGE TO PRE-ORDER</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest text-[#CC842F] hover:text-[#CE4527] border-b border-[#CC842F] pb-1 transition-colors"
              >
                <span>VIEW RESTAURANT HOURS &amp; DIRECTIONS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 2: BESPOKE CATERING SERVICES */}
      <section id="catering" className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
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
              PRIVATE EVENTS &amp; CATERING
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
            CATERING MASTERCLASS
          </h2>
          <p className="text-[#29251F]/75 font-light text-base md:text-lg">
            From intimate private chef gatherings to high-profile corporate galas and grand Indian weddings, we bring authentic royal flavours and impeccable fine dining service to your venue.
          </p>
        </motion.div>

        {/* 3 Catering Packages Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
          {/* Package 1 */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#FAF3E8] p-8 rounded-2xl border border-[#E9D9C2] hover:border-[#CC842F] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#CC842F]/15 flex items-center justify-center text-[#CC842F] group-hover:bg-[#CE4527] group-hover:text-[#FFFDF8] transition-colors duration-300">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#CC842F] uppercase block">
                Intimate Celebrations (15–40 Guests)
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#CE4527]">The Awadhi Soirée</h3>
              <p className="text-xs text-[#29251F]/70 font-light leading-relaxed">
                A refined multi-course dining experience featuring signature claypot curries, slow-dum biryanis, warm artisanal naans, and curated pairing recommendations.
              </p>
              <ul className="space-y-2 text-xs text-[#29251F]/80 pt-2">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CC842F]" />
                  <span>3 Appetizers &amp; 3 Signature Mains</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CC842F]" />
                  <span>Slow-cooked Dum Biryani &amp; Raita</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CC842F]" />
                  <span>Gold-Leaf Pistachio Gulab Jamun</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-[#E9D9C2]">
              <span className="text-xs font-semibold text-[#CC842F]">Starting at $65 / guest</span>
            </div>
          </motion.div>

          {/* Package 2 - Featured */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#FAF3E8] p-8 rounded-2xl border-2 border-[#CC842F] shadow-xl relative flex flex-col justify-between hover:shadow-2xl transition-all duration-500"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#CE4527] text-[#FFFDF8] text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-full shadow">
              MOST POPULAR
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#CE4527] text-[#FFFDF8] flex items-center justify-center">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#CC842F] uppercase block">
                Live Theatre Experience (40–150 Guests)
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#CE4527]">Live Tandoor &amp; Grill Feast</h3>
              <p className="text-xs text-[#29251F]/70 font-light leading-relaxed">
                Our master tandoor chefs arrive with specialized portable charcoal tandoor equipment, preparing fresh naan and smoking kebabs live in front of your guests.
              </p>
              <ul className="space-y-2 text-xs text-[#29251F]/80 pt-2">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CE4527]" />
                  <span>On-site live clay tandoor oven &amp; chefs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CE4527]" />
                  <span>Truffle naan &amp; live paneer/lamb skewers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CE4527]" />
                  <span>Full buffet setup with copper service ware</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-[#E9D9C2]">
              <span className="text-xs font-semibold text-[#CC842F]">Starting at $95 / guest</span>
            </div>
          </motion.div>

          {/* Package 3 */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#FAF3E8] p-8 rounded-2xl border border-[#E9D9C2] hover:border-[#CC842F] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#CC842F]/15 flex items-center justify-center text-[#CC842F] group-hover:bg-[#CE4527] group-hover:text-[#FFFDF8] transition-colors duration-300">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#CC842F] uppercase block">
                Grand Banquets (100+ Guests)
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#CE4527]">The Maharaja Royal Gala</h3>
              <p className="text-xs text-[#29251F]/70 font-light leading-relaxed">
                Full-scale luxury catering tailored for grand weddings and gala banquets, complete with custom crafted spice cocktail bars, dessert tables, and executive service staff.
              </p>
              <ul className="space-y-2 text-xs text-[#29251F]/80 pt-2">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CC842F]" />
                  <span>Tailored bespoke tasting menu design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CC842F]" />
                  <span>Spice mixologist &amp; botanical bar service</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CC842F]" />
                  <span>Dedicated event manager &amp; uniform staff</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-[#E9D9C2]">
              <span className="text-xs font-semibold text-[#CC842F]">Custom Corporate &amp; Wedding Quotes</span>
            </div>
          </motion.div>
        </div>

        {/* Interactive Catering Inquiry Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#FAF3E8] rounded-3xl p-8 md:p-12 border border-[#E9D9C2] shadow-xl max-w-4xl mx-auto"
        >
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#CE4527]">
              Request a Catering Consultation
            </h3>
            <p className="text-xs md:text-sm text-[#29251F]/75 font-light">
              Fill in your preliminary event details below. Our events director will connect with you within 24 hours to craft a custom menu and proposal.
            </p>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#242A33] text-[#FAF3E8] p-8 md:p-12 rounded-2xl text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-[#CC842F] text-[#FFFDF8] flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#FFFDF8]">
                Inquiry Received
              </h4>
              <p className="text-xs md:text-sm text-[#FAF3E8]/80 max-w-md mx-auto font-light leading-relaxed">
                Thank you for considering Saffron Circle for your upcoming gathering. Our Executive Culinary Director and Event Concierge will review your details and contact you shortly at <strong className="text-[#CC842F]">{formData.email}</strong>.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 inline-block text-xs font-bold tracking-widest text-[#CC842F] hover:underline"
              >
                Submit another inquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold tracking-wider text-[#29251F] uppercase mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikram Sharma"
                    className="w-full bg-[#F5EBDD] border border-[#E9D9C2] text-xs text-[#29251F] px-4 py-3 rounded-lg focus:outline-none focus:border-[#CE4527]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-wider text-[#29251F] uppercase mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. vikram@example.com"
                    className="w-full bg-[#F5EBDD] border border-[#E9D9C2] text-xs text-[#29251F] px-4 py-3 rounded-lg focus:outline-none focus:border-[#CE4527]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-wider text-[#29251F] uppercase mb-2">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-[#F5EBDD] border border-[#E9D9C2] text-xs text-[#29251F] px-4 py-3 rounded-lg focus:outline-none focus:border-[#CE4527]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-wider text-[#29251F] uppercase mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full bg-[#F5EBDD] border border-[#E9D9C2] text-xs text-[#29251F] px-4 py-3 rounded-lg focus:outline-none focus:border-[#CE4527]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-wider text-[#29251F] uppercase mb-2">
                    Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full bg-[#F5EBDD] border border-[#E9D9C2] text-xs text-[#29251F] px-4 py-3 rounded-lg focus:outline-none focus:border-[#CE4527]"
                  >
                    <option>Corporate Dinner</option>
                    <option>Wedding Banquet</option>
                    <option>Private Home Party</option>
                    <option>Festival / Holiday Gala</option>
                    <option>Other Special Gathering</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-wider text-[#29251F] uppercase mb-2">
                    Guest Count Range
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full bg-[#F5EBDD] border border-[#E9D9C2] text-xs text-[#29251F] px-4 py-3 rounded-lg focus:outline-none focus:border-[#CE4527]"
                  >
                    <option>15 – 30 Guests</option>
                    <option>30 – 60 Guests</option>
                    <option>60 – 120 Guests</option>
                    <option>120+ Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold tracking-wider text-[#29251F] uppercase mb-2">
                  Event Location &amp; Special Preferences
                </label>
                <textarea
                  rows="4"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about the venue, dietary preferences (vegetarian, vegan, halal, gluten-free), live tandoor interest, or any specific dishes you would like included..."
                  className="w-full bg-[#F5EBDD] border border-[#E9D9C2] text-xs text-[#29251F] p-4 rounded-lg focus:outline-none focus:border-[#CE4527]"
                />
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center space-x-2 bg-[#CE4527] hover:bg-[#B5351A] text-[#FFFDF8] text-xs font-bold tracking-widest px-10 py-4 rounded-md transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] transform"
                >
                  <span>SUBMIT CATERING INQUIRY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </section>
    </main>
  );
}
