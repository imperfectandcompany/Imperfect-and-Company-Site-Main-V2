import React, { useState } from "react";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import "./AboutUs.css"; // Import your AboutUs-specific CSS file


function AboutUs() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <div>
      <Header isScrolled={false} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <section className="hero">
          <div className="container">
            <h1>About Imperfect and Company</h1>
            <p>
              Imperfect and Company is a visionary force in the digital world. We embarked on our journey as creators back in 2010 when we were just kids with a passion for innovation. Since then, we have been on a relentless quest to shape the digital landscape.
            </p>
          </div>
        </section>
  
        <section className="founders">
          <div className="container">
            <h2>Meet the Minds Behind Our Vision</h2>
            <p>
              Imperfect and Company was founded by Daiyaan Ijaz, Jhan Araja, and Sterling Walker. As the architects of our grand vision, we are committed to pushing the boundaries of digital innovation.
            </p>
          </div>
        </section>

        <section className="about">
          <div className="container about-content">
            <h2>Our Mission</h2>
            <p>
              At Imperfect and Company, we are pioneers of user-centric digital solutions. Our mission is to empower individuals and communities in the digital realm through our diverse product suite, with a primary focus on our flagship project, Postogon.
            </p>
          </div>
        </section>
        
        <Footer />
      </div>
    );
}

export default AboutUs;
