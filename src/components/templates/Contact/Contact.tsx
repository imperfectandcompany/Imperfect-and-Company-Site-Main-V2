import React from "react";
import "./Contact.css"; // Import your Contact-specific CSS file
import { motion } from "framer-motion";
import Header from "components/organisms/Header/Header";
import Footer from "components/organisms/Footer/Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};
function Contact() {

  return (
    <motion.div
      className="main"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Header isScrolled={false} />
      <section className="hero">


      <div className="section" data-anchor="contact">
      <div className="content wow fadeInDown" data-wow-delay="0.2s">
        <h1>CONTACT ME</h1>
        <p>Whether you're interested in working with me or just want to say hello, I'd love to hear from you!</p>
        <br/>
        <div className="contact-form">

          <div id="form-messages"></div>
          <form id="ajax-contact" className="outline-none" method="post" role="form" action="contact.php" data-toggle="validator">
            <div className="form-group has-feedback wow fadeInLeft" data-wow-delay="0.6s">
              <input type="text" className="form-control" id="name" name="name" placeholder="NAME" data-error="Field can't be blank!" required/>
              <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
              <div className="help-block with-errors"></div>
            </div>

            <div className="form-group has-feedback wow fadeInRight" data-wow-delay="0.8s">
              <input type="email" className="form-control" id="email" name="email" placeholder="EMAIL" data-error="Field can't be blank!" required/>
              <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
              <div className="help-block with-errors"></div>
            </div>

            <div className="form-group has-feedback wow fadeInLeft" data-wow-delay="1s">
              <textarea data-minlength="10" className="form-control" id="message" name="message" placeholder="MESSAGE" data-error="Minimum of 10 characters" required></textarea>
              <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
              <div className="help-block with-errors"></div>
            </div>

            <div className="hidden">
              <input type="text" className="form-control" id="human" name="human" placeholder=""/>
            </div>
            <div className="wow fadeInUp" data-wow-delay="1s">
              <button type="submit" id="submit" name="submit" className="btn btn-lg">SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </div>
    </div>



      </section>
      <Footer />
    </motion.div>
  );
}

export default Contact;
