"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ExperienceTimeline from "@/components/ExperienceTimeline";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#E9F1FA] text-zinc-950">
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-32">
          {/* ==== Left Side (Text) ==== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-white border border-[#00ABE4]/10">
              <span className="text-xs font-bold tracking-wider uppercase text-[#00ABE4]">
                Tentang Saya
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black mb-8 leading-tight tracking-tight">
              Developing with <br />
              <span className="text-[#00ABE4] italic">
                Heart & Logic
              </span>
            </h1>

            <p className="text-xl leading-relaxed text-zinc-600 mb-8 font-medium">
              Halo! Saya <span className="text-zinc-950 font-bold">Surya Permadi Wicaksana</span>, seorang developer yang menyukai pembuatan antarmuka interaktif dan pengalaman web yang halus dan modern.
            </p>

            <p className="text-zinc-500 text-lg leading-relaxed mb-10 font-medium">
              Saya terbiasa bekerja dengan <span className="text-[#00ABE4] font-bold">Next.js, React, dan TypeScript</span>. Fokus saya adalah membangun aplikasi yang tidak hanya fungsional, tetapi juga memiliki estetika premium yang berkesan bagi pengguna.
            </p>

            <div className="flex flex-wrap gap-4">
              {["IT Governance", "Front End", "UI UX", "Analisis Sistem"].map((skill) => (
                <span key={skill} className="px-5 py-2.5 rounded-2xl bg-white border border-[#00ABE4]/10 text-zinc-600 text-xs font-bold uppercase tracking-widest hover:border-[#00ABE4] transition-colors shadow-sm shadow-[#00ABE4]/5">
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
              <div className="absolute -inset-4 bg-[#00ABE4]/10 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] overflow-hidden border-2 border-white bg-white shadow-2xl shadow-[#00ABE4]/10">
                <Image
                  src="/images/foto-profil.jpeg"
                  alt="Surya Permadi"
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ==== Experience Section ==== */}
        <div className="max-w-5xl mx-auto w-full pt-20 border-t border-[#00ABE4]/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-20"
          >
            <div className="w-12 h-[2px] bg-[#00ABE4] rounded-full" />
            <h3 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
              Pengalaman <span className="text-[#00ABE4]">Kerja</span>
            </h3>
          </motion.div>
          <ExperienceTimeline />
        </div>
      </section>
    </div>
  );
}
