import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import "./NavigationMobile.css"; // Import the CSS for styling
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import useNavigationData from "components/hooks/useNavigationData";


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

function useMeasureHeight(ref: React.RefObject<HTMLElement>) {
    const [height, setHeight] = useState<number>(0);

    useLayoutEffect(() => {
        if (ref.current) {
            setHeight(ref.current.scrollHeight);
        }
    }, [ref]);

    return height;
}



function NavigationMobile({ isOpen, isScrolled, isMenuOpen, toggleMenu }: NavigationProps) {
    const sections = useNavigationData();
    const location = useLocation();
    const currentPage = location.pathname;

    const [openTab, setOpenTab] = useState<string | null>(null);


    useEffect(() => {
        if (endOfContentRef.current) {
            // Scrolls to the ref's current element
            endOfContentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [openTab]);


    const toggleTab = (tabName: string) => {
        if (openTab === tabName) {
            setOpenTab(null);
        } else {
            setOpenTab(tabName);
        }
    };


    const renderLink = (link: any) => (
        <motion.li
            key={link.name}
            whileHover={{ scale: 0.99 }}
            whileTap={{ scale: 1.0 }}
            className={`${currentPage === link.path ? "active" : ""}`}
        >
            <a href={link.path} className="link">

                {link.name}
            </a>

        </motion.li>
    );


    const renderMobileMenu = () => (
        <>
            <motion.li className="items-center hidden text-white select-none cursor-pointer justify-center animate__animated animate__backInRight md:block" whileTap={{ scale: 0.9 }} >
                <a href="/" className='flex space-x-6 ml-6'>
                    <div className="logo">
                        <Suspense fallback={<SkeletonLoader />}>
                            <LogoComponent />
                        </Suspense>
                    </div>
                    <div>
                        Imperfect and Company
                    </div>
                </a>
            </motion.li>
            {sections.map((section) => (
                <>
                    {section.links.map(link => (
                        <>
                            {renderLink(link)}
                        </>
                    ))}
                </>
            ))}
        </>
    );

    const endOfContentRef = useRef<HTMLUListElement>(null);
    const measuredHeight = useMeasureHeight(endOfContentRef);


    return (
        <>


            <motion.div
                className={`nav-container ${isOpen ? isScrolled !== undefined && isScrolled && isMenuOpen ? "active" : "active" : ""}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <nav>
                    <ul className="desktop-nav items-center md:hidden">
                        {renderMobileMenu()}
                    </ul>
                </nav></motion.div>

            <motion.div
                className={`nav-container ${isOpen ? isScrolled !== undefined && isScrolled && isMenuOpen ? "active" : "active" : ""}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <nav>

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
                    <ul className="desktop-nav flex items-center">
                        <motion.li className="items-center hidden text-white select-none cursor-pointer justify-center animate__animated animate__backInRight md:block" whileTap={{ scale: 0.9 }} >
                            <a href="/" className='flex space-x-6 ml-6'>
                                <div className="logo">
                                    <Suspense fallback={<SkeletonLoader />}>
                                        <LogoComponent />
                                    </Suspense>
                                </div>
                                <div>
                                    Imperfect and Company
                                </div>
                            </a>
                        </motion.li>


































                        {sections.map((section: any, index: number) => (<>
                            <div key={section.title}>
                                {/* Mobile view - Collapsible */}
                                <div className="md:hidden">
                                    <button
                                        className={`flex justify-between items-center w-full text-sm font-bold cursor-pointer relative ${index === sections.length - 1 && openTab === section.title ? '' : ''}`}
                                        onClick={() => toggleTab(section.title)}
                                    >
                                        <span>{section.title}</span>
                                        <motion.span
                                            className={`transition-transform transform ${openTab === section.title ? 'rotate-180' : ''}`}
                                            initial={false}
                                            animate={{ rotate: openTab === section.title ? 180 : 0 }}
                                            transition={{ type: "spring", stiffness: 260, damping: 20 }} // Add spring physics for a smoother effect
                                        >
                                            +
                                        </motion.span>
                                    </button>
                                    <AnimatePresence>
                                        {openTab === section.title && (
                                            <motion.ul
                                                className={`list-none ${measuredHeight} mt-2 space-y-1 ${index === sections.length - 1 ? '' : ''}`} // Conditionally apply 'mb-0' for the last item
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto", transition: { duration: 0.5, ease: "easeOut" } }}
                                                exit={{
                                                    opacity: 0,
                                                    height: openTab === section.title ? measuredHeight : 0,
                                                    transition: { duration: 0.3, ease: "easeOut" },
                                                    overflow: "hidden"
                                                }}
                                                ref={endOfContentRef}
                                            >
                                                {section.links.map((link: any) => (
                                                    <motion.li key={link.name} className="block cursor-pointer">
                                                        {/^https?:\/\//.test(link.path) || /^mailto:/.test(link.path) ? (
                                                            <a href={link.path} className="hover:underline w-full inline-block text-black">
                                                                {link.name}
                                                            </a>
                                                        ) : (
                                                            <Link to={link.path} className="hover:underline w-full inline-block text-black">
                                                                {link.name}
                                                            </Link>
                                                        )}
                                                    </motion.li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div></>
                        ))}
































                    </ul>
                </nav>
            </motion.div>
        </>
    );
}



export default NavigationMobile;