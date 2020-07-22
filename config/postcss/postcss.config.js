const tailwindcss = require('tailwindcss');
const prefixer = require('postcss-prefix-selector');

module.exports = {
  plugins: [
    tailwindcss(),
    prefixer({
      prefix: 'html',
      transform: (prefix, selector, prefixedSelector) =>
        selector.includes('html') ? selector : prefixedSelector,
    }),
  ],
};
