const path = require('path');

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.js'],
  rootDir: path.resolve(__dirname, '../'),
  verbose: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  globals: {
    NODE_ENV: 'test',
  },
  moduleFileExtensions: [
    'css',
    'scss',
    'js',
    'json',
    'jsx',
  ],
  modulePathIgnorePatterns: [

  ],
  moduleDirectories: [
    'node_modules',
  ],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    '^client(.*)$': '<rootDir>/client$1',
    '^test(.*)$': '<rootDir>/test$1',
  },
};
