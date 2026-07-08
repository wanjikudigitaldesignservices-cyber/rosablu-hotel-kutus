'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { CalendarDays, Users, Bed, CheckCircle2, ChevronRight } from 'lucide-react';
import {
  formatKsh,
  calculateNights,
  calculatePricing,
  getTodayString,
  getTomorrowString,
  formatDate
} from '@/lib/pricing';
import { sampleRooms } from '@/lib/data';
import { Room } from '@/types';

// We wrap the main content in a component that uses useSearchParams
// and wrap that in Suspense as required by Next.js App Router for client components using useSearchParams.
function BookingFlow() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [checkIn, setCheckIn] = useState(searchParams.get('checkIn') || getTodayString());
  const [checkOut, setCheckOut] = useState(searchParams.get('checkOut') || getTomorrowString());
  const [guests, setGuests] = useState(Number(searchParams.get('guests')) || 2);
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(searchParams.get('roomId'));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);

  // If a room ID was passed in, but we don't have dates/guests verified, we still start at step 1
  // If they click "Next" on step 1, and already have a room, we could skip to step 3, but linear flow is safer.

  const selectedRoom = selectedRoomId ? sampleRooms.find((r) => r.id === selectedRoomId) : null;
  const nights = calculateNights(checkIn, checkOut);
  
  // Calculate pricing
  const pricing = selectedRoom ? calculatePricing(selectedRoom.base_price, nights) : null;

  const handleNextStep1 = () => {
    if (nights > 0) {
      setStep(2);
    } else {
      alert("Check-out date must be after check-in date.");
    }
  };

  const handleSelectRoom = (roomId: string) => {
    setSelectedRoomId(roomId);
    setStep(3);
  };

  const handleConfirmBooking = async () => {
    setIsSubmitting(true);
    // In a real app, we would verify auth here or redirect to login/register
    // For this prototype, we simulate a successful booking
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // We would hit the /api/webhook/booking endpoint here
      // await fetch('/api/webhook/booking', { method: 'POST', body: JSON.stringify({...}) });

      setBookingComplete(true);
    } catch (error) {
      console.error(error);
      alert("Failed to confirm booking");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (bookingComplete) {
    return (
      <div className="max-w-2xl mx-auto mt-20 text-center glassmorphism p-12 rounded-3xl">
        <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-white mb-4">Booking Confirmed!</h2>
        <p className="text-white/60 mb-8 leading-relaxed">
          Thank you for choosing RosaBlu Hotel Kutus. Your reservation details have been sent to your email. 
          You can view your upcoming stays in your Guest Dashboard.
        </p>
        <Link href="/dashboard" className="btn-primary">
          Go to Guest Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-12 relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -z-10 -translate-y-1/2" />
        
        {[
          { num: 1, label: 'Dates & Guests' },
          { num: 2, label: 'Choose Room' },
          { num: 3, label: 'Review & Book' }
        ].map((s) => (
          <div key={s.num} className="flex flex-col items-center gap-2 bg-surface px-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
              step >= s.num ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-surface-elevated text-white/30 border border-white/10'
            }`}>
              {step > s.num ? <CheckCircle2 className="w-5 h-5" /> : s.num}
            </div>
            <span className={`text-xs font-semibold uppercase tracking-wider ${step >= s.num ? 'text-primary' : 'text-white/30'}`}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2">
          
          {/* STEP 1: Dates & Guests */}
          {step === 1 && (
            <div className="glassmorphism p-8 rounded-3xl animate-fade-in">
              <h2 className="text-2xl font-bold text-white mb-6">When are you staying?</h2>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Check-in Date</label>
                  <div className="relative">
                    <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      min={getTodayString()}
                      className="input-field pl-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Check-out Date</label>
                  <div className="relative">
                    <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      min={checkIn}
                      className="input-field pl-12"
                    />
                  </div>
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-medium text-white/70">Number of Guests</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="input-field pl-12"
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <button onClick={handleNextStep1} className="btn-primary w-full py-4">
                Continue to Rooms
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* STEP 2: Choose Room */}
          {step === 2 && (
            <div className="animate-fade-in space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Available Rooms</h2>
              
              {sampleRooms.filter(r => r.max_guests >= guests).map((room) => (
                <div key={room.id} className={`card p-6 flex flex-col sm:flex-row gap-6 cursor-pointer transition-all ${selectedRoomId === room.id ? 'ring-2 ring-primary bg-primary/5' : ''}`} onClick={() => handleSelectRoom(room.id)}>
                  <div className="w-full sm:w-48 h-32 rounded-xl bg-gradient-to-br from-surface-elevated to-surface-overlay flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                    <Bed className="w-8 h-8 text-white/20" />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold bg-primary/80 text-white uppercase">
                      {room.type}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-white">{room.name}</h3>
                        <div className="text-right">
                          <span className="block text-primary font-bold text-lg">{formatKsh(room.base_price)}</span>
                          <span className="text-xs text-white/40 uppercase tracking-wider">Per Night</span>
                        </div>
                      </div>
                      <p className="text-sm text-white/50 line-clamp-2 mb-4">{room.description}</p>
                    </div>
                    <div className="flex gap-3 text-xs text-white/40 font-medium">
                      <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5" /> {room.bed_size}</span>
                      <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> Up to {room.max_guests}</span>
                    </div>
                  </div>
                </div>
              ))}
              
              <button onClick={() => setStep(1)} className="btn-secondary w-full py-4 mt-4">
                Back to Dates
              </button>
            </div>
          )}

          {/* STEP 3: Review & Book */}
          {step === 3 && selectedRoom && pricing && (
            <div className="glassmorphism p-8 rounded-3xl animate-fade-in">
              <h2 className="text-2xl font-bold text-white mb-6">Review & Complete</h2>
              
              <div className="bg-surface/50 rounded-2xl p-6 border border-white/5 mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Account & Authentication</h3>
                <p className="text-sm text-white/60 mb-6">
                  To complete your booking, you need an account. We use secure online registration to protect your data.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/auth/login?redirect=/booking" className="btn-secondary flex-1">
                    Log In
                  </Link>
                  <Link href="/auth/register?redirect=/booking" className="btn-primary flex-1">
                    Register Account
                  </Link>
                </div>
                <div className="mt-6 pt-6 border-t border-white/5">
                   <p className="text-xs text-white/40 italic text-center">
                     For this prototype demonstration, you can proceed without logging in.
                   </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-semibold text-white">Special Requests</h3>
                <textarea
                  rows={3}
                  className="input-field resize-none"
                  placeholder="Any dietary requirements, arrival time, or other requests?"
                />
              </div>

              <div className="flex gap-4">
                <button onClick={() => setStep(2)} className="btn-secondary flex-1 py-4">
                  Back
                </button>
                <button 
                  onClick={handleConfirmBooking} 
                  disabled={isSubmitting}
                  className="btn-primary flex-[2] py-4 disabled:opacity-50"
                >
                  {isSubmitting ? 'Processing...' : 'Confirm Reservation'}
                </button>
              </div>
              
              <p className="text-xs text-center text-white/30 mt-6">
                By clicking "Confirm Reservation", you agree to our <Link href="/privacy" className="underline hover:text-primary">Terms of Service and Privacy Policy</Link>.
              </p>
            </div>
          )}
        </div>

        {/* Sidebar Summary */}
        <div className="lg:col-span-1">
          <div className="glassmorphism rounded-3xl p-6 sticky top-24">
            <h3 className="text-lg font-bold text-white mb-6">Booking Summary</h3>
            
            <div className="space-y-4 text-sm mb-6 pb-6 border-b border-white/10">
              <div className="flex justify-between">
                <span className="text-white/50">Check-in</span>
                <span className="text-white font-medium">{formatDate(checkIn)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Check-out</span>
                <span className="text-white font-medium">{formatDate(checkOut)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Duration</span>
                <span className="text-white font-medium">{nights} {nights === 1 ? 'Night' : 'Nights'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Guests</span>
                <span className="text-white font-medium">{guests}</span>
              </div>
            </div>

            {selectedRoom && pricing ? (
              <div className="space-y-4">
                <div className="pb-4 border-b border-white/5">
                  <h4 className="font-semibold text-white mb-1">{selectedRoom.name}</h4>
                  <p className="text-xs text-white/40">{selectedRoom.type.toUpperCase()}</p>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-white/60">
                    <span>{formatKsh(pricing.basePrice)} × {nights} nights</span>
                    <span>{formatKsh(pricing.subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-white/60">
                    <span>VAT ({pricing.vatRate}%)</span>
                    <span>{formatKsh(pricing.vatAmount)}</span>
                  </div>
                  <div className="flex justify-between text-white/60">
                    <span>Service Charge (2.0000%)</span>
                    <span>{formatKsh(pricing.serviceCharge)}</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/10 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold">Total Price</span>
                    <span className="text-xl font-bold text-primary">{formatKsh(pricing.totalPrice)}</span>
                  </div>
                  <p className="text-[10px] text-right text-white/30 mt-1 uppercase tracking-wider">Prices displayed to 4 decimal places</p>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <Bed className="w-12 h-12 text-white/10 mx-auto mb-4" />
                <p className="text-sm text-white/40">Select a room to see<br/>the pricing breakdown.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="section-title text-white text-center">
          Complete your <span className="text-gradient">Reservation</span>
        </h1>
      </div>
      <Suspense fallback={<div className="text-center py-20 text-white/50">Loading booking flow...</div>}>
        <BookingFlow />
      </Suspense>
    </div>
  );
}
