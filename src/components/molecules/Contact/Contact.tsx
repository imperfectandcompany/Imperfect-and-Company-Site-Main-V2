import React from "react";
import Link from "../../atoms/Link/Link";

function Contact() {
  return (
    <div className="c-footer__contact c-footer__contact--undefined">
     <Link to="/about" text="About Us" />
     <Link to="/contact" text="Contact Us" />
      <div className="c-contact">
        <span className="c-contact__title">Explore Our Sections</span>
        <Link to="#imperfectgamers-section" text="ImperfectGamers" />
        <Link to="#postogon-section" text="Postogon" />
      </div>
      <div className="c-contact">
        <span className="c-contact__title">Contact Us</span>
        <Link to="mailto:hello@imperfectandcompany.com" text="hello@imperfectandcompany.com" />
      </div>
    </div>
  );
}

export default Contact;
