const fs = require('fs');
const path = require('path');

// Define the base directory where your atomic design components are located
const componentsBaseDir = 'src/components';

// Function to recursively list component paths
function listComponentPaths(baseDir, level = 0) {
  const items = fs.readdirSync(baseDir);
  const componentPaths = [];

  items.forEach((item) => {
    const itemPath = path.join(baseDir, item);
    const isDirectory = fs.statSync(itemPath).isDirectory();

    if (isDirectory) {
      if (level === 0) {
        // Skip the top-level directory
        componentPaths.push(...listComponentPaths(itemPath, level + 1));
      } else {
        componentPaths.push(itemPath);
        componentPaths.push(...listComponentPaths(itemPath, level + 1));
      }
    }
  });

  return componentPaths;
}

// Get the list of component paths
const componentPaths = listComponentPaths(componentsBaseDir);

// Output the component paths
console.log('Component Paths:');
componentPaths.forEach((componentPath) => {
  console.log(componentPath);
});
