'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CalendarDays, Users, Search } from 'lucide-react';
import { getTodayString, getTomorrowString } from '@/lib/pricing';

export default function BookingWidget() {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState(getTodayString());
  const [checkOut, setCheckOut] = useState(getTomorrowString());
  const [guests, setGuests] = useState(2);

  const handleSearch = () => {
    const params = new URLSearchParams({
      checkIn,
      checkOut,
      guests: guests.toString(),
    });
    router.push(`/booking?${params.toString()}`);
  };

  return (
    <section className="relative -mt-24 z-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-surface rounded-2xl p-6 sm:p-8 shadow-xl border border-black/5">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-dark mb-6 text-center">
            Quick Availability Search
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {/* Check-in */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-medium text-foreground/60 uppercase tracking-wider">
                <CalendarDays className="w-3.5 h-3.5" />
                Check-in
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={getTodayString()}
                className="input-field"
              />
            </div>

            {/* Check-out */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-medium text-foreground/60 uppercase tracking-wider">
                <CalendarDays className="w-3.5 h-3.5" />
                Check-out
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn}
                className="input-field"
              />
            </div>

            {/* Guests */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-medium text-foreground/60 uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="input-field"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={handleSearch}
            className="btn-primary w-full mt-6 py-4 text-base"
          >
            <Search className="w-5 h-5" />
            Search Availability
          </button>
        </div>
      </div>
    </section>
  );
}
