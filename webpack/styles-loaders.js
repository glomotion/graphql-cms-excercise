const autoprefixer = require('autoprefixer');

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

exports.styleLoader = styleLoader;
exports.cssLoader = cssLoader;
exports.postCssLoader = postCssLoader;
exports.sassLoader = sassLoader;
exports.sassModulesLoaders = sassModulesLoaders;
