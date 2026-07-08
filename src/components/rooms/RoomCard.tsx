import Link from 'next/link';
import { Bed, Tv, Wind, UtensilsCrossed, Users, ArrowRight } from 'lucide-react';
import { formatKsh } from '@/lib/pricing';
import { Room } from '@/types';

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <div className="card group">
      {/* Image placeholder */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <Bed className="w-16 h-16 text-white/20" />
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/90 text-white uppercase tracking-wider">
            {room.type}
          </span>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="px-4 py-2 rounded-xl glassmorphism text-base font-bold text-white shadow-lg">
            {formatKsh(room.base_price)}
            <span className="text-white/60 font-normal text-xs ml-1">/night</span>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
          {room.name}
        </h3>
        <p className="text-sm text-white/50 mb-6 leading-relaxed">
          {room.description}
        </p>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <Bed className="w-4 h-4 text-primary/60" />
            {room.bed_size} Bed
          </div>
          <div className="flex items-center gap-2 text-sm text-white/60">
            <Users className="w-4 h-4 text-primary/60" />
            Up to {room.max_guests} Guests
          </div>
          {room.has_smart_tv && (
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Tv className="w-4 h-4 text-primary/60" />
              Smart TV
            </div>
          )}
          {room.has_ac && (
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Wind className="w-4 h-4 text-primary/60" />
              Air Conditioning
            </div>
          )}
          {room.has_kitchenette && (
            <div className="flex items-center gap-2 text-sm text-white/60">
              <UtensilsCrossed className="w-4 h-4 text-primary/60" />
              En-suite Kitchen
            </div>
          )}
        </div>

        <Link
          href={`/booking?roomId=${room.id}`}
          className="btn-primary w-full group/btn"
        >
          Book This Room
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
