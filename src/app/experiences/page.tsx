import Image from 'next/image';
import { Mountain, Droplets, Navigation, Trees } from 'lucide-react';

export const metadata = {
  title: 'Experiences & Sightseeing | RosaBlu Hotel Kutus',
  description: 'Explore local attractions around Kirinyaga including Thiba River, Thiba Dam, and Mount Kenya forest.',
};

const attractions = [
  {
    title: 'Thiba River & Natural Springs',
    description: 'Experience the breathtaking clear, rushing waters of the Thiba River. A perfect spot for nature walks and picnics.',
    icon: <Droplets className="w-6 h-6 text-accent" />,
  },
  {
    title: 'Mount Kenya Forest',
    description: 'Venture out for an unforgettable hike in the dense, vibrant green forests at the base of Mount Kenya.',
    icon: <Trees className="w-6 h-6 text-accent" />,
  },
  {
    title: 'Thiba Dam',
    description: 'Visit the impressive Thiba Dam, an engineering marvel providing serene waterscapes and beautiful views.',
    icon: <Mountain className="w-6 h-6 text-accent" />,
  },
];

export default function ExperiencesPage() {
  return (
    <div className="pt-20">
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/sightseeing.png"
            alt="Thiba River and lush green forest"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            Local Experiences
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-sm">
            Discover the natural beauty of Kirinyaga County, just minutes away from RosaBlu Hotel.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {attractions.map((item, idx) => (
              <div key={idx} className="card p-8 bg-white text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-8 flex items-center justify-center gap-2 text-accent text-sm font-medium">
                  <Navigation className="w-4 h-4" />
                  Ask Reception for Directions
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
