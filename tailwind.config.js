/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['SS Pretzel', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'pulse-bg': 'pulse-bg 2s ease-in forwards',
      },
      keyframes: {
        'pulse-bg': {
          '0%': { backgroundColor: 'var(--tw-gradient-from)' },
          '50%': { backgroundColor: 'var(--tw-gradient-to)' },
          '100%': { backgroundColor: 'var(--tw-gradient-from)' },
        },
      },
    },
  },
  plugins: [],
}
