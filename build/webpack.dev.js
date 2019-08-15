const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.resolve('./dist'),
    host: '0.0.0.0',
    port: 8888,
    open: true,
    hot: true,
  },
};
module.exports = webpackMerge(commonConfig, devConfig);
