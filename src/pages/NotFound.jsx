import { Link } from 'react-router-dom';
import { Utensils, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="pt-32 pb-24 min-h-[75vh] bg-[#F8F5EC] flex items-center justify-center text-center px-6">
      <div className="max-w-md space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#173F36] text-[#C98B32] flex items-center justify-center mx-auto">
          <Utensils className="w-8 h-8" />
        </div>

        <span className="text-xs font-bold tracking-[0.3em] text-[#C98B32] uppercase block">
          404 — PAGE NOT FOUND
        </span>

        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#173F36]">
          A Culinary Detour.
        </h1>

        <p className="text-sm text-[#17201D]/75 font-light leading-relaxed">
          The page you are seeking has slipped away like fragrant spice steam. Let us guide you back to our principal dining room.
        </p>

        <div className="pt-4 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-[#173F36] hover:bg-[#102A43] text-[#F8F5EC] text-xs font-bold tracking-widest px-8 py-4 rounded-xl transition-all shadow-md"
          >
            <ArrowLeft className="w-4 h-4 text-[#C98B32]" />
            <span>RETURN TO HOMEPAGE</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
