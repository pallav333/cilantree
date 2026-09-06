import { useRef } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function StorySection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  // Pure GPU parallax transforms for the photographic window, floating badge, and Taj Mahal image
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const badgeY = useTransform(scrollYProgress, [0, 1], ['18px', '-18px']);
  const tajParallaxY = useTransform(scrollYProgress, [0, 1], ['-18px', '22px']);

  return (
    <section ref={sectionRef} className="pt-10 md:pt-14 pb-20 md:pb-28 bg-[#F5EBDD] border-b border-[#E9D9C2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Row: Label & Headline on Left, Animated taj.png in the Right Blank Gap */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 md:mb-12">
          <div>
            {/* Section Header Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 mb-4"
            >
              <span className="h-[1px] w-8 bg-[#CC842F]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#CC842F] uppercase">
                OUR STORY & PHILOSOPHY
              </span>
            </motion.div>

            {/* Large Editorial Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-[#CE4527] leading-tight">
                A TASTE OF INDIA,<br />
                <span className="italic font-normal text-[#CC842F]">CRAFTED WITH CARE.</span>
              </h2>
            </motion.div>
          </div>

          {/* Taj Mahal Illustration from public/taj.png */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: tajParallaxY }}
            className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[460px] self-center lg:self-end select-none pointer-events-none will-change-transform"
          >
            {/* GPU Ambient Levitation without JS tween collision */}
            <div className="ambient-levitate relative w-full aspect-[2/1]">
              <img
                src="/taj.png"
                alt="Taj Mahal Outline"
                loading="eager"
                className="w-full h-full object-contain mix-blend-multiply opacity-65 hover:opacity-80 transition-opacity duration-300 drop-shadow-[0_2px_10px_rgba(204,132,47,0.1)]"
              />
            </div>
          </motion.div>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Text Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-6 space-y-6 text-[#29251F]/80 leading-relaxed font-light text-base md:text-lg"
          >
            <p className="first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:text-[#CC842F] first-letter:mr-3 first-letter:float-left leading-normal">
              At Saffron Circle, dining is an homage to India&apos;s extraordinary culinary tapestry. From the aromatic street markets of Old Delhi to the spice-scented backwaters of Kerala, our kitchen captures the soul of traditional recipes and elevates them through contemporary artistry.
            </p>
            <p>
              We source raw whole spices directly from heritage family farms across India, hand-grinding them daily in our kitchen to preserve their fragile essential oils and peak aromatic vibrancy.
            </p>
            <p>
              Every dish is thoughtfully paired with house-baked tandoori breads, artisanal preserves, and bespoke cocktails that tell a story of ancient spice routes reimagined for modern gourmands.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="pt-6 border-t border-[#E9D9C2] flex items-center justify-between"
            >
              <div>
                <span className="font-serif text-3xl font-bold text-[#CE4527] block">100%</span>
                <span className="text-xs text-[#29251F]/60 tracking-wider uppercase font-semibold">Organic Whole Spices</span>
              </div>
              <div className="h-10 w-[1px] bg-[#E9D9C2]" />
              <div>
                <span className="font-serif text-3xl font-bold text-[#CE4527] block">24-Hour</span>
                <span className="text-xs text-[#29251F]/60 tracking-wider uppercase font-semibold">Wood-Ember Simmer</span>
              </div>
              <div className="h-10 w-[1px] bg-[#E9D9C2]" />
              <div>
                <span className="font-serif text-3xl font-bold text-[#CE4527] block">Awadhi</span>
                <span className="text-xs text-[#29251F]/60 tracking-wider uppercase font-semibold">Heritage Craft</span>
              </div>
            </motion.div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest text-[#CC842F] hover:text-[#CE4527] transition-colors group"
              >
                <span>LEARN MORE ABOUT OUR HERITAGE</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT: Editorial Image & Floating Glass Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Parallax Image Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-[#FAF3E8] bg-[#FAF3E8] aspect-[4/3]">
              <motion.img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                alt="Saffron Circle Restaurant Interior & Dining Ambience"
                style={{ y: imageY, scale: 1.15, willChange: 'transform' }}
                className="w-full h-full object-cover"
              />

              {/* Multi-layer Floating Glass Badge */}
              <motion.div
                style={{ y: badgeY, willChange: 'transform' }}
                className="absolute bottom-6 left-6 right-6 bg-[#242A33]/85 backdrop-blur-md px-5 py-3.5 rounded-xl border border-white/15 text-[#FFFDF8] flex items-center justify-between shadow-xl pointer-events-none"
              >
                <div>
                  <span className="text-[10px] tracking-[0.2em] font-semibold text-[#CC842F] uppercase block">
                    Warm Dining Atmosphere
                  </span>
                  <h3 className="font-serif text-base md:text-lg font-bold text-[#FFFDF8]">San Francisco Flagship Sanctum</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#CC842F] text-[#FFFDF8] flex items-center justify-center font-bold text-sm shadow-lg shrink-0 ml-3">
                  <Sparkles className="w-5 h-5 text-[#FFFDF8]" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
