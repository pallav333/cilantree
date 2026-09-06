import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LocationSection from '../components/LocationSection';
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <main className="pt-28 pb-20 bg-[#F5EBDD] overflow-hidden">
      {/* Page Hero */}
      <section className="bg-[#242A33] bg-jali-pattern text-[#FAF3E8] py-20 md:py-28 relative overflow-hidden border-b border-[#333C48]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center space-x-2 bg-[#CC842F]/15 border border-[#CC842F]/40 px-3.5 py-1.5 rounded-full"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#CC842F]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#CC842F] uppercase">
                GET IN TOUCH
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif hero-heading font-bold text-[#FFFDF8]"
            >
              LET&apos;S CONNECT.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-xl text-[#FAF3E8]/85 font-light max-w-xl leading-relaxed"
            >
              Have questions about private events, catering, or dining reservations? Our concierge team is here to assist.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Form & Info Section */}
      <section className="py-20 md:py-28 border-b border-[#E9D9C2]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 space-y-8"
            >
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-[1px] w-8 bg-[#CC842F] origin-left inline-block"
                  />
                  <span className="text-xs font-bold tracking-[0.25em] text-[#CC842F] uppercase">
                    DIRECT CONCIERGE
                  </span>
                </div>
                <h2 className="font-serif section-heading font-bold text-[#CE4527]">
                  REACH OUR TEAM
                </h2>
                <p className="text-sm text-[#29251F]/75 font-light mt-3 leading-relaxed">
                  Whether you are planning a corporate dinner, seeking custom press information, or booking a private room, we respond within 24 hours.
                </p>
              </div>

              <div className="space-y-6 bg-[#E9D9C2]/40 p-8 rounded-2xl border border-[#E9D9C2] shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#CE4527] text-[#FFFDF8] flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#CE4527]">San Francisco Flagship</h4>
                    <p className="text-xs text-[#29251F]/75 font-light mt-0.5">142 Culinary Avenue, Gourmet District, SF, CA 94103</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#CE4527] text-[#FFFDF8] flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#CE4527]">Direct Phone</h4>
                    <p className="text-xs text-[#29251F]/75 font-light mt-0.5">+1 (555) 348-2890</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#CE4527] text-[#FFFDF8] flex items-center justify-center shrink-0 shadow-md">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#CE4527]">General Concierge</h4>
                    <p className="text-xs text-[#29251F]/75 font-light mt-0.5">concierge@saffroncircle.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 bg-[#FAF3E8] p-8 md:p-12 rounded-3xl border border-[#E9D9C2] shadow-xl"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#CE4527] text-[#FFFDF8] flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#CE4527]">Thank You for Reaching Out</h3>
                    <p className="text-xs md:text-sm text-[#29251F]/75 font-light max-w-md mx-auto leading-relaxed">
                      Your inquiry has been received by our concierge manager. We will review your notes and reply promptly to <strong className="text-[#CC842F]">{formData.email}</strong>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 bg-[#CE4527] hover:bg-[#B5351A] text-[#FFFDF8] text-xs font-bold tracking-widest px-8 py-3.5 rounded-lg transition-all shadow-md hover:shadow-lg"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <h3 className="font-serif text-2xl font-bold text-[#CE4527] mb-2">Send an Inquiry</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold tracking-widest text-[#CC842F] uppercase block mb-2">YOUR NAME</label>
                        <input
                          type="text"
                          required
                          placeholder="Jonathan Sterling"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[#E9D9C2]/40 border border-[#E9D9C2] text-xs font-medium p-3.5 rounded-xl focus:outline-none focus:border-[#CE4527] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold tracking-widest text-[#CC842F] uppercase block mb-2">EMAIL ADDRESS</label>
                        <input
                          type="email"
                          required
                          placeholder="jonathan@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#E9D9C2]/40 border border-[#E9D9C2] text-xs font-medium p-3.5 rounded-xl focus:outline-none focus:border-[#CE4527] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold tracking-widest text-[#CC842F] uppercase block mb-2">INQUIRY SUBJECT</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-[#E9D9C2]/40 border border-[#E9D9C2] text-xs font-medium p-3.5 rounded-xl focus:outline-none focus:border-[#CE4527] transition-colors"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Private Events & Parties">Private Events &amp; Parties</option>
                        <option value="Catering Service">Catering Service</option>
                        <option value="Press & Media">Press &amp; Media</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold tracking-widest text-[#CC842F] uppercase block mb-2">YOUR MESSAGE</label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Write your message or event details here..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#E9D9C2]/40 border border-[#E9D9C2] text-xs font-medium p-3.5 rounded-xl focus:outline-none focus:border-[#CE4527] transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#CE4527] hover:bg-[#B5351A] text-[#FFFDF8] text-xs font-bold tracking-widest py-4 rounded-xl transition-all shadow-md hover:shadow-xl hover:scale-[1.01] transform flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4 text-[#FFFDF8]" />
                      <span>SEND MESSAGE</span>
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <LocationSection />
    </main>
  );
}
