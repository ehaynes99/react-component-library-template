const path = require('path')
const fs = require('fs')
const babelConfig = require('../babel.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'src/index.html'),
  filename: './index.html',
  chunksSortMode: 'none',
})
const projectName = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../package.json')),
).name

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'demo[contentHash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: babelConfig,
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: ['.js'],
    alias: {
      [projectName]: path.resolve(__dirname, '../src/index'),
    },
  },
  devServer: {
    port: process.env.PORT || 3000,
  },
}
