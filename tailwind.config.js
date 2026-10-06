/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F5F2EA',
          card: '#FAF8F3',
          dark: '#ECE8DD',
          border: '#E2DDD0',
        },
        editorial: {
          black: '#111111',
          soft: '#222222',
          muted: '#666666',
          light: '#888888',
          border: '#DED8CB',
        },
        orange: {
          accent: '#FF5A1F',
          hover: '#E04810',
          soft: 'rgba(255, 90, 31, 0.1)',
        },
        dark: {
          bg: '#111111',
          card: '#1A1A1A',
          cardBorder: '#2A2A2A',
          text: '#F5F2EA',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
