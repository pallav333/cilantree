import { motion } from 'framer-motion';
import { signatureDishes } from '../data/menu';
import { ArrowRight, Leaf, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SignatureDishes() {
  return (
    <section className="py-24 md:py-32 bg-[#E8E0CF]/40 border-b border-[#E8E0CF]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="h-[1px] w-8 bg-[#C98B32]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#C98B32] uppercase">
                CURATED SELECTIONS
              </span>
            </div>
            <h2 className="font-serif section-heading font-bold text-[#173F36]">
              SIGNATURE DISHES
            </h2>
            <p className="text-[#17201D]/70 font-light text-base md:text-lg mt-2 max-w-xl">
              A few beloved favourites carefully crafted by our master culinary team.
            </p>
          </div>

          <Link
            to="/menu"
            className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest text-[#173F36] hover:text-[#C98B32] transition-colors border-b border-[#173F36] hover:border-[#C98B32] pb-1 self-start md:self-auto"
          >
            <span>VIEW FULL DINING MENU</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {signatureDishes.slice(0, 4).map((dish, idx) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-[#F8F5EC] rounded-xl overflow-hidden border border-[#E8E0CF] hover:border-[#C98B32] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Zoom */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#102A43]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#173F36]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Badge */}
                  {dish.badge && (
                    <div className="absolute top-4 left-4 bg-[#C98B32] text-[#173F36] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                      {dish.badge}
                    </div>
                  )}

                  <div className="absolute top-4 right-4 flex space-x-1.5">
                    {dish.vegetarian && (
                      <span className="bg-[#173F36]/80 backdrop-blur-md text-[#F8F5EC] p-1.5 rounded-full" title="Vegetarian">
                        <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                      </span>
                    )}
                    {dish.spicy > 0 && (
                      <span className="bg-[#173F36]/80 backdrop-blur-md text-[#F8F5EC] p-1.5 rounded-full" title="Spicy">
                        <Flame className="w-3.5 h-3.5 text-[#C98B32]" />
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#C98B32] uppercase">
                      {dish.category}
                    </span>
                    <span className="font-serif text-xl font-bold text-[#173F36]">
                      ${dish.price}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#173F36] group-hover:text-[#C98B32] transition-colors line-clamp-1 mb-2">
                    {dish.name}
                  </h3>

                  <p className="text-xs text-[#17201D]/70 font-light leading-relaxed line-clamp-3">
                    {dish.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-[#E8E0CF]/50 flex items-center justify-between text-xs font-semibold text-[#173F36]">
                <span>EXPLORE DISH</span>
                <ArrowRight className="w-4 h-4 text-[#C98B32] transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
