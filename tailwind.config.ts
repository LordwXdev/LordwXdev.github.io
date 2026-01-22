/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        glass: {
          light: 'rgba(255,255,255,0.18)',
          dark: 'rgba(15,23,42,0.55)',
        },
        primary: {
          DEFAULT: '#ff6300',
          soft: 'rgba(255,99,0,0.15)',
        },
      },
      backdropBlur: {
        apple: '20px',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.12)',
        glow: '0 0 40px rgba(255,99,0,0.35)',
      },
      borderRadius: {
        apple: '2rem',
      },
      backgroundImage: {
        'glass-gradient':
          'linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
    },
  },
  plugins: [],
};
