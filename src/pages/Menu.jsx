import MenuSection from '../components/MenuSection';
import { Download, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MenuPage() {
  return (
    <main className="pt-28 pb-20 bg-[#F8F5EC]">
      {/* Page Hero */}
      <section className="bg-[#173F36] text-[#F8F5EC] py-20 md:py-28 border-b border-[#102A43]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C98B32] uppercase">
              ARTISANAL GASTRONOMY
            </span>
            <h1 className="font-serif hero-heading font-bold text-[#F8F5EC]">
              OUR FULL MENU
            </h1>
            <p className="text-base md:text-xl text-[#F8F5EC]/85 font-light max-w-xl">
              From claypot curries and live tandoori charcoal kebabs to saffron biryanis and handcrafted botanic cocktails.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#menu-section"
              onClick={(e) => {
                e.preventDefault();
                alert('PDF Menu download started (Mock). In production, this opens Cilantree-Menu-2026.pdf');
              }}
              className="inline-flex items-center space-x-2 bg-[#E8E0CF]/20 hover:bg-[#C98B32] hover:text-[#173F36] text-[#F8F5EC] text-xs font-bold tracking-widest px-6 py-3.5 rounded-lg border border-[#F8F5EC]/30 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD PDF MENU</span>
            </a>
            <Link
              to="/reservations"
              className="inline-flex items-center space-x-2 bg-[#C98B32] hover:bg-[#b07827] text-[#173F36] text-xs font-bold tracking-widest px-6 py-3.5 rounded-lg transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>RESERVE TABLE</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Complete Interactive Menu Component */}
      <MenuSection showHeader={false} />

      {/* Dietary & Allergen Notice */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 border-t border-[#E8E0CF]">
        <div className="bg-[#E8E0CF]/40 p-8 rounded-2xl border border-[#E8E0CF] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-serif text-lg font-bold text-[#173F36]">Dietary Accommodations & Allergens</h4>
            <p className="text-xs text-[#17201D]/75 font-light">
              We proudly offer Halal-certified meats, 100% vegetarian items, and gluten-free adaptations. Please inform your server of any allergies prior to ordering.
            </p>
          </div>
          <Link
            to="/reservations"
            className="shrink-0 bg-[#173F36] text-[#F8F5EC] text-xs font-bold tracking-widest px-6 py-3 rounded-lg hover:bg-[#102A43] transition-colors"
          >
            BOOK YOUR TABLE
          </Link>
        </div>
      </section>
    </main>
  );
}
