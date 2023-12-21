import React, { useState } from "react";
import "./Contact.css"; // Import your Contact-specific CSS file
import { motion } from "framer-motion";
import Header from "components/organisms/Header/Header";
import Footer from "components/organisms/Footer/Footer";
import Input from "components/atoms/Input";
import CTAButton from "components/molecules/CtaButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.div
      className="main"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="contact bxdehite flex">
          <div className="container content-contact">
            <h1>Contact Us</h1>
            <form>
              <Input as="input" type="text" placeholder="Your Name" />
              <Input as="input" type="email" placeholder="Your Email" />
              <Input as="textarea" placeholder="Your Message" />
              <Input as="checkbox" name="agree" label="I agree to the terms of service" />
              <CTAButton link={"/home"} >Submit</CTAButton>
            </form>
          </div>
        </motion.div>
      </section>
      <Footer />
    </motion.div>
  );
}

export default Contact;