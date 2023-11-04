import React from "react";
import "./Footer.css"; // Import the CSS for styling
import Contact from "../../molecules/Contact/Contact";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="c-footer">
      <div className="mx-8 md:mx-0 c-container">
        <Contact />
        <h1 className="hidden md:block text-right imperfect-absolute"><Link to="/">Imperfect and Company</Link></h1>
      </div>
      <h1 className="block md:hidden text-right mr-8 mt-10  imperfect-absolute"><Link to="/">Imperfect and Company</Link></h1>
    </footer>
  );
}

export default Footer;
