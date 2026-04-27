"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import ExperienceTimeline from "@/components/ExperienceTimeline";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="py-32 px-6 flex flex-col items-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-32">
          {/* ==== Left Side (Text) ==== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-zinc-100 border border-zinc-200">
              <span className="text-xs font-bold tracking-wider uppercase text-zinc-600">
                Tentang Saya
              </span>
            </div>

            {/* <h1 className="text-5xl sm:text-7xl font-black mb-8 leading-tight tracking-tight text-white">
              Developing with <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent italic">
                Heart & Logic
              </span>
            </h1> */}

            <p className="text-xl leading-relaxed text-zinc-500 mb-8 font-medium">
              Halo! Saya <span className="text-zinc-950 font-bold">Surya Permadi Wicaksana</span>, seorang developer yang menyukai pembuatan antarmuka interaktif dan pengalaman web yang halus dan modern.
            </p>

            <p className="text-zinc-500 text-lg leading-relaxed mb-10 font-medium">
              Saya terbiasa bekerja dengan <span className="text-blue-600">Next.js, React, dan TypeScript</span>. Fokus saya adalah membangun aplikasi yang tidak hanya fungsional, tetapi juga memiliki estetika premium yang berkesan bagi pengguna.
            </p>

            <div className="flex flex-wrap gap-4">
              {["IT Governance", "Front End", "UI UX", "Analisis Sistem"].map((skill) => (
                <span key={skill} className="px-5 py-2.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs font-bold uppercase tracking-widest hover:border-zinc-300 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ==== Right Side (Profile Image) ==== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative group">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] overflow-hidden border border-zinc-200 bg-zinc-50">
                <Image
                  src="/images/foto-profil.jpeg"
                  alt="Surya Permadi"
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>
            </div>

            {/* Decorative Glow behind image */}
            <div className="absolute -bottom-10 -right-10 blur-[100px] w-64 h-64 bg-zinc-100 rounded-full"></div>
          </motion.div>
        </div>

        {/* Experience Section inside About Page */}
        <div className="max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-20"
          >
            <div className="w-12 h-[2px] bg-zinc-950 rounded-full" />
            <h3 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
              Pengalaman Kerja
            </h3>
          </motion.div>
          <ExperienceTimeline />
        </div>
      </section>
    </div>
  );
}
