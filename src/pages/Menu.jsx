import MenuSection from '../components/MenuSection';
import { Calendar, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MenuPage() {
  return (
    <main className="pt-28 pb-20 bg-[#F5EBDD]">
      {/* Page Hero Header */}
      <section className="bg-[#242A33] bg-jali-pattern text-[#FAF3E8] py-20 md:py-28 relative overflow-hidden border-b border-[#333C48]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#CC842F] uppercase">
              ARTISANAL CULINARY SELECTIONS
            </span>
            <h1 className="font-serif hero-heading font-bold text-[#FFFDF8]">
              DINING MENU.<br />
              <span className="italic font-normal text-[#CC842F]">HERITAGE & INNOVATION.</span>
            </h1>
            <p className="text-base md:text-xl text-[#FAF3E8]/85 font-light max-w-xl">
              Explore our comprehensive range of regional curries, tandoori grills, artisan breads, and handcrafted Indian desserts.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Menu Component */}
      <MenuSection showHeader={false} />

      {/* Dietary Information Banner */}
      <section className="py-16 bg-[#F5EBDD] border-t border-[#E9D9C2]">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] text-[#CC842F] uppercase">
            DIETARY & ALLERGY NOTICE
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#CE4527]">
            Crafted for Every Palate
          </h3>
          <p className="text-xs md:text-sm text-[#29251F]/75 font-light max-w-2xl mx-auto leading-relaxed">
            All our meats are 100% certified Halal. We offer extensive Gluten-Free, Dairy-Free, and Vegan preparations upon request. Please inform your service captain of any severe allergies before ordering.
          </p>

          <div className="pt-4 flex justify-center space-x-4">
            <Link
              to="/reservations"
              className="inline-flex items-center space-x-2 bg-[#CE4527] hover:bg-[#B5351A] text-[#FFFDF8] text-xs font-bold tracking-widest px-8 py-3.5 rounded-md transition-all shadow-md border border-[#CC842F]/30"
            >
              <Calendar className="w-4 h-4" />
              <span>RESERVE TABLE</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
