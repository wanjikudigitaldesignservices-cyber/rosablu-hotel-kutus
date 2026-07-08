export const metadata = {
  title: 'Admin Dashboard | RosaBlu Hotel Kutus',
  description: 'Manage bookings, check-ins, check-outs, and room availability.',
};

export default function AdminDashboardPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary-dark">Reception Dashboard</h1>
          <div className="px-4 py-2 bg-primary/10 text-primary font-bold rounded-lg text-sm">
            Admin Access
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Today\'s Check-ins', value: '3' },
            { label: 'Today\'s Check-outs', value: '2' },
            { label: 'Available Rooms', value: '4' },
            { label: 'Occupancy Rate', value: '75%' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm text-center">
              <p className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
          <h2 className="text-xl font-bold text-primary-dark mb-6">Recent Bookings</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-black/5">
                  <th className="py-3 px-4 font-semibold text-foreground/60">Guest</th>
                  <th className="py-3 px-4 font-semibold text-foreground/60">Room</th>
                  <th className="py-3 px-4 font-semibold text-foreground/60">Dates</th>
                  <th className="py-3 px-4 font-semibold text-foreground/60">Status</th>
                  <th className="py-3 px-4 font-semibold text-foreground/60">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black/5 hover:bg-surface/50">
                  <td className="py-4 px-4 text-foreground">John Doe</td>
                  <td className="py-4 px-4 text-foreground">Studio Room</td>
                  <td className="py-4 px-4 text-foreground">Jul 10 - Jul 12</td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 bg-warning/20 text-warning text-xs font-bold rounded">Pending</span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-accent text-sm hover:underline">Manage</button>
                  </td>
                </tr>
                <tr className="hover:bg-surface/50">
                  <td className="py-4 px-4 text-foreground">Jane Smith</td>
                  <td className="py-4 px-4 text-foreground">Business Suite</td>
                  <td className="py-4 px-4 text-foreground">Jul 09 - Jul 11</td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 bg-success/20 text-success text-xs font-bold rounded">Confirmed</span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-accent text-sm hover:underline">Manage</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
