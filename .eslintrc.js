module.exports = {
  plugins: ['react'],
  extends: ['airbnb-base', 'plugin:react/recommended'],
  ecmaFeatures: {
    jsx: true,
  },
  env: {
    es6: true,
  },
  settings: {
    "import/resolver": {
      "webpack": {
        "config": "./webpack/webpack.config.client.js",
      },
    },
  },
};
