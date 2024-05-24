import React from "react";
import "./Footer.css"; // Import the CSS for styling
import Contact from "../../molecules/Contact/Contact";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="c-footer">
      <div className="mx-8 md:mx-0 c-container">
        <Contact />
        <h1 className="hidden md:block relative text-right imperfect-absolute">
          <Link to="/"><span>Imperfect and Company</span></Link>
        </h1>
        <div className="social-icons mt-6 sm:mt-2 md:mt-0">
          <a href="https://linkedin.com/company/imperfectandcompany" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className={`fab fa-linkedin-in`}/></a>
          <a href="https://github.com/imperfectandcompany" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i className={`fab fa-github`}/></a>
          <a href="https://discord.com/invite/yb524Ax" aria-label="Discord" target="_blank" rel="noopener noreferrer"><i className={`fab fa-discord`}/></a>
          <a href="https://outlook.office365.com/book/OfficeHours@imperfectandcompany.com/" aria-label="Calendar" target="_blank" rel="noopener noreferrer"><i className={`fas fa-calendar-alt`}/></a>
        </div>
      </div>
      <h1 className="block md:hidden text-right mr-8 mt-10 imperfect-absolute">
        <Link to="/">Imperfect and Company</Link>
      </h1>
    </footer>
  );
}


export default Footer;
