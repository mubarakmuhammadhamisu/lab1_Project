'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact & Location
          </h1>
          <p className="text-blue-100 text-lg">
            Get in touch with us today
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-20 w-full flex-1">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-foreground font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                  required
                />
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                  required
                />
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234 XXX XXX XXXX"
                  className="w-full px-4 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                  required
                />
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows={5}
                  className="w-full px-4 py-2 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
              >
                SEND MESSAGE
              </button>

              {submitted && (
                <div className="p-4 bg-green-50 border border-secondary rounded-lg">
                  <p className="text-secondary font-semibold">
                    ✓ Message sent successfully! We&apos;ll get back to you soon.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span>📍</span> Our Location
              </h3>
              <p className="text-foreground mb-2">
                <strong>ApexMedLab</strong>
              </p>
              <p className="text-foreground mb-2">
                Kubwa, FCT Nigeria
              </p>
              <p className="text-foreground text-sm">
                Located in the heart of Kubwa, easily accessible and equipped with modern facilities.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span>📞</span> Phone
              </h3>
              <a
                href="tel:+2348123456789"
                className="text-primary hover:text-blue-700 font-semibold text-lg"
              >
                +234 812 345 6789
              </a>
              <p className="text-foreground text-sm mt-2">
                Available Monday to Friday, 8am to 5pm
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span>💬</span> WhatsApp
              </h3>
              <a
                href="https://wa.me/2348123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-semibold text-lg"
              >
                Chat with us
              </a>
              <p className="text-foreground text-sm mt-2">
                Quick responses to your inquiries via WhatsApp
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span>⏰</span> Business Hours
              </h3>
              <ul className="text-foreground text-sm space-y-1">
                <li>
                  <strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM
                </li>
                <li>
                  <strong>Saturday:</strong> 9:00 AM - 2:00 PM
                </li>
                <li>
                  <strong>Sunday:</strong> Closed
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-primary">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-blue-700 text-2xl"
                  aria-label="Twitter"
                >
                  𝕏
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-blue-700 text-2xl"
                  aria-label="Facebook"
                >
                  f
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-blue-700 text-2xl"
                  aria-label="Instagram"
                >
                  📷
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
