import MaharajaHero from '../components/MaharajaHero';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import StorySection from '../components/StorySection';
import SignatureDishes from '../components/SignatureDishes';
import MenuSection from '../components/MenuSection';
import WhyUs from '../components/WhyUs';
import ChefSpotlight from '../components/ChefSpotlight';
import ExperienceSection from '../components/ExperienceSection';
import MasonryGallery from '../components/MasonryGallery';
import LocationSection from '../components/LocationSection';
import Testimonials from '../components/Testimonials';
import ReservationForm from '../components/ReservationForm';

export default function Home() {
  return (
    <main>
      {/* 100vh Maharaja Clockwise Food Carousel Hero Section (First Section) */}
      <MaharajaHero />

      {/* Shifted Existing Sections Below */}
      <Hero />
      <Marquee />
      <StorySection />
      <SignatureDishes />
      <MenuSection limit={6} />
      <WhyUs />
      <ChefSpotlight />
      <ExperienceSection />
      <MasonryGallery limit={6} />
      <LocationSection />
      <Testimonials />
      <ReservationForm />
    </main>
  );
}
