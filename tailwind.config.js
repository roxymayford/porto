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
          flame: '#FF4F00',     // Vibrant Flame Orange
          cyan: '#00BFFF',      // Deep Sky Blue / Electric Cyan
          magenta: '#D5006D',   // Deep Pink / Magenta
          yellow: '#FFEA00',    // Neon Electric Yellow
          purple: '#5D3FD3',    // Electric Iris / Royal Purple
          lemon: '#FFF700',     // Bright Lemon Accent
          charcoal: '#292929',  // Dark Surface / Charcoal
          ice: '#E8F8F5',       // Soft Mint / Ice White
          amber: '#FF6F00',     // Amber Flame
          obsidian: '#1F2022',  // Obsidian Dark Base
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        'brutal-sm': '2px 2px 0px #1F2022',
        'brutal': '4px 4px 0px #1F2022',
        'brutal-lg': '6px 6px 0px #1F2022',
        'brutal-xl': '8px 8px 0px #1F2022',
        'brutal-flame': '4px 4px 0px #FF4F00',
        'brutal-cyan': '4px 4px 0px #00BFFF',
        'brutal-magenta': '4px 4px 0px #D5006D',
        'brutal-purple': '4px 4px 0px #5D3FD3',
        'brutal-yellow': '4px 4px 0px #FFEA00',
      },
    },
  },
  plugins: [],
}
