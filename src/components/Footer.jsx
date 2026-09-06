import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const footerInnerRef = useRef(null);
  const mandalaRef = useRef(null);
  const mandalaSmallRef = useRef(null);
  const headlineRef = useRef(null);
  const tagRef = useRef(null);
  const headlineLinesRef = useRef([]);
  const dividerLineRef = useRef(null);
  const ctaBtnRef = useRef(null);
  const columnsContainerRef = useRef(null);
  const columnsRef = useRef([]);
  const bottomBarRef = useRef(null);

  useEffect(() => {
    // GSAP Context ensures clean garbage collection on unmount
    const ctx = gsap.context(() => {
      // 1. Curtain Uncover Parallax (GPU translate3d only)
      gsap.fromTo(
        footerInnerRef.current,
        { yPercent: -14, opacity: 0.9 },
        {
          yPercent: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: 0.5,
          },
        }
      );

      // 2. Parallax Mandalas (Hardware-accelerated scrubbed rotation & vertical drift)
      if (mandalaRef.current) {
        gsap.to(mandalaRef.current, {
          rotate: 35,
          y: 50,
          ease: 'none',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: 1,
          },
        });
      }

      if (mandalaSmallRef.current) {
        gsap.to(mandalaSmallRef.current, {
          rotate: -25,
          y: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: 1.2,
          },
        });
      }

      // 3. Editorial Headline Mask Reveal & Gold Accent Draw (once: true for 0% CPU after reveal)
      const revealTl = gsap.timeline({
        scrollTrigger: {
          trigger: headlineRef.current,
          start: 'top 85%',
          once: true,
        },
      });

      revealTl
        .fromTo(
          tagRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
        )
        .fromTo(
          headlineLinesRef.current,
          { y: '115%' },
          {
            y: '0%',
            duration: 0.9,
            stagger: 0.12,
            ease: 'power4.out',
          },
          '-=0.35'
        )
        .fromTo(
          dividerLineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.0,
            ease: 'power3.inOut',
          },
          '-=0.65'
        )
        .fromTo(
          ctaBtnRef.current,
          { opacity: 0, scale: 0.92, y: 15 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.65,
            ease: 'back.out(1.4)',
          },
          '-=0.7'
        );

      // 4. Staggered 4-Column Elevation
      if (columnsRef.current.length > 0) {
        gsap.fromTo(
          columnsRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: columnsContainerRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // Bottom Bar Fade-in
      if (bottomBarRef.current) {
        gsap.fromTo(
          bottomBarRef.current,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bottomBarRef.current,
              start: 'top 95%',
              once: true,
            },
          }
        );
      }

      // 5. Magnetic Floating CTA Button with gsap.quickTo (Zero GC overhead)
      if (ctaBtnRef.current && window.matchMedia('(hover: hover)').matches) {
        const btn = ctaBtnRef.current;
        const arrow = btn.querySelector('.cta-arrow');

        const xTo = gsap.quickTo(btn, 'x', { duration: 0.35, ease: 'power3.out' });
        const yTo = gsap.quickTo(btn, 'y', { duration: 0.35, ease: 'power3.out' });
        const arrowXTo = arrow ? gsap.quickTo(arrow, 'x', { duration: 0.25, ease: 'power3.out' }) : null;
        const arrowYTo = arrow ? gsap.quickTo(arrow, 'y', { duration: 0.25, ease: 'power3.out' }) : null;

        const onMouseMove = (e) => {
          const rect = btn.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const deltaX = (e.clientX - centerX) * 0.32;
          const deltaY = (e.clientY - centerY) * 0.32;

          xTo(Math.max(-16, Math.min(16, deltaX)));
          yTo(Math.max(-14, Math.min(14, deltaY)));

          if (arrowXTo && arrowYTo) {
            arrowXTo(Math.max(-6, Math.min(6, deltaX * 0.5)));
            arrowYTo(Math.max(-6, Math.min(6, deltaY * 0.5)));
          }
        };

        const onMouseLeave = () => {
          xTo(0);
          yTo(0);
          if (arrowXTo && arrowYTo) {
            arrowXTo(0);
            arrowYTo(0);
          }
        };

        btn.addEventListener('mousemove', onMouseMove);
        btn.addEventListener('mouseleave', onMouseLeave);

        return () => {
          btn.removeEventListener('mousemove', onMouseMove);
          btn.removeEventListener('mouseleave', onMouseLeave);
        };
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#CE4527] text-[#FAF3E8] pt-20 pb-12 border-t border-[#B5351A] relative overflow-hidden z-0"
    >
      {/* Background Mandala 1: Top-Right Large (Scrub Parallax) */}
      <svg
        ref={mandalaRef}
        className="absolute -right-24 -top-24 w-[480px] h-[480px] lg:w-[620px] lg:h-[620px] text-[#FAF3E8] opacity-[0.06] pointer-events-none select-none will-change-transform"
        viewBox="0 0 400 400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <circle cx="200" cy="200" r="180" />
        <circle cx="200" cy="200" r="140" strokeDasharray="4 4" />
        <circle cx="200" cy="200" r="100" />
        <circle cx="200" cy="200" r="60" />
        <circle cx="200" cy="200" r="20" fill="currentColor" fillOpacity="0.1" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <g key={deg} transform={`rotate(${deg} 200 200)`}>
            <path d="M200,20 C225,90 225,110 200,140 C175,110 175,90 200,20 Z" />
            <path d="M200,60 C215,110 215,120 200,140 C185,120 185,110 200,60 Z" />
            <line x1="200" y1="20" x2="200" y2="200" strokeOpacity="0.4" />
          </g>
        ))}
      </svg>

      {/* Background Mandala 2: Bottom-Left Subtle (Opposite Scrub Parallax) */}
      <svg
        ref={mandalaSmallRef}
        className="absolute -left-20 -bottom-20 w-[340px] h-[340px] text-[#CC842F] opacity-[0.07] pointer-events-none select-none will-change-transform"
        viewBox="0 0 300 300"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="150" cy="150" r="130" />
        <circle cx="150" cy="150" r="90" strokeDasharray="3 3" />
        <circle cx="150" cy="150" r="50" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <g key={deg} transform={`rotate(${deg} 150 150)`}>
            <path d="M150,20 C170,70 170,90 150,110 C130,90 130,70 150,20 Z" />
          </g>
        ))}
      </svg>

      {/* Inner Footer Container (Uncover Parallax target) */}
      <div
        ref={footerInnerRef}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 will-change-transform"
      >
        {/* Editorial Headline & CTA Section */}
        <div
          ref={headlineRef}
          className="pb-14 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div
              ref={tagRef}
              className="inline-flex items-center space-x-2 text-xs font-semibold tracking-[0.25em] text-[#CC842F] uppercase mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#CC842F]" />
              <span>An Unforgettable Experience</span>
            </div>

            {/* Masked Headline Lines for Smooth Reveal */}
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none text-[#FFFDF8]">
              <span className="block overflow-hidden pb-1">
                <span
                  ref={(el) => (headlineLinesRef.current[0] = el)}
                  className="block will-change-transform"
                >
                  COME HUNGRY.
                </span>
              </span>
              <span className="block overflow-hidden pt-1">
                <span
                  ref={(el) => (headlineLinesRef.current[1] = el)}
                  className="block italic font-normal text-[#CC842F] will-change-transform"
                >
                  LEAVE HAPPY.
                </span>
              </span>
            </h2>
          </div>

          {/* Magnetic Floating CTA Button */}
          <div className="self-start md:self-auto pt-4 md:pt-0">
            <Link
              to="/reservations"
              ref={ctaBtnRef}
              className="group relative inline-flex items-center space-x-3 bg-[#CC842F] hover:bg-[#B57326] text-[#FFFDF8] text-xs font-bold tracking-widest px-8 py-4 rounded-md transition-shadow duration-300 shadow-lg hover:shadow-[#CC842F]/30 hover:shadow-2xl border border-[#FAF3E8]/30 will-change-transform cursor-pointer overflow-hidden"
            >
              {/* Subtle hover shimmer */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              <span>RESERVE YOUR TABLE</span>
              <ArrowUpRight className="cta-arrow w-4 h-4 text-[#FFFDF8] will-change-transform transition-transform duration-200 group-hover:rotate-12" />
            </Link>
          </div>
        </div>

        {/* Animated Gold Divider Line */}
        <div
          ref={dividerLineRef}
          className="h-[1px] bg-[#FAF3E8]/20 w-full mb-16 origin-left will-change-transform"
        />

        {/* 4-Column Footer Content with Staggered Elevation */}
        <div
          ref={columnsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand Col */}
          <div
            ref={(el) => (columnsRef.current[0] = el)}
            className="space-y-4 will-change-transform"
          >
            <Link to="/" className="inline-block group">
              <span className="font-serif text-3xl font-bold tracking-wider text-[#FFFDF8] group-hover:text-[#FAF3E8] transition-colors">
                SAFFRON CIRCLE
              </span>
              <span className="text-[10px] tracking-[0.3em] font-medium text-[#CC842F] block uppercase -mt-1">
                Indian Fine Dining
              </span>
            </Link>
            <p className="text-sm text-[#FAF3E8]/90 leading-relaxed max-w-xs font-light">
              Authentic Indian cuisine rooted in timeless regional traditions, served through modern culinary artistry and warm hospitality.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-[#CC842F]/40 flex items-center justify-center text-[#CC842F] hover:text-[#FFFDF8] hover:bg-[#CC842F] hover:border-[#CC842F] transition-all duration-300 hover:scale-105"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-[#CC842F]/40 flex items-center justify-center text-[#CC842F] hover:text-[#FFFDF8] hover:bg-[#CC842F] hover:border-[#CC842F] transition-all duration-300 hover:scale-105"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div
            ref={(el) => (columnsRef.current[1] = el)}
            className="will-change-transform"
          >
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#CC842F] uppercase mb-6">
              NAVIGATION
            </h3>
            <ul className="space-y-3 text-sm font-light text-[#FAF3E8]/90">
              <li>
                <Link to="/" className="hover:text-[#CC842F] transition-colors inline-block hover:translate-x-1 duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#CC842F] transition-colors inline-block hover:translate-x-1 duration-200">
                  Our Story &amp; Chef
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-[#CC842F] transition-colors inline-block hover:translate-x-1 duration-200">
                  Full Dining Menu
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#CC842F] transition-colors inline-block hover:translate-x-1 duration-200">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/offerings" className="hover:text-[#CC842F] transition-colors inline-block hover:translate-x-1 duration-200">
                  Gift Cards &amp; Catering
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="hover:text-[#CC842F] transition-colors inline-block hover:translate-x-1 duration-200">
                  Table Reservations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#CC842F] transition-colors inline-block hover:translate-x-1 duration-200">
                  Location &amp; Hours
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div
            ref={(el) => (columnsRef.current[2] = el)}
            className="will-change-transform"
          >
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#CC842F] uppercase mb-6">
              DINING HOURS
            </h3>
            <ul className="space-y-3 text-sm font-light text-[#FAF3E8]/90">
              <li className="flex justify-between border-b border-[#FAF3E8]/15 pb-2">
                <span>Tue – Thu:</span>
                <span className="font-normal text-[#FFFDF8]">5:00 PM – 10:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-[#FAF3E8]/15 pb-2">
                <span>Fri – Sat:</span>
                <span className="font-normal text-[#FFFDF8]">5:00 PM – 11:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-[#FAF3E8]/15 pb-2">
                <span>Sunday:</span>
                <span className="font-normal text-[#FFFDF8]">4:30 PM – 10:00 PM</span>
              </li>
              <li className="flex justify-between text-xs text-[#CC842F] pt-1 font-semibold">
                <span>Monday:</span>
                <span>Spice Sourcing (Closed)</span>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div
            ref={(el) => (columnsRef.current[3] = el)}
            className="will-change-transform"
          >
            <h3 className="text-xs font-bold tracking-[0.2em] text-[#CC842F] uppercase mb-6">
              LOCATION
            </h3>
            <ul className="space-y-4 text-sm font-light text-[#FAF3E8]/90">
              <li className="flex items-start space-x-3 group">
                <MapPin className="w-4 h-4 text-[#CC842F] mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                <span>142 Culinary Avenue, Gourmet District, San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="w-4 h-4 text-[#CC842F] shrink-0 group-hover:scale-110 transition-transform" />
                <span>+1 (555) 348-2890</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="w-4 h-4 text-[#CC842F] shrink-0 group-hover:scale-110 transition-transform" />
                <span>concierge@saffroncircle.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          ref={bottomBarRef}
          className="border-t border-[#FAF3E8]/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#FAF3E8]/50 gap-4 will-change-transform"
        >
          <p>© 2026 Saffron Circle Fine Dining. All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-[#FFFDF8] transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#FFFDF8] transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-[#FFFDF8] transition-colors cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
