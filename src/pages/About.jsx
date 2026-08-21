import { Flame, Compass, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="pt-28 pb-20 bg-[#F8F5EC]">
      {/* Page Hero Header */}
      <section className="bg-[#173F36] text-[#F8F5EC] py-20 md:py-28 relative overflow-hidden border-b border-[#102A43]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C98B32] uppercase">
              HERITAGE & VISION
            </span>
            <h1 className="font-serif hero-heading font-bold text-[#F8F5EC]">
              OUR STORY.<br />
              <span className="italic font-normal text-[#C98B32]">THE CILANTREE JOURNEY.</span>
            </h1>
            <p className="text-base md:text-xl text-[#F8F5EC]/85 font-light leading-relaxed pt-2">
              Founded on a passion for preserving centuries-old Awadhi and Royal Indian culinary traditions while creating an elevated, contemporary fine dining sanctuary.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 md:py-28 border-b border-[#E8E0CF]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6 text-[#17201D]/80 font-light text-base md:text-lg leading-relaxed">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C98B32] uppercase block">
                OUR PHILOSOPHY
              </span>
              <h2 className="font-serif section-heading font-bold text-[#173F36] leading-tight">
                REDEFINING INDIAN FINE DINING
              </h2>
              <p>
                Cilantree was born out of a desire to break away from generic Indian curry clichés and introduce diners to the authentic, subtle regional complexities of Indian royal kitchens.
              </p>
              <p>
                Every dish is rooted in historical authenticity — from 24-hour slow-cooked wood-ember black dal to claypot-grilled meats infused with rare Ratanjot root and Kashmiri saffron.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-6 border-t border-[#E8E0CF]">
                <div className="flex items-start space-x-3">
                  <Flame className="w-5 h-5 text-[#C98B32] mt-1 shrink-0" />
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#173F36]">Wood-Fired Tandoor</h4>
                    <p className="text-xs text-[#17201D]/70 font-light">Authentic clay oven roasting over live white oak coals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Compass className="w-5 h-5 text-[#C98B32] mt-1 shrink-0" />
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#173F36]">Regional Sourcing</h4>
                    <p className="text-xs text-[#17201D]/70 font-light">Heritage spices hand-picked from single-estate Indian growers.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F8F5EC] aspect-[4/3] bg-[#102A43]">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                  alt="Live Tandoori Oven Cooking"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-16 bg-[#173F36] text-[#F8F5EC] text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Experience the Heritage Firsthand</h2>
          <p className="text-sm font-light text-[#F8F5EC]/80">Reserve your table today for lunch or evening dinner service.</p>
          <div>
            <Link
              to="/reservations"
              className="inline-flex items-center space-x-3 bg-[#C98B32] hover:bg-[#b07827] text-[#173F36] text-xs font-bold tracking-widest px-8 py-4 rounded-md transition-all"
            >
              <span>BOOK A TABLE NOW</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
