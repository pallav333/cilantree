import { executiveChef } from '../data/chefs';
import { Award, ShieldCheck, Quote } from 'lucide-react';

export default function ChefSpotlight() {
  return (
    <section className="py-24 md:py-32 bg-[#F8F5EC] border-b border-[#E8E0CF]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Tall Editorial Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F8F5EC] bg-[#173F36] aspect-[3/4]">
              <img
                src={executiveChef.image}
                alt={executiveChef.name}
                className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173F36]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-[#F8F5EC]">
                <div className="flex items-center space-x-2 text-[#C98B32] mb-1">
                  <Award className="w-4 h-4" />
                  <span className="text-[10px] font-bold tracking-widest uppercase">Executive Culinary Director</span>
                </div>
                <h3 className="font-serif text-2xl font-bold">{executiveChef.name}</h3>
              </div>
            </div>

            {/* Accolade Floating Badge */}
            <div className="absolute -bottom-6 -right-4 md:-bottom-6 md:-right-6 bg-[#173F36] text-[#F8F5EC] p-4 rounded-xl shadow-xl border border-[#C98B32]/40 max-w-[220px]">
              <div className="flex items-center space-x-2 text-[#C98B32] mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[10px] font-bold tracking-wider uppercase">Culinary Honors</span>
              </div>
              <p className="text-xs font-serif italic text-[#F8F5EC]/90">
                Michelin Guide Recommended 2025
              </p>
            </div>
          </div>

          {/* RIGHT: Chef Bio & Quote */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <span className="h-[1px] w-8 bg-[#C98B32]" />
                <span className="text-xs font-bold tracking-[0.25em] text-[#C98B32] uppercase">
                  MEET THE CHEF
                </span>
              </div>
              <h2 className="font-serif section-heading font-bold text-[#173F36]">
                {executiveChef.name}
              </h2>
              <p className="text-sm font-semibold tracking-wider text-[#C98B32] uppercase mt-1">
                {executiveChef.role}
              </p>
            </div>

            <p className="text-base md:text-lg text-[#17201D]/80 font-light leading-relaxed">
              {executiveChef.bio}
            </p>

            {/* Large Serif Quote */}
            <div className="relative bg-[#E8E0CF]/40 p-8 rounded-2xl border-l-4 border-[#C98B32]">
              <Quote className="w-8 h-8 text-[#C98B32]/40 absolute top-4 right-6 pointer-events-none" />
              <p className="font-serif text-xl md:text-2xl italic font-normal text-[#173F36] leading-snug">
                “{executiveChef.quote}”
              </p>
              <span className="text-xs font-bold tracking-widest text-[#C98B32] uppercase block mt-3">
                — {executiveChef.name}
              </span>
            </div>

            {/* Experience & Specialty Badges */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#E8E0CF]">
              <div>
                <span className="text-[10px] tracking-[0.2em] font-bold text-[#17201D]/60 uppercase block mb-1">
                  SPECIALITY
                </span>
                <span className="font-serif text-lg font-bold text-[#173F36] block">
                  {executiveChef.specialty}
                </span>
              </div>
              <div>
                <span className="text-[10px] tracking-[0.2em] font-bold text-[#17201D]/60 uppercase block mb-1">
                  EXPERIENCE
                </span>
                <span className="font-serif text-lg font-bold text-[#173F36] block">
                  {executiveChef.experience}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
