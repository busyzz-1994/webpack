const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  //开启热模块替换 ， 修改样式时 不用重复刷新页面
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                //保证scss文件里面  通过@import形式引入的scss文件也被postcss-loader解析
                require('postcss-import')(),
                //添加浏览器前缀
                require('autoprefixer')('last 100 versions'),
              ],
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve('./dist'),
    host: '0.0.0.0',
    port: 8888,
    open: true,
    hot: true,
    compress: true,
  },
};
module.exports = webpackMerge(commonConfig, devConfig);
