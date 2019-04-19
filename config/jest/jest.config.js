const path = require('path');

const PATHS = require('../paths');

module.exports = {
  rootDir: PATHS.app,
  transform: {
    '^.+\\.js$': path.join(__dirname, 'transform'),
  },
  setupFilesAfterEnv: [
    'react-testing-library/cleanup-after-each',
    path.join(__dirname, 'setupTests'),
  ],
};
