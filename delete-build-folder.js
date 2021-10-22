const fs = require('fs');

fs.access('./build', function (error) {
  if (!error) {
    fs.rmdirSync('./build', { recursive: true });
  }
});
