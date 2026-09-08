/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          lime: '#B8FF57',
          pink: '#FF8BA7',
          purple: '#7E69F2',
          cream: '#FAF9F5',
          grayBg: '#E9E8E3',
          dark: '#111111',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        'brutal-sm': '2px 2px 0px #111111',
        'brutal': '4px 4px 0px #111111',
        'brutal-lg': '6px 6px 0px #111111',
        'brutal-xl': '8px 8px 0px #111111',
      },
    },
  },
  plugins: [],
}
