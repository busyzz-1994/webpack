const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: path.resolve('./src/index.js'),
  output: {
    filename: 'js/[name]_[hash:5].js',
    //路径以package.json为基准
    path: path.resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              'env',
              {
                //按需引入babel-polyfill ，文件里面不需要再手动引入，解决babel-polyfill包过大的问题
                useBuiltIns: 'usage',
              },
            ],
            'stage-0',
            'react',
          ],
          // plugins: ['dynamic-import-webpack'],
        },
      },
      //字体用fileloader
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          outputPath: '/fonts',
        },
      },
      //图片用url-loader
      {
        test: /\.(png|jpg|gif|jpge)/,
        loader: 'url-loader',
        options: {
          limit: 8080,
          outputPath: '/images',
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        //对提取的chunk进行分组，避免一个vendors过大的情况
        vendors: {
          //匹配所有node_modules下面引入的模块
          test: /[\\/]node_modules[\\/]/,
          // test: /(loadsh|react-dom)/,
          //优先级
          priority: -10,
          //打包后的文件名字
          filename: 'js/verdors-[chunkHash:5].js',
          //开启模块的复用
          reuseExistingChunk: true,
        },
        //通过动态引入的模块不能再做配置
        // libs: {
        //   test: /echarts/,
        //   priority: 0,
        //   filename: 'libs-[chunkHash:5].js',
        //   reuseExistingChunk: true,
        // },
        // default: {
        //   minChunks: 2,
        //   priority: -20,
        //   reuseExistingChunk: true,
        // },
      },
    },
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
    }),
    //全局引入
    // new webpack.ProvidePlugin({
    //   $:'jquery'
    // })
  ],
};
