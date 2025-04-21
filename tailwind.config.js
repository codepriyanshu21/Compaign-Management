/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        dashMove: {
          '0%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '-20' },
        },
      },
      animation: {
        dash: 'dashMove 2s linear infinite',
      },
    },
  },
  plugins: [],
}
