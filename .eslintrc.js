module.exports = {
  plugins: [
    'react',
    'flowtype',
  ],
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
  ],
  ecmaFeatures: {
    jsx: true,
  },
  env: {
    es6: true,
    jest: true,
    browser: true,
  },
  settings: {
    'import/resolver': {
      'webpack': {
        'config': './webpack/webpack.config.client.js',
      },
      flowtype: {
        onlyFilesWithFlowAnnotation: true,
      },
    },
  },
};
