export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-light mt-20">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-foreground text-sm">
          Copyright ApexMedLab 2026. Kubwa, FCT Nigeria.
        </p>
        <div className="flex gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-blue-700"
            aria-label="Twitter"
          >
            <span className="text-2xl">𝕏</span>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-blue-700"
            aria-label="Facebook"
          >
            <span className="text-2xl">f</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-blue-700"
            aria-label="Instagram"
          >
            <span className="text-2xl">📷</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
