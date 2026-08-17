import { Sparkles, UtensilsCrossed, Award, HeartHandshake } from 'lucide-react';

export default function WhyUs() {
  const pillars = [
    {
      num: '01',
      icon: Sparkles,
      title: 'AUTHENTIC FLAVOURS',
      desc: 'Traditional family recipes inspired by India’s rich culinary regions, honoring centuries-old spice blends.'
    },
    {
      num: '02',
      icon: UtensilsCrossed,
      title: 'FRESH INGREDIENTS',
      desc: 'Ethically sourced organic local produce, grass-fed meats, and whole spices stone-ground daily in-house.'
    },
    {
      num: '03',
      icon: Award,
      title: 'MASTERFUL CRAFT',
      desc: 'Every single plate is meticulously slow-cooked over live wood coals and styled with contemporary culinary precision.'
    },
    {
      num: '04',
      icon: HeartHandshake,
      title: 'WELCOMING HOSPITALITY',
      desc: 'An intimate, serene dining sanctuary designed to make every guest feel uniquely cherished and at home.'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F8F5EC] border-b border-[#E8E0CF]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <span className="h-[1px] w-8 bg-[#C98B32]" />
            <span className="text-xs font-bold tracking-[0.25em] text-[#C98B32] uppercase">
              THE CILANTREE STANDARD
            </span>
          </div>
          <h2 className="font-serif section-heading font-bold text-[#173F36]">
            WHY CILANTREE?
          </h2>
          <p className="text-[#17201D]/75 font-light text-base md:text-lg mt-3">
            Four guiding principles behind our dining experience.
          </p>
        </div>

        {/* 2x2 Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="bg-[#E8E0CF]/30 p-8 md:p-10 rounded-2xl border border-[#E8E0CF] hover:border-[#173F36] transition-all duration-300 relative group"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl font-bold text-[#C98B32]">
                    {pillar.num}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-[#173F36] text-[#F8F5EC] flex items-center justify-center group-hover:bg-[#C98B32] group-hover:text-[#173F36] transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#173F36] mb-3 group-hover:text-[#C98B32] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-[#17201D]/75 font-light leading-relaxed">
                  {pillar.desc}
                </p>

                <div className="mt-6 pt-4 border-t border-[#E8E0CF]/60 w-12 group-hover:w-full transition-all duration-500 bg-[#C98B32] h-[2px]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
