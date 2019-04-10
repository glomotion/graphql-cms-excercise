const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const ROOT = path.join(__dirname, '../');

const {
  styleLoader,
  cssLoader,
  sassLoader,
  postCssLoader,
} = require('./styles-loaders');

module.exports = {
  devServer: {
    historyApiFallback: true,
    port: 3000,
  },
  entry: './client/main.js',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [styleLoader(), cssLoader()],
      },
      {
        test: /\.scss$/,
        use: [
          styleLoader(),
          cssLoader(),
          postCssLoader(),
          sassLoader(),
        ],
      },
      {
        test: /\.mscss$/,
        use: [
          styleLoader(),
          'css-modules-flow-types-loader',
          cssLoader({ cssModules: true }),
          postCssLoader(),
          sassLoader(),
        ],
      },
      {
        test: /\.woff(2)?/,
        loader: 'url-loader?name=[name].[ext]&mimetype=application/font-woff',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
    descriptionFiles: ['package.json'],
    alias: {
      client: `${ROOT}/client`,
      test: `${ROOT}/test`,
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './client/index.base.html',
      filename: './index.html',
    }),
  ],
};
