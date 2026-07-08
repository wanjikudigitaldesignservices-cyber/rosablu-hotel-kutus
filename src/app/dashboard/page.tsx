'use client';

import { useState } from 'react';
import { User, Calendar, FileText, Settings, LogOut, Bed, Clock } from 'lucide-react';
import { formatKsh, formatDate } from '@/lib/pricing';

// Mock data for the prototype
const mockUser = {
  name: 'Jane Kamau',
  email: 'jane.kamau@example.com',
  phone: '+254 712 345678',
  memberSince: '2024-01-15'
};

const mockBookings = [
  {
    id: 'BKG-001',
    roomName: 'Studio Deluxe',
    checkIn: '2024-08-10',
    checkOut: '2024-08-12',
    status: 'Upcoming',
    totalPrice: 5000.0000
  },
  {
    id: 'BKG-002',
    roomName: 'Business Suite',
    checkIn: '2024-05-01',
    checkOut: '2024-05-03',
    status: 'Completed',
    totalPrice: 15000.0000
  }
];

export default function GuestDashboardPage() {
  const [activeTab, setActiveTab] = useState<'bookings' | 'profile'>('bookings');

  return (
    <div className="pt-24 pb-24 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back, {mockUser.name.split(' ')[0]}!</h1>
            <p className="text-white/50">Manage your stays and profile settings.</p>
          </div>
          <button className="btn-secondary self-start md:self-auto flex items-center gap-2">
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar Nav */}
          <div className="lg:col-span-1">
            <div className="glassmorphism rounded-2xl p-4 flex flex-col gap-2">
              <button 
                onClick={() => setActiveTab('bookings')}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-left ${activeTab === 'bookings' ? 'bg-primary/20 text-primary font-medium' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}
              >
                <Calendar className="w-5 h-5" />
                My Bookings
              </button>
              <button 
                onClick={() => setActiveTab('profile')}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-left ${activeTab === 'profile' ? 'bg-primary/20 text-primary font-medium' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}
              >
                <User className="w-5 h-5" />
                Profile Settings
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            
            {activeTab === 'bookings' && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold text-white mb-6">Upcoming & Past Stays</h2>
                
                {mockBookings.map((booking) => (
                  <div key={booking.id} className="glassmorphism p-6 rounded-2xl flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-3">
                        <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${booking.status === 'Upcoming' ? 'bg-green-500/20 text-green-400' : 'bg-white/10 text-white/50'}`}>
                          {booking.status}
                        </span>
                        <span className="text-sm font-mono text-white/30">#{booking.id}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Bed className="w-5 h-5 text-primary" />
                        {booking.roomName}
                      </h3>
                      
                      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {formatDate(booking.checkIn)} — {formatDate(booking.checkOut)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:items-end gap-3 w-full sm:w-auto border-t border-white/10 sm:border-t-0 pt-4 sm:pt-0">
                      <div className="text-left sm:text-right">
                        <span className="block text-xs text-white/40 uppercase tracking-wider mb-1">Total Paid</span>
                        <span className="text-lg font-bold text-white">{formatKsh(booking.totalPrice)}</span>
                      </div>
                      <button className="btn-secondary py-2 text-sm w-full sm:w-auto flex items-center justify-center gap-2">
                        <FileText className="w-4 h-4" />
                        View Receipt
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="glassmorphism p-8 rounded-2xl animate-fade-in">
                <h2 className="text-2xl font-bold text-white mb-8">Profile Information</h2>
                
                <form className="space-y-6 max-w-xl">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Full Name</label>
                    <input type="text" defaultValue={mockUser.name} className="input-field" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Email Address</label>
                    <input type="email" defaultValue={mockUser.email} className="input-field" readOnly />
                    <p className="text-xs text-white/40">Email cannot be changed.</p>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Phone Number</label>
                    <input type="tel" defaultValue={mockUser.phone} className="input-field" />
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <button type="button" className="btn-primary">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
