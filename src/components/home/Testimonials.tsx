'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'James Mwangi',
    role: 'Business Traveler',
    rating: 5,
    text: 'The Starlink WiFi is a game-changer. I was able to run my Zoom meetings without any issues. The Business Suite was spacious and the Mt. Kenya views from my window were spectacular.',
  },
  {
    name: 'Grace Wanjiru',
    role: 'Chama Organizer',
    text: 'We booked the Airbnb Family Suite for our Chama retreat and it was perfect. The kitchen facilities, secure parking, and the pure Kienyeji chicken dinner were highlights. Will definitely return!',
    rating: 5,
  },
  {
    name: 'Dr. Peter Kariuki',
    role: 'Tourist',
    text: 'A hidden gem in Kirinyaga County. The hotel is clean, affordable, and the staff are incredibly warm. The walk to Thiba River was an unforgettable experience. Highly recommended.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-surface-elevated">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            Guest Stories
          </p>
          <h2 className="section-title text-primary-dark mb-4">
            What Our <span className="text-gradient">Guests Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="card p-8 relative">
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/15 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-foreground/70 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-dark">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
