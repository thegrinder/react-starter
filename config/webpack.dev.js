const webpack = require('webpack');
const path = require('path');
const tailwindcss = require('tailwindcss');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATHS = require('./paths');

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/../app/index.html'),
  filename: 'index.html',
  inject: 'body',
});
const namedModulesPlugin = new webpack.NamedModulesPlugin();

const devConfig = {
  mode: 'development',
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'index.js',
    publicPath: '/',
  },
  context: PATHS.app,
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: PATHS.build,
    publicPath: '/',
  },
  resolve: {
    alias: {
      app: PATHS.app,
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
          { loader: 'style-loader' },
          { loader: 'css-loader' },
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
  plugins: [htmlPlugin, namedModulesPlugin],
};

module.exports = devConfig;
