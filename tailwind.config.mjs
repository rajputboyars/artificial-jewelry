/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F0C987", // Muted Gold
        secondary: "#E1E1E1", // Pearl White
        accent: "#B6A39E", // Pale Mauve
        background: "#FFFFFF", // Clean White
        textPrimary: "#2C2C2C", // Deep Gray
        textSecondary: "#6B6B6B", // Medium Gray
      },
    },
  },
  plugins: [],
};
