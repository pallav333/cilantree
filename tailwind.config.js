/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#173F36',
          dark: '#0f2a24',
          light: '#23574b',
        },
        navy: {
          DEFAULT: '#102A43',
          dark: '#0b1c2d',
        },
        ivory: {
          DEFAULT: '#F8F5EC',
          light: '#FCFAF4',
        },
        sand: {
          DEFAULT: '#E8E0CF',
          light: '#F3ECE0',
        },
        saffron: {
          DEFAULT: '#C98B32',
          light: '#e0a34b',
        },
        charcoal: {
          DEFAULT: '#17201D',
          muted: '#4A5550',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
