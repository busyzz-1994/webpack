const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: [
          //提取css
          MiniCssExtractPlugin.loader,
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
  plugins: [
    //提取css文件 只能在prod环境下使用 因为不兼容HMR
    new MiniCssExtractPlugin({
      filename: 'css/[name]_[contentHash:5].css',
    }),
    //将提取出来的css模块压缩  默认提取出来的css文件是没有经过压缩的
    new OptimizeCssAssetsWebpackPlugin(),
  ],
};
module.exports = webpackMerge(commonConfig, prodConfig);
