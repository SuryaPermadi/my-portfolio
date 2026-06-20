module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        cream: "var(--color-cream)",
        charcoal: "var(--color-charcoal)",
        muted: "var(--color-muted)",
        "muted-border": "var(--color-muted-border)",
        accent: "var(--color-accent)",
        "accent-light": "var(--color-accent-light)",
        "accent-hover": "var(--color-accent-hover)",
        surface: "var(--color-surface)",
        "surface-white": "var(--color-surface)",
        "text-secondary": "var(--color-text-secondary)",
        border: "var(--color-border)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Manrope", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        serif: ["Lora", "Georgia", "serif"],
      },
      fontSize: {
        "hero": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "800" }],
        "display-lg": ["48px", { lineHeight: "110%", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-xl": ["72px", { lineHeight: "95%", letterSpacing: "-0.03em", fontWeight: "800" }],
        "headline-md": ["32px", { lineHeight: "120%", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "170%", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "160%", fontWeight: "400" }],
        "label-sm": ["11px", { lineHeight: "140%", letterSpacing: "0.15em", fontWeight: "700" }],
      },
      borderRadius: {
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "28px",
        "4xl": "36px",
        full: "9999px",
      },
      spacing: {
        gutter: "2rem",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease both",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s infinite ease-in-out",
        "marquee": "marquee 20s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
