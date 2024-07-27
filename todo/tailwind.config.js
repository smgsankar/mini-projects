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
      },
      width: {
        cell: "clamp(44px, calc(32px + 3dvw), 56px)"
      },
      height: {
        cell: "clamp(44px, calc(32px + 3dvw), 56px)"
      }
    },
  },
  plugins: [],
}

