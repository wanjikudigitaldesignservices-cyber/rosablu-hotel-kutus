import { Metadata } from 'next';
import { Map, Droplets, Trees, Mountain } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Experiences & Sightseeing',
  description:
    'Explore Kirinyaga County from RosaBlu Hotel. Visit Thiba River, natural springs, Thiba Dam, Mt. Kenya forest, and Kerugoya Urban Forest.',
};

const experiences = [
  {
    icon: Droplets,
    title: 'Thiba River & Natural Springs',
    description: 'Take a serene walk down to the Thiba River. The sound of flowing water and the surrounding lush vegetation make it a perfect spot for meditation or a peaceful afternoon stroll. Discover the natural, crystal-clear springs that dot the local landscape.',
    distance: 'Walking Distance',
  },
  {
    icon: Map,
    title: 'Thiba Dam',
    description: 'A marvel of modern engineering nestled in the hills of Kirinyaga. Thiba Dam provides breathtaking panoramic views of the water reservoir against the backdrop of the verdant tea-growing region. A must-visit for photography enthusiasts.',
    distance: 'Short Drive',
  },
  {
    icon: Mountain,
    title: 'Mt. Kenya Forest Reserve',
    description: 'Experience the rugged beauty of the Mt. Kenya lower forest slopes. Ideal for hiking, bird watching, and experiencing the unique alpine flora and fauna. Guided tours can be arranged to ensure a safe and educational trek.',
    distance: 'Half-day Trip',
  },
  {
    icon: Trees,
    title: 'Kerugoya Urban Forest',
    description: 'A beautiful sanctuary of indigenous trees right in the heart of neighboring Kerugoya town. It offers shaded walking trails, picnic spots, and a chance to see local primate species in their natural habitat.',
    distance: '15 Min Drive',
  },
];

export default function ExperiencesPage() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-24 bg-surface-elevated overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('/images/experiences-bg.jpg')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
            Explore Kirinyaga
          </p>
          <h1 className="section-title text-white mb-6">
            Local <span className="text-gradient">Experiences</span>
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl mx-auto">
            Make RosaBlu your basecamp for discovering the natural wonders and vibrant 
            culture of Kirinyaga County and the Mt. Kenya region.
          </p>
        </div>
      </section>

      {/* Grid of Experiences */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {experiences.map((exp) => {
              const Icon = exp.icon;
              return (
                <div key={exp.title} className="card p-8 group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-white/70 border border-white/10">
                      {exp.distance}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-white/55 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Concierge Note */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10 border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-4">Need Help Planning?</h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Our reception desk is happy to help you arrange local transport (boda bodas or taxis), 
            recommend reliable guides for forest treks, or provide directions for walking tours. 
            Just ask us during your stay!
          </p>
        </div>
      </section>
    </div>
  );
}
