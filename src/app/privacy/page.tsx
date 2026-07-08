import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy & Terms of Service',
  description: 'Legal terms, booking cancellation policies, and privacy information for RosaBlu Hotel Kutus.',
};

export default function PrivacyTermsPage() {
  return (
    <div className="pt-20 pb-24 bg-surface">
      <section className="bg-surface-elevated py-16 sm:py-24 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title text-white mb-6">
            Privacy Policy & <span className="text-gradient">Terms of Service</span>
          </h1>
          <p className="text-lg text-white/55 leading-relaxed">
            Standard boilerplate for data handling, booking cancellations, and online identity verification requirements.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        
        {/* Terms of Service */}
        <section className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">Terms of Service</h2>
          
          <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Booking and Cancellation Policy</h3>
          <p className="text-white/70 leading-relaxed mb-4">
            All reservations are subject to availability. To secure your booking, a deposit or full payment may be required at the time of reservation. 
            Cancellations made more than 48 hours prior to the standard check-in time (14:00) will receive a full refund. 
            Cancellations made within 48 hours, or in the case of a no-show, will incur a charge equivalent to the first night's stay.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Online Identity Verification</h3>
          <p className="text-white/70 leading-relaxed mb-4">
            For security and compliance with local regulations, we require all guests to verify their identity. 
            When booking online, you must provide accurate and truthful information. Upon check-in, you will be required to present a valid government-issued ID (such as a Kenyan National ID or Passport) that matches the name on the reservation.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Use of Property</h3>
          <p className="text-white/70 leading-relaxed mb-4">
            Guests are expected to treat the property and staff with respect. Any damage to hotel property caused by a guest or their visitors will be charged to the guest's account. 
            As noted in our House Rules, unauthorized parties and pets are strictly prohibited.
          </p>
        </section>

        {/* Privacy Policy */}
        <section className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">Privacy Policy</h2>
          
          <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Data Collection and Handling</h3>
          <p className="text-white/70 leading-relaxed mb-4">
            RosaBlu Hotel ("we", "us", "our") respects your privacy. We collect personal information such as your name, email address, phone number, and payment details solely for the purpose of processing reservations, communicating with you, and fulfilling our legal obligations.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Data Security</h3>
          <p className="text-white/70 leading-relaxed mb-4">
            We implement reasonable security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We do not sell or rent your personal information to third parties.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Third-Party Services</h3>
          <p className="text-white/70 leading-relaxed mb-4">
            We may use third-party services (such as payment gateways and communication automation platforms like Make.com) to process your bookings. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">4. Changes to This Policy</h3>
          <p className="text-white/70 leading-relaxed mb-4">
            We reserve the right to update or modify these policies at any time. Any changes will be posted on this page with an updated revision date.
          </p>
        </section>

        <p className="text-sm text-white/40 pt-8 border-t border-white/10">
          Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>

      </div>
    </div>
  );
}
