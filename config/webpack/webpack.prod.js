const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const PATHS = require('./paths');

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(PATHS.app, 'index.html'),
  filename: 'index.html',
  inject: 'body',
});

const extractCssPlugin = new MiniCssExtractPlugin({
  filename: 'index.css',
});

const analyzerPlugin = new BundleAnalyzerPlugin();

const compressionPlugin = new CompressionPlugin();

const terserPlugin = new TerserPlugin({
  cache: true,
  parallel: true,
  sourceMap: true,
});

const optimizeCssPlugin = new OptimizeCSSAssetsPlugin({});

const prodConfig = {
  mode: 'production',
  entry: [
    PATHS.app,
  ],
  output: {
    path: PATHS.build,
    filename: 'index.js',
    publicPath: '/',
  },
  optimization: {
    minimizer: [
      terserPlugin,
      optimizeCssPlugin,
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            root: path.join(PATHS.config, 'babel'),
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.join(PATHS.config, 'postcss'),
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    htmlPlugin,
    extractCssPlugin,
    compressionPlugin,
    analyzerPlugin,
  ],
};

module.exports = prodConfig;
