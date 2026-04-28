export default function Footer() {
  return (
    <footer className="bg-card-bg border-t border-card-border mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded flex items-center justify-center">
                <span className="text-white font-bold">⚗</span>
              </div>
              <h3 className="font-bold text-lg text-foreground">ApexMedLab</h3>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              Providing reliable medical testing services with secure digital results and professional healthcare partnerships.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-text-muted hover:text-primary text-sm transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="text-text-muted hover:text-primary text-sm transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="text-text-muted hover:text-primary text-sm transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-text-muted hover:text-primary text-sm transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4 text-sm">Contact Info</h4>
            <ul className="space-y-3">
              <li className="text-text-muted text-sm">
                <span className="block font-medium text-foreground mb-1">Phone</span>
                <a href="tel:+2348123456789" className="hover:text-primary transition">
                  +234 812 345 6789
                </a>
              </li>
              <li className="text-text-muted text-sm">
                <span className="block font-medium text-foreground mb-1">Location</span>
                Kubwa, FCT Nigeria
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-card-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-text-muted text-sm">
              &copy; 2026 ApexMedLab. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9-1 9-5.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
