/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  media: false,
  content: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  corePlugins: {
    // Extend the default theme to include a global style
    preflight: (preflight) => ({
      ...preflight,
      '*': {
        margin: 0,
      },
    }),
 },
}

