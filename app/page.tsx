'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative flex-1 bg-gradient-to-br from-blue-50 to-teal-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Image */}
          <div className="flex-1 relative h-96 lg:h-full min-h-96">
            <Image
              src="/lab-technician.jpg"
              alt="Lab Technician with Microscope"
              fill
              className="object-cover rounded-lg"
              priority
            />
            {/* Decorative elements */}
            <div className="absolute top-10 left-0 w-20 h-20 rounded-full border-2 border-blue-200 opacity-50"></div>
            <div className="absolute bottom-10 right-0 w-32 h-32 rounded-full bg-green-200 opacity-30"></div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              RELIABLE MEDICAL TESTING.<br />SECURE DIGITAL RESULTS.
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/results"
                className="bg-primary-light hover:bg-blue-500 text-white font-bold py-3 px-8 rounded transition text-center"
              >
                CHECK YOUR RESULTS ONLINE
              </Link>
              <Link
                href="/services"
                className="bg-secondary hover:bg-accent text-white font-bold py-3 px-8 rounded transition text-center"
              >
                BOOK A TEST
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <div className="text-4xl">⚡</div>
              <div>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  FAST TEST TURNAROUND
                </h3>
                <p className="text-foreground text-sm">
                  Blood Tests, Scans, etc.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🔒</div>
              <div>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  FULLY SECURE RESULTS PORTAL
                </h3>
                <p className="text-foreground text-sm">
                  Access on phone/laptop
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <div className="text-4xl">❤️</div>
              <div>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  KURWA COMMUNITY HEALTH PARTNER
                </h3>
                <p className="text-foreground text-sm">
                  Trusted Local Lab
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
