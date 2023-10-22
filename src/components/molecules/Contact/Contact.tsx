import React from "react";
import Link from "../../atoms/Link/Link";

function Contact() {
  return (
    <div className="c-footer__contact c-footer__contact--undefined">
      <div className="c-contact">
        <span className="c-contact__title"><Link to="#" text="Imperfect Gamers" /></span>
        <Link to="#" text="Content for Imperfect Gamers" />
      </div>
      <div className="c-contact">
        <span className="c-contact__title"><Link to="#" text="Postogon" /></span>
        <Link to="#" text="Content for Postogon" />
      </div>
      <div className="c-contact">
        <span className="c-contact__title"><Link to="#" text="Contact us" /></span>
        <Link to="mailto:hello@imperfectandcompany.com" text="hello@imperfectandcompany.com" />
      </div>
    </div>
  );
}

export default Contact;
