import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, User, Mail, Phone, MessageSquare, CheckCircle, X } from 'lucide-react';
import { locations } from '../data/locations';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '19:00',
    guests: '2',
    location: locations[0].id,
    specialRequests: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.date) return;
    setIsSubmitted(true);
  };

  const selectedLoc = locations.find(l => l.id === formData.location) || locations[0];

  return (
    <section className="py-24 md:py-32 bg-[#102A43] text-[#F8F5EC] relative overflow-hidden" id="reservation">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Heading & Sidebar Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] text-[#C98B32] uppercase block mb-2">
                TABLE RESERVATIONS
              </span>
              <h2 className="font-serif section-heading font-bold text-[#F8F5EC]">
                YOUR TABLE<br />
                <span className="italic font-normal text-[#C98B32]">IS WAITING.</span>
              </h2>
              <p className="text-base text-[#F8F5EC]/80 font-light mt-4 leading-relaxed">
                Join us for an unforgettable contemporary Indian dining experience. For parties of 7 or more, please contact our events concierge directly.
              </p>
            </div>

            <div className="space-y-6 bg-[#173F36]/80 p-8 rounded-2xl border border-[#F8F5EC]/15">
              <h3 className="font-serif text-xl font-bold text-[#F8F5EC] border-b border-[#F8F5EC]/10 pb-3">
                DINING DETAILS
              </h3>

              <div className="space-y-4 text-xs font-light text-[#F8F5EC]/85">
                <div>
                  <span className="font-semibold text-[#C98B32] uppercase block tracking-wider mb-1">
                    SELECTED LOCATION
                  </span>
                  <span>{selectedLoc.name}</span>
                </div>

                <div>
                  <span className="font-semibold text-[#C98B32] uppercase block tracking-wider mb-1">
                    CONCIERGE PHONE
                  </span>
                  <span>{selectedLoc.phone}</span>
                </div>

                <div>
                  <span className="font-semibold text-[#C98B32] uppercase block tracking-wider mb-1">
                    VALET & PARKING
                  </span>
                  <span>{selectedLoc.valetParking}</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="lg:col-span-7 bg-[#F8F5EC] text-[#17201D] p-8 md:p-12 rounded-3xl shadow-2xl border border-[#E8E0CF]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#173F36] mb-4">
                Reserve Your Dining Experience
              </h3>

              {/* Location Select */}
              <div>
                <label className="text-xs font-bold tracking-widest text-[#173F36] uppercase block mb-2">
                  SELECT LOCATION
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-[#E8E0CF]/40 border border-[#E8E0CF] text-xs font-medium text-[#17201D] p-3.5 rounded-xl focus:outline-none focus:border-[#173F36]"
                >
                  {locations.map(loc => (
                    <option key={loc.id} value={loc.id}>{loc.name}</option>
                  ))}
                </select>
              </div>

              {/* Date, Time, Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold tracking-widest text-[#173F36] uppercase block mb-2">
                    DATE
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#C98B32] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#E8E0CF]/40 border border-[#E8E0CF] text-xs font-medium text-[#17201D] pl-10 pr-3 py-3.5 rounded-xl focus:outline-none focus:border-[#173F36]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold tracking-widest text-[#173F36] uppercase block mb-2">
                    TIME
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#C98B32] absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-[#E8E0CF]/40 border border-[#E8E0CF] text-xs font-medium text-[#17201D] pl-10 pr-3 py-3.5 rounded-xl focus:outline-none focus:border-[#173F36]"
                    >
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold tracking-widest text-[#173F36] uppercase block mb-2">
                    GUESTS
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#C98B32] absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-[#E8E0CF]/40 border border-[#E8E0CF] text-xs font-medium text-[#17201D] pl-10 pr-3 py-3.5 rounded-xl focus:outline-none focus:border-[#173F36]"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold tracking-widest text-[#173F36] uppercase block mb-2">
                    FULL NAME
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#C98B32] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#E8E0CF]/40 border border-[#E8E0CF] text-xs font-medium text-[#17201D] pl-10 pr-3 py-3.5 rounded-xl focus:outline-none focus:border-[#173F36]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold tracking-widest text-[#173F36] uppercase block mb-2">
                    EMAIL ADDRESS
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#C98B32] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="eleanor@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#E8E0CF]/40 border border-[#E8E0CF] text-xs font-medium text-[#17201D] pl-10 pr-3 py-3.5 rounded-xl focus:outline-none focus:border-[#173F36]"
                    />
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="text-xs font-bold tracking-widest text-[#173F36] uppercase block mb-2">
                  PHONE NUMBER
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#C98B32] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#E8E0CF]/40 border border-[#E8E0CF] text-xs font-medium text-[#17201D] pl-10 pr-3 py-3.5 rounded-xl focus:outline-none focus:border-[#173F36]"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="text-xs font-bold tracking-widest text-[#173F36] uppercase block mb-2">
                  SPECIAL REQUESTS / DIETARY NOTES
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-[#C98B32] absolute left-3 top-4" />
                  <textarea
                    rows={3}
                    placeholder="Anniversary celebration, dietary restrictions, seating preferences..."
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full bg-[#E8E0CF]/40 border border-[#E8E0CF] text-xs font-medium text-[#17201D] pl-10 pr-3 py-3.5 rounded-xl focus:outline-none focus:border-[#173F36]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#173F36] hover:bg-[#102A43] text-[#F8F5EC] text-xs font-bold tracking-widest py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                CONFIRM RESERVATION
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#17201D]/80 backdrop-blur-md flex items-center justify-center p-6 text-[#17201D]"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#F8F5EC] max-w-lg w-full p-8 md:p-10 rounded-3xl shadow-2xl border border-[#C98B32] text-center space-y-6 relative"
            >
              <button
                onClick={() => setIsSubmitted(false)}
                className="absolute top-4 right-4 text-[#173F36]/60 hover:text-[#173F36]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-full bg-[#173F36] text-[#C98B32] flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#C98B32] uppercase block mb-1">
                  RESERVATION CONFIRMED
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#173F36]">
                  We Look Forward to Welcoming You
                </h3>
              </div>

              <div className="bg-[#E8E0CF]/40 p-4 rounded-xl text-xs space-y-2 text-[#173F36] font-medium text-left">
                <div className="flex justify-between">
                  <span className="text-[#17201D]/60">Guest Name:</span>
                  <span className="font-bold">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#17201D]/60">Date & Time:</span>
                  <span className="font-bold">{formData.date} at {formData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#17201D]/60">Party Size:</span>
                  <span className="font-bold">{formData.guests} Guest(s)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#17201D]/60">Location:</span>
                  <span className="font-bold">{selectedLoc.name}</span>
                </div>
              </div>

              <p className="text-xs text-[#17201D]/70 font-light">
                A confirmation email has been sent to <strong className="text-[#173F36]">{formData.email}</strong>.
              </p>

              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full bg-[#173F36] text-[#F8F5EC] text-xs font-bold tracking-widest py-3.5 rounded-xl hover:bg-[#102A43] transition-colors"
              >
                RETURN TO WEBSITE
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
