'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Hotel,
  ChevronDown,
} from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Rooms', href: '/rooms' },
  { label: 'Dining', href: '/dining' },
  { label: 'Amenities', href: '/amenities' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainLinks = navLinks.slice(0, 5);
  const moreLinks = navLinks.slice(5);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glassmorphism'
          : 'bg-surface/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Hotel className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-foreground">
                Rosa<span className="text-accent">Blu</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/60 -mt-1">
                Hotel Kutus
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground/80 hover:text-primary hover:bg-black/5'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* More dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowMore(!showMore)}
                className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-primary hover:bg-black/5 transition-all duration-300"
              >
                More
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    showMore ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {showMore && (
                <div className="absolute top-full right-0 mt-2 w-48 py-2 glassmorphism rounded-xl shadow-xl animate-fade-in border border-black/5">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setShowMore(false)}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        pathname === link.href
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground/80 hover:text-primary hover:bg-black/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/privacy"
                    onClick={() => setShowMore(false)}
                    className={`block px-4 py-2.5 text-sm transition-colors ${
                      pathname === '/privacy'
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground/80 hover:text-primary hover:bg-black/5'
                    }`}
                  >
                    Privacy & Terms
                  </Link>
                </div>
              )}
            </div>

            <Link href="/booking" className="btn-primary ml-3 text-sm py-2 px-5">
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-foreground/80 hover:text-primary hover:bg-black/5 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden bg-surface ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 mb-4 rounded-2xl p-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                pathname === link.href
                  ? 'text-primary bg-primary/10'
                  : 'text-foreground/80 hover:text-primary hover:bg-black/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/privacy"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              pathname === '/privacy'
                ? 'text-primary bg-primary/10'
                : 'text-foreground/80 hover:text-primary hover:bg-black/5'
            }`}
          >
            Privacy & Terms
          </Link>
          <div className="pt-2">
            <Link
              href="/booking"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full text-center"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
