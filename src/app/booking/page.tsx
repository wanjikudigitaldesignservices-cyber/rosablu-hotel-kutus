'use client';

import { useState, Suspense } from 'react';
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

  const selectedRoom = selectedRoomId ? sampleRooms.find((r) => r.id === selectedRoomId) : null;
  const nights = calculateNights(checkIn, checkOut);
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
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
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
      <div className="max-w-2xl mx-auto mt-20 text-center bg-white p-12 rounded-3xl border border-black/5 shadow-xl">
        <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-primary-dark mb-4">Booking Confirmed!</h2>
        <p className="text-foreground/70 mb-8 leading-relaxed">
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
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-black/10 -z-10 -translate-y-1/2" />
        
        {[
          { num: 1, label: 'Dates & Guests' },
          { num: 2, label: 'Choose Room' },
          { num: 3, label: 'Review & Book' }
        ].map((s) => (
          <div key={s.num} className="flex flex-col items-center gap-2 bg-surface px-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
              step >= s.num ? 'bg-primary text-white shadow-lg' : 'bg-surface-elevated text-foreground/40 border border-black/10'
            }`}>
              {step > s.num ? <CheckCircle2 className="w-5 h-5" /> : s.num}
            </div>
            <span className={`text-xs font-semibold uppercase tracking-wider ${step >= s.num ? 'text-primary' : 'text-foreground/40'}`}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* STEP 1: Dates & Guests */}
          {step === 1 && (
            <div className="bg-white border border-black/5 shadow-sm p-8 rounded-3xl animate-fade-in">
              <h2 className="text-2xl font-bold text-primary-dark mb-6">When are you staying?</h2>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/70">Check-in Date</label>
                  <div className="relative">
                    <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
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
                  <label className="text-sm font-medium text-foreground/70">Check-out Date</label>
                  <div className="relative">
                    <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
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
                  <label className="text-sm font-medium text-foreground/70">Number of Guests</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
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
              <h2 className="text-2xl font-bold text-primary-dark mb-6">Available Rooms</h2>
              
              {sampleRooms.filter(r => r.max_guests >= guests).map((room) => (
                <div key={room.id} className={`card p-6 flex flex-col sm:flex-row gap-6 cursor-pointer transition-all ${selectedRoomId === room.id ? 'ring-2 ring-primary bg-primary/5' : ''}`} onClick={() => handleSelectRoom(room.id)}>
                  <div className="w-full sm:w-48 h-32 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                    <Bed className="w-8 h-8 text-primary/40" />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold bg-primary text-white uppercase">
                      {room.type}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-primary-dark">{room.name}</h3>
                        <div className="text-right">
                          <span className="block text-accent font-bold text-lg">{formatKsh(room.base_price)}</span>
                          <span className="text-xs text-foreground/50 uppercase tracking-wider">Per Night</span>
                        </div>
                      </div>
                      <p className="text-sm text-foreground/60 line-clamp-2 mb-4">{room.description}</p>
                    </div>
                    <div className="flex gap-3 text-xs text-foreground/50 font-medium">
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
            <div className="bg-white border border-black/5 shadow-sm p-8 rounded-3xl animate-fade-in">
              <h2 className="text-2xl font-bold text-primary-dark mb-6">Review & Complete</h2>
              
              <div className="bg-surface-elevated rounded-2xl p-6 border border-black/5 mb-8">
                <h3 className="text-lg font-semibold text-primary-dark mb-4">Account & Authentication</h3>
                <p className="text-sm text-foreground/70 mb-6">
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
                <div className="mt-6 pt-6 border-t border-black/5">
                   <p className="text-xs text-foreground/50 italic text-center">
                     For this prototype demonstration, you can proceed without logging in.
                   </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-semibold text-primary-dark">Special Requests</h3>
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
              
              <p className="text-xs text-center text-foreground/50 mt-6">
                By clicking "Confirm Reservation", you agree to our <Link href="/privacy" className="underline hover:text-accent">Terms of Service and Privacy Policy</Link>.
              </p>
            </div>
          )}
        </div>

        {/* Sidebar Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-black/5 shadow-sm rounded-3xl p-6 sticky top-24">
            <h3 className="text-lg font-bold text-primary-dark mb-6">Booking Summary</h3>
            
            <div className="space-y-4 text-sm mb-6 pb-6 border-b border-black/10">
              <div className="flex justify-between">
                <span className="text-foreground/60">Check-in</span>
                <span className="text-foreground font-medium">{formatDate(checkIn)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/60">Check-out</span>
                <span className="text-foreground font-medium">{formatDate(checkOut)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/60">Duration</span>
                <span className="text-foreground font-medium">{nights} {nights === 1 ? 'Night' : 'Nights'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/60">Guests</span>
                <span className="text-foreground font-medium">{guests}</span>
              </div>
            </div>

            {selectedRoom && pricing ? (
              <div className="space-y-4">
                <div className="pb-4 border-b border-black/5">
                  <h4 className="font-semibold text-primary-dark mb-1">{selectedRoom.name}</h4>
                  <p className="text-xs text-foreground/50">{selectedRoom.type.toUpperCase()}</p>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-foreground/70">
                    <span>{formatKsh(pricing.basePrice)} × {nights} nights</span>
                    <span>{formatKsh(pricing.subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-foreground/70">
                    <span>VAT ({pricing.vatRate.toFixed(4)}%)</span>
                    <span>{formatKsh(pricing.vatAmount)}</span>
                  </div>
                  <div className="flex justify-between text-foreground/70">
                    <span>Service Charge (2.0000%)</span>
                    <span>{formatKsh(pricing.serviceCharge)}</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-black/10 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-primary-dark font-bold">Total Price</span>
                    <span className="text-xl font-bold text-accent">{formatKsh(pricing.totalPrice)}</span>
                  </div>
                  <p className="text-[10px] text-right text-foreground/40 mt-1 uppercase tracking-wider">Prices displayed to 4 decimal places</p>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <Bed className="w-12 h-12 text-black/10 mx-auto mb-4" />
                <p className="text-sm text-foreground/50">Select a room to see<br/>the pricing breakdown.</p>
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
        <h1 className="section-title text-primary-dark text-center">
          Complete your <span className="text-accent">Reservation</span>
        </h1>
      </div>
      <Suspense fallback={<div className="text-center py-20 text-foreground/50">Loading booking flow...</div>}>
        <BookingFlow />
      </Suspense>
    </div>
  );
}
