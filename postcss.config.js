const tailwindcss = require('tailwindcss');
const prefixer = require('postcss-prefix-selector');

module.exports = ({ options: { mode } }) => ({
  plugins: [
    tailwindcss({
      purge: {
        enabled: mode === 'production',
        content: ['./app/**/*.js'],
      },
    }),
    prefixer({
      prefix: 'html',
      transform: (prefix, selector, prefixedSelector) =>
        selector.includes('html') ? selector : prefixedSelector,
    }),
  ],
});
