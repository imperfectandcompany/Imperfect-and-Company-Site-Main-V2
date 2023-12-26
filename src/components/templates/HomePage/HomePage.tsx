import React, { useState } from "react";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import styles from './HomePage.module.css';
import { motion } from "framer-motion";
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
          <React.Suspense fallback={ <div className="container content-contact">
              <h1 className="text-2xl font-bold text-white mb-4">Loading</h1>
              </div>}>
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
            </div>
          </motion.section>
          </React.Suspense>
          <Footer />
        </motion.main>
      </div >

    </>
  );
}

export default HomePage;
