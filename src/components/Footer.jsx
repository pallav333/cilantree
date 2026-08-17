import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#173F36] text-[#F8F5EC] pt-20 pb-12 border-t border-[#102A43]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Large Editorial Headline */}
        <div className="border-b border-[#F8F5EC]/15 pb-16 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C98B32] uppercase block mb-3">
              An Unforgettable Experience
            </span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none text-[#F8F5EC]">
              COME HUNGRY.<br />
              <span className="italic font-normal text-[#C98B32]">LEAVE HAPPY.</span>
            </h2>
          </div>
          <Link
            to="/reservations"
            className="inline-flex items-center space-x-3 bg-[#C98B32] hover:bg-[#b07827] text-[#173F36] text-xs font-bold tracking-widest px-8 py-4 rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 self-start md:self-auto"
          >
            <span>RESERVE YOUR TABLE</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4-Column Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-3xl font-bold tracking-wider text-[#F8F5EC]">
                CILANTREE
              </span>
              <span className="text-[10px] tracking-[0.3em] font-medium text-[#C98B32] block uppercase -mt-1">
                Indian Fine Dining
              </span>
            </Link>
            <p className="text-sm text-[#F8F5EC]/70 leading-relaxed max-w-xs font-light">
              Authentic Indian cuisine rooted in timeless regional traditions, served through modern culinary artistry and warm hospitality.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-[#F8F5EC]/20 flex items-center justify-center text-[#F8F5EC]/80 hover:text-[#C98B32] hover:border-[#C98B32] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-[#F8F5EC]/20 flex items-center justify-center text-[#F8F5EC]/80 hover:text-[#C98B32] hover:border-[#C98B32] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#C98B32] uppercase mb-6">
              NAVIGATION
            </h3>
            <ul className="space-y-3 text-sm font-light text-[#F8F5EC]/80">
              <li>
                <Link to="/" className="hover:text-[#C98B32] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#C98B32] transition-colors">Our Story & Chef</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-[#C98B32] transition-colors">Full Dining Menu</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#C98B32] transition-colors">Photo Gallery</Link>
              </li>
              <li>
                <Link to="/reservations" className="hover:text-[#C98B32] transition-colors">Table Reservations</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C98B32] transition-colors">Location & Hours</Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#C98B32] uppercase mb-6">
              DINING HOURS
            </h3>
            <ul className="space-y-3 text-sm font-light text-[#F8F5EC]/80">
              <li className="flex justify-between border-b border-[#F8F5EC]/10 pb-2">
                <span>Tue – Thu:</span>
                <span className="font-normal text-[#F8F5EC]">5:00 PM – 10:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-[#F8F5EC]/10 pb-2">
                <span>Fri – Sat:</span>
                <span className="font-normal text-[#F8F5EC]">5:00 PM – 11:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-[#F8F5EC]/10 pb-2">
                <span>Sunday:</span>
                <span className="font-normal text-[#F8F5EC]">4:30 PM – 10:00 PM</span>
              </li>
              <li className="flex justify-between text-xs text-[#C98B32] pt-1">
                <span>Monday:</span>
                <span>Spice Sourcing (Closed)</span>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#C98B32] uppercase mb-6">
              LOCATION
            </h3>
            <ul className="space-y-4 text-sm font-light text-[#F8F5EC]/80">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#C98B32] mt-1 shrink-0" />
                <span>142 Culinary Avenue, Gourmet District, San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#C98B32] shrink-0" />
                <span>+1 (555) 348-2890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#C98B32] shrink-0" />
                <span>concierge@cilantree.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#F8F5EC]/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#F8F5EC]/50 gap-4">
          <p>© 2026 Cilantree Fine Dining. All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-[#F8F5EC] transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#F8F5EC] transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-[#F8F5EC] transition-colors cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
