import { Metadata } from 'next';
import {
  MapPin,
  TreePine,
  Users,
  Heart,
  Mountain,
  Leaf,
  Building2,
  Clock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Discover the RosaBlu Hotel story — a serene village retreat in Kutus Town, Kirinyaga County, 700m from the CBD with Mt. Kenya views.',
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
            Our Story
          </p>
          <h1 className="section-title text-white mb-6">
            Welcome to <span className="text-gradient">RosaBlu</span>
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl mx-auto">
            A serene, clean, and affordable village retreat nestled in Kutus Town,
            Kirinyaga County — where the warmth of Kenyan hospitality meets
            modern comfort.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-surface-elevated to-surface-overlay border border-white/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <Mountain className="w-20 h-20 text-primary/30 mx-auto mb-4" />
                  <p className="text-white/40 text-sm">
                    Views of Mt. Kenya from our grounds
                  </p>
                </div>
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 glassmorphism rounded-xl p-4">
                <div className="text-sm font-bold text-gradient">Est. 2024</div>
                <p className="text-xs text-white/40">Kutus, Kirinyaga</p>
              </div>
            </div>

            {/* Story Text */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                The RosaBlu Story
              </h2>
              <div className="space-y-4 text-white/55 leading-relaxed">
                <p>
                  RosaBlu Hotel Kutus was born from a simple vision: to create a 
                  retreat that captures the essence of village life while providing
                  the comforts modern travelers expect. Located just 700 meters from
                  Kutus Town&apos;s Central Business District, our hotel sits in a peaceful
                  setting surrounded by local farming communities.
                </p>
                <p>
                  Our name, <span className="text-primary font-medium">RosaBlu</span>,
                  represents the fusion of the rose-colored warmth of Kenyan hospitality
                  with the clear blue skies that crown Mt. Kenya on a perfect morning.
                  We are situated past Joymax (Kavagara), opposite Sifa Gardens — a 
                  location that gives you the best of both worlds: village serenity 
                  and town accessibility.
                </p>
                <p>
                  Our neighbors are local farmers, and we take pride in sourcing fresh
                  produce, pure Kienyeji chicken, and Mt. Kenya trout from the communities
                  around us. When you dine at RosaBlu, you taste the authenticity of
                  Kirinyaga County.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding bg-surface-elevated">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Our Values
            </p>
            <h2 className="section-title text-white">
              What We <span className="text-gradient">Stand For</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Warm Hospitality',
                text: 'Every guest is treated like family. Our staff embodies the Kirinyaga spirit of generosity and warmth.',
              },
              {
                icon: Leaf,
                title: 'Sustainability',
                text: 'Solar lighting, locally sourced food, and eco-friendly practices to protect our beautiful environment.',
              },
              {
                icon: Users,
                title: 'Community',
                text: 'We work hand-in-hand with local farmers and businesses, supporting the Kutus economy.',
              },
              {
                icon: Building2,
                title: 'Accessibility',
                text: 'Clean, affordable accommodation for business travelers, tourists, and Chama groups alike.',
              },
            ].map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="card p-8 text-center group">
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-7 h-7 text-primary/70 group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-white/45 leading-relaxed">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location Highlight */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glassmorphism rounded-3xl p-10 sm:p-14">
            <MapPin className="w-10 h-10 text-primary mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Find Us in Kutus
            </h2>
            <p className="text-white/50 leading-relaxed mb-6 max-w-xl mx-auto">
              We&apos;re located past Joymax (Kavagara), opposite Sifa Gardens in Kutus Town.
              Just a 10-minute walk from the CBD, our hotel is easily accessible yet
              peacefully secluded.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary/60" />
                C8VP+59 Kutus
              </div>
              <div className="flex items-center gap-2">
                <TreePine className="w-4 h-4 text-primary/60" />
                Kirinyaga County
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary/60" />
                700m from CBD
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
