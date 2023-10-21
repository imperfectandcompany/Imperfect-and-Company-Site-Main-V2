const fs = require('fs');
const path = require('path');

// Define the directory structure
const structure = [
  'src/components/templates/HomePage',
  'src/components/organisms/Header',
  'src/components/organisms/Footer',
];

// Create directories
structure.forEach((dir) => {
  const dirPath = path.join(__dirname, dir);
  fs.mkdirSync(dirPath, { recursive: true });
  console.log(`Created directory: ${dirPath}`);
});

// Create files
const fileStructure = [
  // HomePage component
  {
    path: 'src/components/templates/HomePage/HomePage.tsx',
    content: `import React from "react";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      {/* Homepage content here */}
      <Footer />
    </div>
  );
}

export default HomePage;`,
  },
  // HomePage CSS
  {
    path: 'src/components/templates/HomePage/HomePage.css',
    content: `/* Homepage styles here */`,
  },
  // Header component
  {
    path: 'src/components/organisms/Header/Header.tsx',
    content: `import React from "react";

function Header() {
  return <header>Header</header>;
}

export default Header;`,
  },
  // Header CSS
  {
    path: 'src/components/organisms/Header/Header.css',
    content: `/* Header styles here */`,
  },
  // Footer component
  {
    path: 'src/components/organisms/Footer/Footer.tsx',
    content: `import React from "react";

function Footer() {
  return <footer>Footer</footer>;
}

export default Footer;`,
  },
  // Footer CSS
  {
    path: 'src/components/organisms/Footer/Footer.css',
    content: `/* Footer styles here */`,
  },
];

// Create files and write content
fileStructure.forEach((file) => {
  const filePath = path.join(__dirname, file.path);
  fs.writeFileSync(filePath, file.content);
  console.log(`Created file: ${filePath}`);
});

console.log('File and directory generation completed.');
