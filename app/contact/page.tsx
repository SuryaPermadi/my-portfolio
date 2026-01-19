"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("Saya ingin bekerja sama, apakah kamu berkenan?");

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "6281223929469";
    const encodedMessage = encodeURIComponent(`Halo Surya, nama saya ${name}. ${message}`);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-pink-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-xl mx-auto px-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-8 py-2 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
        >
          Hubungi Saya
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-gray-400 text-center mb-12 text-lg"
        >
          Mari buat sesuatu yang luar biasa bersama! Isi form di bawah untuk terhubung langsung ke WhatsApp saya.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl relative group"
        >
          {/* Subtle border glow on hover */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500/20 to-pink-500/20 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-1000 blur-sm pointer-events-none"></div>

          <form onSubmit={handleWhatsAppRedirect} className="relative z-10 flex flex-col gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan nama Anda..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Pesan Anda</label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300 resize-none font-sans"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-5 rounded-2xl shadow-xl shadow-indigo-500/25 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 text-lg"
            >
              Kirim Pesan ke WhatsApp 💬
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

