import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/8 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <Link
              href="/"
              className="font-display font-bold text-xl text-charcoal tracking-tight hover:text-accent transition-colors"
            >
              Surya<span className="text-accent">.</span>
            </Link>
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} Surya Permadi Wicaksana. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Home", href: "/" },
              { name: "Projects", href: "/projects" },
              { name: "About", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted hover:text-accent transition-colors link-underline"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-3">
            {[
              {
                href: "mailto:suryapermadi122@gmail.com",
                icon: "mail",
                label: "Email",
              },
              {
                href: "https://www.linkedin.com/in/suryapermadiwicaksana24",
                icon: "language",
                label: "LinkedIn",
              },
              {
                href: "https://github.com/SuryaPermadi",
                icon: "code",
                label: "GitHub",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all"
              >
                <span className="material-symbols-outlined text-base">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
