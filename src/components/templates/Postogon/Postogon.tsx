
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Postogon.css";
import Header from "components/organisms/Header/Header";
import Footer from "components/organisms/Footer/Footer";
import rocket from "../../images/rocket.svg";
import phoneFeed from "../../images/phoneFeed.svg";
import unity from "../../images/unity.svg";
import Splash from "./Splash";
import 'animate.css';



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

const problems = [
  "Social media warped our online behavior.",
  "Authenticity is gone.",
  "Algorithm based predictions.",
  "Profits over ethics.",
  "We cannot escape."
];

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

const listVariants = {
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  },
  hidden: { opacity: 0 }
};

const itemVariants = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: 20, opacity: 0 }
};


function Postogon() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProblems, setShowProblems] = useState(false);


  // Reference to the hero element
  const heroRef = useRef<HTMLDivElement>(null);

  const firstSpanRef = useRef<HTMLSpanElement>(null);
  const secondSpanRef = useRef<HTMLSpanElement>(null);
  const pTagRef = useRef<HTMLParagraphElement>(null);


  const onScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollPercentage = 100 * (scrollTop / (scrollHeight - clientHeight));

    // Use TypeScript's type assertion to ensure the element has a style property
    const containerElement = document.querySelector("#container") as HTMLElement | null;
    if (containerElement) {
      containerElement.style.setProperty('--percentage', `${scrollPercentage}%`);
    }
  };

  useEffect(() => {

    const calculateTriggerPoint = () => {
      const splashSection = document.querySelector('.splash') as HTMLElement;
      return splashSection ? splashSection.offsetHeight + splashSection.offsetTop : 0;
    };


    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPointForProblemsList = calculateTriggerPoint();


      if (window.scrollY > triggerPointForProblemsList) {
        setShowProblems(true);
      } else {
        setShowProblems(false);
      }

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
    window.addEventListener('scroll', onScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', onScroll);
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
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="hidden"
              onScroll={onScroll} id="container" style={{ '--percentage': '5%' } as React.CSSProperties}
            >
              <span className="reveal-text my-64 pb-64">But here's the issue...</span>
            </motion.section>
            {5 + 5 === 4 ? <>    <motion.section
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              variants={listVariants}
              className="problems-list"

              onScroll={onScroll} id="container" style={{ '--percentage': '5%' } as React.CSSProperties}
            >
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`problem-item ${showProblems ? 'visible' : ''}`}
                >
                  {problem}
                </motion.div>
              ))}
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
            </> : <></>}
            <motion.section className="postogon-card text-white hidden md:block items-center md:text-[#242e4c] ">
              <div className="flex">
                <div className="text-container w-1/2 z-10">
                  <div className="text-group public-eye">
                    <h2>Public Eye</h2>
                    <ul>
                      <li>Job Recruiters</li>
                      <li>Potential Risk</li>
                      <li>Fans</li>
                      <li>Stalkers</li>
                    </ul>
                    <div className="underline">
                    </div>
                  </div>
                  <div className="text-group feed-one">
                    <h2>Feed 1, Barrier To Entry</h2>
                    <ul>
                      <li>Outer Circle</li>
                      <li>Younger Cousins</li>
                      <li>Coworkers</li>
                      <li>Friends</li>
                      <li>Fans</li>
                      <li>Neighbours</li>
                    </ul>
                    <div className="underline"></div>
                  </div>
                  <div className="text-group feed-two">
                    <h2>Feed 2, Contacts Only</h2>
                    <ul>
                      <li>Inner Circle</li>
                      <li>Close Friends</li>
                      <li>Older Cousins</li>
                      <li>Family</li>
                    </ul>
                    <div className="underline"></div>
                  </div>
                </div>
                <div className="">
                  <svg className="circle-outer fill-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-30 -30 1084 1084" style={{ width: '550px', height: '550px' }}>
                    <path d="M936.968 636.321c64.162-67.478 0-221.839 0-342.458 0-120.619-41.308-43.439-129.537-136.224-88.228-92.784-77-18.135-168.837-114.715-91.839-96.58-165.229 0-297.973 0-133.145 0-238.619 250.939-238.619 250.939-261.478 0 75.796 291.849-36.494 409.938C-46.783 821.89 184.617 829.06 312.95 964.018c128.332 134.962 270.701 0 435.529 0 165.228 0-36.495-197.799 188.088-197.799 225.383.421-63.767-62.418.401-129.898Zm-210.547 4.218c-113.092 0-11.63 99.532-94.645 99.532s-154.801 67.901-219.369 0c-64.567-67.902-181.27-71.696-124.724-131.162 56.548-59.468-113.092-206.657 18.449-206.657 0 0 52.938-126.523 120.312-126.523 66.973 0 103.868-48.501 149.988 0 46.119 48.5 40.505 10.964 85.021 57.779 44.516 46.814 65.368 8.012 65.368 68.744s32.485 138.334 0 172.494c-32.885 34.163 112.693 65.793-.4 65.793Z" />
                  </svg>
                  <svg className="circle-inner fill-black/90 stroke-width-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-30 -30 1084 1084" style={{ width: '289px', height: '280px' }}>
                    <path d="M936.968 636.321c64.162-67.478 0-221.839 0-342.458 0-120.619-41.308-43.439-129.537-136.224-88.228-92.784-77-18.135-168.837-114.715-91.839-96.58-165.229 0-297.973 0-133.145 0-238.619 250.939-238.619 250.939-261.478 0 75.796 291.849-36.494 409.938C-46.783 821.89 184.617 829.06 312.95 964.018c128.332 134.962 270.701 0 435.529 0 165.228 0-36.495-197.799 188.088-197.799 225.383.421-63.767-62.418.401-129.898Zm-210.547 4.218c-113.092 0-11.63 99.532-94.645 99.532s-154.801 67.901-219.369 0c-64.567-67.902-181.27-71.696-124.724-131.162 56.548-59.468-113.092-206.657 18.449-206.657 0 0 52.938-126.523 120.312-126.523 66.973 0 103.868-48.501 149.988 0 46.119 48.5 40.505 10.964 85.021 57.779 44.516 46.814 65.368 8.012 65.368 68.744s32.485 138.334 0 172.494c-32.885 34.163 112.693 65.793-.4 65.793Z" />
                  </svg>
                </div>
              </div>
            </motion.section>

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
        <img className="info-card-image" alt={'info-img'} src={image} />
      </div>
      <div className="text-xl font-bold text-white">{textNumber}</div>
      <div className="text-lg text-white">{titleText}</div>
    </motion.div>
  )
}
export default Postogon;