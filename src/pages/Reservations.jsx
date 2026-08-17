import ReservationForm from '../components/ReservationForm';
import LocationSection from '../components/LocationSection';
import { Calendar, Clock, ShieldCheck, PhoneCall } from 'lucide-react';

export default function ReservationsPage() {
  return (
    <main className="pt-28 pb-20 bg-[#F8F5EC]">
      {/* Page Hero */}
      <section className="bg-[#173F36] text-[#F8F5EC] py-20 md:py-28 border-b border-[#102A43]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C98B32] uppercase">
              TABLE BOOKINGS
            </span>
            <h1 className="font-serif hero-heading font-bold text-[#F8F5EC]">
              RESERVE YOUR TABLE.
            </h1>
            <p className="text-base md:text-xl text-[#F8F5EC]/85 font-light max-w-xl">
              Select your preferred date, time, and party size below for instant dining confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Booking Form */}
      <ReservationForm />

      {/* Dining Guidelines */}
      <section className="py-20 md:py-28 bg-[#F8F5EC] border-b border-[#E8E0CF]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C98B32] uppercase">
              GUEST GUIDELINES
            </span>
            <h2 className="font-serif section-heading font-bold text-[#173F36]">
              DINING POLICIES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#E8E0CF]/40 p-8 rounded-2xl border border-[#E8E0CF] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#173F36] text-[#C98B32] flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#173F36]">Punctuality & Grace</h3>
              <p className="text-xs text-[#17201D]/75 font-light leading-relaxed">
                Tables are held for up to 15 minutes past the reservation time. Please contact concierge if running late.
              </p>
            </div>

            <div className="bg-[#E8E0CF]/40 p-8 rounded-2xl border border-[#E8E0CF] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#173F36] text-[#C98B32] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#173F36]">Large Groups (7+)</h3>
              <p className="text-xs text-[#17201D]/75 font-light leading-relaxed">
                For private dining rooms or large party bookings over 6 guests, please call our dining manager at +1 (555) 348-2890.
              </p>
            </div>

            <div className="bg-[#E8E0CF]/40 p-8 rounded-2xl border border-[#E8E0CF] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#173F36] text-[#C98B32] flex items-center justify-center font-bold">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#173F36]">Cancellations</h3>
              <p className="text-xs text-[#17201D]/75 font-light leading-relaxed">
                We kindly request 24-hour advance notice for cancellations or changes to your party size.
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
