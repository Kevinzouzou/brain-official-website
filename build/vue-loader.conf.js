'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  // postcss:[require('postcss-px2rem')({'remUnit':19.2,'baseDpr':2})]
}
// module.exports = {
//   loaders: utils.cssLoaders({
//     sourceMap: isProduction
//       ? config.build.productionSourceMap
//       : config.dev.cssSourceMap,
//     extract: isProduction
//   }),
//   transformToRequire: {
//     video: 'src',
//     source: 'src',
//     img: 'src',
//     image: 'xlink:href'
//   },
//   postcss:[require('postcss-px2rem')({'remUnit':19.2,'baseDpr':2})]           /*因为我是以750px(iphone6)宽度为基准，所以remUnit为75*/
// }
