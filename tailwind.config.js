/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'lg': '0 10px 8px rgb(0 0 0 / 0.04), 0 4px 3px rgb(0 0 0 / 0.1)',
      },
    },
  },
  safelist: [
    'drop-shadow-lg',
    'font-black',
    'bg-gradient-to-r',
    'bg-gradient-to-br',
    'from-red-600',
    'via-pink-600',
    'to-purple-600',
    'from-gray-50',
    'via-white',
    'to-red-50',
  ],
  plugins: [],
}
