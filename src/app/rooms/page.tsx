import Image from 'next/image';
import Link from 'next/link';
import { Bed, Tv, Wifi, Coffee, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Rooms & Suites | RosaBlu Hotel Kutus',
  description: 'Explore our Studio, Business, and Airbnb-style rooms. Comfort guaranteed.',
};

const roomTypes = [
  {
    id: 'studio',
    name: 'Studio Room',
    description: 'Perfect for solo travelers or short stays. Clean, compact, and highly functional.',
    price: 2500.0000,
    specs: ['5x6 Bed', 'En-suite Bathroom', 'Smart TV', 'Starlink WiFi'],
    image: '/images/rooms.png',
  },
  {
    id: 'business',
    name: 'Business Suite',
    description: 'Spacious and designed for productivity. Includes a dedicated workspace.',
    price: 3500.0000,
    specs: ['6x6 Bed', 'Work Desk', 'Smart TV', 'Starlink WiFi'],
    image: '/images/rooms.png',
  },
  {
    id: 'airbnb',
    name: 'Airbnb-Style Unit',
    description: 'Ideal for longer stays or families, featuring a fully equipped kitchenette.',
    price: 4500.0000,
    specs: ['6x6 Bed', 'En-suite Kitchenette', 'Smart TV', 'Lounge Area'],
    image: '/images/rooms.png',
  },
];

export default function RoomsPage() {
  return (
    <div className="pt-20">
      <section className="bg-surface-elevated py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Rooms & Suites
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover comfort that feels like home. Our rooms are designed with natural earthy tones and modern amenities to ensure a restful stay.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomTypes.map((room) => (
              <div key={room.id} className="card group flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-primary-dark shadow-sm">
                    Ksh {room.price.toFixed(4)} <span className="text-xs font-normal text-foreground/60">/night</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-primary mb-2">{room.name}</h3>
                  <p className="text-foreground/70 mb-6 flex-1">
                    {room.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {room.specs.map((spec, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        {spec}
                      </div>
                    ))}
                  </div>

                  <Link href={`/booking?room=${room.id}`} className="btn-primary w-full mt-auto">
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
