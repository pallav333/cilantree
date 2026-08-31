export default function Marquee() {
  const items = [
    'AUTHENTIC FLAVOURS',
    'FRESH INGREDIENTS',
    'TIMELESS RECIPES',
    'LIVE TANDOOR CRAFT',
    'ROYAL HERITAGE SPICES',
    'CONTEMPORARY HOSPITALITY'
  ];

  return (
    <div className="bg-[#CE4527] text-[#FAF3E8] py-3.5 overflow-hidden border-y border-[#B5351A] select-none shadow-inner">
      <div className="flex w-max animate-marquee">
        {[...Array(4)].map((_, arrayIndex) => (
          <div key={arrayIndex} className="flex items-center space-x-8 shrink-0 px-4">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-8">
                <span className="font-serif text-sm md:text-base font-semibold tracking-[0.2em] uppercase">
                  {item}
                </span>
                <span className="text-[#CC842F] text-xs font-bold">★</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-25%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
