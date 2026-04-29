import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 bg-white border-t border-[#F4F4F5] text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="flex justify-center gap-10 mb-12">
          {[
            { icon: <Mail className="w-5 h-5" />, href: "mailto:suryapermadi122@gmail.com" },
            { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/suryapermadiwicaksana24" },
            { icon: <Github className="w-5 h-5" />, href: "https://github.com/SuryaPermadi" }
          ].map((item, i) => (
            <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-primary transition-all duration-300 hover:scale-125">
              {item.icon}
            </a>
          ))}
        </div>
        <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.5em] mb-4">
          Dibangun dengan Presisi & Estetika
        </p>
        <p className="text-zinc-600 font-bold tracking-tight text-sm">
          © {new Date().getFullYear()} <span className="text-[#111111]">Surya Permadi</span>. Hak cipta dilindungi undang-undang.
        </p>
      </div>
    </footer>
  );
}
