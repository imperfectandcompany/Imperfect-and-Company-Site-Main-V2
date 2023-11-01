import React, { useState } from "react";
import "./Header.css"; // Import the CSS for styling
import Navigation from "../../molecules/Navigation/Navigation";

function Header({ isScrolled }: { isScrolled: boolean }): React.JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? "sticky-background" : ""}`}>
      <div className="content-header">
        <Navigation isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
}

export default Header;