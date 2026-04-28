'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">⚗️</span>
          </div>
          <span className="font-bold text-xl text-foreground">ApexMedLab</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground hover:text-primary font-medium">
            Home
          </Link>
          <Link href="/services" className="text-foreground hover:text-primary font-medium">
            Services
          </Link>
          <Link href="/results" className="text-foreground hover:text-primary font-medium">
            Check Results
          </Link>
          <Link href="/about" className="text-foreground hover:text-primary font-medium">
            About Us
          </Link>
        </nav>

        {/* Contact Info and CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/2348123456789"
            className="text-foreground hover:text-primary font-medium flex items-center gap-2"
          >
            <span>📱</span>
            <span>+234 812 345 6789</span>
          </a>
          <Link
            href="/contact"
            className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition"
          >
            CONTACT & LOCATION
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-foreground"></div>
          <div className="w-6 h-0.5 bg-foreground"></div>
          <div className="w-6 h-0.5 bg-foreground"></div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 px-4 py-4 flex flex-col gap-4">
          <Link href="/" className="text-foreground hover:text-primary font-medium">
            Home
          </Link>
          <Link href="/services" className="text-foreground hover:text-primary font-medium">
            Services
          </Link>
          <Link href="/results" className="text-foreground hover:text-primary font-medium">
            Check Results
          </Link>
          <Link href="/about" className="text-foreground hover:text-primary font-medium">
            About Us
          </Link>
          <a
            href="https://wa.me/2348123456789"
            className="text-foreground hover:text-primary font-medium"
          >
            📱 +234 812 345 6789
          </a>
          <Link
            href="/contact"
            className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-6 rounded text-center"
          >
            CONTACT & LOCATION
          </Link>
        </nav>
      )}
    </header>
  );
}
