const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  mode: 'development',
  //dev
  devtool: 'cheap-module-eval-source-map',
  //pro
  // devtool:'cheap-module-source-map',
  output: {
    filename: '[name]_[hash:5].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('postcss-import')(),
                require('autoprefixer')('last 100 versions'),
              ],
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          outputPath: '/fonts',
        },
      },
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
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    host: '0.0.0.0',
    port: 8888,
    open: true,
    hot: true,
  },
};
