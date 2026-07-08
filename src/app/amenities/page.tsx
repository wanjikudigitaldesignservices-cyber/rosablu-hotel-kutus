import Image from 'next/image';
import { ShieldCheck, Wifi, Sun, Accessibility } from 'lucide-react';

export const metadata = {
  title: 'Amenities | RosaBlu Hotel Kutus',
  description: 'Enjoy free secure parking, high-speed Starlink internet, and eco-friendly solar lighting.',
};

const amenitiesList = [
  {
    title: 'High-Speed Starlink WiFi',
    description: 'Stay connected with reliable 25+ Mbps internet, perfect for streaming or remote work.',
    icon: <Wifi className="w-5 h-5 text-primary" />,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Eco-Friendly Solar Lighting',
    description: 'Continuous power and eco-conscious lighting powered by our modern solar grid.',
    icon: <Sun className="w-5 h-5 text-primary" />,
    image: 'https://images.unsplash.com/photo-1509391366360-1f95091bd516?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Secure Perimeter & Parking',
    description: 'Free, secure on-site parking with 24/7 security for your peace of mind.',
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Accessible Areas',
    description: 'Our ground floor and main facilities are designed to be accessible to everyone.',
    icon: <Accessibility className="w-5 h-5 text-primary" />,
    image: 'https://images.unsplash.com/photo-1579208575657-c595d1e0978c?q=80&w=800&auto=format&fit=crop',
  },
];

export default function AmenitiesPage() {
  return (
    <div className="pt-20">
      <section className="bg-surface-elevated py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
              Hotel Amenities
            </h1>
            <p className="text-lg text-foreground/80">
              We provide modern conveniences in a rustic setting to ensure your stay is comfortable, secure, and fully connected.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {amenitiesList.map((amenity, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image src={amenity.image} alt={amenity.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 p-3 bg-white/10 backdrop-blur-md rounded-xl text-white">
                    {amenity.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary-dark mb-3">{amenity.title}</h3>
                  <p className="text-foreground/70 text-base leading-relaxed">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
