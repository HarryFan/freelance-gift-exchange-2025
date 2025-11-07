/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          from: '#6C63FF',
          to: '#00C9FF',
        },
      },
    },
  },
  plugins: [],
}

