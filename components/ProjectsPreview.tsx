"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section className="py-32 bg-black/40 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-12 leading-tight bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent"
      >
        Proyek Unggulan
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {[1, 2, 3].map((num) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: num * 0.1 }}
            className="relative overflow-visible rounded-2xl border border-white/10 group shadow-lg"
          >
            <Image
              src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80`}
              alt={`Project ${num}`}
              width={800}
              height={600}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-left">
              <h3 className="text-xl font-semibold text-white">Project {num}</h3>
              <p className="text-gray-400 text-sm">Desain modern & interaktif</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <Link href="/projects" className="px-10 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-full font-semibold shadow-md transition">
          Lihat Semua Proyek →
        </Link>
      </div>
    </section>
  );
}
