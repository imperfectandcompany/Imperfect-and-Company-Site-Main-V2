import React, { useState } from "react";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import styles from './HomePage.module.css';
import { motion } from "framer-motion";
import CTAButton from "components/molecules/CtaButton";
import Input from "components/atoms/Input";

//const iconPath = process.env.PUBLIC_URL + '/icons/';

const containerVariants = {
  hidden: { opacity: 0.1, transition: { duration: 0.5 } },
  visible: { opacity: 1, transition: { duration: 1 } },
};

function HomePage() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const container = `items-center justify-center transition-bg ${styles.dark}`;
  const mainDiv = `${styles.main}`;
  const heroSection = `${styles.hero} `;
  const jumboOverlay = `absolute -inset-[10px] opacity-40 ${styles.jumbo}`;

  return (
    <>
      <div className={container}>
        <div className=" inset-0 overflow-hidden">
          <div className={jumboOverlay}></div>
        </div>
        <motion.main
          className={mainDiv}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <motion.section
            className={heroSection}
            initial={{ opacity: 1, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div>
              <div className="text-white space-y-4">
                <h1 className="">Continually Crafting<span><br />User-Centric</span><span><br />Ethical Digital Solutions</span></h1>
                <p>To Foster Authentic, User-Driven Connectivity</p>
              </div>



              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className="contact bxdehite flex">
                <div className="container content-contact">
                  <p className="ft-h">Sign Up<br /> For our newsletter</p>
                  <p className="subtitle">Drop your
                    email here</p>
                    <CTAButton link="/path" size="small">Small Button</CTAButton>
<CTAButton link="/path" size="large">Large Button</CTAButton>
<CTAButton link="/path" size="fullWidth">Full Width Button</CTAButton>

                    <CTAButton link="/path" size="small">Small Button</CTAButton>
<CTAButton link="/path" size="large">Large Button</CTAButton>
<CTAButton link="/path" size="fullWidth">Full Width Button</CTAButton>
                  <CTAButton size="medium" link="mailto:hello@imperfectandcompany.com">
                    <span className="strong">hello</span>
                    <span>@imperfectandcompany.com</span>
                  </CTAButton>
                  <Input as="input" type="text" placeholder="Enter text here" />
<Input as="textarea" placeholder="Enter text here" />
<Input as="radio" name="option" value="option1" label="Option 1" />
<Input as="radio" name="option" value="option2" label="Option 2" />

<Input 
  radios={[
    { as: 'radio', name: 'option', value: 'option1', label: 'Option 1' }
  ]}
/>

                </div>
              </motion.div>
            </div>
          </motion.section>
          <Footer />
        </motion.main>
      </div >

    </>
  );
}

export default HomePage;
