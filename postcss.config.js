module.exports = {
  plugins: [
    //处理 @import 语句
    require('postcss-import'),
    require('tailwindcss'),
    //对嵌套声明的支持
    require('postcss-nested'),
    //支持 IE11
    require('postcss-custom-properties'),
    //未来CSS特性的支持
    require('postcss-preset-env')({ stage: 1 }),
    // 浏览器引擎前缀
    require('autoprefixer')
    // require('postcss-pxtorem')({
    //   rootValue: 16,
    //   selectorBlackList: ['ant'], //过滤
    //   propList: ['*'],
    //   minPixelValue: 2
    // })
  ]
};
