import React from "react";
import "./Navigation.css"; // Import the CSS for styling
import Link from "../../atoms/Link/Link"; // Import the Link component

interface NavigationProps {
    isOpen: boolean;
}

function Navigation({ isOpen }: NavigationProps) {
    return (
        <div className="navbar-links">
            <ul className={`${isOpen ? 'open' : ''}`}>
                <li><Link to="/" text="Home" /></li>
                <li><Link to="/about" text="About" /></li>
                <li><Link to="/services" text="Services" /></li>
                <li><Link to="/contact" text="Contact" /></li>
            </ul>
        </div>
    );
}


export default Navigation;
