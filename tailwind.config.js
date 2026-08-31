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
          DEFAULT: '#31543F',
          dark: '#20382D',
          light: '#496B57',
        },
        navy: {
          DEFAULT: '#20382D',
          dark: '#172A22',
        },
        ivory: {
          DEFAULT: '#F5EBDD',
          light: '#FAF3E8',
          white: '#FFFDF8',
        },
        sand: {
          DEFAULT: '#E9D9C2',
          light: '#FAF3E8',
        },
        saffron: {
          DEFAULT: '#CC842F',
          dark: '#B57326',
          light: '#D8903F',
        },
        gold: {
          DEFAULT: '#C99A3D',
        },
        terracotta: {
          DEFAULT: '#A94B32',
        },
        charcoal: {
          DEFAULT: '#29251F',
          muted: '#49392D',
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
