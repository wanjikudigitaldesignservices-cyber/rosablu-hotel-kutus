import { Metadata } from 'next';
import { HelpCircle, AlertTriangle, Clock, Ban } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ & House Rules',
  description: 'Frequently asked questions and house rules for RosaBlu Hotel Kutus. Includes check-in/out times, pet policies, and party rules.',
};

export default function FAQPage() {
  const faqs = [
    {
      q: "Do you have Wi-Fi?",
      a: "Yes, we offer complimentary high-speed Starlink Wi-Fi (25+ Mbps) accessible in all rooms and public areas."
    },
    {
      q: "Is parking available?",
      a: "Yes, we provide free, secure, and spacious parking within our 24/7 guarded compound."
    },
    {
      q: "Is breakfast included in the room rate?",
      a: "Breakfast is not included in the base rate. We offer a full English breakfast at our restaurant for Ksh 300.0000 per adult and Ksh 150.0000 per child."
    },
    {
      q: "Are the rooms accessible for guests with mobility needs?",
      a: "Yes, our ground-floor rooms and public areas are accessible. Please note we do not have elevators for the upper floors, so kindly request a ground-floor room when booking if needed."
    },
    {
      q: "How far are you from Kutus CBD?",
      a: "We are conveniently located just 700 meters away from the Kutus Central Business District, offering a serene environment close to town amenities."
    }
  ];

  return (
    <div className="pt-20 pb-24">
      {/* Header */}
      <section className="bg-surface py-16 sm:py-24 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title text-white mb-6">
            FAQ & <span className="text-gradient">House Rules</span>
          </h1>
          <p className="text-lg text-white/55 leading-relaxed">
            Everything you need to know before and during your stay at RosaBlu Hotel.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid lg:grid-cols-2 gap-16">
        {/* House Rules */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-white">House Rules</h2>
          </div>
          
          <div className="space-y-6">
            <div className="glassmorphism p-6 rounded-2xl flex items-start gap-4">
              <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Check-in / Check-out</h3>
                <p className="text-white/60">
                  <strong className="text-white">Check-in:</strong> From 14:00 (2:00 PM)<br/>
                  <strong className="text-white">Check-out:</strong> By 11:00 (11:00 AM)<br/>
                  Late check-outs must be requested in advance and may incur additional charges.
                </p>
              </div>
            </div>

            <div className="glassmorphism p-6 rounded-2xl flex items-start gap-4">
              <Ban className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">No Pets Allowed</h3>
                <p className="text-white/60">
                  To ensure the comfort and safety of all our guests, pets are strictly not allowed on the hotel premises.
                </p>
              </div>
            </div>

            <div className="glassmorphism p-6 rounded-2xl flex items-start gap-4">
              <Ban className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">No Unauthorized Parties</h3>
                <p className="text-white/60">
                  On-site parties and large gatherings in guest rooms are not permitted without prior booking and approval from management. For events, please book our designated event spaces or restaurant areas.
                </p>
              </div>
            </div>
            
            <div className="glassmorphism p-6 rounded-2xl flex items-start gap-4">
              <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Quiet Hours</h3>
                <p className="text-white/60">
                  We request all guests to observe quiet hours between 22:00 (10:00 PM) and 06:00 (6:00 AM) to maintain our serene village retreat atmosphere.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-surface-elevated border border-white/5 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-white/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
