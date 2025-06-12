module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#10B981',
        secondary: '#3B82F6',
        dark: {
          900: '#111827',
          800: '#1F2937',
          700: '#374151'
        },
        light: '#F3F4F6',
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        cyan: {
          500: '#06b6d4',
          600: '#0891b2',
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-in',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
