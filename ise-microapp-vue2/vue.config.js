const path = require('path')
const { name } = require('./package')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const port = 8001

module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  publicPath: 'http://localhost:8001',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    disableHostCheck: true,
    port,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    output: {
      // 把子应用打包成 umd 库格式，libraryTarget: 'umd' - 将你的 library 暴露为所有的模块定义下都可运行的方式。它将在 CommonJS, AMD 环境下运行，或将模块导出到 global 下的变量。
      libraryTarget: 'umd',
      filename: '[name].[hash].js',
      // 设置后可以在浏览器控制台通过 window['ise-microapp-vue2']获取到当前子应用打包后的所有内容
      library: 'ise-microapp-vue2',
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
}
