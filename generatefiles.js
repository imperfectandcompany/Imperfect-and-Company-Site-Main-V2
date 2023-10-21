const fs = require('fs');
const path = require('path');

// Define the directory structure
const structure = [
  'src/components/atoms/Button',
  'src/components/atoms/Input',
  'src/components/atoms/Icon',
  'src/components/molecules/SearchBar',
  'src/components/molecules/Navigation',
  'src/components/organisms/Header',
  'src/components/organisms/Footer',
  'src/components/templates/HomePage',
  'src/components/templates/ContactPage',
  'src/components/pages/TeamPage',
  'src/components/pages/LegalPage',
];

// Create directories
structure.forEach((dir) => {
  const dirPath = path.join(__dirname, dir);
  fs.mkdirSync(dirPath, { recursive: true });
  console.log(`Created directory: ${dirPath}`);
});

// Create files
const fileStructure = [
  { path: 'src/components/atoms/Button/Button.tsx', content: 'import React from "react";\n\nfunction Button() {\n  return <button>Button</button>;\n}\n\nexport default Button;' },
  { path: 'src/components/atoms/Button/Button.css', content: '.button { /* Button styles */ }' },
  { path: 'src/components/atoms/Input/Input.tsx', content: 'import React from "react";\n\nfunction Input() {\n  return <input type="text" />;\n}\n\nexport default Input;' },
  { path: 'src/components/atoms/Input/Input.css', content: '.input { /* Input styles */ }' },
  { path: 'src/components/atoms/Icon/Icon.tsx', content: 'import React from "react";\n\nfunction Icon() {\n  return <i className="icon"></i>;\n}\n\nexport default Icon;' },
  { path: 'src/components/atoms/Icon/Icon.css', content: '.icon { /* Icon styles */ }' },
];

// Create files and write content
fileStructure.forEach((file) => {
  const filePath = path.join(__dirname, file.path);
  fs.writeFileSync(filePath, file.content);
  console.log(`Created file: ${filePath}`);
});

console.log('File and directory generation completed.');
