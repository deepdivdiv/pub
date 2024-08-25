const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  assetsDir: './',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/style.scss";`
      }
    }
  }
})
