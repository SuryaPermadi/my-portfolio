"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [topik, setTopik] = useState("");
  const [message, setMessage] = useState("Saya ingin bekerja sama, apakah kamu berkenan?");

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "6281223929469";
    const encodedMessage = encodeURIComponent(
      `Halo Surya! Nama saya ${name}. Konsep proyek: ${topik}. Pesan: ${message}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="min-h-screen py-40 px-6 bg-white selection:bg-primary/10 selection:text-primary">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <p className="text-primary font-black uppercase tracking-[0.5em] text-[10px] mb-6">Pintu Komunikasi</p>
          <h1 className="text-6xl sm:text-9xl font-black mb-10 text-[#111111] tracking-tighter uppercase italic leading-[0.85]">
            MARI <br /><span className="text-primary">BERDISKUSI</span>
          </h1>
          <p className="text-zinc-400 text-xl font-light italic max-w-2xl mx-auto">
            Memiliki ide revolusioner atau sekadar ingin menyapa? Saya siap mendengarkan visi Anda.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-10 sm:p-24 rounded-5xl border-primary/5 shadow-2xl relative overflow-hidden"
        >
          <form
            onSubmit={handleWhatsAppRedirect}
            className="space-y-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary ml-1">Identitas Anda</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama Lengkap"
                  className="w-full bg-white border border-[#F4F4F5] rounded-3xl px-10 py-6 text-[#111111] placeholder:text-zinc-300 focus:outline-none focus:border-primary/20 focus:ring-8 focus:ring-primary/5 transition-all font-bold shadow-sm text-lg"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary ml-1">Topik Utama</label>
                <input
                  type="text"
                  required
                  value={topik}
                  onChange={(e) => setTopik(e.target.value)}
                  placeholder="Contoh: Desain Web"
                  className="w-full bg-white border border-[#F4F4F5] rounded-3xl px-10 py-6 text-[#111111] placeholder:text-zinc-300 focus:outline-none focus:border-primary/20 focus:ring-8 focus:ring-primary/5 transition-all font-bold shadow-sm text-lg"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-primary ml-1">Narasi Pesan</label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                placeholder="Bagikan visi atau pesan Anda..."
                className="w-full bg-white border border-[#F4F4F5] rounded-3xl px-10 py-8 text-[#111111] placeholder:text-zinc-300 focus:outline-none focus:border-primary/20 focus:ring-8 focus:ring-primary/5 transition-all resize-none font-bold shadow-sm text-lg"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="group relative px-20 py-8 bg-[#111111] text-white font-black rounded-3xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/10 overflow-hidden uppercase tracking-widest text-sm flex items-center gap-4"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[gradient_4s_linear_infinite] bg-[length:200%_auto]" />
                <span className="relative z-10 flex items-center gap-4">
                  Inisiasi Percakapan <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </form>
        </motion.div>

        {/* Social Bridge */}
        <div className="mt-40 flex flex-wrap justify-center gap-20">
          {[
            { label: "Email", link: "mailto:suryapermadi122@gmail.com", icon: <Mail className="w-8 h-8" /> },
            { label: "LinkedIn", link: "https://www.linkedin.com/in/suryapermadiwicaksana24", icon: <Linkedin className="w-8 h-8" /> },
            { label: "GitHub", link: "https://github.com/SuryaPermadi", icon: <Github className="w-8 h-8" /> }
          ].map((social) => (
            <a key={social.label} href={social.link} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-6">
              <div className="p-8 rounded-[2.5rem] bg-[#F4F4F5] text-zinc-400 group-hover:bg-primary group-hover:text-white group-hover:-translate-y-4 transition-all duration-700 shadow-lg border border-transparent group-hover:border-primary/20">
                {social.icon}
              </div>
              <span className="text-[12px] font-black uppercase tracking-[0.6em] text-zinc-400 group-hover:text-primary transition-colors">{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
