import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    borderRadius: {
      DEFAULT: "0.125rem",
      lg: "0.25rem",
      xl: "0.5rem",
      full: "0.75rem",
    },
    extend: {
      colors: {
        surface: {
          DEFAULT: "#fcf9f5",
          bright: "#fcf9f5",
          dim: "#dcdad6",
          tint: "#5c5f62",
          variant: "#e5e2de",
          "container-lowest": "#ffffff",
          "container-low": "#f6f3ef",
          container: "#f0ede9",
          "container-high": "#ebe8e4",
          "container-highest": "#e5e2de",
        },
        primary: {
          DEFAULT: "#0b0f11",
          container: "#212427",
          fixed: "#e1e2e6",
          "fixed-dim": "#c5c6ca",
        },
        secondary: {
          DEFAULT: "#006d32",
          container: "#6ffe97",
          fixed: "#6ffe97",
          "fixed-dim": "#4fe07e",
        },
        tertiary: {
          DEFAULT: "#0e0f0f",
          container: "#232424",
          fixed: "#e4e2e2",
          "fixed-dim": "#c7c6c6",
        },
        "on-primary": {
          DEFAULT: "#ffffff",
          container: "#898b8f",
          fixed: "#191c1f",
          "fixed-variant": "#44474a",
        },
        "on-secondary": {
          DEFAULT: "#ffffff",
          container: "#007436",
          fixed: "#00210b",
          "fixed-variant": "#005224",
        },
        "on-tertiary": {
          DEFAULT: "#ffffff",
          container: "#8b8b8b",
          fixed: "#1b1c1c",
          "fixed-variant": "#464747",
        },
        "on-surface": {
          DEFAULT: "#1c1c19",
          variant: "#44474a",
        },
        "on-background": "#1c1c19",
        "on-error": "#ffffff",
        "on-error-container": "#93000a",
        outline: {
          DEFAULT: "#75777a",
          variant: "#c5c6ca",
        },
        error: {
          DEFAULT: "#ba1a1a",
          container: "#ffdad6",
        },
        "inverse-surface": "#31302e",
        "inverse-primary": "#c5c6ca",
        "inverse-on-surface": "#f3f0ec",
        background: "#fcf9f5",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        headline: ["var(--font-inter)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        label: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
