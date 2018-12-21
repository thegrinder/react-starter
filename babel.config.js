module.exports = (api) => {
  api.cache(true);
  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
  ];
  const plugins = [
    'react-hot-loader/babel',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-runtime',
  ];
  return {
    presets,
    plugins,
  };
};
