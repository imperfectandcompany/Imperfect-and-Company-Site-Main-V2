import React, { useState } from "react";
import "./Contact.css"; // Import your Contact-specific CSS file
import { motion } from "framer-motion";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Implement the logic to send the form data (formData) to your email or backend here
    // Display a confirmation message to the user
  };

  return (
    <motion.div
      className="main"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Header />
      <section className="hero">
        <div className="contact-form-container">
          <div className="contact-form-content">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="contact-info">
            <p>123 Main Street, City</p>
            <p>Email: contact@yourcompany.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
      </section>
      <Footer />
    </motion.div>
  );
}

export default Contact;
