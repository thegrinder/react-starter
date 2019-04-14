const path = require('path');

const PATHS = require('../paths');

module.exports = {
  rootDir: PATHS.app,
  transform: {
    '^.+\\.js$': path.join(__dirname, 'transform'),
  },
  setupFilesAfterEnv: [
    path.join(__dirname, 'setupTests'),
  ],
};
