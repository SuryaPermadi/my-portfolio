"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [topik, setTopik] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "6281223929469";
    const encodedMessage = encodeURIComponent(`Halo Surya, nama saya ${name}. Saya ingin membicarakan tentang ${topik}. \n\nPesan: ${message}`);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-6xl font-black mb-6 text-zinc-950">
            Mari Berkolaborasi
          </h2>
          <p className="text-zinc-500 text-lg sm:text-xl font-medium max-w-2xl mx-auto">
            Punya proyek menarik atau sekedar ingin menyapa? <br />
            Silakan hubungi saya melalui form di bawah ini.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-zinc-200 p-8 sm:p-12 rounded-[2.5rem] shadow-xl shadow-zinc-100"
        >
          <form
            onSubmit={handleWhatsAppRedirect}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Nama Lengkap</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-6 py-4 text-zinc-950 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-950/20 focus:ring-4 focus:ring-zinc-950/5 transition-all font-medium"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Topik</label>
                <input
                  type="text"
                  name="topik"
                  value={topik}
                  onChange={(e) => setTopik(e.target.value)}
                  placeholder="Project atau Bincang-bincang aja"
                  required
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-6 py-4 text-zinc-950 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-950/20 focus:ring-4 focus:ring-zinc-950/5 transition-all font-medium"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Pesan Anda</label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder="Ceritakan sedikit tentang proyek atau ide Anda..."
                required
                className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-6 py-4 text-zinc-950 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-950/20 focus:ring-4 focus:ring-zinc-950/5 transition-all resize-none font-medium"
              />
            </div>

            <button
              type="submit"
              className="group w-full bg-zinc-950 text-white font-bold py-5 rounded-2xl hover:bg-zinc-800 active:scale-[0.98] transition-all shadow-xl shadow-zinc-200 flex items-center justify-center gap-2 overflow-hidden"
            >
              Kirim Pesan ke WhatsApp 💬
            </button>
          </form>
        </motion.div>

        {/* Other contact links */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <a href="mailto:suryapermadi122@gmail.com" className="group text-zinc-400 hover:text-zinc-950 transition-colors flex items-center gap-2 font-bold uppercase tracking-[0.2em] text-[10px]">
            <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
            Email
          </a>
          <a href="https://www.linkedin.com/in/suryapermadiwicaksana24" className="group text-zinc-400 hover:text-zinc-950 transition-colors flex items-center gap-2 font-bold uppercase tracking-[0.2em] text-[10px]">
            <span className="w-2 h-2 rounded-full bg-zinc-950 group-hover:scale-125 transition-transform" />
            LinkedIn
          </a>
          <a href="https://github.com/SuryaPermadi" className="group text-zinc-400 hover:text-zinc-950 transition-colors flex items-center gap-2 font-bold uppercase tracking-[0.2em] text-[10px]">
            <span className="w-2 h-2 rounded-full bg-zinc-600 group-hover:scale-125 transition-transform" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
