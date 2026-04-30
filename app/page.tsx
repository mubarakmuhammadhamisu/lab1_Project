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
      <section className="relative bg-gradient-to-br from-white to-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Image */}
          <div className="flex-1 relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/lab-technician.jpg"
              alt="Professional Lab Technician with Microscope"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right: Content */}
          <div className="flex-1 flex flex-col gap-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance text-card-bg">
                Reliable Medical Testing. Secure Digital Results.
              </h1>
              <p className="text-lg text-text-muted mt-6 leading-relaxed max-w-lg">
                Experience world-class laboratory testing with advanced technology, fast turnaround times, and secure online access to your results anytime, anywhere.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/results"
                className="bg-primary-light hover:bg-primary text-white font-bold py-3.5 px-8 rounded-lg transition shadow-lg hover:shadow-xl text-center"
              >
                Check Your Results Online
              </Link>
              <Link
                href="/services"
                className="bg-secondary hover:bg-success text-white font-bold py-3.5 px-8 rounded-lg transition shadow-lg hover:shadow-xl text-center"
              >
                Book a Test
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose ApexMedLab</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            We combine cutting-edge technology with professional expertise to deliver reliable results you can trust.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-card-bg rounded-xl p-8 shadow-sm border border-card-border hover:shadow-lg hover:border-primary transition group">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <span className="text-white text-2xl">⚡</span>
            </div>
            <h3 className="font-bold text-xl text-foreground mb-3">
              Fast Test Turnaround
            </h3>
            <p className="text-text-muted leading-relaxed">
              Blood tests, scans, pathology and more. Get your results quickly without compromising on accuracy.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-card-bg rounded-xl p-8 shadow-sm border border-card-border hover:shadow-lg hover:border-primary transition group">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <span className="text-white text-2xl">🔒</span>
            </div>
            <h3 className="font-bold text-xl text-foreground mb-3">
              Fully Secure Results Portal
            </h3>
            <p className="text-text-muted leading-relaxed">
              Access your results securely on any device. Bank-level encryption ensures your medical data is always protected.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-card-bg rounded-xl p-8 shadow-sm border border-card-border hover:shadow-lg hover:border-primary transition group">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <span className="text-white text-2xl">❤</span>
            </div>
            <h3 className="font-bold text-xl text-foreground mb-3">
              Trusted Community Partner
            </h3>
            <p className="text-text-muted leading-relaxed">
              Serving the Kubwa community with dedicated healthcare partnerships and commitment to patient care excellence.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your test today and take the first step towards better health. Our team is ready to serve you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary hover:bg-text-light font-bold py-4 px-10 rounded-lg transition shadow-lg hover:shadow-xl"
          >
            Schedule an Appointment
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
