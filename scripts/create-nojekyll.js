const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');
const nojekyllPath = path.join(outDir, '.nojekyll');

// Ensure out directory exists
if (!fs.existsSync(outDir)) {
  console.error('Error: out directory does not exist. Run npm run build first.');
  process.exit(1);
}

// Create .nojekyll file
fs.writeFileSync(nojekyllPath, '');
console.log('.nojekyll file created successfully in out directory');
