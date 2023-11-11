
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Postogon.css"; // Import your Contact-specific CSS file
import Header from "components/organisms/Header/Header";
import Footer from "components/organisms/Footer/Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};


function Postogon() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Reference to the hero element
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const scale = (100 - scrollY / 100) / 100;
        heroRef.current.style.transform = `translate3d(0, ${scrollY / 100}%, 0) scale(${scale})`;
      }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount


  return (
    <>
    <motion.div
      variants={containerVariants} initial="hidden" animate="visible" exit="hidden"
    >
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <motion.section
            className="postogon-hero bg-red-500"
            ref={heroRef}
            initial={{ opacity: 1, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
          >      
        <h1>postogon</h1>
        <div className="down">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
        </div>
      </motion.section>
      <motion.section
            className="content"
            initial={{ opacity: 1, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
          >           
          <div>
            <img src="https://postogon.com/clunk/assets/img/index-guy.png" className=" select-none	" />
          </div>

          <div className="footer">
          <Footer />
          </div>          
      </motion.section>

    </motion.div>
    </>
  );
}

export default Postogon;