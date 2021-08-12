module.exports = {
    purge: {
      enabled: process.env.NODE_ENV === 'production',
      content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    },
    theme: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
    variants: {},
    plugins: [],
  }