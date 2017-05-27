'use strict'
process.env.NODE_ENV = 'development'

const webpack = require('webpack')
const base = require('./webpack.base')
const _ = require('./utils')
const path = require('path')
const FriendlyErrors = require('friendly-errors-webpack-plugin')
const OfflinePlugin = require('offline-plugin')
const manifestPlugin = require('pwa-manifest-webpack-plugin')

base.devtool = 'eval-source-map'
base.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new FriendlyErrors(),
  new OfflinePlugin({
    relativePaths: false,
    AppCache: false,
    ServiceWorker: {
      events: true
    }
  }),
  new manifestPlugin({
    name: 'Sparia',
    description: 'Sparia - Something unimaginable',
    display: 'fullscreen',
    icon: {
      src: path.resolve('src/images/networking.png'),
      sizes: [200]
    },
    start_url:'/'
  })
)

// push loader for css files
_.cssProcessors.forEach(processor => {
  let loaders
  if (processor.loader === '') {
    loaders = ['postcss-loader']
  } else {
    loaders = ['postcss-loader', processor.loader]
  }
  base.module.loaders.push(
    {
      test: processor.test,
      loaders: ['style-loader', _.cssLoader].concat(loaders)
    }
  )
})

module.exports = base
