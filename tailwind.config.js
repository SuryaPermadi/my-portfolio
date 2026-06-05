module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#020205",
        "void-black": "#020204",
        foreground: "#e4e1ea",
        primary: {
          DEFAULT: "#dbfcff",
          container: "#00f0ff",
        },
        secondary: {
          DEFAULT: "#d1bcff",
          container: "#7000ff",
        },
        "on-primary": "#00363a",
        "on-surface": "#e4e1ea",
        "on-surface-variant": "#b9cacb",
        "primary-container": "#00f0ff",
        "surface-variant": "#35343b",
        accent: "#d946ef",
        border: "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Manrope", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "mono-label": ["12px", { lineHeight: "140%", letterSpacing: "0.1em", fontWeight: "500" }],
        "display-lg": ["48px", { lineHeight: "110%", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-2xl": ["84px", { lineHeight: "90%", letterSpacing: "-0.04em", fontWeight: "800" }],
        "headline-md": ["32px", { lineHeight: "120%", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "160%", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "160%", fontWeight: "400" }],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
        "4xl": "2rem",
        "5xl": "3rem",
      },
      animation: {
        "grid-drift": "grid-drift 60s linear infinite",
        "float": "float 25s infinite linear",
        "pulse-slow": "pulse 12s infinite ease-in-out",
      },
      keyframes: {
        "grid-drift": {
          from: { "background-position": "0 0" },
          to: { "background-position": "80px 80px" },
        },
        float: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(60px, -80px) rotate(180deg)" },
          "100%": { transform: "translate(0, 0) rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
