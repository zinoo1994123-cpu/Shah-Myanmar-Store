import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config = {
  darkMode: ['class'],
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B5A2B',
        secondary: '#D4AF37',
        background: '#FAF8F3',
        accent: '#8B0000',
        'dark-bg': '#0F0F0F',
        'dark-card': '#1A1A1A',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        lg: '12px',
        md: '8px',
        sm: '4px',
      },
      boxShadow: {
        soft: '0 4px 15px rgba(0, 0, 0, 0.08)',
        'soft-md': '0 8px 25px rgba(0, 0, 0, 0.1)',
        'soft-lg': '0 12px 40px rgba(0, 0, 0, 0.12)',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
