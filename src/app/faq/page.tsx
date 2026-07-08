export const metadata = {
  title: 'FAQ & House Rules | RosaBlu Hotel Kutus',
  description: 'Frequently asked questions and hotel policies at RosaBlu Hotel.',
};

const faqs = [
  {
    q: 'What are the check-in and check-out times?',
    a: 'Check-in time is from 14:00 (2:00 PM), and check-out is by 11:00 AM.'
  },
  {
    q: 'Are pets allowed?',
    a: 'We love animals, but unfortunately, we do not allow pets on the premises to ensure the comfort of all our guests.'
  },
  {
    q: 'Can I host a party in my room?',
    a: 'No unbooked parties or events are allowed in the rooms. We maintain a serene and peaceful environment for all guests.'
  },
  {
    q: 'Is there parking available?',
    a: 'Yes, we offer free and secure on-site parking for all our guests.'
  },
  {
    q: 'Do you have WiFi?',
    a: 'Yes, we provide high-speed Starlink WiFi (25+ Mbps) across the property, perfect for streaming and remote work.'
  }
];

export default function FAQPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-dark text-center mb-12">
          FAQ & House Rules
        </h1>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-black/5 shadow-sm space-y-8">
          {faqs.map((faq, idx) => (
            <div key={idx} className="pb-8 border-b border-black/5 last:border-0 last:pb-0">
              <h3 className="text-xl font-bold text-primary mb-3">{faq.q}</h3>
              <p className="text-foreground/70 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
