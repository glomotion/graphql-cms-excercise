const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const ROOT = path.join(__dirname, '../');

const { sassModulesLoaders, styleLoader, cssLoader } = require('./styles-loaders');

module.exports = {
  devServer: { historyApiFallback: true },
  entry: './client/index.js',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.module\.(scss|sass)$/,
        use: [ ...sassModulesLoaders() ],
      },
      {
        test: /\.css$/,
        use: [ styleLoader(), cssLoader() ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
    descriptionFiles: ['package.json'],
    alias: {
      'client': `${ROOT}/client`,
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./client/index.base.html",
      filename: "./index.html"
    })
  ],
};
