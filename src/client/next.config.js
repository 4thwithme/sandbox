const path = require('path');

module.exports = {
  distDir: '.next',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
