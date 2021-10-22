const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

console.log(`Publishing v${packageJson.version} to npm and updating github master`);
console.log(`----`);
console.log(`// Deleting original build folder (if it exists)`);

fs.access('./build', function (error) {
  if (!error) {
    fs.rmdirSync('./build', { recursive: true });
  }
});
