"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [topik, setTopik] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "6281223929469";
    const encodedMessage = encodeURIComponent(`Halo Surya! Nama saya ${name}. Saya memiliki konsep proyek: ${topik}. Detail: ${message}`);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="contact" className="relative py-40 px-6 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <p className="text-primary font-black uppercase tracking-[0.5em] text-[10px] mb-4">Akses Langsung</p>
          <h2 className="text-5xl sm:text-8xl font-black mb-8 text-[#111111] tracking-tight uppercase italic">
            MARI <span className="text-primary">TERHUBUNG</span>
          </h2>
          <p className="text-zinc-500 text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Saya saat ini terbuka untuk <span className="text-[#111111] font-bold italic underline decoration-primary/30">pengalaman digital baru</span>. Kirimkan pesan singkat tentang ide Anda.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-card p-10 sm:p-20 rounded-5xl border-primary/5 shadow-2xl shadow-primary/5 relative overflow-hidden"
        >
          <form
            onSubmit={handleWhatsAppRedirect}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary ml-1">Nama Lengkap</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Hideo Kojima"
                  required
                  className="w-full bg-white border border-[#F4F4F5] rounded-2xl px-8 py-5 text-[#111111] placeholder:text-zinc-300 focus:outline-none focus:border-primary/20 focus:ring-8 focus:ring-primary/5 transition-all font-bold shadow-sm"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary ml-1">Konsep Proyek</label>
                <input
                  type="text"
                  name="topik"
                  value={topik}
                  onChange={(e) => setTopik(e.target.value)}
                  placeholder="Produk Masa Depan"
                  required
                  className="w-full bg-white border border-[#F4F4F5] rounded-2xl px-8 py-5 text-[#111111] placeholder:text-zinc-300 focus:outline-none focus:border-primary/20 focus:ring-8 focus:ring-primary/5 transition-all font-bold shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary ml-1">Detail Teknis</label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder="Bagikan visi Anda atau sekadar menyapa..."
                required
                className="w-full bg-white border border-[#F4F4F5] rounded-2xl px-8 py-5 text-[#111111] placeholder:text-zinc-300 focus:outline-none focus:border-primary/20 focus:ring-8 focus:ring-primary/5 transition-all resize-none font-bold shadow-sm"
              />
            </div>

            <button
              type="submit"
              className="group w-full relative h-20 bg-[#111111] text-white font-black rounded-3xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-primary/10 overflow-hidden uppercase tracking-widest text-sm flex items-center justify-center gap-3"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[gradient_4s_linear_infinite] bg-[length:200%_auto]" />
              <span className="relative z-10 flex items-center gap-3">
                Kirim Pesan Sekarang <Send className="w-5 h-5" />
              </span>
            </button>
          </form>
        </motion.div>

        {/* Global Access Links */}
        <div className="mt-24 flex flex-wrap justify-center gap-12 border-t border-[#F4F4F5] pt-20">
          {[
            { label: "Email", link: "mailto:suryapermadi122@gmail.com", icon: <Mail className="w-6 h-6" /> },
            { label: "LinkedIn", link: "https://www.linkedin.com/in/suryapermadiwicaksana24", icon: <Linkedin className="w-6 h-6" /> },
            { label: "GitHub", link: "https://github.com/SuryaPermadi", icon: <Github className="w-6 h-6" /> }
          ].map((social) => (
            <a key={social.label} href={social.link} title={social.label} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-4">
              <div className="p-5 rounded-2xl bg-[#F4F4F5] text-zinc-400 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm border border-transparent group-hover:border-primary/20">
                {social.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 group-hover:text-primary transition-colors">{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
