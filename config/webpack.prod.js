const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const tailwindcss = require('tailwindcss');
const PATHS = require('./paths');

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/../app/index.html'),
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
  resolve: {
    alias: {
      app: PATHS.app,
    },
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
        use: 'babel-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [tailwindcss('./app/theme/tailwind.js')],
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
