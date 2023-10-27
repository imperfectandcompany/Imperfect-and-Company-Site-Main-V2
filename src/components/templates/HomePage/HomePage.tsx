import React from "react";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import "./HomePage.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

function HomePage() {
  return (
    <>
      <motion.div
      className="main"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    > 
    <Header />
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="container">
        <h1>Continually Crafting<span><br />User-Centric</span><span><br />Ethical Digital Solutions</span></h1>
          <p>To Foster Authentic, User-Driven Connectivity</p>
        </div>
        </motion.section>
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
      <p className="subtitle">Drop your<br />
email here</p>
      <a href="mailto:hello@imperfectandcompany.com" className="c-btn">
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path fill="#231F20" fill-rule="nonzero" d="M15.826 11H0V9h15.826L11.24 3.65l1.518-1.3L19.317 10l-6.558 7.65-1.518-1.3z"></path></svg>
        <span className="strong">hello</span>
        <span>@imperfectandcompany.com</span>
      </a>
    </div>
  </div>
  
               
      {/* Add more sections below */}
      <Footer />
      </motion.div>
    </>
  );
}

export default HomePage;
