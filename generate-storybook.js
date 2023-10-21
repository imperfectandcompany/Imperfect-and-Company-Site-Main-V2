const fs = require('fs');
const path = require('path');

// Define the base directory where your atomic design components are located
const componentsBaseDir = 'src/components'; // Update this to match your project structure

// Template for generating stories
const storyTemplate = (componentName, componentPath) => `
  import React from 'react';
  import { storiesOf } from '@storybook/react';
  import ${componentName} from '${componentPath}';

  storiesOf('${componentName}', module).add('Default', () => (
    <${componentName} />
  ));
`;

// Function to generate stories for a component
function generateComponentStories(componentPath) {
  const componentName = path.basename(componentPath, '.tsx'); // Remove the .tsx extension
  const storiesDir = 'src/stories'; // Update this to match your project structure

  // Create the stories directory if it doesn't exist
  if (!fs.existsSync(storiesDir)) {
    fs.mkdirSync(storiesDir, { recursive: true });
  }

  const storiesFilePath = path.join(storiesDir, `${componentName}.stories.js`);

  // Check if the stories file already exists
  if (fs.existsSync(storiesFilePath)) {
    console.log(`Stories already exist for ${componentName}. Skipping.`);
    return;
  }

  // Generate the stories content using the template
  const storiesContent = storyTemplate(componentName, `../${componentsBaseDir}/${componentPath}`); // Update the import path

  // Write the stories file
  fs.writeFileSync(storiesFilePath, storiesContent);

  console.log(`Stories generated for ${componentName}.`);
}

// Function to recursively generate stories for components
function generateStoriesRecursively(baseDir) {
  const items = fs.readdirSync(baseDir);

  items.forEach((item) => {
    const itemPath = path.join(baseDir, item);
    const isDirectory = fs.statSync(itemPath).isDirectory();

    if (isDirectory) {
      generateStoriesRecursively(itemPath);
    } else {
      const fileExtension = path.extname(item);
      if (fileExtension === '.tsx' || fileExtension === '.js' || fileExtension === '.jsx') {
        const componentPath = path.relative(componentsBaseDir, itemPath);
        generateComponentStories(componentPath);
      }
    }
  });
}

// Start generating stories for all components
generateStoriesRecursively(componentsBaseDir);
