"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    topic: "",
    message: "",
  });

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, topic, message } = formData;
    const phoneNumber = "6289652391060";
    const text = `Halo Surya, saya ${name}.%0A%0ATopik: ${topic}%0A%0APesan: ${message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <section className="min-h-screen py-40 px-6 relative overflow-hidden bg-background">
      <div className="max-w-4xl mx-auto glass-card rounded-[3rem] p-10 md:p-20 relative overflow-hidden rim-light-cyan z-10">
        {/* Glow Orbs */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary-container/10 glow-orb pointer-events-none rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-secondary/10 glow-orb pointer-events-none rounded-full"></div>

        <div className="text-center mb-20 relative z-10">
          <span className="font-mono text-[10px] text-primary-container tracking-[0.4em] mb-6 block uppercase">COMMS_LINK.ESTABLISH</span>
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-tighter mb-6 uppercase italic font-bold leading-[0.9]">
            Mari <br /><span className="text-primary-container">Berkolaborasi</span>
          </h1>
          <p className="text-on-surface-variant/60 font-light max-w-lg mx-auto italic">
            Punya proyek menarik atau sekedar ingin menyapa? Silakan hubungi saya melalui form di bawah ini.
          </p>
        </div>

        <form onSubmit={handleWhatsAppRedirect} className="space-y-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-3">
              <label className="font-mono text-[9px] tracking-widest text-primary-container/60 uppercase ml-1">NAMA LENGKAP</label>
              <input
                required
                type="text"
                placeholder="John Doe"
                className="w-full bg-transparent border-0 border-b border-white/20 focus:border-primary-container focus:ring-0 text-white transition-all duration-500 px-0 py-4 text-lg font-light placeholder:text-white/10"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-3">
              <label className="font-mono text-[9px] tracking-widest text-primary-container/60 uppercase ml-1">TOPIK</label>
              <input
                required
                type="text"
                placeholder="Project or inquiry"
                className="w-full bg-transparent border-0 border-b border-white/20 focus:border-primary-container focus:ring-0 text-white transition-all duration-500 px-0 py-4 text-lg font-light placeholder:text-white/10"
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-3">
            <label className="font-mono text-[9px] tracking-widest text-primary-container/60 uppercase ml-1">PESAN ANDA</label>
            <textarea
              required
              rows={4}
              placeholder="Ceritakan sedikit tentang proyek atau ide Anda..."
              className="w-full bg-transparent border-0 border-b border-white/20 focus:border-primary-container focus:ring-0 text-white transition-all duration-500 px-0 py-4 text-lg font-light placeholder:text-white/10"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>

          <button
            type="submit"
            className="group w-full bg-primary-container text-on-primary font-bold py-8 rounded-2xl flex items-center justify-center gap-4 hover:scale-[1.01] transition-all duration-500 shadow-[0_20px_40px_rgba(0,240,255,0.3)]"
          >
            <span className="font-mono text-xs uppercase tracking-widest">Kirim Pesan ke WhatsApp</span>
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform transform">&rarr;</span>
          </button>
        </form>

        <div className="mt-24 pt-12 border-t border-white/10 flex flex-wrap justify-center gap-12 items-center font-mono text-[10px] tracking-widest uppercase text-on-surface-variant/40">
          <a href="mailto:suryapermadi122@gmail.com" className="flex items-center gap-3 hover:text-primary-container transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container shadow-[0_0_8px_#00f0ff]"></span> EMAIL
          </a>
          <a href="https://www.linkedin.com/in/suryapermadiwicaksana24" target="_blank" className="flex items-center gap-3 hover:text-primary-container transition-colors">
            <span className="w-1.5 h-1.5 rounded-full border border-white/30"></span> LINKEDIN
          </a>
          <a href="https://github.com/SuryaPermadi" target="_blank" className="flex items-center gap-3 hover:text-primary-container transition-colors">
            <span className="w-1.5 h-1.5 rounded-full border border-white/30"></span> GITHUB
          </a>
        </div>
      </div>
    </section>
  );
}
