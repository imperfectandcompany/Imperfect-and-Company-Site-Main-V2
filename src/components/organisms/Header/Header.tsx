import React, { useState } from "react";
import "./Header.css"; // Import the CSS for styling
import Navigation from "../../molecules/Navigation/Navigation";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="container content-header">
        <Navigation isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
}

export default Header;