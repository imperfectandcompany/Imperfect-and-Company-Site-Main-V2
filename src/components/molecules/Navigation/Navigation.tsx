import React from "react";
import "./Navigation.css"; // Import the CSS for styling
import Link from "../../atoms/Link/Link"; // Import the Link component
import { motion } from "framer-motion";

interface NavigationProps {
    isOpen: boolean;
    toggleMenu: Function;
}

function Navigation({ isOpen, toggleMenu }: NavigationProps) {
    return (
        <motion.div
            className={`nav-container ${isOpen ? "active" : ""}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <nav>
            <ul className="mobile-nav">
                <li className="flex items-center justify-between w-full">
                <div className="items-center text-white flex justify-center animate__animated animate__backInRight">
                       <p>Imperfect and Company</p>
                    </div>                    
                    <div className="menu-icon-container animate__animated animate__slideInDown animate__slow" onClick={() => toggleMenu()} >
                        <div className="menu-icon">
                            <span className="line-1"></span>
                            <span className="line-2"></span>
                        </div>
                    </div>
                </li>
            </ul>             
                <ul className="desktop-nav">
                    <motion.li whileTap={{ scale: 0.9 }} >                     
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                        <Link to="/" text="Home" />
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                        <Link to="/about" text="About" />
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                        <Link to="/services" text="Services" />
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                        <Link to="/contact" text="Contact" />
                    </motion.li>
                </ul>
            </nav>
        </motion.div>
    );
}



export default Navigation;
