const tailwindcss = require('tailwindcss');
const prefixer = require('postcss-prefix-selector');

const PATHS = require('../paths');

module.exports = ({ options: { mode } }) => ({
  plugins: [
    tailwindcss({
      purge: {
        enabled: mode === 'production',
        content: [`${PATHS.app}/**/*.js`],
      },
    }),
    prefixer({
      prefix: 'html',
      transform: (prefix, selector, prefixedSelector) =>
        selector.includes('html') ? selector : prefixedSelector,
    }),
  ],
});
