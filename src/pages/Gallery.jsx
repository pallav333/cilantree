import MasonryGallery from '../components/MasonryGallery';
import { Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GalleryPage() {
  return (
    <main className="pt-28 pb-20 bg-[#F8F5EC]">
      {/* Page Hero */}
      <section className="bg-[#173F36] text-[#F8F5EC] py-20 md:py-28 border-b border-[#102A43]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C98B32] uppercase">
              VISUAL EXPERIENCE
            </span>
            <h1 className="font-serif hero-heading font-bold text-[#F8F5EC]">
              PHOTO GALLERY
            </h1>
            <p className="text-base md:text-xl text-[#F8F5EC]/85 font-light max-w-xl">
              Immerse your senses in the vibrant colours, rich textures, and architectural serenity of Cilantree.
            </p>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 bg-[#C98B32] hover:bg-[#b07827] text-[#173F36] text-xs font-bold tracking-widest px-6 py-3.5 rounded-lg transition-all"
          >
            <Camera className="w-4 h-4" />
            <span>FOLLOW @CILANTREE ON INSTAGRAM</span>
          </a>
        </div>
      </section>

      {/* Full Gallery Component */}
      <MasonryGallery showHeader={false} />

      {/* Reservation CTA Footer */}
      <section className="py-16 bg-[#102A43] text-[#F8F5EC] text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          <h3 className="font-serif text-3xl font-bold">Ready to Taste the Craft?</h3>
          <p className="text-sm font-light text-[#F8F5EC]/80">Join us for lunch or dinner service at our Gourmet District location.</p>
          <div className="pt-2">
            <Link
              to="/reservations"
              className="inline-flex items-center space-x-2 bg-[#C98B32] hover:bg-[#b07827] text-[#173F36] text-xs font-bold tracking-widest px-8 py-4 rounded-md transition-all"
            >
              <span>RESERVE YOUR TABLE NOW</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
