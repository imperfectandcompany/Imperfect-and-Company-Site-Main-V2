import React from "react";
import "./Navigation.css"; // Import the CSS for styling
import Link from "../../atoms/Link/Link"; // Import the Link component
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

interface NavigationProps {
    isOpen: boolean;
    isScrolled?: boolean;
    isMenuOpen: boolean;
    toggleMenu: Function;
}

function Navigation({ isOpen, isScrolled, isMenuOpen, toggleMenu }: NavigationProps) {

    const location = useLocation();
    const currentPage = location.pathname;
            
    return (
        <motion.div
            className={`nav-container  ${isOpen ? isScrolled !== undefined && isScrolled && isMenuOpen ? "active": "active":""}`}
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
                    <motion.li className="items-center hidden text-white select-none cursor-pointer justify-center animate__animated animate__backInRight md:block" whileTap={{ scale: 0.9 }} >
                        <a href="/">Imperfect and Company</a>
                    </motion.li>
                    <motion.li whileHover={{ scale: 0.99 }} whileTap={{ scale: 1.0 }}
                        className={`${currentPage === "/" ? "active" : ""
                            }`}
                    >
                        <Link to="/" text="Home" />
                    </motion.li>
                    <motion.li whileHover={{ scale: 0.99 }} whileTap={{ scale: 1.0 }}
                        className={`${currentPage === "/about" ? "active" : ""
                            }`}
                    >
                        <Link to="/about" text="About" />
                    </motion.li>
                    <motion.li whileHover={{ scale: 0.99 }} whileTap={{ scale: 1.0 }}
                        className={`${currentPage === "/contact" ? "active" : ""
                            }`}
                    >
                        <Link to="/contact" text="Contact" />
                    </motion.li>
                </ul>
            </nav>
        </motion.div>
    );
}



export default Navigation;
