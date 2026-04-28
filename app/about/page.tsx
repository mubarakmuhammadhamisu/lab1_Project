'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function About() {
  const values = [
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in medical testing and patient care.',
      icon: '⭐',
    },
    {
      title: 'Integrity',
      description: 'We are committed to honesty and transparency in all our operations.',
      icon: '🤝',
    },
    {
      title: 'Confidentiality',
      description: 'Your privacy and health information are our top priority.',
      icon: '🔐',
    },
    {
      title: 'Innovation',
      description: 'We leverage cutting-edge technology for accurate and fast results.',
      icon: '🚀',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About ApexMedLab
          </h1>
          <p className="text-blue-100 text-lg">
            Your trusted partner in medical testing since 2020
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-20 w-full flex-1">
        {/* Our Story */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <p className="text-foreground leading-relaxed mb-4">
              ApexMedLab was founded with a simple mission: to provide reliable, accurate, and accessible medical testing services to communities across Nigeria. We began in Kubwa, FCT, as a small but dedicated laboratory and have grown into a trusted healthcare partner.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Our commitment to quality, patient care, and technological innovation has made us a preferred choice for individuals, corporate organizations, and healthcare facilities seeking dependable laboratory services.
            </p>
            <p className="text-foreground leading-relaxed">
              Today, ApexMedLab continues to set new standards in medical testing, combining expert expertise with modern technology to deliver results you can trust.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Why Choose ApexMedLab?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-primary">
              <h3 className="text-xl font-bold text-foreground mb-3">
                ✓ Certified & Accredited
              </h3>
              <p className="text-foreground text-sm">
                Our laboratory meets international standards and is accredited by relevant healthcare authorities.
              </p>
            </div>
            <div className="bg-teal-50 rounded-lg p-6 border-l-4 border-primary-light">
              <h3 className="text-xl font-bold text-foreground mb-3">
                ✓ Expert Staff
              </h3>
              <p className="text-foreground text-sm">
                Our team comprises experienced medical professionals and laboratory technicians.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-secondary">
              <h3 className="text-xl font-bold text-foreground mb-3">
                ✓ Modern Equipment
              </h3>
              <p className="text-foreground text-sm">
                We invest in state-of-the-art laboratory equipment for accurate and rapid results.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Reliable Medical Testing?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Contact us today to learn more about our services or to schedule a test at your convenience.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary hover:bg-blue-50 font-bold py-3 px-8 rounded inline-block transition"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
