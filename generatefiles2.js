const fs = require('fs');
const path = require('path');

// Define the directory structure
const structure = [
  'src/components/atoms/Link',
];

// Create directories
structure.forEach((dir) => {
  const dirPath = path.join(__dirname, dir);
  fs.mkdirSync(dirPath, { recursive: true });
  console.log(`Created directory: ${dirPath}`);
});

// Create files
const fileStructure = [
  {
    path: 'src/components/atoms/Link/Link.tsx',
    content: `import React from 'react';
import './Link.css'; // Import CSS for link styling

function Link({ to, text }) {
  return (
    <a href={to} className="link">
      {text}
    </a>
  );
}

export default Link;
`,
  },
  {
    path: 'src/components/atoms/Link/Link.css',
    content: `.link {
  /* Your link styling here */
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
}
`,
  },
];

// Create files and write content
fileStructure.forEach((file) => {
  const filePath = path.join(__dirname, file.path);
  fs.writeFileSync(filePath, file.content);
  console.log(`Created file: ${filePath}`);
});

console.log('Anchor link atom generation completed.');
