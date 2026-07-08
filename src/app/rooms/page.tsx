import { Metadata } from 'next';
import RoomCard from '@/components/rooms/RoomCard';
import { sampleRooms } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Rooms & Suites',
  description:
    'Explore our Studio Rooms, Business Suites, and Airbnb-style setups. All rooms feature comfortable beds, Smart TVs, and high-speed Starlink WiFi.',
};

export default function RoomsPage() {
  const studios = sampleRooms.filter((room) => room.type === 'studio');
  const business = sampleRooms.filter((room) => room.type === 'business');
  const airbnb = sampleRooms.filter((room) => room.type === 'airbnb');

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-24 bg-surface-elevated overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="section-title text-white mb-6">
            Rooms & <span className="text-gradient">Suites</span>
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl mx-auto">
            Thoughtfully designed spaces for every traveler. From cozy studios to
            expansive family suites with full kitchens.
          </p>
        </div>
      </section>

      <div className="bg-surface py-16 sm:py-24 space-y-24">
        {/* Studio Rooms */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Studio Rooms</h2>
            <p className="text-white/50 max-w-2xl leading-relaxed">
              Perfect for solo travelers and couples. Enjoy a comfortable 5x6 or 6x6 bed,
              en-suite bathroom, and high-speed internet.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studios.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </section>

        {/* Business Suites */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Business Suites</h2>
            <p className="text-white/50 max-w-2xl leading-relaxed">
              Designed for the working professional. Featuring dedicated workspaces,
              fast Starlink WiFi, and en-suite kitchenettes for convenience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {business.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </section>

        {/* Airbnb-style Setups */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Airbnb-Style Setups</h2>
            <p className="text-white/50 max-w-2xl leading-relaxed">
              Self-contained units ideal for families, groups, or Chama retreats.
              Includes full kitchens, living areas, and separate entrances.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {airbnb.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
