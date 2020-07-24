module.exports = {
  transform: {
    '^.+\\.js$': './transform.js',
  },
  setupFilesAfterEnv: ['./setupTests'],
  moduleDirectories: ['node_modules', 'app'],
};
