import { Metadata } from 'next';
import { UtensilsCrossed, Clock, Coffee, Wine } from 'lucide-react';
import { formatKsh } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'Dining & Bar',
  description:
    'Experience authentic Kenyan cuisine at RosaBlu Hotel. Enjoy pure Kienyeji chicken, Mt. Kenya trout, and a full English breakfast.',
};

export default function DiningPage() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-surface">
        <div className="absolute inset-0 bg-[url('/images/dining-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
            Restaurant & Lounge
          </p>
          <h1 className="section-title text-white mb-6">
            Local Flavors, <span className="text-gradient">Village Charm</span>
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl mx-auto">
            Our culinary team takes pride in sourcing the freshest local ingredients
            from Kirinyaga County to create unforgettable dining experiences.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="glassmorphism p-8 rounded-2xl text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Opening Hours</h3>
              <p className="text-white/50 text-sm">Open daily until 23:00</p>
            </div>
            <div className="glassmorphism p-8 rounded-2xl text-center">
              <UtensilsCrossed className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Room Service</h3>
              <p className="text-white/50 text-sm">Available for all rooms</p>
            </div>
            <div className="glassmorphism p-8 rounded-2xl text-center">
              <Coffee className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">English Breakfast</h3>
              <p className="text-white/50 text-sm">Served from 06:30 to 10:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-surface-elevated">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Signature Dishes</h2>
              <p className="text-white/55 leading-relaxed mb-8">
                We are famous in Kutus for our authentic, locally-sourced specialties.
                Our pure Kienyeji chicken is free-range and slow-cooked to perfection.
                We also serve fresh Mt. Kenya trout from nearby highland rivers, and
                premium Lake Victoria fish.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white/70">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Pure & Improved Kienyeji Chicken
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Fresh Mt. Kenya Trout
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Lake Victoria Tilapia & Nile Perch
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Traditional Kirinyaga Accompaniments
                </li>
              </ul>
            </div>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/5 flex items-center justify-center">
              <UtensilsCrossed className="w-24 h-24 text-primary/20" />
            </div>
          </div>

          {/* Breakfast Menu */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/5 flex items-center justify-center order-2 lg:order-1">
              <Coffee className="w-24 h-24 text-primary/20" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-white mb-6">Breakfast Options</h2>
              <p className="text-white/55 leading-relaxed mb-8">
                Start your day right with our hearty full English Breakfast,
                featuring fresh local ingredients, eggs to order, sausages,
                baked beans, toast, and premium Kenyan tea or coffee.
              </p>
              
              <div className="glassmorphism rounded-2xl p-6 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-bold text-white">English Breakfast (Adult)</h4>
                  <span className="text-primary font-bold">{formatKsh(300.0000)}</span>
                </div>
                <p className="text-sm text-white/50">Full portion with tea or coffee</p>
              </div>

              <div className="glassmorphism rounded-2xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-bold text-white">English Breakfast (Child)</h4>
                  <span className="text-primary font-bold">{formatKsh(150.0000)}</span>
                </div>
                <p className="text-sm text-white/50">Half portion for children under 12</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bar / Lounge */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Wine className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">The Lounge Bar</h2>
          <p className="text-white/55 leading-relaxed mb-10">
            Unwind after a long day in our cozy lounge bar. Enjoy the daily manager&apos;s
            reception, catch up on sports on our large screens, or simply relax with
            a cold drink and great conversation. We stock a wide variety of local and
            international beverages.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white/70">
            <Clock className="w-4 h-4 text-primary" />
            <span>Open until 23:00 Daily</span>
          </div>
        </div>
      </section>
    </div>
  );
}
