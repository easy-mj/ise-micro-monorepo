const path = require('path')
const { defineConfig } = require('@vue/cli-service')

const port = 8002

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    hot: true,
    port
  }
})
