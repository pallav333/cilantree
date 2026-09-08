import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Utensils, Award } from 'lucide-react';

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const videoY = useTransform(scrollYProgress, [0, 1], [35, -35]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [65, -65]);
  const glowY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
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
    <section ref={sectionRef} className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#fde9ce]">
      {/* Background Subtle Accent Graphic with Parallax */}
      <motion.div
        style={{ y: glowY }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-[#E9D9C2]/40 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT: Text Content & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Small Category Tag */}
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-[#CC842F]/15 border border-[#CC842F]/30 px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#CC842F] animate-pulse" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#CC842F] uppercase">
                Award-Winning Modern Fine Dining
              </span>
            </motion.div>

            {/* Main Editorial Heading */}
            <motion.h1 
              variants={itemVariants} 
              className="font-serif hero-heading font-bold text-[#CE4527] tracking-tight uppercase"
            >
              AUTHENTIC<br />
              <span className="italic font-normal text-[#CC842F]">INDIAN</span><br />
              FLAVOURS.
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-[#29251F]/80 font-light max-w-xl leading-relaxed"
            >
              A contemporary dining experience rooted in the timeless culinary heritage of India, crafted with organic local produce and royal heritage spices.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/menu"
                className="inline-flex items-center space-x-3 bg-[#CE4527] hover:bg-[#B5351A] text-[#FFFDF8] text-xs font-bold tracking-widest px-8 py-4 rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>EXPLORE MENU</span>
                <ArrowRight className="w-4 h-4 text-[#FFFDF8]" />
              </Link>
              <Link
                to="/reservations"
                className="group inline-flex items-center space-x-2 bg-[#FAF3E8] hover:bg-[#CC842F] hover:text-[#FFFDF8] text-[#CC842F] text-xs font-bold tracking-widest px-8 py-4 rounded-md border border-[#CC842F] transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                <Utensils className="w-4 h-4 text-[#CC842F] group-hover:text-[#FFFDF8] transition-colors duration-300" />
                <span>RESERVE A TABLE</span>
              </Link>
            </motion.div>

            {/* Culinary Highlights / Micro Trust Badges */}
            <motion.div 
              variants={itemVariants} 
              className="pt-6 flex items-center space-x-8 border-t border-[#E9D9C2] text-xs font-medium text-[#29251F]/70"
            >
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-[#CC842F]" />
                <span>Michelin Recommended 2025</span>
              </div>
              <div className="h-4 w-[1px] bg-[#E9D9C2]" />
              <div>100% Organic Spices</div>
              <div className="h-4 w-[1px] bg-[#E9D9C2] hidden sm:block" />
              <div className="hidden sm:block">Live Tandoor Craft</div>
            </motion.div>
          </motion.div>

          {/* RIGHT: High-Impact Photography Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{ y: videoY }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Hero Food Image */}
              <div className="overflow-hidden rounded-2xl shadow-2xl border-4 border-[#FAF3E8] bg-[#FAF3E8] aspect-[4/5] relative">
                <video
                  src="/video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Rotating Circular Saffron Badge with parallax separation */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                style={{ y: badgeY }}
                className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 w-28 h-28 md:w-32 md:h-32 bg-[#CE4527] text-[#FFFDF8] rounded-full p-2 flex items-center justify-center shadow-xl border-4 border-[#FAF3E8] z-20 pointer-events-none"
              >
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    fill="none"
                  />
                  <text className="text-[9.5px] font-bold tracking-[0.22em] uppercase fill-[#FFFDF8]">
                    <textPath href="#circlePath">
                      AUTHENTIC ★ INDIAN ★ CUISINE ★
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-lg font-bold text-[#CC842F]">★</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
