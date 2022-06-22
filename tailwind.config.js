module.exports = {
  dark: false,
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    screens: {
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {},
  },
  plugins: [],
}
