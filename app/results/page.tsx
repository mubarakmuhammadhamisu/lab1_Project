'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CheckResults() {
  const [referenceNumber, setReferenceNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (referenceNumber.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setReferenceNumber('');
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Check Your Test Results
          </h1>
          <p className="text-blue-100 text-lg">
            Secure access to your laboratory test results anytime, anywhere
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 py-20 w-full flex-1">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Form */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Access Your Results
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-foreground font-semibold mb-2">
                  Reference Number
                </label>
                <input
                  type="text"
                  value={referenceNumber}
                  onChange={(e) => setReferenceNumber(e.target.value)}
                  placeholder="Enter your test reference number"
                  className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                  required
                />
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
              >
                VIEW RESULTS
              </button>
            </form>

            {submitted && (
              <div className="mt-6 p-4 bg-green-50 border border-secondary rounded-lg">
                <p className="text-secondary font-semibold">
                  ✓ Results retrieved successfully!
                </p>
              </div>
            )}
          </div>

          {/* Right: Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <span>🔒</span> Secure Access
              </h3>
              <p className="text-foreground text-sm">
                Your results are encrypted and protected with industry-standard security protocols. Only authorized users with valid reference numbers and email addresses can access results.
              </p>
            </div>

            <div className="bg-teal-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <span>⏱️</span> Quick Access
              </h3>
              <p className="text-foreground text-sm">
                Get instant access to your test results 24/7 from any device. No waiting, no calls needed.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <span>📱</span> Mobile Friendly
              </h3>
              <p className="text-foreground text-sm">
                Our portal works perfectly on smartphones, tablets, and computers. Check your results wherever you are.
              </p>
            </div>

            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <span>💬</span> Need Help?
              </h3>
              <p className="text-foreground text-sm">
                Can&apos;t find your reference number? Contact our support team at{' '}
                <a
                  href="https://wa.me/2348123456789"
                  className="text-primary font-semibold hover:underline"
                >
                  +234 812 345 6789
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
