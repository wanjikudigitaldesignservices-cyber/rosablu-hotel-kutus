import { sampleRooms } from '@/lib/data';
import RoomCard from '@/components/rooms/RoomCard';

export const metadata = {
  title: 'Rooms & Suites | RosaBlu Hotel Kutus',
  description: 'Explore our Studio, Business, and Airbnb-style rooms. Comfort guaranteed.',
};

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
            {sampleRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
