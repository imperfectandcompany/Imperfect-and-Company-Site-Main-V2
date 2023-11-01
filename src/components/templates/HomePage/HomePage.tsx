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


  const Values = () => {
    return (
      <section className="values-section">
        <div className="values-header">
          <h1>Values</h1>
        </div>
  
        <div className="values-content">
          <h2>What matters to us</h2>
  
          <div className="values-cards">
            <ValueCard
              icon={<PeopleIcon />}
              title="People"
              text="Each person is individual, but not a tool for achieving profit. Respect and gratitude are the keys to success." 
            />
  
            <ValueCard
              icon={<AuthenticityIcon />}
              title="Sincerity"
              text="We are sincere in our interactions and communicate openly, honestly and respectfully."
            />
  
            <ValueCard
              icon={<QualityIcon />}  
              title="Quality"
              text="Quality is a pledge of progress. We create each of our projects as if we were making them for ourselves."
            />
          </div>
  
          <LinkCard 
            title="Our principles"
            icon={<ArrowIcon />}
            link="./about#principles"
          />
        </div>
      </section>
    );
  }
  
  // Value card component
  type ValueCardProps = {
    icon: JSX.Element;
    title: string;
    text: string;
  }

  const ValueCard = ({icon, title, text}: ValueCardProps) => {
    return (
      <div className="value-card">
        <div className="value-card-icon">
          {icon}  
        </div>
        <div className="value-card-text">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    );
  }

  type LinkCardProps = {
    title: string;
    icon: JSX.Element;
    link: string;
  }

  const LinkCard = ({title, icon, link}: LinkCardProps) => {
    return (
      <a href={link} className="link-card">
        <h5>{title}</h5>
        <div className="link-card-icon">
          {icon}
        </div>
      </a>
    );
  }

  // Icon components
  const PeopleIcon = () => {
    return (
      <svg>...</svg> 
    );
  }
  
  const AuthenticityIcon = () => {
    return (
      <svg>...</svg>
    );
  }
  
  const QualityIcon = () => {
    return (
      <svg>...</svg> 
    );
  }
  
  const ArrowIcon = () => {
    return (
      <svg>...</svg>
    ); 
  }


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


<div className={` ${isScrolled ? isSticky ? "sticky" : "sticky" : ""}`}>

<Header isScrolled={isScrolled} />

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




        {Values()}
        
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
