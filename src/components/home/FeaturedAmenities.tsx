'use client';

import Image from 'next/image';

const amenities = [
  {
    image: '/images/amenities.png',
    title: 'Starlink WiFi',
    description: 'High-speed internet at 25+ Mbps. Stay connected anywhere on the property.',
    highlight: true,
  },
  {
    image: '/images/location.png',
    title: 'Free Parking',
    description: 'Secure, complimentary parking within our gated perimeter.',
    highlight: false,
  },
  {
    image: '/images/rooms.png',
    title: 'Air Conditioning',
    description: 'Climate-controlled rooms for your comfort year-round.',
    highlight: false,
  },
  {
    image: '/images/sightseeing.png',
    title: 'Solar Lighting',
    description: 'Eco-friendly solar-powered pathway and garden lighting.',
    highlight: false,
  },
  {
    image: '/images/about.png',
    title: 'Secure Perimeter',
    description: '24/7 security with a fully fenced and guarded compound.',
    highlight: false,
  },
  {
    image: '/images/hero.png',
    title: 'Mt. Kenya Views',
    description: 'Wake up to breathtaking views of Africa\'s second-highest peak.',
    highlight: true,
  },
  {
    image: '/images/rooms.png',
    title: 'Smart TVs',
    description: 'Every room equipped with a Smart TV for entertainment.',
    highlight: false,
  },
  {
    image: '/images/dining.png',
    title: 'On-Site Dining',
    description: 'Restaurant serving authentic Kenyan cuisine until 23:00.',
    highlight: false,
  },
];

export default function FeaturedAmenities() {
  return (
    <section className="section-padding bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            What We Offer
          </p>
          <h2 className="section-title text-primary-dark mb-4">
            Premium <span className="text-gradient">Amenities</span>
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Everything you need for a comfortable and memorable stay in Kutus Town.
          </p>
        </div>
      </div>

      {/* Amenities Marquee */}
      <div className="relative w-full overflow-hidden py-4 -mx-4 sm:mx-0">
        <div className="flex w-max animate-[slideLeftToRight_40s_linear_infinite] hover:animate-play-paused">
          {[...amenities, ...amenities].map((amenity, index) => (
            <div
              key={`${amenity.title}-${index}`}
              className={`card w-[280px] sm:w-[320px] shrink-0 mx-3 sm:mx-4 p-5 sm:p-6 group ${
                amenity.highlight ? 'ring-1 ring-primary/20' : ''
              }`}
            >
              <div className="w-full h-40 relative rounded-xl overflow-hidden mb-4">
                <Image
                  src={amenity.image}
                  alt={amenity.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {amenity.highlight && (
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                )}
              </div>
              <h3 className="text-base font-semibold text-primary-dark mb-2">
                {amenity.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
