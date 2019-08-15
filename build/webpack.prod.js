const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
};
module.exports = webpackMerge(commonConfig, prodConfig);
