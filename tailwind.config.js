/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.vue'],
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        alert: 'var(--alert)',
        text: 'var(--text)',
        background: 'var(--background)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
      },
      backgroundImage: {
        space: "url('/src/assets/images/space.gif')",
      },
    },
  },
  plugins: [],
}
