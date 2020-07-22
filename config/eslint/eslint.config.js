const path = require('path');
const PATHS = require('../paths');

module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [path.join(PATHS.app)],
      },
    },
  },
  rules: {
    'no-underscore-dangle': 'off',
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/config/**/*.js'],
      },
    ],
  },
};
