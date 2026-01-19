"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* ==== Left Side (Text) ==== */}
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl font-bold mb-6 py-2 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Tentang Saya 👨‍💻</h1>
          <p className="text-lg leading-relaxed mb-6">
            Halo! Saya <span className="font-semibold text-indigo-500">Surya Permadi Wicaksana</span>, seorang developer yang menyukai pembuatan antarmuka interaktif dan pengalaman web yang halus dan modern. Fokus saya adalah membangun
            aplikasi web yang cepat, elegan, dan berkesan.
          </p>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Saya terbiasa bekerja dengan <strong>Next.js, React, TypeScript</strong>, dan berbagai teknologi modern lainnya. Saat ini saya terus mengasah kemampuan desain UI/UX serta memperdalam animasi antarmuka dengan{" "}
            <strong>Framer Motion</strong>.
          </p>

          <div className="flex flex-wrap gap-3">
            {["IT Governance", "Front End", "UI UX", "Analisis Sistem"].map((skill) => (
              <span key={skill} className="px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 text-sm">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ==== Right Side (Profile Image) ==== */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-indigo-500/20">
            <Image src="/images/portofolio.png" alt="Surya Permadi" fill className="object-cover" />
            {/* Efek Spotlight */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          {/* Glow Circle */}
          <div className="absolute -bottom-10 blur-3xl w-72 h-72 bg-indigo-500/30 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}
