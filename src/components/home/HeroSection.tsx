'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MapPin, Star, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero.png')`,
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-surface" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md mb-8 border border-white/20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-3 h-3 text-accent fill-accent" />
            ))}
          </div>
          <span className="text-xs font-medium text-white shadow-sm">
            Kutus&apos; Premier Village Retreat
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`section-title text-white mb-6 drop-shadow-md transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Where Serenity Meets
          <br />
          <span className="text-accent-light">Village Charm</span>
        </h1>

        {/* Sub-headline */}
        <p
          className={`text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-4 leading-relaxed drop-shadow transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Experience the tranquility of Kutus Town with stunning Mt. Kenya views, 
          pure Kienyeji flavors, and high-speed Starlink WiFi — all just 700m from the CBD.
        </p>

        {/* Location */}
        <div
          className={`flex items-center justify-center gap-2 text-sm text-white/80 mb-10 drop-shadow transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <MapPin className="w-4 h-4 text-accent-light" />
          <span>Kutus Town, Kirinyaga County, Kenya</span>
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link href="/booking" className="btn-primary text-base px-8 py-4 shadow-lg">
            Book Your Stay
          </Link>
          <Link href="/rooms" className="btn-secondary text-base px-8 py-4 bg-white/10 text-white border-white/30 hover:bg-white/20">
            Explore Our Rooms
          </Link>
        </div>

        {/* Stats bar */}
        <div
          className={`grid grid-cols-3 gap-6 max-w-lg mx-auto mt-16 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { value: '25+', label: 'Mbps WiFi' },
            { value: '700m', label: 'From CBD' },
            { value: '6', label: 'Room Types' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-surface/80 backdrop-blur-sm shadow-sm border border-black/5">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-foreground/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
