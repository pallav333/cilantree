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
    <div className="bg-[#C98B32] text-[#173F36] py-3.5 overflow-hidden border-y border-[#173F36]/20 select-none">
      <div className="flex w-max animate-marquee">
        {[...Array(4)].map((_, arrayIndex) => (
          <div key={arrayIndex} className="flex items-center space-x-8 shrink-0 px-4">
            {items.map((item, index) => (
              <div key={index} className="flex items-center space-x-8">
                <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase font-sans">
                  {item}
                </span>
                <span className="text-[#173F36] text-xs">◆</span>
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
