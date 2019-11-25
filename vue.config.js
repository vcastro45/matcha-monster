const webpack = require('webpack')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')


const config = {
  lintOnSave: true,
  transpileDependencies: ['vuetify'],
  configureWebpack: (config) => {
    config.devtool = 'eval-source-map'
    config.plugins.push(new VuetifyLoaderPlugin())
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true
  },
  pwa: {
    name: 'Matcha',
    themeColor: '#ED6C6D',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js'
    }
  }
}

module.exports = config
