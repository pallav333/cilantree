import { Link } from 'react-router-dom';
import { Utensils, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="pt-32 pb-24 min-h-[75vh] bg-[#F5EBDD] flex items-center justify-center text-center px-6">
      <div className="max-w-xl mx-auto px-6 text-center space-y-6">
        <span className="font-serif text-8xl md:text-9xl font-bold text-[#CC842F] block leading-none">
          404
        </span>

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#CC842F]">
          PAGE NOT FOUND
        </h1>

        <p className="text-sm md:text-base text-[#29251F]/75 font-light leading-relaxed">
          The culinary destination or page you are looking for has been moved or does not exist in our sanctuary.
        </p>

        <div className="pt-4 flex justify-center space-x-4">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-[#CC842F] hover:bg-[#B57326] text-[#FFFDF8] text-xs font-bold tracking-widest px-8 py-4 rounded-xl transition-all shadow-md"
          >
            <ArrowLeft className="w-4 h-4 text-[#FFFDF8]" />
            <span>RETURN TO HOMEPAGE</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
