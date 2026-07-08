export const metadata = {
  title: 'Guest Dashboard | RosaBlu Hotel Kutus',
  description: 'Manage your bookings and view upcoming stays at RosaBlu Hotel.',
};

export default function GuestDashboardPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary-dark mb-8">Guest Dashboard</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <h2 className="text-xl font-bold text-primary mb-4">Upcoming Stays</h2>
              <div className="text-center py-10 bg-surface rounded-xl border border-dashed border-black/10">
                <p className="text-foreground/60">You have no upcoming stays.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <h2 className="text-xl font-bold text-primary mb-4">Past Stays & Receipts</h2>
              <div className="text-center py-10 bg-surface rounded-xl border border-dashed border-black/10">
                <p className="text-foreground/60">No past stays found.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <h2 className="text-lg font-bold text-primary-dark mb-4">Profile Info</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-foreground/50 uppercase tracking-wider">Name</p>
                  <p className="font-medium text-foreground">Guest User</p>
                </div>
                <div>
                  <p className="text-xs text-foreground/50 uppercase tracking-wider">Email</p>
                  <p className="font-medium text-foreground">guest@example.com</p>
                </div>
                <button className="text-accent text-sm font-medium hover:underline">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
