/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#00311F',
          beige: '#FFF7E6',
          black: '#111111',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 5px 15px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
