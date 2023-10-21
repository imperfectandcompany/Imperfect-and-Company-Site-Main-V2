import React from "react";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import "./HomePage.css"; // Import the CSS for styling
import Button from "../../atoms/Button/Button";
import Link from "../../atoms/Link/Link"; // Import the Link component
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


function HomePage() {
  return (
    <>
      <NoiseEffect />
    <div className="main">
      <Header />
      <section className="hero">
        <div className="hero-content">
          <h1>Continually Crafting User-Centric and Ethical Digital Solutions</h1>
          <p>To Foster Authentic, User-Driven Connectivity</p>
          <Button text="Learn More" />
          <Link to="/about" text="Learn About Us" />
        </div>
      </section>
      <section className="about">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            At Imperfect and Company, we're dedicated to crafting digital solutions that prioritize user needs and ethical practices. Our mission is to foster authentic, user-driven connectivity in the digital world.
          </p>
        </div>
      </section>
      {/* Add more sections below */}
      <Footer />
    </div>
    </>
  );
}

export default HomePage;
