import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryCategories, galleryItems } from '../data/gallery';
import { X, ZoomIn } from 'lucide-react';

export default function MasonryGallery({ limit, showHeader = true }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = galleryItems.filter(item => 
    activeCategory === 'ALL' || item.category === activeCategory
  );

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <section className="py-24 md:py-32 bg-[#fde9ce] border-b border-[#E9D9C2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto mb-12 space-y-3"
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
                VISUAL IMMERSION
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
              GALLERY OF CULINARY ART
            </h2>
            <p className="text-[#29251F]/75 font-light text-base md:text-lg">
              A visual glimpse into our handcrafted dishes, fiery tandoori ovens, and warm dining sanctum.
            </p>
          </motion.div>
        )}

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="w-full overflow-x-auto no-scrollbar pb-2 mb-12"
        >
          <div className="flex items-center justify-start sm:justify-center min-w-max px-4 mx-auto space-x-2 md:space-x-4">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative text-xs font-bold tracking-widest px-5 py-2.5 rounded-full border transition-all duration-300 shrink-0 ${
                  activeCategory === cat
                    ? 'bg-[#CE4527] text-[#FFFDF8] border-[#CE4527] shadow-md'
                    : 'bg-transparent text-[#29251F]/70 border-[#E9D9C2] hover:border-[#CC842F] hover:text-[#CC842F]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Asymmetrical Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item, idx) => {
              // Asymmetrical span styling
              let spanClass = 'col-span-1 row-span-1 h-72';
              if (item.aspect === 'tall') spanClass = 'col-span-1 row-span-2 h-96 sm:h-[450px]';
              if (item.aspect === 'wide') spanClass = 'col-span-1 sm:col-span-2 row-span-1 h-72 sm:h-80';

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setSelectedImage(item)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-[#FAF3E8] shadow-md hover:shadow-2xl transition-all duration-500 border border-[#E9D9C2] hover:border-[#CC842F] ${spanClass}`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700"
                  />

                  {/* Hover Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242A33]/90 via-[#242A33]/30 to-transparent p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="self-end bg-[#CC842F] text-[#FFFDF8] p-2.5 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                    <div className="bg-[#242A33]/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15 inline-block self-start shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-[#CC842F] uppercase block">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-base md:text-lg font-bold text-[#FFFDF8]">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-[#29251F]/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#242A33] rounded-2xl overflow-hidden border border-[#CC842F]/50 shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-[#29251F]/80 text-[#FFFDF8] p-2 rounded-full hover:bg-[#CC842F] transition-colors shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative max-h-[70vh] overflow-hidden bg-black/40">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain max-h-[70vh] mx-auto"
                />
              </div>

              <div className="p-6 bg-[#242A33] text-[#FFFDF8] flex items-center justify-between border-t border-[#333C48]">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#CC842F] uppercase block">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#FFFDF8]">{selectedImage.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-xs font-bold tracking-widest text-[#CC842F] hover:underline"
                >
                  CLOSE PREVIEW
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
