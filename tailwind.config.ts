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
        buttonPurple: '#8c52ff', // Color del botón
      },
      backgroundImage: {
        'circular-gradient': 'radial-gradient(circle at top left, #3d194b, #111119)', // Degradado circular
      },
    },
  },
  plugins: [],
} satisfies Config;
