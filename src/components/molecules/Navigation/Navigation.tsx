import React from "react";
import NavLink from "../../atoms/NavLink/NavLink";

function Navigation() {
  return (
    <ul className="navbar-links">
      <NavLink to="/" text="Home" />
      <NavLink to="/about" text="About" />
      <NavLink to="/services" text="Services" />
      <NavLink to="/contact" text="Contact" />
    </ul>
  );
}

export default Navigation;
