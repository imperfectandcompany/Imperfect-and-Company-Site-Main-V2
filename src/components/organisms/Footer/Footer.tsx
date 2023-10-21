import React from "react";
import "./Footer.css"; // Import the CSS for styling
import Contact from "../../molecules/Contact/Contact";

function Footer() {
  return (
    <footer className="c-footer">
      <div className="container content-footer">
        <Contact />
        <h1 className="imperfect-absolute">Imperfect and Company</h1>
      </div>
    </footer>
  );
}

export default Footer;
