"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("Saya ingin bekerja sama, apakah kamu berkenan?");

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "6281223929469";
    const encodedMessage = encodeURIComponent(`Halo Surya, nama saya ${name}. ${message}`);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="py-24 bg-black/50 text-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Mari Berkolaborasi!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-gray-400 mb-12 text-lg leading-relaxed"
        >
          Punya ide besar atau ingin konsultasi IT Governance? <br /> Hubungi saya langsung via WhatsApp.
        </motion.p>

        <motion.form
          onSubmit={handleWhatsAppRedirect}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl text-left"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 px-1">Nama Kamu</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama Anda..."
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 px-1">Pesan</label>
            <textarea
              id="message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 transform-gpu active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Kirim ke WhatsApp 💬
          </button>
        </motion.form>
      </div>
    </section>
  );
}
