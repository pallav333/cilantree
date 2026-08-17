import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, ShoppingBag, Users, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState('dine-in');

  const experiences = [
    {
      id: 'dine-in',
      title: 'DINE IN SANCTUARY',
      icon: Utensils,
      bgImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
      description: 'Immerse yourself in our serene, warm ivory and forest green dining room. Enjoy attentive white-glove service, curated wine pairings, and live tandoori charcoal cooking.',
      ctaText: 'RESERVE A TABLE',
      ctaLink: '/reservations'
    },
    {
      id: 'takeout',
      title: 'GOUERMET TAKEOUT & DELIVERY',
      icon: ShoppingBag,
      bgImage: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=1600&q=80',
      description: 'Experience Cilantree signature curries, biryanis, and artisanal breads in the comfort of your home. Custom temperature-sealed sustainable packaging ensures perfection.',
      ctaText: 'ORDER ONLINE',
      ctaLink: '/menu'
    },
    {
      id: 'events',
      title: 'PRIVATE EVENTS & PARTIES',
      icon: Users,
      bgImage: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=80',
      description: 'Host intimate celebrations, corporate galas, or family reunions in our private dining sanctum. Customized multi-course tasting menus by Chef Vikramaditya.',
      ctaText: 'INQUIRE FOR EVENTS',
      ctaLink: '/contact'
    },
    {
      id: 'catering',
      title: 'EXCLUSIVE CATERING',
      icon: Calendar,
      bgImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80',
      description: 'Bring Cilantree’s Michelin-recommended culinary team to your venue. Full-service live tandoori stations, cocktail bars, and royal banquet setups.',
      ctaText: 'REQUEST CATERING',
      ctaLink: '/contact'
    }
  ];

  const activeExp = experiences.find(e => e.id === activeTab);

  return (
    <section className="relative py-28 md:py-36 bg-[#173F36] text-[#F8F5EC] overflow-hidden">
      {/* Dynamic Background Image with Dark Translucent Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeExp.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={activeExp.bgImage}
            alt={activeExp.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#173F36]/85 backdrop-blur-sm" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C98B32] uppercase">
            ATMOSPHERE & HOSPITALITY
          </span>
          <h2 className="font-serif section-heading font-bold text-[#F8F5EC]">
            MORE THAN A MEAL.<br />
            <span className="italic font-normal text-[#C98B32]">AN UNFORGETTABLE EXPERIENCE.</span>
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            const isActive = activeTab === exp.id;
            return (
              <button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                className={`p-4 rounded-xl border flex flex-col items-center justify-center space-y-2 transition-all duration-300 ${
                  isActive
                    ? 'bg-[#C98B32] text-[#173F36] border-[#C98B32] shadow-lg scale-105 font-bold'
                    : 'bg-[#102A43]/60 text-[#F8F5EC]/80 border-[#F8F5EC]/20 hover:border-[#C98B32] hover:text-[#F8F5EC]'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs tracking-wider uppercase font-semibold">{exp.id.replace('-', ' ')}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Details Card */}
        <div className="max-w-3xl mx-auto bg-[#102A43]/80 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-[#F8F5EC]/20 text-center shadow-2xl space-y-6">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#F8F5EC]">
            {activeExp.title}
          </h3>
          <p className="text-sm md:text-base text-[#F8F5EC]/85 font-light leading-relaxed max-w-2xl mx-auto">
            {activeExp.description}
          </p>
          <div className="pt-4">
            <Link
              to={activeExp.ctaLink}
              className="inline-flex items-center space-x-3 bg-[#C98B32] hover:bg-[#b07827] text-[#173F36] text-xs font-bold tracking-widest px-8 py-4 rounded-md transition-all duration-300 hover:shadow-xl"
            >
              <span>{activeExp.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
