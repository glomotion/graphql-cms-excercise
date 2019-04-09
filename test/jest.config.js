const path = require('path');

module.exports = {
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
  // snapshotSerializers: [
  //   'enzyme-to-json/serializer',
  // ],
  moduleNameMapper: {
    'client(.*)$': '<rootDir>/client/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
