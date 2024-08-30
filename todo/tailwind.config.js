/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-green": "#132C13",
        "accent-green": "#30C62C",
        "bg-white": "#D8D8D8",
        "accent-white": "#f5f5f5",
        "accent-black": "#1b1b1b",
        "accent-grey": "#7A887A",

        // main colors
        'text': 'var(--text)',
        'background': 'var(--background)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
      },
      width: {
        cell: "clamp(32px, calc(24px + 3dvw), 44px)",
        full: '100dvw',
        fill: '100%',
      },
      height: {
        cell: "clamp(32px, calc(24px + 3dvw), 44px)",
        full: '100dvh',
        fill: '100%',
      },
      boxShadow: {
        bottomElevated: "0 10px 15px -10px rgb(0 0 0 / 0.2)",
        topElevated: "0 10px 15px 10px rgb(0 0 0 / 0.2)"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

