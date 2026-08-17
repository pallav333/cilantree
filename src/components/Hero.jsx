import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Utensils, Award } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F8F5EC]">
      {/* Background Subtle Accent Graphic */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#E8E0CF]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT: Text Content & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8"
          >
            {/* Small Category Tag */}
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-[#173F36]/5 border border-[#173F36]/15 px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#C98B32] animate-pulse" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#173F36] uppercase">
                Award-Winning Modern Fine Dining
              </span>
            </motion.div>

            {/* Main Editorial Heading */}
            <motion.h1 
              variants={itemVariants} 
              className="font-serif hero-heading font-bold text-[#173F36] tracking-tight uppercase"
            >
              AUTHENTIC<br />
              <span className="italic font-normal text-[#C98B32]">INDIAN</span><br />
              FLAVOURS.
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-[#17201D]/80 font-light max-w-xl leading-relaxed"
            >
              A contemporary dining experience rooted in the timeless culinary heritage of India, crafted with organic local produce and royal heritage spices.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/menu"
                className="inline-flex items-center space-x-3 bg-[#173F36] hover:bg-[#102A43] text-[#F8F5EC] text-xs font-bold tracking-widest px-8 py-4 rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>EXPLORE MENU</span>
                <ArrowRight className="w-4 h-4 text-[#C98B32]" />
              </Link>
              <Link
                to="/reservations"
                className="inline-flex items-center space-x-2 bg-[#E8E0CF] hover:bg-[#173F36] hover:text-[#F8F5EC] text-[#173F36] text-xs font-bold tracking-widest px-8 py-4 rounded-md border border-[#173F36]/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Utensils className="w-4 h-4 text-[#C98B32]" />
                <span>RESERVE A TABLE</span>
              </Link>
            </motion.div>

            {/* Culinary Highlights / Micro Trust Badges */}
            <motion.div 
              variants={itemVariants} 
              className="pt-6 flex items-center space-x-8 border-t border-[#E8E0CF] text-xs font-medium text-[#17201D]/70"
            >
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-[#C98B32]" />
                <span>Michelin Recommended 2025</span>
              </div>
              <div className="h-4 w-[1px] bg-[#E8E0CF]" />
              <div>100% Organic Spices</div>
              <div className="h-4 w-[1px] bg-[#E8E0CF] hidden sm:block" />
              <div className="hidden sm:block">Live Tandoor Craft</div>
            </motion.div>
          </motion.div>

          {/* RIGHT: High-Impact Photography Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Hero Food Image */}
              <div className="overflow-hidden rounded-2xl shadow-2xl border-4 border-[#F8F5EC] bg-[#173F36] aspect-[4/5] relative">
                <img
                  src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80"
                  alt="Authentic Indian Royal Curry Feast"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173F36]/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Subtle Image Tag */}
                <div className="absolute bottom-6 left-6 right-6 text-[#F8F5EC]">
                  <span className="text-[10px] tracking-[0.2em] font-semibold text-[#C98B32] uppercase block mb-1">
                    Signature Dish
                  </span>
                  <h3 className="font-serif text-xl font-bold">Old Delhi Claypot Butter Chicken</h3>
                </div>
              </div>

              {/* Rotating Circular Saffron Badge */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 w-28 h-28 md:w-32 md:h-32 bg-[#C98B32] text-[#173F36] rounded-full p-2 flex items-center justify-center shadow-xl border-4 border-[#F8F5EC] z-20 pointer-events-none"
              >
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    fill="none"
                  />
                  <text className="text-[9.5px] font-bold tracking-[0.22em] uppercase fill-[#173F36]">
                    <textPath href="#circlePath">
                      AUTHENTIC • INDIAN • CUISINE •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-lg font-bold text-[#173F36]">★</span>
                </div>
              </motion.div>

              {/* Secondary Floating Card */}
              <div className="absolute -top-6 -right-4 md:-top-8 md:-right-6 bg-[#F8F5EC]/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-[#E8E0CF] hidden sm:flex items-center space-x-3 max-w-[200px]">
                <img
                  src="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=200&q=80"
                  alt="Paneer Tikka"
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <span className="text-[10px] tracking-wider text-[#C98B32] font-semibold block uppercase">Fresh Tandoori</span>
                  <span className="font-serif text-xs font-bold text-[#173F36]">Malai Paneer Tikka</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
