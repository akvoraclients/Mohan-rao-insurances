import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // LIC-Inspired Deep Navy: #0B3B60
          navy: {
            DEFAULT: "#0B3B60",
            50: "#f0f5fa",
            100: "#e0ebf4",
            200: "#b8d2e8",
            300: "#84b0d5",
            400: "#4d8bbe",
            500: "#296fa7",
            600: "#1b578c",
            700: "#154673",
            800: "#0B3B60",
            900: "#082c49",
            950: "#051c30",
          },
          // LIC Warm Gold / Yellow Accent: #D97706 / #E5A823
          gold: {
            DEFAULT: "#D97706",
            50: "#fffbeb",
            100: "#fef3c7",
            200: "#fde68a",
            300: "#fcd34d",
            400: "#fbbf24",
            500: "#f59e0b",
            600: "#d97706",
            700: "#b45309",
            800: "#92400e",
            900: "#78350f",
            950: "#451a03",
          },
          // Secondary Teal: #1D7373
          teal: {
            DEFAULT: "#1D7373",
            50: "#f1faf9",
            100: "#dcf3f0",
            200: "#b9e6e1",
            300: "#89d3cb",
            400: "#54bab0",
            500: "#369f95",
            600: "#1D7373",
            700: "#175d5d",
            800: "#154c4c",
            900: "#143f3f",
            950: "#072424",
          },
          // Charcoal: #2D3748
          charcoal: {
            DEFAULT: "#2D3748",
            50: "#f7fafc",
            100: "#edf2f7",
            200: "#e2e8f0",
            300: "#cbd5e0",
            400: "#a0aec0",
            500: "#718096",
            600: "#4a5568",
            700: "#2d3748",
            800: "#1a202c",
            900: "#171923",
            950: "#0d0e15",
          },
          // Light Background: #F8FAFC
          light: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Noto Sans Tamil"',
          '"Mukta Malar"',
          '"Latha"',
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
