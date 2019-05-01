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
  plugins: ['react', 'prettier'],
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
    'consistent-return': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-wrap-multilines': 'off',
    'jsx-a11y/label-has-for': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/config/**/*.js'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
};
