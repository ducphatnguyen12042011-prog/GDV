/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FBBF24', // Vàng cam xịn
        dark: '#0F172A', // Đen xanh xịn
        surface: '#FFFFFF',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.05)',
      }
    },
  },
  plugins: [],
}
