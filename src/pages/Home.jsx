import MaharajaHero from '../components/MaharajaHero';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import StorySection from '../components/StorySection';
import SignatureDishes from '../components/SignatureDishes';
import LocationSection from '../components/LocationSection';
import Testimonials from '../components/Testimonials';
import ReservationForm from '../components/ReservationForm';

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#fde9ce]">
      {/* Standard Sections in Natural Flow */}
      <MaharajaHero />
      <Hero />
      <Marquee />
      <StorySection />
      <SignatureDishes />

      {/* Location Section */}
      <div className="relative z-10 w-full">
        <LocationSection />
      </div>

      {/* Mughal Jali Evening Sanctum */}
      <div className="relative z-20 w-full bg-[#242A33] bg-jali-pattern border-t-2 border-[#CC842F]/50 shadow-[0_-25px_60px_rgba(0,0,0,0.5)] overflow-hidden">
        <Testimonials />
        <ReservationForm />
      </div>
    </div>
  );
}
