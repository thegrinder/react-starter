const path = require('path');

const PATHS = require('../paths');

module.exports = {
  rootDir: PATHS.app,
  transform: {
    '^.+\\.js$': path.join(PATHS.jestConfig, 'transform'),
  },
  setupFilesAfterEnv: [
    path.join(PATHS.jestConfig, 'setupTests'),
  ],
};
