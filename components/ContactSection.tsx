"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="py-32 text-center max-w-3xl mx-auto px-6">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
        Mari Berkolaborasi!
      </motion.h2>

      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }} className="text-gray-300 mb-10 text-lg">
        Punya ide menarik atau ingin bekerja sama? Jangan ragu untuk menghubungi saya melalui email atau media sosial.
      </motion.p>

      <motion.a href="mailto:suryapermadi122@gmail.com" whileHover={{ scale: 1.05 }} className="inline-block px-10 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-full text-white font-semibold shadow-lg transition">
        Hubungi Saya 💬
      </motion.a>
    </section>
  );
}
