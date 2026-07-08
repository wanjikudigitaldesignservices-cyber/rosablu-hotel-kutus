import Image from 'next/image';
import { MapPin, Leaf, Shield, Wifi } from 'lucide-react';

export const metadata = {
  title: 'About Us | RosaBlu Hotel Kutus',
  description: 'Learn about RosaBlu Hotel, your serene village retreat just 700m from Kutus CBD.',
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/about.png"
            alt="RosaBlu Hotel Environment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            Our Story
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-sm">
            A serene, clean, and affordable village retreat in the heart of Kirinyaga County.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary-dark">
                Welcome to Rosa<span className="text-accent">Blu</span>
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Located in Kutus Town, just past Joymax (Kavagara) and opposite Sifa Gardens, 
                RosaBlu Hotel is designed for those seeking tranquility without compromising on connectivity or comfort.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                We are situated a mere 700 meters from the Kutus CBD, offering the perfect balance 
                between the quiet, green landscapes of rural Kirinyaga and the vibrant pulse of the town. 
                Whether you are a business traveler, a casual tourist exploring Mount Kenya, or a Chama group 
                looking for a peaceful retreat, RosaBlu welcomes you.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-black/10">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-accent shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary">700m to CBD</h4>
                    <p className="text-sm text-foreground/60">Close enough, yet peaceful.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Leaf className="w-6 h-6 text-accent shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary">Village Vibe</h4>
                    <p className="text-sm text-foreground/60">Surrounded by nature.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Wifi className="w-6 h-6 text-accent shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary">Starlink WiFi</h4>
                    <p className="text-sm text-foreground/60">25+ Mbps reliable internet.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-accent shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary">Secure</h4>
                    <p className="text-sm text-foreground/60">Full perimeter security.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero.png"
                alt="RosaBlu Hotel Exterior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
