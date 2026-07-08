'use client';

import { MapPin, Leaf, Heart, Globe } from 'lucide-react';

const reasons = [
  {
    icon: MapPin,
    title: '700m from CBD',
    description: 'Close enough for convenience, far enough for tranquility. Walk to Kutus Town center in minutes.',
  },
  {
    icon: Leaf,
    title: 'Village Serenity',
    description: 'Surrounded by local farming communities, natural springs, and fresh Kirinyaga air. A true countryside escape.',
  },
  {
    icon: Heart,
    title: 'Authentic Flavors',
    description: 'Pure Kienyeji chicken, fresh Mt. Kenya trout, and Lake Victoria fish prepared by local chefs daily.',
  },
  {
    icon: Globe,
    title: 'Connected & Secure',
    description: 'Starlink WiFi at 25+ Mbps, solar-powered facilities, and 24/7 security within our gated compound.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-surface relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Why RosaBlu
            </p>
            <h2 className="section-title text-white mb-6">
              A Retreat <span className="text-gradient">Unlike Any Other</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-10">
              RosaBlu Hotel isn&apos;t just a place to sleep — it&apos;s a destination.
              Nestled past Joymax (Kavagara), opposite Sifa Gardens, our hotel offers
              the perfect blend of village charm and modern comfort. Whether you&apos;re
              a business traveler, casual tourist, or organizing a Chama retreat,
              we&apos;ve created a space that feels like home.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-sm text-white/45 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — Visual */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/5">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-brand mx-auto flex items-center justify-center mb-6 animate-float">
                    <Leaf className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Serene Village Living
                  </h3>
                  <p className="text-white/50 text-sm max-w-xs mx-auto">
                    Experience the warmth of Kirinyaga County with modern amenities
                    and authentic Kenyan hospitality.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 glassmorphism rounded-2xl p-5 max-w-[200px] animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-3xl font-bold text-gradient mb-1">4.8★</div>
              <p className="text-xs text-white/50">Guest satisfaction rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
