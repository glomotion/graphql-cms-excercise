const path = require('path');

module.exports = {
  setupFiles: ['<rootDir>/test/jest.setup.js'],
  rootDir: path.resolve(__dirname, '../'),
  verbose: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  globals: {
    NODE_ENV: 'test',
  },
  moduleFileExtensions: [
    'js', 'jsx', 'css', 'scss',
  ],
  modulePathIgnorePatterns: [

  ],
  moduleDirectories: [
    'node_modules',
    'client',
    'server',
  ],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    'client(.*)$': '<rootDir>/client/$1',
  },
};
