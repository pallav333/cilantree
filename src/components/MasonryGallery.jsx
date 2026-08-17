import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryCategories, galleryItems } from '../data/gallery';
import { Eye, X, ZoomIn } from 'lucide-react';

export default function MasonryGallery({ limit, showHeader = true }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = galleryItems.filter(item => 
    activeCategory === 'ALL' || item.category === activeCategory
  );

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <section className="py-24 md:py-32 bg-[#F8F5EC] border-b border-[#E8E0CF]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C98B32] uppercase">
              VISUAL IMMERSION
            </span>
            <h2 className="font-serif section-heading font-bold text-[#173F36]">
              GALLERY OF CULINARY ART
            </h2>
            <p className="text-[#17201D]/75 font-light text-base">
              A visual glimpse into our handcrafted dishes, fiery tandoori ovens, and warm dining sanctum.
            </p>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex items-center justify-center space-x-2 md:space-x-4 mb-12 overflow-x-auto pb-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-bold tracking-widest px-5 py-2.5 rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#173F36] text-[#F8F5EC] border-[#173F36]'
                  : 'bg-transparent text-[#17201D]/70 border-[#E8E0CF] hover:border-[#173F36] hover:text-[#173F36]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetrical Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {displayedItems.map((item, idx) => {
              // Asymmetrical span styling
              let spanClass = 'col-span-1 row-span-1 h-72';
              if (item.aspect === 'tall') spanClass = 'col-span-1 row-span-2 h-96 sm:h-[450px]';
              if (item.aspect === 'wide') spanClass = 'col-span-1 sm:col-span-2 row-span-1 h-72 sm:h-80';

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => setSelectedImage(item)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-[#102A43] shadow-md hover:shadow-2xl transition-all duration-500 ${spanClass}`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#173F36]/80 via-[#173F36]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-[#F8F5EC]" />

                  {/* Hover Overlay Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="self-end bg-[#C98B32] text-[#173F36] p-2.5 rounded-full shadow-lg">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-[#C98B32] uppercase block">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-[#F8F5EC]">
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
            className="fixed inset-0 z-50 bg-[#17201D]/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#173F36] rounded-2xl overflow-hidden border border-[#C98B32]/40 shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-[#17201D]/80 text-[#F8F5EC] p-2 rounded-full hover:bg-[#C98B32] hover:text-[#173F36] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[80vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.alt}
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>

              <div className="p-6 bg-[#173F36] text-[#F8F5EC] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#C98B32] uppercase block">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold">{selectedImage.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-xs font-bold tracking-widest text-[#C98B32] hover:underline"
                >
                  CLOSE PREVIEW
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
