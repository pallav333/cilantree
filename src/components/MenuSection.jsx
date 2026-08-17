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
    <section className="py-24 md:py-32 bg-[#F8F5EC]" id="menu-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center justify-center space-x-3">
              <span className="h-[1px] w-8 bg-[#C98B32]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#C98B32] uppercase">
                ARTISANAL GASTRONOMY
              </span>
              <span className="h-[1px] w-8 bg-[#C98B32]" />
            </div>
            <h2 className="font-serif section-heading font-bold text-[#173F36]">
              OUR DINING MENU
            </h2>
            <p className="text-[#17201D]/75 font-light text-base md:text-lg">
              Explore our curated selection of authentic Indian regional specialties, claypot curries, tandoori roasts, and handcrafted drinks.
            </p>
          </div>
        )}

        {/* Filter Controls & Search */}
        <div className="mb-12 space-y-6">
          {/* Search & Veg Toggle Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto bg-[#E8E0CF]/40 p-3 rounded-2xl border border-[#E8E0CF]">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#173F36]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dishes, spices, ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F8F5EC] border border-[#E8E0CF] text-xs font-medium text-[#17201D] pl-10 pr-4 py-2.5 rounded-xl focus:outline-none focus:border-[#173F36] transition-colors"
              />
            </div>

            {/* Vegetarian Filter Button */}
            <button
              onClick={() => setVegOnly(!vegOnly)}
              className={`flex items-center space-x-2 text-xs font-semibold px-4 py-2.5 rounded-xl border transition-all duration-300 ${
                vegOnly
                  ? 'bg-[#173F36] text-[#F8F5EC] border-[#173F36]'
                  : 'bg-[#F8F5EC] text-[#173F36] border-[#E8E0CF] hover:border-[#173F36]'
              }`}
            >
              <Leaf className={`w-3.5 h-3.5 ${vegOnly ? 'text-emerald-400' : 'text-emerald-600'}`} />
              <span>VEGETARIAN ONLY</span>
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center overflow-x-auto no-scrollbar space-x-2 pb-2 justify-start md:justify-center border-b border-[#E8E0CF]">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative text-xs font-bold tracking-widest uppercase px-5 py-3 rounded-t-lg transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'text-[#173F36] bg-[#E8E0CF]/50'
                    : 'text-[#17201D]/60 hover:text-[#173F36]'
                }`}
              >
                {cat.label}
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeCategoryBorder"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C98B32]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid / List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery + vegOnly}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
          >
            {displayedItems.length > 0 ? (
              displayedItems.map((item) => (
                <div
                  key={item.id}
                  className="group bg-[#F8F5EC] hover:bg-[#E8E0CF]/30 p-5 rounded-2xl border border-[#E8E0CF]/70 hover:border-[#C98B32] transition-all duration-300 flex items-start gap-4 md:gap-6"
                >
                  {/* Thumbnail Image */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-[#102A43] relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.badge && (
                      <span className="absolute bottom-1 left-1 right-1 text-center bg-[#C98B32] text-[#173F36] text-[8px] font-bold tracking-widest uppercase py-0.5 rounded">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2 border-b border-dashed border-[#E8E0CF] pb-2 mb-2">
                      <h3 className="font-serif text-lg md:text-xl font-bold text-[#173F36] group-hover:text-[#C98B32] transition-colors truncate">
                        {item.name}
                      </h3>
                      <span className="font-serif text-lg font-bold text-[#173F36] shrink-0">
                        ${item.price}
                      </span>
                    </div>

                    <p className="text-xs text-[#17201D]/75 font-light leading-relaxed mb-3 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center space-x-3 text-[10px] font-medium text-[#17201D]/60">
                      {item.vegetarian ? (
                        <span className="inline-flex items-center text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                          <Leaf className="w-3 h-3 mr-1" /> Veg
                        </span>
                      ) : (
                        <span className="inline-flex items-center text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                          Non-Veg
                        </span>
                      )}
                      {item.spicy > 0 && (
                        <span className="inline-flex items-center text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded">
                          <Flame className="w-3 h-3 mr-1 text-[#C98B32]" /> Medium Spice
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16 bg-[#E8E0CF]/20 rounded-2xl border border-dashed border-[#E8E0CF]">
                <p className="font-serif text-xl font-medium text-[#173F36] mb-2">No matching dishes found</p>
                <p className="text-xs text-[#17201D]/60 font-light">Try adjusting your search query or active filter tags.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {limit && limit < filteredItems.length && (
          <div className="text-center mt-16">
            <Link
              to="/menu"
              className="inline-flex items-center space-x-2 bg-[#173F36] hover:bg-[#102A43] text-[#F8F5EC] text-xs font-bold tracking-widest px-8 py-4 rounded-md transition-all duration-300 hover:shadow-lg"
            >
              <span>EXPLORE ALL {menuItems.length} MENU DISHES</span>
              <ArrowUpRight className="w-4 h-4 text-[#C98B32]" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
