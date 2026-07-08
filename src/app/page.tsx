import HeroSection from '@/components/home/HeroSection';
import BookingWidget from '@/components/home/BookingWidget';
import FeaturedAmenities from '@/components/home/FeaturedAmenities';
import FeaturedRooms from '@/components/home/FeaturedRooms';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <>
      <HeroSection />
      <BookingWidget />
      <FeaturedAmenities />
      <FeaturedRooms />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
