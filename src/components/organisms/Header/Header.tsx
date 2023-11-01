import React from "react";
import "./Header.css"; // Import the CSS for styling
import Navigation from "../../molecules/Navigation/Navigation";

function Header({ isScrolled, isMenuOpen, setIsMenuOpen }: { isScrolled: boolean, isMenuOpen: boolean, setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }): React.JSX.Element {

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className={`header ${isScrolled ? isMenuOpen ? "" : "sticky-background" : ""}`}>
      <div className="content-header">
        <Navigation isOpen={isMenuOpen} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
}

export default Header;