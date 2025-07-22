/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-white': '#ffffff',
        'dark-bg': '#1a1a2e',
        'dark-surface': '#16213e',
        'dark-card': '#0f172a',
        'text-primary': '#e2e8f0',
        'text-secondary': '#94a3b8',
      },
    },
  },
  plugins: [],
}
