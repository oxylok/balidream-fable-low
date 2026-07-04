module.exports = {
  content: ['./site/**/*.html'],
  theme: {
    extend: {
      colors: {
        teal: { ink: '#0e4a57', deep: '#0d3d48', soft: '#4a7c88' },
        coral: { DEFAULT: '#ee5a5a', dark: '#c93636' },
        mist: '#eef2f7',
        gold: '#e8a33d',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Roboto', 'system-ui', 'sans-serif'],
        script: ['"Mr De Haviland"', 'cursive'],
      },
    },
  },
}
