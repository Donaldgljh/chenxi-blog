module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}']
  },
  theme: {},
  variants: {},
  plugins: []
};
