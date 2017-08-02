/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    './app/index.js',
  ],
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      hash: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    })
  ],
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },
  devServer: {
    compress: true,
    port: 3030,
    historyApiFallback: true,
  },
  /* This is necessary to handle duplicate Radium instances. Ideally, this will
    be solved by Lerna in the near future */
  resolve: {
    alias: {
      radium: path.join(__dirname, 'node_modules', 'radium'),
    },
  },
}

if (['development', 'local'].includes(process.env.NODE_ENV)) {
  config.plugins.push(
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )

  // WebPack Hot Middleware client & HMR plugins
  config.entry.unshift(
    'webpack-dev-server/client?http://localhost:3030',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch'
  )
}

module.exports = config
