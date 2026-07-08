'use client';

import { Wifi, Car, Wind, Sun, Shield, Mountain, Tv, UtensilsCrossed } from 'lucide-react';

const amenities = [
  {
    icon: Wifi,
    title: 'Starlink WiFi',
    description: 'High-speed internet at 25+ Mbps. Stay connected anywhere on the property.',
    highlight: true,
  },
  {
    icon: Car,
    title: 'Free Parking',
    description: 'Secure, complimentary parking within our gated perimeter.',
    highlight: false,
  },
  {
    icon: Wind,
    title: 'Air Conditioning',
    description: 'Climate-controlled rooms for your comfort year-round.',
    highlight: false,
  },
  {
    icon: Sun,
    title: 'Solar Lighting',
    description: 'Eco-friendly solar-powered pathway and garden lighting.',
    highlight: false,
  },
  {
    icon: Shield,
    title: 'Secure Perimeter',
    description: '24/7 security with a fully fenced and guarded compound.',
    highlight: false,
  },
  {
    icon: Mountain,
    title: 'Mt. Kenya Views',
    description: 'Wake up to breathtaking views of Africa\'s second-highest peak.',
    highlight: true,
  },
  {
    icon: Tv,
    title: 'Smart TVs',
    description: 'Every room equipped with a Smart TV for entertainment.',
    highlight: false,
  },
  {
    icon: UtensilsCrossed,
    title: 'On-Site Dining',
    description: 'Restaurant serving authentic Kenyan cuisine until 23:00.',
    highlight: false,
  },
];

export default function FeaturedAmenities() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            What We Offer
          </p>
          <h2 className="section-title text-white mb-4">
            Premium <span className="text-gradient">Amenities</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Everything you need for a comfortable and memorable stay in Kutus Town.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={amenity.title}
                className={`card p-6 group ${
                  amenity.highlight ? 'ring-1 ring-primary/20' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
                    amenity.highlight
                      ? 'bg-gradient-brand'
                      : 'bg-white/5 group-hover:bg-primary/10'
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      amenity.highlight
                        ? 'text-white'
                        : 'text-primary/70 group-hover:text-primary'
                    }`}
                  />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {amenity.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
