"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsPreview";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#E9F1FA] bg-grid-pattern text-zinc-950">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
