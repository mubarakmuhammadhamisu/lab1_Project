'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Blood Tests',
      description: 'Comprehensive blood testing including complete blood count, lipid panels, glucose tests, and more.',
      icon: '🩸',
    },
    {
      title: 'Medical Scans',
      description: 'Advanced imaging services including X-rays, ultrasounds, and CT scans.',
      icon: '🔍',
    },
    {
      title: 'Pathology',
      description: 'Professional pathology services for tissue analysis and disease diagnosis.',
      icon: '🧪',
    },
    {
      title: 'COVID-19 Testing',
      description: 'Rapid and accurate COVID-19 PCR and antigen testing.',
      icon: '💉',
    },
    {
      title: 'Drug Testing',
      description: 'Occupational and forensic drug screening services.',
      icon: '🏥',
    },
    {
      title: 'Health Packages',
      description: 'Customized health screening packages for individuals and corporate clients.',
      icon: '📋',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-blue-100 text-lg">
            Comprehensive medical testing solutions for your healthcare needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20 w-full flex-1">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition border-l-4 border-primary"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-12 mt-16 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Book a Test?
          </h2>
          <p className="text-foreground mb-6 max-w-2xl mx-auto">
            Visit one of our centers or book your test online today. Our team is ready to help you with all your medical testing needs.
          </p>
          <Link
            href="/contact"
            className="bg-secondary hover:bg-accent text-white font-bold py-3 px-8 rounded inline-block transition"
          >
            BOOK NOW
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
