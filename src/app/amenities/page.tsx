import { Metadata } from 'next';
import { Wifi, Car, Sun, Shield, Mountain, Tv, Accessibility, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Amenities',
  description:
    'Discover the premium amenities at RosaBlu Hotel, including high-speed Starlink internet, secure free parking, solar lighting, and accessible areas.',
};

export default function AmenitiesPage() {
  const allAmenities = [
    {
      icon: Wifi,
      title: 'High-Speed Starlink Internet',
      description: 'Experience blazing fast, satellite internet powered by Starlink. Delivering speeds of 25+ Mbps, it’s perfect for business travelers needing reliable video calls, or tourists streaming their favorite shows. Available continuously across all rooms and public areas.',
    },
    {
      icon: Car,
      title: 'Free Secure Parking',
      description: 'Your peace of mind is our priority. We offer spacious, complimentary parking within our fully fenced compound, monitored 24/7. Whether you drive a compact car or are arriving with a Chama group bus, we have ample secure space for you.',
    },
    {
      icon: Shield,
      title: '24/7 Security',
      description: 'Rest easy knowing our property is secured with a robust perimeter fence and round-the-clock professional security personnel. Access is strictly monitored to ensure a safe environment for all our guests.',
    },
    {
      icon: Sun,
      title: 'Solar-Powered Lighting',
      description: 'We are committed to sustainability. Our pathways, gardens, and communal areas are illuminated by eco-friendly solar lighting, ensuring reliable visibility throughout the night while protecting Kirinyaga’s natural beauty.',
    },
    {
      icon: Mountain,
      title: 'Mt. Kenya Views',
      description: 'Wake up to the majestic, snow-capped peaks of Africa’s second-highest mountain. Several of our rooms and the main grounds offer unobstructed, breathtaking views of Mt. Kenya, especially stunning in the crisp morning air.',
    },
    {
      icon: Tv,
      title: 'Smart In-Room Entertainment',
      description: 'Every room features a modern Smart TV. Log into your Netflix, YouTube, or other streaming accounts and enjoy your favorite content right from the comfort of your bed.',
    },
    {
      icon: Accessibility,
      title: 'Accessible Ground Areas',
      description: 'We strive to make RosaBlu welcoming to everyone. Our ground floor rooms, restaurant, and gardens feature accessible pathways.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-24 bg-surface overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
            Guest Facilities
          </p>
          <h1 className="section-title text-white mb-6">
            Premium <span className="text-gradient">Amenities</span>
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl mx-auto">
            Everything you need for a comfortable, connected, and secure stay in Kirinyaga County.
          </p>
        </div>
      </section>

      {/* Note about Elevators */}
      <section className="py-8 bg-surface-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 glassmorphism p-6 rounded-2xl border-l-4 border-primary/50">
            <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-white font-bold mb-1">Accessibility Note</h4>
              <p className="text-sm text-white/60">
                Please note that our multi-story buildings do not currently feature elevators. 
                If you have mobility requirements, kindly request a ground-floor Studio or Airbnb unit when booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Amenities List */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {allAmenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div key={amenity.title} className="flex flex-col sm:flex-row gap-6 items-start group">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors border border-white/5">
                    <Icon className="w-8 h-8 text-primary/70 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {amenity.title}
                    </h2>
                    <p className="text-white/55 leading-relaxed">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
