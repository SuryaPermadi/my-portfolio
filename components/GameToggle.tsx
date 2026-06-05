"use client";

import { useTheme } from "./ThemeProvider";
import { Gamepad2, User } from "lucide-react";
import { motion } from "framer-motion";

export default function GameToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={`fixed bottom-8 right-8 z-[100] group flex items-center gap-3 px-6 py-3 border transition-all duration-500 overflow-hidden ${
        theme === "game"
          ? "bg-secondary text-primary border-primary/50"
          : "bg-secondary text-white border-white/10"
      }`}
    >
      <div className="relative w-5 h-5">
        <motion.div
          animate={{ scale: theme === "game" ? 0 : 1, opacity: theme === "game" ? 0 : 1 }}
          className="absolute inset-0"
        >
          <User size={20} />
        </motion.div>
        <motion.div
          animate={{ scale: theme === "game" ? 1 : 0, opacity: theme === "game" ? 1 : 0 }}
          className="absolute inset-0"
        >
          <Gamepad2 size={20} />
        </motion.div>
      </div>
      
      <span className="font-mono text-[9px] font-bold tracking-widest uppercase">
        {theme === "game" ? "LOGOUT_GAME" : "INIT_GAME"}
      </span>

      {/* Decorative background glow */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/5`} />
    </motion.button>
  );
}
