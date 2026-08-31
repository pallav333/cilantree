import ReservationForm from '../components/ReservationForm';
import LocationSection from '../components/LocationSection';
import { Calendar, Clock, ShieldCheck, PhoneCall } from 'lucide-react';

export default function ReservationsPage() {
  return (
    <main className="pt-28 pb-20 bg-[#F5EBDD]">
      {/* Page Hero */}
      <section className="bg-[#242A33] bg-jali-pattern text-[#FAF3E8] py-20 md:py-28 relative overflow-hidden border-b border-[#333C48]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#CC842F] uppercase">
              TABLE RESERVATIONS
            </span>
            <h1 className="font-serif hero-heading font-bold text-[#FFFDF8]">
              RESERVE YOUR TABLE.<br />
              <span className="italic font-normal text-[#CC842F]">A ROYAL WELCOME.</span>
            </h1>
            <p className="text-base md:text-xl text-[#FAF3E8]/85 font-light max-w-xl">
              Select your preferred date, party size, and dining location. We hold reservations for up to 15 minutes past scheduled arrival.
            </p>
          </div>
        </div>
      </section>

      {/* Main Reservation Form */}
      <section className="py-20 md:py-28 border-b border-[#E9D9C2]">
        <ReservationForm />
      </section>

      {/* Dining Policy Cards */}
      <section className="py-20 bg-[#F5EBDD]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#CC842F] uppercase">
              DINING POLICIES & ACCESSIBILITY
            </span>
            <h2 className="font-serif section-heading font-bold text-[#CE4527]">
              ESSENTIAL INFORMATION
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF3E8] p-8 rounded-2xl border border-[#E9D9C2] space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#CC842F]/10 text-[#CC842F] flex items-center justify-center font-bold text-lg">
                ★
              </div>
              <h3 className="font-serif text-xl font-bold text-[#CE4527]">Dress Code Policy</h3>
              <p className="text-xs text-[#29251F]/75 font-light leading-relaxed">
                Smart casual or formal attire is requested in our main dining sanctuary. Athletic wear, tank tops, and beach footwear are kindly prohibited.
              </p>
            </div>

            <div className="bg-[#FAF3E8] p-8 rounded-2xl border border-[#E9D9C2] space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#CC842F]/10 text-[#CC842F] flex items-center justify-center font-bold text-lg">
                ♦
              </div>
              <h3 className="font-serif text-xl font-bold text-[#CE4527]">Large Group Dining</h3>
              <p className="text-xs text-[#29251F]/75 font-light leading-relaxed">
                For parties of 8 or more guests, please contact our private dining concierge directly at concierge@saffroncircle.com for chef&apos;s tasting menu arrangements.
              </p>
            </div>

            <div className="bg-[#FAF3E8] p-8 rounded-2xl border border-[#E9D9C2] space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#CC842F]/10 text-[#CC842F] flex items-center justify-center font-bold text-lg">
                ♠
              </div>
              <h3 className="font-serif text-xl font-bold text-[#CE4527]">Cancellation Grace</h3>
              <p className="text-xs text-[#29251F]/75 font-light leading-relaxed">
                We kindly request at least 24 hours notice for table cancellations or party size reductions to accommodate waiting guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <LocationSection />
    </main>
  );
}
