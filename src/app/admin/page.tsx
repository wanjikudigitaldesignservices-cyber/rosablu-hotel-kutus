'use client';

import { useState } from 'react';
import { Users, Bed, CalendarCheck, TrendingUp, Search, MoreVertical, Settings, LogOut } from 'lucide-react';
import { formatKsh } from '@/lib/pricing';

const mockOccupancy = {
  totalRooms: 15,
  occupied: 8,
  reserved: 3,
  available: 4,
  revenueToday: 32500.0000
};

const mockRecentBookings = [
  { id: 'BKG-089', guest: 'John Doe', room: 'Studio 101', checkIn: 'Today', status: 'Checked In', amount: 3500.0000 },
  { id: 'BKG-090', guest: 'Alice Smith', room: 'Business 204', checkIn: 'Tomorrow', status: 'Confirmed', amount: 5000.0000 },
  { id: 'BKG-091', guest: 'Chama Group A', room: 'Airbnb Unit 1', checkIn: 'In 3 Days', status: 'Pending', amount: 12000.0000 },
];

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'bookings' | 'rooms'>('overview');

  return (
    <div className="pt-24 pb-24 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Reception Dashboard</h1>
            <p className="text-sm text-white/50">Manage daily operations and guest bookings.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-white/10 transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <button className="btn-secondary py-2 flex items-center gap-2 text-sm">
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>

        {/* Top Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="glassmorphism p-5 rounded-2xl">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Bed className="w-5 h-5 text-primary" />
              </div>
            </div>
            <p className="text-xs text-white/50 mb-1 uppercase tracking-wider font-semibold">Occupancy Rate</p>
            <h3 className="text-2xl font-bold text-white">
              {Math.round((mockOccupancy.occupied / mockOccupancy.totalRooms) * 100)}%
            </h3>
          </div>
          
          <div className="glassmorphism p-5 rounded-2xl">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-400" />
              </div>
            </div>
            <p className="text-xs text-white/50 mb-1 uppercase tracking-wider font-semibold">Checked In</p>
            <h3 className="text-2xl font-bold text-white">{mockOccupancy.occupied} Rooms</h3>
          </div>

          <div className="glassmorphism p-5 rounded-2xl">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                <CalendarCheck className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <p className="text-xs text-white/50 mb-1 uppercase tracking-wider font-semibold">Available</p>
            <h3 className="text-2xl font-bold text-white">{mockOccupancy.available} Rooms</h3>
          </div>

          <div className="glassmorphism p-5 rounded-2xl">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
            </div>
            <p className="text-xs text-white/50 mb-1 uppercase tracking-wider font-semibold">Revenue (Today)</p>
            <h3 className="text-2xl font-bold text-white">{formatKsh(mockOccupancy.revenueToday)}</h3>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="glassmorphism rounded-3xl overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-white/5 px-6">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'overview' ? 'border-primary text-primary' : 'border-transparent text-white/50 hover:text-white'}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('bookings')}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'bookings' ? 'border-primary text-primary' : 'border-transparent text-white/50 hover:text-white'}`}
            >
              All Bookings
            </button>
            <button 
              onClick={() => setActiveTab('rooms')}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'rooms' ? 'border-primary text-primary' : 'border-transparent text-white/50 hover:text-white'}`}
            >
              Room Management
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-white">Recent Bookings</h3>
                  <div className="relative">
                    <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input 
                      type="text" 
                      placeholder="Search guest or ID..." 
                      className="pl-9 pr-4 py-2 bg-surface-overlay border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-primary/50"
                    />
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-white/40">
                        <th className="pb-3 font-semibold">Booking ID</th>
                        <th className="pb-3 font-semibold">Guest</th>
                        <th className="pb-3 font-semibold">Room</th>
                        <th className="pb-3 font-semibold">Check-In</th>
                        <th className="pb-3 font-semibold">Status</th>
                        <th className="pb-3 font-semibold text-right">Amount</th>
                        <th className="pb-3 font-semibold text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {mockRecentBookings.map((b) => (
                        <tr key={b.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                          <td className="py-4 text-white/70 font-mono">{b.id}</td>
                          <td className="py-4 text-white font-medium">{b.guest}</td>
                          <td className="py-4 text-white/70">{b.room}</td>
                          <td className="py-4 text-white/70">{b.checkIn}</td>
                          <td className="py-4">
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${
                              b.status === 'Checked In' ? 'bg-blue-500/20 text-blue-400' :
                              b.status === 'Confirmed' ? 'bg-green-500/20 text-green-400' :
                              'bg-amber-500/20 text-amber-400'
                            }`}>
                              {b.status}
                            </span>
                          </td>
                          <td className="py-4 text-right text-white font-mono">{formatKsh(b.amount)}</td>
                          <td className="py-4 text-center">
                            <button className="w-8 h-8 rounded-lg hover:bg-white/10 inline-flex items-center justify-center text-white/50 transition-colors">
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab !== 'overview' && (
              <div className="text-center py-20 text-white/50">
                This section is under development for the prototype.
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
