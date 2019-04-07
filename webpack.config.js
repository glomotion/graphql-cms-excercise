const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const ROOT = path.resolve(__dirname);

const styleLoader = () => ({
  loader: 'style-loader',
});

const cssLoader = ({ cssModules, useLocals } = {}) => ({
  loader: useLocals ? 'css-loader/locals' : 'css-loader',
  options: {
    modules: cssModules,
    localIdentName: '[local]__[path][name]__[hash:base64:5]',
  },
});

const postCssLoader = () => ({
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    plugins: [
      autoprefixer({
        browsers: ['last 2 versions'],
      }),
    ],
  },
});

const sassLoader = () => ({
  loader: 'sass-loader',
  options: {
    outputStyle: 'expanded',
    sourceMap: true,
    MapContents: true,
  }
});

const sassModulesLoaders = ({ useLocals } = {}) => [
  styleLoader(),
  cssLoader({ cssModules: true, useLocals }),
  postCssLoader(),
  sassLoader(),
];

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
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
    extensions: ['.js', '.es6', '.jsx'],
    modules: ['node_modules'],
    descriptionFiles: ['package.json'],
    alias: {
      '@client': `${ROOT}/client`,
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./client/index.base.html",
      filename: "./index.html"
    })
  ],
};
