import React, { Suspense } from "react";
import "./NavigationDesktop.css"; // Import the CSS for styling
import "./NavigationMobile.css"; // Import the CSS for styling

import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import useNavigationData from "../../../components/hooks/useNavigationData";
import MobileMenuContact from "../MobileMenuContact/MobileMenuContact";

interface NavigationProps {
    isOpen: boolean;
    isScrolled?: boolean;
    isMenuOpen: boolean;
    toggleMenu: Function;
}

const LogoComponent = React.lazy(() => Promise.resolve({
    default: () => (
        <img src={`https://cdn.postogon.com/assets/img/logo/umbrella.svg`} alt="Imperfect and Company" />
    )
}));

const SkeletonLoader = () => (
    <div className="animate-pulse">
        <div className="h-12 w-12 bg-gray-500 rounded-lg"></div>
    </div>
);


function NavigationDesktop({ isOpen, isScrolled, isMenuOpen, toggleMenu }: NavigationProps) {
    const location = useLocation();
    const currentPage = location.pathname;
    const sections = useNavigationData();

    const renderLink = (link: any) => (
        <motion.li
            key={link.name}
            whileHover={{ scale: 0.99 }}
            whileTap={{ scale: 1.0 }}
            className={`${currentPage === link.path ? "active" : ""}`}
        >
            <Link to={link.path} className="link">
                {link.name}
            </Link>

        </motion.li>
    );


    // Consider a function that renders categories for the desktop version
    const renderDesktopMenu = () => (
        <>
            <div className="flex justify-between items-center">
                <motion.div className="items-center hidden text-white select-none cursor-pointer justify-center animate__animated animate__backInRight md:block" whileTap={{ scale: 0.9 }} >
                    <Link to="/" className='flex space-x-6 ml-6'>
                        <div className="logo">
                            <Suspense fallback={<SkeletonLoader />}>
                                <LogoComponent />
                            </Suspense>
                        </div>
                        <div>
                            Imperfect and Company
                        </div>
                    </Link>
                </motion.div>
                <ul className="items-center hidden md:flex md:space-x-6">
                    {sections.map((section) => (
                        <li key={section.title} className="dropdown">
                            <button className="dropbtn">{section.title}</button>
                            <div className="dropdown-content">
                                {section.links.map(renderLink)}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );

    const renderMobileMenu = () => (
        <>
            <motion.li className="items-center hidden text-white select-none cursor-pointer justify-center animate__animated animate__backInRight md:block" whileTap={{ scale: 0.9 }} >
                <Link to="/" className='flex space-x-6 ml-6'>
                    <div className="logo">
                        <Suspense fallback={<SkeletonLoader />}>
                            <LogoComponent />
                        </Suspense>
                    </div>
                    <div>
                        Imperfect and Company
                    </div>
                </Link>
            </motion.li>
            <motion.li
            whileHover={{ scale: 0.99 }}
            whileTap={{ scale: 1.0 }}
        >
            <MobileMenuContact/>
</motion.li>

        </>
    );

    // Adjust this function for the mobile version as needed
    const renderMobileCategories = () => (
        <ul className="mobile-nav">
            <li className="flex items-center justify-between w-full">
                <div className="items-center text-white flex justify-center animate__animated animate__backInRight">
                    <p><Link to="/">Imperfect and Company</Link></p>
                </div>
                <div className="menu-icon-container items-center animate__animated animate__slideInDown animate__slow" onClick={() => toggleMenu()} >
                    <div className="menu-icon">
                        <span className="line-1"></span>
                        <span className="line-2"></span>
                    </div>
                </div>
            </li>
        </ul>
        // Similar logic but structured for a full-screen overlay or a sidebar
    );


    return (
        <motion.div
            className={`nav-container ${isOpen ? isScrolled !== undefined && isScrolled && isMenuOpen ? "active" : "active" : ""}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <nav>

                {/* Render mobile or desktop nav based on screen width */}
                <ul className="mobile-nav">
                    {renderMobileCategories()}
                </ul>
                {renderDesktopMenu()}
                <ul className="desktop-nav items-center md:hidden">
                    {renderMobileMenu()}
                </ul>
            </nav>
        </motion.div>
    );
}



export default NavigationDesktop;