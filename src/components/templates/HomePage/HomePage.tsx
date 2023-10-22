import React from "react";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import "./HomePage.css";
import { motion } from "framer-motion";

function NoiseEffect() {
  return (
    <motion.div
      className="noise"
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.2 }}
    ></motion.div>
  );
}


const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

function HomePage() {
  return (
    <>
      <NoiseEffect />
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
      {/* Add more sections below */}
      <Footer />
      </motion.div>
    </>
  );
}

export default HomePage;
