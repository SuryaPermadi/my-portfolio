"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-32 px-6 text-center max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl leading-tight font-bold mb-8 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent"
      >
        Tentang Saya
      </motion.h2>

      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }} className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
        Saya memiliki ketertarikan besar terhadap dunia desain dan pengembangan web modern. Dengan pengalaman dalam <span className="text-indigo-400">React</span>, <span className="text-indigo-400">Next.js</span>, dan{" "}
        <span className="text-pink-400">Tailwind CSS</span>, saya berfokus pada menciptakan antarmuka yang indah, cepat, dan responsif.
      </motion.p>
    </section>
  );
}
