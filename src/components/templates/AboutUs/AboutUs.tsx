import React, { useState } from "react";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import "./AboutUs.css"; // Import your AboutUs-specific CSS file
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function AboutUs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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


  return (
    <motion.div initial="hidden" animate="visible" exit="hidden">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="md:min-h-screen">

        <div className="hero-image">
          <div className="mt-10">
            <img src="https://imperfectdesignsystem.com/assets/img/imperfectandcompany/imperfectandcompany_unfilled.png" alt="Imperfect and Company" className="w-1/2 mx-auto mb-10"
            />
          </div>
        </div>
        <div className="p-8">
          <section className="about py-8 text-white text-center">
            <h1 className="font-bold text-3xl mb-4">About</h1>
            <p className="text-white">
              We embarked on our journey as creators back in 2010 when we were just kids with a passion for innovation. From our earliest days, our work has been fueled by belief and community support. Operating without expenses initially, we were driven by users who wanted to see our projects thrive. As support grew, every contribution was reinvested to scale our vision, ensuring that our growth was a reflection of our community's trust and engagement. Since then, we have been on a relentless quest to shape the digital landscape while listening to the users that support us.
            </p>
          </section>

          <div className="text-center">
            <span className="inline-block w-1 h-1 rounded-full bg-red-500 ml-1"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-red-500 ml-1"></span>
            <span className="inline-block w-40 h-1 rounded-full bg-red-500"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-red-500 ml-1"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-red-500 ml-1"></span>
          </div>

          <section className="py-8 text-white">
            <h2 className="font-bold text-3xl mb-4">Our Mission</h2>
            <p className="text-gray-400">
              Our mission is to challenge systems that are risk-averse and stagnant, often maintained by an older generation. With respect for their contributions, we also recognize the need for innovation and the inclusion of fresh minds. We believe that new ideas should be given a chance to prove their worth without the prerequisite of years of experience or tenure. If something makes sense, it makes sense. At Imperfect and Company, our aim is to prioritize genuine care in everything we do, fostering an environment where the right ideas, not the right tenure, shape the future.
            </p>
          </section>
          <section className="py-8 text-white">
            <h2 className="font-bold text-3xl mb-4">Our Values</h2>
            <p className="text-gray-400 mb-10">
              Beyond the products we create, which are user-centric, we deeply care about the people. We strive to protect not only those who use our projects but also those who help build them. We believe in honor and integrity, and we are committed to fairness. Many large companies lose sight of ethics, pretending to care only superficially. At Imperfect and Company, we prioritize ethical considerations and genuine care in everything we do.
            </p>

            <motion.div
              className="grid md:grid-cols-3 gap-4 text-center"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div
                variants={item}
                className="flex flex-col items-center justify-evenly p-5 "
              >
                <i className="fas fa-users fa-3x mb-4"></i>
                <h3 className="font-bold text-xl mb-2">Community</h3>
                <p className="text-gray-400">
                  Caring for our users and contributors.<br /><span className="text-red-500">Reinvesting their trust back into our projects.</span>
                </p>
              </motion.div>
              <motion.div
                variants={item}
                className="flex flex-col items-center justify-evenly p-5 "
              >
                <i className="fas fa-handshake fa-3x mb-4"></i>
                <h3 className="font-bold text-xl mb-2">Integrity</h3>
                <p className="text-gray-400">
                  Upholding honor and fairness.
                  <br /><span className="text-red-500">Valuing every voice in the conversation.</span>
                </p>
              </motion.div>
              <motion.div
                variants={item}
                className="flex flex-col items-center justify-evenly p-5 "
              >
                <i className="fas fa-balance-scale fa-3x mb-4"></i>
                <h3 className="font-bold text-xl mb-2">Ethics</h3>
                <p className="text-gray-400">
                  Prioritizing ethical considerations.
                  <br /><span className="text-red-500">Regardless of tenure or experience.</span>
                </p>
              </motion.div>
            </motion.div>
          </section>


          <section className="py-8 text-white">
            <h2 className="font-bold text-3xl mb-4">Advocacy</h2>
            <p className="text-gray-400">
              While we deliver products that entertain and enrich lives, we recognize the importance of speaking up for those who struggle to find a voice. Whether it's due to internal challenges, external pressures, or complacency within systems that lack incentive or drive, we stand for the unheard and advocate for change. At Imperfect and Company, we're not just about innovation; we're about making a meaningful impact on society and empowering every individual to be heard.
            </p>
          </section>

        </div>


        <section className="team-container text-center text-white my-10 relative max-w-screen-md mx-auto">
          <h3 className="text-5xl font-bold uppercase border-4 mb-4">Related Pages</h3>
          <Link to="/team">
            <button className="py-2 px-4 border-2 border-white related-btn text-white hover:opacity-10">
              <div className="font-bold underline decoration-red-500">Team</div>
            </button>
          </Link>
          <div className="text-center mt-4">
            <span className="inline-block w-1 h-1 rounded-full bg-red-500 ml-1"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-red-500 ml-1"></span>
            <span className="inline-block w-40 h-1 rounded-full bg-red-500"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-red-500 ml-1"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-red-500 ml-1"></span>
          </div>
        </section>

      </div>
      <Footer />
    </motion.div>
  );
}

export default AboutUs;
