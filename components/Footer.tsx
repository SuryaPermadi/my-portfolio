import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-void-black/60 backdrop-blur-2xl py-16 border-t border-white/10 mt-32 relative z-20 overflow-hidden">
      {/* Decorative Orbs in Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary-container/2 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="font-display text-lg tracking-[-0.05em] text-white uppercase font-bold">
            DESIGN<span className="text-primary-container font-light">LOGIC</span>
          </Link>
          <p className="font-mono text-[9px] tracking-widest text-on-surface-variant/40 uppercase">
            © {new Date().getFullYear()} SURYA PERMADI. ALL RIGHTS RESERVED.
          </p>
        </div>

        <div className="flex gap-10">
          {[
            { name: "Email", href: "mailto:suryapermadi122@gmail.com" },
            { name: "LinkedIn", href: "https://www.linkedin.com/in/suryapermadiwicaksana24" },
            { name: "Github", href: "https://github.com/SuryaPermadi" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant/40 hover:text-primary-container transition-all duration-300 font-mono text-[9px] tracking-widest uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
