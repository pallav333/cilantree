import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Disable native browser scroll restoration so SPA route changes don't preserve old scroll offsets
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
    });

    // Expose lenis instance globally for scroll resets & smooth section anchors
    window.lenis = lenis;

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    // Enable GSAP lag smoothing to smoothly handle micro frame variations without jank
    gsap.ticker.lagSmoothing(500, 33);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return children;
}
