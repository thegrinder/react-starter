const path = require('path');
const PATHS = require('../paths');

module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  extends: 'airbnb',
  plugins: [
    'react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [
          path.join(PATHS.app),
        ],
      },
    },
  },
  rules: {
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'react/forbid-prop-types': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/config/**/*.js'],
      },
    ],
    'object-curly-newline': [
      'error',
      {
        ImportDeclaration: {
          multiline: true,
          minProperties: 4,
        },
      },
    ],
    'jsx-a11y/label-has-for': 'off',
  },
};
