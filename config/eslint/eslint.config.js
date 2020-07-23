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
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/config/**/*.js', '**/app/test-utils/**/*.js'],
      },
    ],
  },
};
