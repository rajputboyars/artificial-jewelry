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
        primary: "#0c192b", // Dark blue
        secondary: "#1b2a40", // Navy blue
        grayDark: "#8b8b8b", // Dark gray
        grayLight: "#a6a6a6", // Light gray
        lightBackground: "#f4f7fb", // Light background
      },
    },
  },
  plugins: [],
};
