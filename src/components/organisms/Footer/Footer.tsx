import React from "react";
import "./Footer.css"; // Import the CSS for styling

function Footer() {
  return (
    <footer className="c-footer">
      <div className="container content-footer">
        <div className="c-footer__contact c-footer__contact--undefined">

          <div className="c-contact">
            <span className="c-contact__title"><a href="#">Imperfect Gamers</a></span>
            <a href="#">Content for Imperfect Gamers</a>
          </div>
          <div className="c-contact">
            <span className="c-contact__title"><a href="#">Postogon</a></span>
            <a href="#">Content for Postogon</a>
          </div>
          <div className="c-contact">
            <span className="c-contact__title"><a href="#">Contact us</a></span>
            <a href="mailto:contact@example.com">contact@example.com</a>
          </div>
        </div>
        <h1 className="imperfect-absolute">Imperfect and Company</h1>
      </div>
    </footer>
  );
}

export default Footer;
