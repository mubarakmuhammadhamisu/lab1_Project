'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-foreground border-b border-card-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded flex items-center justify-center group-hover:shadow-lg transition">
            <span className="text-white font-bold text-xl">⚗</span>
          </div>
          <div>
            <h1 className="font-bold text-xl text-card-bg">ApexMedLab</h1>
            <p className="text-xs text-blue-600">Reliable Medical Testing</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <Link href="/" className="text-card-bg hover:text-primary font-medium text-sm transition">
            Home
          </Link>
          <Link href="/services" className="text-card-bg hover:text-primary font-medium text-sm transition">
            Services
          </Link>
          <Link href="/results" className="text-card-bg hover:text-primary font-medium text-sm transition">
            Check Results
          </Link>
          <Link href="/about" className="text-card-bg hover:text-primary font-medium text-sm transition">
            About Us
          </Link>
        </nav>

        {/* Contact Info and CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="https://wa.me/2348123456789"
            className="text-card-bg hover:text-primary font-medium text-sm flex items-center gap-2 transition"
          >
            <span>📞</span>
            <span className="hidden xl:inline">+234 812 345 6789</span>
          </a>
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary-dark text-white font-bold py-2.5 px-6 rounded transition shadow-md hover:shadow-lg"
          >
            CONTACT & LOCATION
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-foreground transition ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-foreground transition ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-foreground transition ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="lg:hidden bg-card-bg border-t border-card-border px-6 py-6 flex flex-col gap-6">
          <Link href="/" className="text-card-bg hover:text-primary font-medium transition">
            Home
          </Link>
          <Link href="/services" className="text-card-bg hover:text-primary font-medium transition">
            Services
          </Link>
          <Link href="/results" className="text-card-bg hover:text-primary font-medium transition">
            Check Results
          </Link>
          <Link href="/about" className="text-card-bg hover:text-primary font-medium transition">
            About Us
          </Link>
          <a
            href="https://wa.me/2348123456789"
            className="text-card-bg hover:text-primary font-medium transition"
          >
            📞 +234 812 345 6789
          </a>
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary-dark text-card-bg font-bold py-2.5 px-6 rounded text-center transition shadow-md"
          >
            CONTACT & LOCATION
          </Link>
        </nav>
      )}
    </header>
  );
}
