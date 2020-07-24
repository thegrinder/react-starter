const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = require('./paths');

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(PATHS.app, 'index.ejs'),
  filename: 'index.html',
  inject: 'body',
});

const devConfig = {
  mode: 'development',
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'index.js',
    publicPath: '/',
  },
  context: PATHS.app,
  optimization: {
    namedModules: true,
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: PATHS.build,
    publicPath: '/',
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
  plugins: [htmlPlugin],
};

module.exports = devConfig;
