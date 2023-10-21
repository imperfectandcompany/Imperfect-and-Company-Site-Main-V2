import React from "react";
import "./Header.css"; // Import the CSS for styling
import LogoWithText from "../../molecules/LogoWithText/LogoWithText";
import Navigation from "../../molecules/Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <LogoWithText src="https://imperfectdesignsystem.com/assets/img/imperfectandcompany/imperfectandcompany_lightning.png" alt="Company Logo" companyName="Imperfect and Company" />
        <Navigation />
      </nav>
    </header>
  );
}

export default Header;