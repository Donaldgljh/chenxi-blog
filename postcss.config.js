module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-pxtorem')({
      rootValue: 16,
      selectorBlackList: ['ant'], //过滤
      propList: ['*'],
      minPixelValue: 4
    })
  ]
};
