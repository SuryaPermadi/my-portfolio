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
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass border border-white/10">
              <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                Tentang Saya
              </span>
            </div>

            {/* <h1 className="text-5xl sm:text-7xl font-black mb-8 leading-tight tracking-tight text-white">
              Developing with <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent italic">
                Heart & Logic
              </span>
            </h1> */}

            <p className="text-xl leading-relaxed text-gray-400 mb-8 font-medium">
              Halo! Saya <span className="text-white font-bold">Surya Permadi Wicaksana</span>, seorang developer yang menyukai pembuatan antarmuka interaktif dan pengalaman web yang halus dan modern.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 font-medium">
              Saya terbiasa bekerja dengan <span className="text-indigo-400">Next.js, React, dan TypeScript</span>. Fokus saya adalah membangun aplikasi yang tidak hanya fungsional, tetapi juga memiliki estetika premium yang berkesan bagi pengguna.
            </p>

            <div className="flex flex-wrap gap-4">
              {["IT Governance", "Front End", "UI UX", "Analisis Sistem"].map((skill) => (
                <span key={skill} className="px-5 py-2.5 rounded-2xl glass border border-white/5 text-gray-300 text-sm font-bold uppercase tracking-widest hover:border-indigo-500/30 transition-colors">
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
              {/* Animated Glow Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-[3rem] blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] overflow-hidden border border-white/10 bg-background">
                <Image
                  src="/images/foto-profil.jpeg"
                  alt="Surya Permadi"
                  fill
                  className="object-cover brightness-90 group-hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Decorative Glow behind image */}
            <div className="absolute -bottom-10 -right-10 blur-[120px] w-64 h-64 bg-indigo-500/20 rounded-full animate-pulse-slow"></div>
          </motion.div>
        </div>

        {/* Experience Section inside About Page */}
        <div className="max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-20"
          >
            <div className="w-12 h-[2px] bg-indigo-500 rounded-full" />
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Pengalaman Kerja
            </h3>
          </motion.div>
          <ExperienceTimeline />
        </div>
      </section>
    </div>
  );
}
