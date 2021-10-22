const fs = require('fs');

// Copying the file to a the same name
fs.copyFile('package.json', 'build/package.json', (err) => {
  if (err) {
    console.log('Error Found:', err);
  } else {
    console.log('Copied package.json');
  }
});
