import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const scrollToHash = () => {
        const element = document.getElementById(id);
        if (element) {
          if (window.lenis) {
            window.lenis.scrollTo(element, { offset: -90, duration: 1.2 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };

      // Allow DOM to settle before scrolling to hash target
      const timer = setTimeout(scrollToHash, 100);
      return () => clearTimeout(timer);
    } else {
      // 1. Reset Lenis smooth scroll engine position immediately
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      }

      // 2. Reset standard browser and document scroll
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // 3. Double-check on the next frame to prevent any race condition
      const rafId = requestAnimationFrame(() => {
        if (window.lenis) {
          window.lenis.scrollTo(0, { immediate: true });
        }
        window.scrollTo(0, 0);
      });

      // 4. Refresh ScrollTrigger after route change layout settles
      const stTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);

      return () => {
        cancelAnimationFrame(rafId);
        clearTimeout(stTimer);
      };
    }
  }, [pathname, hash]);

  return null;
}
