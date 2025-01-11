import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        myCustomTheme: {
          primary: "#34D399", // Customize the primary color
          secondary: "#3B82F6", // Customize the secondary color
          accent: "#FBBF24", // Customize the accent color
          neutral: "#1E293B", // Customize the neutral color
          "base-100": "#FFFFFF", // Background color
          "base-200": "#F9FAFB", // Lighter background
          "base-300": "#D1D5DB", // Even lighter background
          info: "#0CA5E9",
          success: "#10B981",
          warning: "#F59E0B",
          error: "#EF4444",
        },
      },
      "light", // You can add built-in themes like 'light' or 'dark'
    ],
    darkTheme: "myCustomTheme", // Optional: Set a dark theme
  },
  plugins: [require("daisyui")],
} satisfies Config;
