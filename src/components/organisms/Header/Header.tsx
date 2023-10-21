import React from "react";
import "./Header.css"; // Import the CSS for styling
import Link from "../../atoms/Link/Link"; // Import the Link component

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/path/to/your/logo.png" alt="Company Logo" />
          <p>Imperfect and Company</p>
        </div>
        <ul className="navbar-links">
          <li><Link to="/" text="Home" /></li>
          <li><Link to="/about" text="About" /></li>
          <li><Link to="/services" text="Services" /></li>
          <li><Link to="/contact" text="Contact" /></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
