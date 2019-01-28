const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const tailwindcss = require('tailwindcss');
const PATHS = require('./paths');

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/../app/index.html'),
  filename: 'index.html',
  inject: 'body',
});

const extractCss = new MiniCssExtractPlugin({
  filename: 'main.css',
});

const analyzer = new BundleAnalyzerPlugin();

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
      '@': path.join(__dirname, '../app'),
    },
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|styled-components)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
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
              plugins: () => [tailwindcss('./tailwind.js')],
            },
          },
        ],
      },
    ],
  },
  plugins: [htmlPlugin, extractCss, analyzer],
};

module.exports = prodConfig;
