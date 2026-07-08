'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('/api/webhooks/make', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: 'contact_form', ...formData }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="pt-20">
      <section className="bg-surface-elevated py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Contact & Location
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for bookings, inquiries, or special requests.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary-dark">Address</h3>
                    <p className="text-foreground/70 mt-1">
                      Kutus Town, past Joymax (Kavagara),<br />
                      Opposite Sifa Gardens,<br />
                      Kirinyaga County, Kenya
                    </p>
                    <p className="text-xs text-foreground/50 mt-2 font-mono">
                      Coordinate: -0.5512, 37.3045
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary-dark">Phone</h3>
                    <p className="text-foreground/70 mt-1">0751 299445</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary-dark">Email</h3>
                    <p className="text-foreground/70 mt-1">hello@rosabluhotelkutus.co.ke</p>
                  </div>
                </div>
              </div>

              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md border border-black/5">
                <Image
                  src="/images/location.png"
                  alt="RosaBlu Hotel Map"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-black/5 shadow-xl">
              <h2 className="text-3xl font-bold text-primary-dark mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    className="input-field"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    className="input-field"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full py-4 text-base disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <p className="text-success text-center text-sm font-medium bg-success/10 py-3 rounded-lg">
                    Message sent successfully! We'll be in touch soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-error text-center text-sm font-medium bg-error/10 py-3 rounded-lg">
                    Failed to send message. Please try calling us instead.
                  </p>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
