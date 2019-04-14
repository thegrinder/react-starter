const tailwindcss = require('tailwindcss');
const prefixer = require('postcss-prefix-selector');

const postCssPlugins = [
  tailwindcss('./app/theme/tailwind.js'),
  prefixer({
    prefix: 'html',
    transform: (prefix, selector, prefixedSelector) => (selector.includes('html')
      ? selector
      : prefixedSelector
    ),
  }),
];

module.exports = postCssPlugins;
