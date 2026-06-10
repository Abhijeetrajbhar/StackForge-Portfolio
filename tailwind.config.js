/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        graphite: {
          950: '#0d0c0b',
          900: '#141312',
          800: '#1c1b1a',
          700: '#252422',
          600: '#2e2c2a',
          500: '#3a3835',
        },
        ivory: {
          50: '#faf9f7',
          100: '#f2f0eb',
          200: '#e8e4dc',
          300: '#d4cec2',
          400: '#b8b0a0',
        },
        beige: {
          300: '#c9bfa9',
          400: '#b5a98f',
          500: '#9e9078',
        },
        emerald: {
          muted: '#4a6b5a',
          soft: '#6b8f7c',
          light: '#8aaa98',
        },
        amber: {
          warm: '#c97b3a',
          muted: '#a86430',
          soft: '#e8a06a',
        },
      },
      fontFamily: {
        display: ['Georgia', '"Times New Roman"', 'serif'],
        heading: ['Georgia', '"Times New Roman"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Cascadia Code"', 'Consolas', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem', letterSpacing: '0.15em' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-right': 'slideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}
