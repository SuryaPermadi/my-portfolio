import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-[#E9F1FA] bg-grid-pattern">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#00ABE4]/5 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/20 blur-[100px] rounded-full"
        />
        
        {/* Tech Floating Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-24 h-24 border-2 border-[#00ABE4]/10 rounded-full flex items-center justify-center"
        >
          <div className="w-12 h-[1px] bg-[#00ABE4]/20 rotate-45" />
        </motion.div>
        
        <div className="absolute top-1/2 left-10 -translate-y-1/2 hidden lg:block">
          <div className="flex flex-col items-center gap-10">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00ABE4] rotate-90">Systems.Init</span>
            <div className="w-[1px] h-32 bg-gradient-to-b from-[#00ABE4] to-transparent" />
          </div>
        </div>

        <div className="absolute bottom-10 right-10 hidden lg:block">
          <p className="text-[10px] font-mono text-zinc-400 tracking-tighter">
            LAT: 06° 12' 0" S<br />
            LONG: 106° 49' 0" E
          </p>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-5 py-2 mb-8 rounded-full bg-white/50 backdrop-blur-md border border-[#00ABE4]/20 shadow-lg shadow-[#00ABE4]/5">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#00ABE4] glow-blue">
              Phase 02 // Interface Operational
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-7xl sm:text-9xl font-black mb-6 leading-[0.85] tracking-tighter text-zinc-950">
            DESIGN<br />
            <span className="text-[#00ABE4] relative">
              LOGIC
              <span className="absolute -right-10 -top-4 text-[12px] font-mono text-zinc-400 tracking-tighter hidden sm:block opacity-40">[0x24F]</span>
            </span>
          </h1>
          <div className="w-16 h-1 bg-[#00ABE4] mb-12 rounded-full mx-auto shadow-lg shadow-[#00ABE4]/50 animate-pulse" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-zinc-500 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-medium"
        >
          Halo, Saya <span className="text-zinc-950 font-bold underline decoration-[#00ABE4]/30 decoration-4 underline-offset-4">Surya Permadi Wicaksana</span>. Seorang <span className="text-zinc-950">Frontend Developer</span> & <span className="text-zinc-950">UI Designer</span> yang berdedikasi menciptakan pengalaman web yang estetik dan fungsional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/projects"
            className="px-10 py-5 bg-[#00ABE4] text-white font-bold rounded-2xl hover:bg-[#008dbd] transition-all active:scale-95 shadow-2xl shadow-[#00ABE4]/20 text-center"
          >
            Lihat Proyek
          </Link>
          <Link
            href="/about"
            className="px-10 py-5 bg-white border-2 border-[#00ABE4]/20 text-[#00ABE4] font-bold rounded-2xl hover:border-[#00ABE4] transition-all active:scale-95 text-center"
          >
            Tentang Saya
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        {/* <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Scroll</span> */}
        {/* <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" /> */}
      </motion.div>
    </section>
  );
}
