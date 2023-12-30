import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'royal-blue': '#2A45C2',
        'midnight-blue': '#3B4262',
        'slate-gray': '#565468',
        'light-gray': '#F3F3F3',
      },
      fontFamily: {
        sans: ['"Barlow Semi Condensed"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
