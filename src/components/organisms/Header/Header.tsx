import React, { useState } from "react";
import "./Header.css"; // Import the CSS for styling
import LogoWithText from "../../molecules/LogoWithText/LogoWithText";
import Navigation from "../../molecules/Navigation/Navigation";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="container content-header">
          <LogoWithText
            alt="Company Logo"
            companyName="Imperfect & Co."
          />
        <Navigation isOpen={isMenuOpen} />
        <div className="burger" id="burger" onClick={toggleMenu}>
          <span id="bline1" className="bline"></span>
          <span id="bline2" className="bline"></span>
        </div>
      </div>
    </header>
  );
}

export default Header;