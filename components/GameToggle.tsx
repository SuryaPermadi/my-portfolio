"use client";

import { useTheme } from "./ThemeProvider";
import { Gamepad2, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function GameToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className={`fixed bottom-8 right-8 z-[100] group flex items-center gap-3 px-6 py-4 rounded-2xl font-bold shadow-2xl transition-all duration-500 overflow-hidden ${
        theme === "game"
          ? "bg-zinc-950 text-emerald-400 border border-emerald-500/30"
          : "bg-white text-[#00ABE4] border border-[#00ABE4]/20"
      }`}
    >
      <div className="relative w-6 h-6">
        <motion.div
          animate={{ rotate: theme === "game" ? 360 : 0, scale: theme === "game" ? 0 : 1, opacity: theme === "game" ? 0 : 1 }}
          className="absolute inset-0"
        >
          <Briefcase size={24} />
        </motion.div>
        <motion.div
          animate={{ rotate: theme === "game" ? 0 : -360, scale: theme === "game" ? 1 : 0, opacity: theme === "game" ? 1 : 0 }}
          className="absolute inset-0"
        >
          <Gamepad2 size={24} />
        </motion.div>
      </div>
      
      <span className="relative z-10">
        {theme === "game" ? "QUIT GAME" : "ENTER GAME"}
      </span>

      {/* Decorative background glow */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${
        theme === "game" ? "from-emerald-500/10 to-emerald-400/10" : "from-[#00ABE4]/5 to-transparent"
      }`} />
    </motion.button>
  );
}
