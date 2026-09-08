import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuCategories, menuItems } from '../data/menu';
import { Search, Leaf, Flame, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MenuSection({ limit, showHeader = true }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegOnly, setVegOnly] = useState(false);

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesCategory = activeCategory === 'ALL' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesVeg = !vegOnly || item.vegetarian;
      return matchesCategory && matchesSearch && matchesVeg;
    });
  }, [activeCategory, searchQuery, vegOnly]);

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <section className="py-24 md:py-32 bg-[#fde9ce]" id="menu-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {showHeader && (
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
                ARTISANAL GASTRONOMY
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
              OUR DINING MENU
            </h2>
            <p className="text-[#29251F]/75 font-light text-base md:text-lg">
              Each dish is individually prepared using authentic Indian spices and local farm-fresh ingredients.
            </p>
          </motion.div>
        )}

        {/* Filter Controls Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8 mb-12"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto bg-[#E9D9C2]/40 p-3 rounded-2xl border border-[#E9D9C2]">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#CC842F]/80 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dishes or ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#FAF3E8] border border-[#E9D9C2] text-xs font-medium text-[#29251F] pl-10 pr-4 py-2.5 rounded-xl focus:outline-none focus:border-[#CE4527] transition-colors"
              />
            </div>

            {/* Vegetarian Filter Button */}
            <button
              onClick={() => setVegOnly(!vegOnly)}
              className={`flex items-center space-x-2 text-xs font-semibold px-4 py-2.5 rounded-xl border transition-all duration-300 ${
                vegOnly
                  ? 'bg-[#CE4527] text-[#FFFDF8] border-[#CE4527]'
                  : 'bg-[#FAF3E8] text-[#CC842F] border-[#E9D9C2] hover:border-[#CC842F]'
              }`}
            >
              <Leaf className={`w-3.5 h-3.5 ${vegOnly ? 'text-[#FFFDF8]' : 'text-[#CC842F]'}`} />
              <span>VEGETARIAN ONLY</span>
            </button>
          </div>

          {/* Category Tabs */}
          <div className="w-full overflow-x-auto no-scrollbar border-b border-[#E9D9C2] pb-px">
            <div className="flex items-center justify-start md:justify-center min-w-max px-4 mx-auto">
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative text-xs font-bold tracking-widest uppercase px-5 py-3 rounded-t-lg transition-colors whitespace-nowrap shrink-0 ${
                    activeCategory === cat.id
                      ? 'text-[#CE4527] bg-[#E9D9C2]/60'
                      : 'text-[#29251F]/60 hover:text-[#CC842F]'
                  }`}
                >
                  {cat.label}
                  {activeCategory === cat.id && (
                    <motion.div
                      layoutId="activeCategoryBorder"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#CC842F]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + (vegOnly ? '-veg' : '') + searchQuery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
          >
            {displayedItems.length > 0 ? (
              displayedItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.35), ease: [0.22, 1, 0.36, 1] }}
                  className="group bg-[#FAF3E8] p-4 rounded-xl border border-[#E9D9C2] hover:border-[#CC842F] shadow-sm hover:shadow-md transition-all duration-300 flex items-center space-x-5"
                >
                  {/* Thumbnail */}
                  <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-[#FAF3E8] relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.badge && (
                      <span className="absolute bottom-1 left-1 right-1 text-center bg-[#CC842F] text-[#FFFDF8] text-[8px] font-bold tracking-widest uppercase py-0.5 rounded">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2 border-b border-dashed border-[#E9D9C2] pb-2 mb-2">
                      <h3 className="font-serif text-lg md:text-xl font-bold text-[#CE4527] group-hover:text-[#CC842F] transition-colors truncate">
                        {item.name}
                      </h3>
                      <span className="font-serif text-lg font-bold text-[#CC842F] shrink-0">
                        ${item.price}
                      </span>
                    </div>

                    <p className="text-xs text-[#29251F]/75 font-light leading-relaxed mb-3 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center space-x-3 text-[10px] font-medium text-[#29251F]/60">
                      {item.vegetarian ? (
                        <span className="inline-flex items-center text-[#CE4527] bg-[#CE4527]/10 border border-[#CE4527]/30 px-2 py-0.5 rounded">
                          <Leaf className="w-3 h-3 mr-1 text-[#CE4527]" /> Veg
                        </span>
                      ) : (
                        <span className="inline-flex items-center text-amber-900 bg-amber-100/70 border border-amber-300 px-2 py-0.5 rounded">
                          Non-Veg
                        </span>
                      )}
                      {item.spicy > 0 && (
                        <span className="inline-flex items-center text-[#CC842F] bg-[#CC842F]/10 border border-[#CC842F]/30 px-2 py-0.5 rounded">
                          <Flame className="w-3 h-3 mr-1 text-[#CC842F]" /> Medium Spice
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-16 bg-[#E9D9C2]/20 rounded-2xl border border-dashed border-[#E9D9C2]">
                <p className="font-serif text-xl font-medium text-[#CC842F] mb-2">No matching dishes found</p>
                <p className="text-xs text-[#29251F]/60 font-light">Try adjusting your search query or active filter tags.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {limit && limit < filteredItems.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <Link
              to="/menu"
              className="inline-flex items-center space-x-2 bg-[#CC842F] hover:bg-[#B57326] text-[#FFFDF8] text-xs font-bold tracking-widest px-8 py-4 rounded-md transition-all duration-300 hover:shadow-lg border border-[#CE4527]/30"
            >
              <span>EXPLORE ALL {menuItems.length} MENU DISHES</span>
              <ArrowUpRight className="w-4 h-4 text-[#FFFDF8]" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
