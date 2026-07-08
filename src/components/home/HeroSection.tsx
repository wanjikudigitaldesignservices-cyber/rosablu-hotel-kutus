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
            backgroundImage: `url('/images/hero-bg.jpg')`,
            filter: 'brightness(0.3)',
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface/30 via-surface/60 to-surface" />
        {/* Animated accent elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-3 h-3 text-accent fill-accent" />
            ))}
          </div>
          <span className="text-xs font-medium text-white/70">
            Kutus&apos; Premier Village Retreat
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`section-title text-white mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Where Serenity Meets
          <br />
          <span className="text-gradient">Village Charm</span>
        </h1>

        {/* Sub-headline */}
        <p
          className={`text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-4 leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Experience the tranquility of Kutus Town with stunning Mt. Kenya views, 
          pure Kienyeji flavors, and high-speed Starlink WiFi — all just 700m from the CBD.
        </p>

        {/* Location */}
        <div
          className={`flex items-center justify-center gap-2 text-sm text-white/40 mb-10 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <MapPin className="w-4 h-4 text-primary/60" />
          <span>Kutus Town, Kirinyaga County, Kenya · C8VP+59</span>
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link href="/booking" className="btn-primary text-base px-8 py-4 animate-pulse-glow">
            Book Your Stay
          </Link>
          <Link href="/rooms" className="btn-secondary text-base px-8 py-4">
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
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-white/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-white/30" />
      </div>
    </section>
  );
}
