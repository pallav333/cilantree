import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { signatureDishes } from '../data/menu';
import { ArrowRight, Leaf, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SignatureDishes() {
  const videoRef = useRef(null);
  const isVideoInView = useInView(videoRef, { amount: 0.35 });

  useEffect(() => {
    if (!videoRef.current) return;
    if (isVideoInView) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    } else {
      videoRef.current.pause();
    }
  }, [isVideoInView]);

  return (
    <section className="pt-8 md:pt-10 pb-16 md:pb-24 bg-[#fde9ce] border-b border-[#E9D9C2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header: Charminar Video + Menu Link on Left, Text Titles on Right */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 md:mb-8 gap-6">
          {/* Left Column: Charminar Video on Top + View Menu Link Below - Centered */}
          <div className="flex flex-col items-center gap-3 self-center order-2 lg:order-1">
            {/* Charminar Architectural Video */}
            <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] select-none">
              <video
                ref={videoRef}
                src="/charminar.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-auto object-contain block mx-auto"
              />
            </div>

            {/* Menu Link Positioned Below the Image */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="pt-0.5"
            >
              <Link
                to="/menu"
                className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest text-[#CC842F] hover:text-[#CE4527] transition-colors border-b border-[#CC842F] hover:border-[#CE4527] pb-1"
              >
                <span>VIEW FULL DINING MENU</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Section Titles & Description */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-left lg:text-right order-1 lg:order-2"
          >
            <div className="flex items-center space-x-3 mb-2.5 justify-start lg:justify-end">
              <span className="text-xs font-bold tracking-[0.25em] text-[#CC842F] uppercase">
                CURATED SELECTIONS
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-[1px] w-8 bg-[#CC842F] origin-right inline-block"
              />
            </div>
            <h2 className="font-serif section-heading font-bold text-[#CE4527]">
              SIGNATURE DISHES
            </h2>
            <p className="text-[#29251F]/70 font-light text-base md:text-lg mt-1.5">
              A few beloved favourites carefully crafted by our master culinary team.
            </p>
          </motion.div>
        </div>

        {/* 3-Card Responsive Grid with Staggered Parallax Float */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {signatureDishes.map((dish, idx) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-[#FAF3E8] rounded-xl overflow-hidden border border-[#E9D9C2] hover:border-[#CC842F] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Zoom */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF3E8]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Badge */}
                  {dish.badge && (
                    <div className="absolute top-4 left-4 bg-[#CE4527] text-[#FFFDF8] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md border border-[#CC842F]/40 z-10">
                      {dish.badge}
                    </div>
                  )}

                  <div className="absolute top-4 right-4 flex space-x-1.5 z-10">
                    {dish.vegetarian && (
                      <span className="bg-[#CE4527]/80 backdrop-blur-md text-[#FFFDF8] p-1.5 rounded-full" title="Vegetarian">
                        <Leaf className="w-3.5 h-3.5 text-[#CC842F]" />
                      </span>
                    )}
                    {dish.spicy > 0 && (
                      <span className="bg-[#CE4527]/80 backdrop-blur-md text-[#FFFDF8] p-1.5 rounded-full" title="Spicy">
                        <Flame className="w-3.5 h-3.5 text-[#CC842F]" />
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#CC842F] uppercase">
                      {dish.category}
                    </span>
                    <span className="font-serif text-xl font-bold text-[#CC842F]">
                      ${dish.price}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#CE4527] group-hover:text-[#CC842F] transition-colors line-clamp-1 mb-2">
                    {dish.name}
                  </h3>

                  <p className="text-xs text-[#29251F]/70 font-light leading-relaxed line-clamp-3">
                    {dish.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-[#E9D9C2]/60 flex items-center justify-between text-xs font-semibold text-[#CC842F] group-hover:text-[#CE4527] transition-colors">
                <span>EXPLORE DISH</span>
                <ArrowRight className="w-4 h-4 text-[#CC842F] group-hover:text-[#CE4527] transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
