export const metadata = {
  title: 'Privacy Policy & Terms of Service | RosaBlu Hotel Kutus',
  description: 'Read our Privacy Policy and Terms of Service, including booking cancellation terms.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-dark text-center mb-12">
          Privacy Policy & Terms
        </h1>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-black/5 shadow-sm space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Privacy Policy & Data Handling</h2>
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                At RosaBlu Hotel Kutus, we respect your privacy and are committed to protecting your personal data. 
                This section informs you about how we handle the personal data you provide when you book a room or contact us.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Data Collection:</strong> We collect only the information necessary to fulfill your booking (e.g., name, email, phone number).</li>
                <li><strong>Data Usage:</strong> Your data is used exclusively for reservation management, customer support, and essential communications regarding your stay.</li>
                <li><strong>Data Protection:</strong> We implement appropriate security measures to protect your personal data from unauthorized access, alteration, or disclosure.</li>
                <li><strong>Third Parties:</strong> We do not sell your data. Data may only be shared with verified payment processors and booking management systems (e.g., Make.com automations) strictly for operational purposes.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Terms of Service & Booking Conditions</h2>
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                By booking a stay at RosaBlu Hotel Kutus, you agree to the following terms and conditions.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Check-in / Check-out:</strong> Check-in is strictly from 14:00. Check-out is by 11:00. Late check-outs may incur additional charges.</li>
                <li><strong>Payment:</strong> Full payment or a required deposit must be made to confirm the reservation. All prices are inclusive of 16.0000% VAT and 2.0000% Service Charge unless stated otherwise.</li>
                <li><strong>House Rules:</strong> No pets are allowed. No unbooked parties or events are permitted on the premises.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Cancellation Terms</h2>
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>We understand that plans can change. Our cancellation policy is as follows:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Full Refund:</strong> Cancellations made at least 48 hours before the scheduled check-in time will receive a full refund.</li>
                <li><strong>Partial Refund:</strong> Cancellations made within 24 to 48 hours of check-in will be charged a 50% cancellation fee for the first night.</li>
                <li><strong>No Show:</strong> Failure to arrive without prior cancellation will result in a 100% charge for the first night.</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
