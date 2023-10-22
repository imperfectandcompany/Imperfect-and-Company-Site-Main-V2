import React from "react";
import "./Navigation.css"; // Import the CSS for styling
import Link from "../../atoms/Link/Link"; // Import the Link component
import { motion } from "framer-motion";

interface NavigationProps {
    isOpen: boolean;
}

function Navigation({ isOpen }: NavigationProps) {
    return (
        <motion.div
            className={`navbar-links ${isOpen ? "open" : ""}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <ul className="desktop-nav">
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                    <Link to="/" text="Home" />
                </motion.li>

                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                    <Link to="/about" text="About" />
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                    <Link to="/services" text="Services" /></motion.li>
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                    <Link to="/contact" text="Contact" />
                </motion.li>
            </ul>
        </motion.div>
    );
}


export default Navigation;
