"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "professional" | "game";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("professional");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.toggle("game-mode", savedTheme === "game");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "professional" ? "game" : "professional";
    setTheme(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    document.body.classList.toggle("game-mode", newTheme === "game");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
