const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATHS = require('./paths');

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/../app/index.html'),
  filename: 'index.html',
  inject: 'body',
});
const hmrePlugin = new webpack.HotModuleReplacementPlugin();
const namedModulesPlugin = new webpack.NamedModulesPlugin();

const devConfig = {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    PATHS.app,
  ],
  output: {
    path: PATHS.build,
    filename: 'index.js',
    publicPath: '/',
  },
  context: PATHS.app,
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: PATHS.build,
    hot: true,
    publicPath: '/',
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
        ],
      },
    ],
  },
  plugins: [htmlPlugin, namedModulesPlugin, hmrePlugin],
};

module.exports = devConfig;
