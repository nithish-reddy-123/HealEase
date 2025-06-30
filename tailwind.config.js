/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Blue
        secondary: '#FBBF24', // Yellow
        accent: '#EF4444', // Red
        neutral: '#374151', // Gray
      },
    },
  },
  plugins: [],
}