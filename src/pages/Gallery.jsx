import MasonryGallery from '../components/MasonryGallery';
import { Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GalleryPage() {
  return (
    <main className="pt-28 pb-20 bg-[#F5EBDD]">
      {/* Page Hero */}
      <section className="bg-[#242A33] bg-jali-pattern text-[#FAF3E8] py-20 md:py-28 relative overflow-hidden border-b border-[#333C48]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#CC842F] uppercase">
              ATMOSPHERE & CUISINE
            </span>
            <h1 className="font-serif hero-heading font-bold text-[#FFFDF8]">
              GALLERY.<br />
              <span className="italic font-normal text-[#CE4527]">A VISUAL FEAST.</span>
            </h1>
            <p className="text-base md:text-xl text-[#FAF3E8]/85 font-light max-w-xl">
              Immerse your senses in the vibrant colours, rich textures, and architectural serenity of Saffron Circle.
            </p>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 bg-[#CE4527] hover:bg-[#B5351A] text-[#FFFDF8] text-xs font-bold tracking-widest px-6 py-3.5 rounded-lg transition-all"
          >
            <Camera className="w-4 h-4" />
            <span>FOLLOW @SAFFRONCIRCLE ON INSTAGRAM</span>
          </a>
        </div>
      </section>

      {/* Full Gallery Component */}
      <MasonryGallery showHeader={false} />

      {/* Reservation CTA Footer */}
      <section className="py-20 bg-[#242A33] bg-jali-pattern text-[#FAF3E8] text-center relative overflow-hidden border-t border-[#333C48]">
        <div className="max-w-3xl mx-auto px-6 space-y-4 relative z-10">
          <h3 className="font-serif text-3xl font-bold text-[#FFFDF8]">Ready to Taste the Craft?</h3>
          <p className="text-sm font-light text-[#FAF3E8]/80">Join us for lunch or dinner service at our Gourmet District location.</p>
          <div className="pt-2">
            <Link
              to="/reservations"
              className="inline-flex items-center space-x-2 bg-[#CE4527] hover:bg-[#B5351A] text-[#FFFDF8] text-xs font-bold tracking-widest px-8 py-4 rounded-md transition-all"
            >
              <span>RESERVE YOUR TABLE NOW</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
