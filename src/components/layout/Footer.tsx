import Link from 'next/link';
import {
  Hotel,
  MapPin,
  Phone,
  Mail,
  Wifi,
  Shield,
  Sun,
  Car,
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2c3738] border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center">
                <Hotel className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white">
                  Rosa<span className="text-gradient">Blu</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 -mt-1">
                  Hotel Kutus
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed">
              A serene village retreat in Kutus Town, Kirinyaga County.
              Just 700m from the CBD, offering clean, affordable comfort
              with stunning Mt. Kenya views.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                <Wifi className="w-4 h-4 text-primary" />
              </div>
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                <Car className="w-4 h-4 text-primary" />
              </div>
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                <Sun className="w-4 h-4 text-primary" />
              </div>
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Rooms & Suites', href: '/rooms' },
                { label: 'Dining & Bar', href: '/dining' },
                { label: 'Amenities', href: '/amenities' },
                { label: 'Experiences', href: '/experiences' },
                { label: 'FAQ & House Rules', href: '/faq' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/50 hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+254751299445"
                className="flex items-start gap-3 text-sm text-white/50 hover:text-primary transition-colors group"
              >
                <Phone className="w-4 h-4 mt-0.5 text-primary/60 group-hover:text-primary" />
                0751 299445
              </a>
              <a
                href="mailto:sales@rosabluhotelkutus.co.ke"
                className="flex items-start gap-3 text-sm text-white/50 hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 mt-0.5 text-primary/60 group-hover:text-primary" />
                sales@rosabluhotelkutus.co.ke
              </a>
              <div className="flex items-start gap-3 text-sm text-white/50">
                <MapPin className="w-4 h-4 mt-0.5 text-primary/60 flex-shrink-0" />
                <span>
                  Kutus Town, past Joymax (Kavagara),
                  <br />
                  Opposite Sifa Gardens,
                  <br />
                  Kirinyaga County, Kenya
                </span>
              </div>
            </div>
          </div>

          {/* Book & Legal */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Your Stay
            </h4>
            <div className="space-y-3">
              <Link
                href="/booking"
                className="btn-primary w-full text-center text-sm"
              >
                Book Your Stay
              </Link>
              <Link
                href="/dashboard"
                className="btn-secondary w-full text-center text-sm"
              >
                Guest Portal
              </Link>
            </div>
            <div className="space-y-2 pt-2">
              <Link
                href="/privacy"
                className="block text-xs text-white/40 hover:text-primary transition-colors"
              >
                Privacy Policy & Terms
              </Link>
              <p className="text-xs text-white/30">
                Check-in: 14:00 · Check-out: 11:00
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/30">
              © {currentYear} RosaBlu Hotel Kutus. All rights reserved.
            </p>
            <p className="text-xs text-white/20">
              Coordinates: C8VP+59 Kutus, Kirinyaga County
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
