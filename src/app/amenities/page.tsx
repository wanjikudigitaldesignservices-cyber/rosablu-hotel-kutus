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
    icon: <Wifi className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Eco-Friendly Solar Lighting',
    description: 'Continuous power and eco-conscious lighting powered by our modern solar grid.',
    icon: <Sun className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Secure Perimeter & Parking',
    description: 'Free, secure on-site parking with 24/7 security for your peace of mind.',
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Accessible Areas',
    description: 'Our ground floor and main facilities are designed to be accessible to everyone.',
    icon: <Accessibility className="w-8 h-8 text-primary" />,
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/amenities.png"
                alt="RosaBlu Amenities - Starlink and Solar Panels"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-8">
              {amenitiesList.map((amenity, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-4 bg-primary/10 rounded-xl shrink-0">
                    {amenity.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-dark mb-2">{amenity.title}</h3>
                    <p className="text-foreground/70">{amenity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
