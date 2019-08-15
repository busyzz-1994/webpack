const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: path.resolve('./src/index.js'),
  output: {
    filename: '[name]_[hash:5].js',
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
                useBuiltIns: 'usage',
              },
            ],
            'stage-0',
            'react',
          ],
        },
      },
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
      template: path.resolve('./src/index.html'),
    }),
  ],
};
