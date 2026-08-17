import { useState } from 'react';
import { locations } from '../data/locations';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink, Car } from 'lucide-react';

export default function LocationSection() {
  const [selectedLocId, setSelectedLocId] = useState(locations[0].id);
  const activeLoc = locations.find(l => l.id === selectedLocId);

  return (
    <section className="py-24 md:py-32 bg-[#F8F5EC] border-b border-[#E8E0CF]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center space-x-3 mb-3">
            <span className="h-[1px] w-8 bg-[#C98B32]" />
            <span className="text-xs font-bold tracking-[0.25em] text-[#C98B32] uppercase">
              VISIT OUR SANCTUARIES
            </span>
          </div>
          <h2 className="font-serif section-heading font-bold text-[#173F36]">
            COME DINE WITH US.
          </h2>
          <p className="text-[#17201D]/75 font-light text-base md:text-lg mt-2">
            Select a location to view operating hours, directions, and valet information.
          </p>
        </div>

        {/* Location Selector Tabs */}
        <div className="flex space-x-4 mb-10 overflow-x-auto pb-2">
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setSelectedLocId(loc.id)}
              className={`text-xs font-bold tracking-widest px-6 py-3 rounded-xl border transition-all duration-300 ${
                selectedLocId === loc.id
                  ? 'bg-[#173F36] text-[#F8F5EC] border-[#173F36] shadow-md'
                  : 'bg-[#E8E0CF]/40 text-[#17201D]/70 border-[#E8E0CF] hover:border-[#173F36]'
              }`}
            >
              {loc.name}
            </button>
          ))}
        </div>

        {/* Location Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: Info Card */}
          <div className="lg:col-span-7 bg-[#E8E0CF]/30 p-8 md:p-12 rounded-2xl border border-[#E8E0CF] flex flex-col justify-between space-y-8">
            <div>
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#C98B32] uppercase block mb-2">
                RESTAURANT LOCATION
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#173F36] mb-6">
                {activeLoc.name}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-light text-[#17201D]/80">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#C98B32] mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-[#173F36] block">ADDRESS</span>
                      <span>{activeLoc.address}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-[#C98B32] shrink-0" />
                    <div>
                      <span className="font-semibold text-[#173F36] block">TELEPHONE</span>
                      <span>{activeLoc.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-[#C98B32] shrink-0" />
                    <div>
                      <span className="font-semibold text-[#173F36] block">EMAIL</span>
                      <span>{activeLoc.email}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 bg-[#F8F5EC] p-5 rounded-xl border border-[#E8E0CF]">
                  <div className="flex items-center space-x-2 text-[#173F36] font-bold text-xs tracking-wider mb-2">
                    <Clock className="w-4 h-4 text-[#C98B32]" />
                    <span>DINING HOURS</span>
                  </div>
                  {activeLoc.hours.map((h, i) => (
                    <div key={i} className="flex justify-between text-xs py-1 border-b border-[#E8E0CF] last:border-0">
                      <span className="font-medium text-[#173F36]">{h.days}</span>
                      <span className="text-[#17201D]/70">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8E0CF] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-xs text-[#17201D]/70">
                <Car className="w-4 h-4 text-[#C98B32]" />
                <span>{activeLoc.valetParking}</span>
              </div>

              <div className="flex items-center space-x-3">
                <a
                  href={activeLoc.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#173F36] hover:bg-[#102A43] text-[#F8F5EC] text-xs font-bold tracking-widest px-6 py-3 rounded-lg transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#C98B32]" />
                  <span>GET DIRECTIONS</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Map Visual Graphic / Card */}
          <div className="lg:col-span-5 bg-[#102A43] text-[#F8F5EC] p-8 md:p-12 rounded-2xl border border-[#102A43] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#173F36] rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#C98B32] uppercase block">
                ATTIRE & POLICIES
              </span>
              <h4 className="font-serif text-2xl font-bold">Plan Your Visit</h4>
              <ul className="space-y-4 text-xs font-light text-[#F8F5EC]/80">
                <li className="flex items-start space-x-3">
                  <span className="text-[#C98B32] font-bold">◆</span>
                  <span>Dress Code: Smart casual or formal dining attire requested.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#C98B32] font-bold">◆</span>
                  <span>Reservations recommended for weekend dinner service.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#C98B32] font-bold">◆</span>
                  <span>Dietary Accommodations: Halal, Gluten-Free & Vegan options available.</span>
                </li>
              </ul>
            </div>

            <div className="relative z-10 pt-8 mt-6 border-t border-[#F8F5EC]/15">
              <a
                href={activeLoc.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest text-[#C98B32] hover:text-[#F8F5EC] transition-colors"
              >
                <span>OPEN INTERACTIVE GOOGLE MAPS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
