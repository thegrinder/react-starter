const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const PATHS = require('./paths');

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(PATHS.app, 'index.ejs'),
  filename: 'index.html',
  inject: 'body',
});

const compressionPlugin = new CompressionPlugin();

const terserPlugin = new TerserPlugin({
  cache: true,
  parallel: true,
  sourceMap: true,
});

const mode = 'production';

const prodConfig = {
  mode,
  entry: [PATHS.app],
  output: {
    path: PATHS.build,
    filename: 'index.js',
    publicPath: '/',
  },
  optimization: {
    minimizer: [terserPlugin],
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    modules: ['node_modules', PATHS.app],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: [/node_modules/],
        use: [{ loader: 'babel-loader' }],
      },
    ],
  },
  plugins: [htmlPlugin, compressionPlugin],
};

module.exports = prodConfig;
