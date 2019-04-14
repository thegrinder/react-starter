const path = require('path');

module.exports = {
  rootDir: path.join(__dirname, '..', '..', 'app'),
  transform: {
    '^.+\\.js$': path.join(__dirname, 'transform'),
  },
  setupFilesAfterEnv: [
    path.join(__dirname, 'setupTests'),
  ],
};
