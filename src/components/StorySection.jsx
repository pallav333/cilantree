import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StorySection() {
  return (
    <section className="py-24 md:py-32 bg-[#F5EBDD] border-b border-[#E9D9C2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header Label */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="h-[1px] w-8 bg-[#CC842F]" />
          <span className="text-xs font-bold tracking-[0.25em] text-[#CC842F] uppercase">
            OUR STORY & PHILOSOPHY
          </span>
        </div>

        {/* Large Editorial Headline */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-[#CE4527] leading-tight">
            A TASTE OF INDIA,<br />
            <span className="italic font-normal text-[#CC842F]">CRAFTED WITH CARE.</span>
          </h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Text Narrative */}
          <div className="lg:col-span-6 space-y-6 text-[#29251F]/80 leading-relaxed font-light text-base md:text-lg">
            <p className="first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:text-[#CC842F] first-letter:mr-3 first-letter:float-left leading-normal">
              At Saffron Circle, dining is an homage to India&apos;s extraordinary culinary tapestry. From the aromatic street markets of Old Delhi to the spice-scented backwaters of Kerala, our kitchen captures the soul of traditional recipes and elevates them through contemporary artistry.
            </p>
            <p>
              We source raw whole spices directly from heritage family farms across India, hand-grinding them daily in our kitchen to preserve their fragile essential oils and peak aromatic vibrancy.
            </p>
            <p>
              Every dish is thoughtfully paired with house-baked tandoori breads, artisanal preserves, and bespoke cocktails that tell a story of ancient spice routes reimagined for modern gourmands.
            </p>

            <div className="pt-6 border-t border-[#E9D9C2] flex items-center justify-between">
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
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest text-[#CC842F] hover:text-[#CE4527] transition-colors group"
              >
                <span>LEARN MORE ABOUT OUR HERITAGE</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* RIGHT: Editorial Image & Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-[#FAF3E8] bg-[#CE4527] aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                alt="Saffron Circle Restaurant Interior & Dining Ambience"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#CE4527]/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 text-[#FFFDF8] flex items-center justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.2em] font-semibold text-[#CC842F] uppercase block">
                    Warm Dining Atmosphere
                  </span>
                  <h3 className="font-serif text-lg font-bold">San Francisco Flagship Sanctum</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#CC842F] text-[#FFFDF8] flex items-center justify-center font-bold text-sm shadow-lg">
                  <Sparkles className="w-5 h-5 text-[#FFFDF8]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
