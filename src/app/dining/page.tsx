import Image from 'next/image';
import { Clock, Utensils, Coffee } from 'lucide-react';

export const metadata = {
  title: 'Dining & Bar | RosaBlu Hotel Kutus',
  description: 'Experience local flavors including Kienyeji chicken and Mt. Kenya trout.',
};

const menuHighlights = [
  {
    category: 'Breakfast',
    items: [
      { name: 'Full English Breakfast', price: 300.0000, image: 'https://images.unsplash.com/photo-1533089859732-72084df9a491?q=80&w=800&auto=format&fit=crop', desc: 'Eggs, sausages, baked beans, toast, and grilled tomatoes' },
    ]
  },
  {
    category: 'Main Courses',
    items: [
      { name: 'Pure Kienyeji Chicken', price: 1200.0000, image: '/images/food/kienyeji-chicken.png', desc: 'Authentic Kenyan Kienyeji chicken stew served with ugali and sukuma wiki' },
      { name: 'Lake Victoria Fish', price: 900.0000, image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?q=80&w=800&auto=format&fit=crop', desc: 'Deep-fried whole tilapia served with kachumbari' },
      { name: 'Mt. Kenya Trout', price: 1050.0000, image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop', desc: 'Pan-seared fresh trout with herbs and roasted potatoes' },
      { name: 'Nyama Choma', price: 1500.0000, image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop', desc: 'Authentic Kenyan roasted goat meat served with kachumbari' },
    ]
  }
];

export default function DiningPage() {
  return (
    <div className="pt-20">
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/dining.png"
            alt="RosaBlu Dining Experience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            Dining & Bar
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-sm">
            Savor authentic Kenyan cuisine and refreshing drinks in our rustic-elegant restaurant.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between bg-surface-elevated p-8 rounded-2xl shadow-sm border border-black/5 mb-12">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-full text-primary">
                <Clock className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-dark">Opening Hours</h3>
                <p className="text-foreground/70">Daily from 06:00 to 23:00</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-accent/10 rounded-full text-accent">
                <Utensils className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-dark">In-Room Dining</h3>
                <p className="text-foreground/70">Available upon request</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-primary">Menu Highlights</h2>
              <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {menuHighlights.map((section, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
                  <h3 className="text-2xl font-bold text-primary-dark mb-6 flex items-center gap-2">
                    {section.category === 'Breakfast' ? <Coffee className="w-6 h-6 text-accent" /> : <Utensils className="w-6 h-6 text-accent" />}
                    {section.category}
                  </h3>
                  <div className="grid grid-cols-1 gap-6">
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex flex-col sm:flex-row gap-4 items-center bg-surface p-4 rounded-xl border border-black/5 hover:shadow-md transition-shadow">
                        <div className="relative w-full sm:w-28 h-28 shrink-0 rounded-lg overflow-hidden">
                          <Image src={item.image} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1 w-full">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="font-bold text-primary-dark text-lg">{item.name}</h4>
                            <span className="font-bold text-accent whitespace-nowrap ml-4">Ksh {item.price.toFixed(4)}</span>
                          </div>
                          <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
