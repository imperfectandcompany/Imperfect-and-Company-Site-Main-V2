
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Postogon.css"; // Import your Contact-specific CSS file
import Header from "components/organisms/Header/Header";
import Footer from "components/organisms/Footer/Footer";
import rocket from "../../images/rocket.svg";
import phoneFeed from "../../images/phoneFeed.svg";
import unity from "../../images/unity.svg";
import Splash from "./Splash";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const raisingTextVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3, // Adjust as needed
    },
  },
};


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // delay between each child animation
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}


function Postogon() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Reference to the hero element
  const heroRef = useRef<HTMLDivElement>(null);

  const firstSpanRef = useRef<HTMLSpanElement>(null);
  const secondSpanRef = useRef<HTMLSpanElement>(null);
  const pTagRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Update hero element style
      if (heroRef.current) {
        const heroScale = (100 - scrollY / 100) / 100;
        heroRef.current.style.transform = `translate3d(0, ${scrollY / 100}%, 0) scale(${heroScale})`;
      }


      if (firstSpanRef.current) {
        const firstSpanOpacity = Math.max(0, 1 - scrollY / 100);
        firstSpanRef.current.style.opacity = firstSpanOpacity.toString();
      }


      // Update "Postogon" span style with the perfect scaling
      if (secondSpanRef.current) {
        const secondSpanScale = Math.min(2, 1 + scrollY / 500); // Perfect scaling
        secondSpanRef.current.style.transform = `scale(${secondSpanScale})`;

        // Start fading out later like in the second block, but spread it out more
        const fadeStart = 50; // Start fading out just after this scrollY value
        const fadeDistance = 200; // Spread the fading effect over this scroll distance
        const secondSpanOpacity = scrollY < fadeStart ? '1' : Math.max(0, 1 - (scrollY - fadeStart) / fadeDistance).toString();
        secondSpanRef.current.style.opacity = secondSpanOpacity;
      }

      if (pTagRef.current) {
        const pTagOpacity = scrollY > 100 ? Math.min(1, (scrollY - 100) / 100) : 0; // Starts appearing after scrolling 100px
        pTagRef.current.style.opacity = pTagOpacity.toString();
        pTagRef.current.style.display = pTagOpacity > 0 ? 'block' : 'none';
      }

    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);



    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount


  return (
    <>
      <motion.div
        variants={containerVariants} initial="hidden" animate="visible" exit="hidden"
      >
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <motion.section
          className="postogon-hero bg-white "
          ref={heroRef}
          initial={{ opacity: 1, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="hero container text-center mx-auto justify-center items-center">
            <motion.div
              className="raising-text hidden"
              variants={raisingTextVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span layout>Open for raising</motion.span>
            </motion.div>
            <h1>
              <span ref={firstSpanRef}>Coming Soon</span>
              <span ref={secondSpanRef}>Postogon</span>
            </h1>
          </div>
          <div className="down">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
          </div>
        </motion.section>
        <motion.div className="content"
          initial={{ opacity: 1, y: 0 }}
        >
          <div className="p-10">
          <motion.section
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className=""
          >
            <Splash />
          </motion.section>  
<motion.section
className="postogon-card bg-[#f8f5f5] flex justify-center items-center min-h-screen text-[#242e4c]">
<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000" version="1.1">
  <circle cx="500" cy="500" r="400" stroke="black" fill="none"/>
  <circle cx="500" cy="500" r="250" stroke="black" fill="none"/>
  <circle cx="500" cy="500" r="100" stroke="black" fill="none"/>
  <text x="500" y="150" fill="black">Public Eye</text>
  <text x="500" y="350" fill="black">Feed 1, Barrier To Entry</text>
  <text x="500" y="550" fill="black">Feed 2, Contacts Only</text>
  <line x1="500" y1="180" x2="500" y2="300" stroke="black"/>
  <line x1="500" y1="380" x2="500" y2="450" stroke="black"/>
  <line x1="500" y1="580" x2="500" y2="600" stroke="black"/>
</svg>
</motion.section>          

            <motion.div
              className="flex gap-10 flex-wrap-responsive mt-10"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <InfoCard image={rocket} textNumber={1} titleText={"Pilot Markets"} />
              <InfoCard image={phoneFeed} textNumber={2} titleText={"Unique Feeds"} />
              <InfoCard image={unity} textNumber={3} titleText={"Unified Platform"} />
            </motion.div>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

const InfoCard = ({ image, textNumber, titleText }: { image: string, textNumber: number, titleText: string }) => {
  return (
    <motion.div
      variants={item}
      className="rounded-md bg-red-800 flex flex-col items-center h-48 justify-evenly p-5 info-card"
    >
      <div className="bg-white rounded-full p-2 info-card-div">
        <img className="info-card-image" alt={'info-img'}src={image} />
      </div>
      <div className="text-xl font-bold text-white">{textNumber}</div>
      <div className="text-lg text-white">{titleText}</div>
    </motion.div>
  )
}
export default Postogon;