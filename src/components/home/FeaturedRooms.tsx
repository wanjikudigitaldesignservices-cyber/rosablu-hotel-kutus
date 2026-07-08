'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Bed, Tv, Wind, UtensilsCrossed, Users, ArrowRight } from 'lucide-react';
import { formatKsh } from '@/lib/pricing';
import { sampleRooms } from '@/lib/data';

export default function FeaturedRooms() {
  const featured = sampleRooms.slice(0, 3);

  return (
    <section className="section-padding bg-surface-elevated">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            Accommodation
          </p>
          <h2 className="section-title text-primary-dark mb-4">
            Our <span className="text-gradient">Rooms & Suites</span>
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            From cozy studios to spacious family suites, find the perfect space for your stay.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((room) => (
            <div key={room.id} className="card group">
              {/* Room Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={room.image_url}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/90 text-white uppercase">
                    {room.type}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1.5 rounded-lg glassmorphism text-sm font-bold text-white">
                    {formatKsh(room.base_price)}<span className="text-white/80 font-normal text-xs ml-1">/night</span>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-primary-dark mb-2 group-hover:text-primary transition-colors">
                  {room.name}
                </h3>
                <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                  {room.description}
                </p>

                {/* Specs */}
                <div className="flex flex-wrap gap-3 mb-5">
                  <div className="flex items-center gap-1.5 text-xs text-foreground/60">
                    <Bed className="w-3.5 h-3.5 text-primary/80" />
                    {room.bed_size}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-foreground/60">
                    <Users className="w-3.5 h-3.5 text-primary/80" />
                    Up to {room.max_guests}
                  </div>
                  {room.has_smart_tv && (
                    <div className="flex items-center gap-1.5 text-xs text-foreground/60">
                      <Tv className="w-3.5 h-3.5 text-primary/80" />
                      Smart TV
                    </div>
                  )}
                  {room.has_ac && (
                    <div className="flex items-center gap-1.5 text-xs text-foreground/60">
                      <Wind className="w-3.5 h-3.5 text-primary/80" />
                      AC
                    </div>
                  )}
                  {room.has_kitchenette && (
                    <div className="flex items-center gap-1.5 text-xs text-foreground/60">
                      <UtensilsCrossed className="w-3.5 h-3.5 text-primary/80" />
                      Kitchen
                    </div>
                  )}
                </div>

                <Link
                  href={`/booking?roomId=${room.id}`}
                  className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors group/link"
                >
                  Book This Room
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link href="/rooms" className="btn-secondary">
            View All Rooms
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
