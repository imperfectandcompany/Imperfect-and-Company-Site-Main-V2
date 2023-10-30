import React, { useEffect, useState } from "react";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import "./HomePage.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

function HomePage() {


  const [isScrolled, setIsScrolled] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Function to add the "scrolled" class when scrolling down
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
          if(window.scrollY > 0){
          setIsSticky(true);
        }
      } else {
        setIsScrolled(false);
        setIsSticky(false);
      }
    }
    

    // Add a scroll event listener to call the handleScroll function
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <div className="items-center justify-center transition-bg dark">
    <div className="absolute inset-0 overflow-hidden">
            <div className="jumbo absolute -inset-[10px] opacity-50"></div>
        </div>
      <motion.div
      className="main"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    > 


<div className={`header ${isScrolled ? isSticky ? "sticky" : "sticky" : ""}`}>

    <Header />

    </div>


      <motion.section
        className="hero "
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="container relative">
        <h1>Continually Crafting<span><br />User-Centric</span><span><br />Ethical Digital Solutions</span></h1>
          <p>To Foster Authentic, User-Driven Connectivity</p>
        </div>
        </motion.section>
          {/**
           Keep main page very simple for now. Only render finished parts.
        <motion.section
        className="about"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="container about-content">
          <h2>About Us</h2>
          <p>
            At Imperfect and Company, we're dedicated to crafting digital solutions that prioritize user needs and ethical practices. Our mission is to foster authentic, user-driven connectivity in the digital world.
          </p>
        </div>
        </motion.section>

  <div className="contact">
    <div className="container content-contact">
      <p className="ft-h">Sign Up<br/> For our newsletter</p>
      <p className="subtitle">Drop your 
email here</p>
      <a href="mailto:hello@imperfectandcompany.com" className="c-btn">
        <span className="strong">hello</span>
        <span>@imperfectandcompany.com</span>
      </a>
    </div>
  </div>*/}
  
      {/* Add more sections below */}
      <Footer />
      </motion.div>
    </div>

    </>
  );
}

export default HomePage;
