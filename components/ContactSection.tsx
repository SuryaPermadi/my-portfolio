"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "6281223929469";
    const encodedMessage = encodeURIComponent(`Halo Surya, nama saya ${name}. ${message}`);
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
          <h2 className="text-4xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Mari Berkolaborasi
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl font-medium max-w-2xl mx-auto">
            Punya proyek menarik atau sekedar ingin menyapa? <br />
            Silakan hubungi saya melalui form di bawah ini.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glass-dark border border-white/5 p-8 sm:p-12 rounded-[2.5rem] shadow-2xl"
        >
          <form
            onSubmit={handleWhatsAppRedirect}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-indigo-400 ml-1">Nama Lengkap</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all font-medium"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-indigo-400 ml-1">Topik</label>
                <div className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-gray-400 font-medium">
                  General Inquiry / Project
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-indigo-400 ml-1">Pesan Anda</label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder="Ceritakan sedikit tentang proyek atau ide Anda..."
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all resize-none font-medium"
              />
            </div>

            <button
              type="submit"
              className="group relative w-full bg-white text-black font-black py-5 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-white/5 flex items-center justify-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity" />
              Kirim Pesan ke WhatsApp 💬
            </button>
          </form>
        </motion.div>

        {/* Other contact links */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <a href="mailto:surya@example.com" className="group text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-bold uppercase tracking-[0.2em] text-[10px]">
            <span className="w-2 h-2 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform" />
            Email
          </a>
          <a href="https://linkedin.com/in/surya" className="group text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-bold uppercase tracking-[0.2em] text-[10px]">
            <span className="w-2 h-2 rounded-full bg-pink-500 group-hover:scale-125 transition-transform" />
            LinkedIn
          </a>
          <a href="https://github.com/surya" className="group text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-bold uppercase tracking-[0.2em] text-[10px]">
            <span className="w-2 h-2 rounded-full bg-purple-500 group-hover:scale-125 transition-transform" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
