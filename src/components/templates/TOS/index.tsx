import React, { useState } from "react";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import "./TOS.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function TOS() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.div initial="hidden" animate="visible" exit="hidden">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="md:min-h-screen">

        <div className="hero-image">
          <div className="mt-10 text-4xl text-center">
            Terms of Service (temp)
          </div>
        </div>

        <section className="team-container text-center text-white my-10 relative max-w-screen-md mx-auto">
                        <h1 className="text-5xl font-bold uppercase">Terms of Service</h1>
                        <p className="mb-10 p-4">
                        Please understand the following Terms of Service in which you are in agreement with by accessing Imperfect and Company and its services.
                        </p>
                        <div className="text-center">
                            <span className="inline-block w-1 h-1 rounded-full bg-red-500 ml-1"></span>
                            <span className="inline-block w-3 h-1 rounded-full bg-red-500 ml-1"></span>
                            <span className="inline-block w-40 h-1 rounded-full bg-red-500"></span>
                            <span className="inline-block w-3 h-1 rounded-full bg-red-500 ml-1"></span>
                            <span className="inline-block w-1 h-1 rounded-full bg-red-500 ml-1"></span>
                        </div>
                    </section>
        <div className="p-8">


          <section className="py-8 text-white">
            <h2 className="font-bold text-3xl mb-4">Imperfect and Company</h2>
            <p className="text-gray-400">
            "Us", "We", "Our", "The company", all refers to Imperfect and Company as a group, as a company. We are not responsible for any mistakes you may have made with our identity.
            </p>
          </section>
          <section className="py-8 text-white">
            <h2 className="font-bold text-3xl mb-4">Understand</h2>
            <p className="text-gray-400 mb-10">
            By being on our website and server, you understand that you are accountable for your own mistakes. You understand that we have the authority to do what we want with your account, as it is our property and you're a user. You understand that if you do not represent the values that the company stands for then your account will be dealt with accordingly and as fairly as possible across all branches including Imperfect Gamers, Imperfect Sounds, and Postogon. You understand that since Imperfect and Company operates and is hosted in the United States that the Electronic Signatures in Global and International Commerce Act (ESGICA) is in effect and failure to follow these rules will result in permanent removal from all branches of Imperfect and Company. The following services provided by Imperfect and Company are Postogon, Imperfect Sounds, Imperfect Gamers, and Imperfect and Company Merchandise Store.
            </p>

            <motion.div
                className="flex flex-col items-center justify-evenly p-5 "
              >
                <h3 className="font-bold text-xl mb-2">Acceptance</h3>
                <p className="text-gray-400">
                You hereby agree that by accepting this TOS, you know that your contract with imperfectandcompany.com also correlates any service that is owned by us.
                </p>
              </motion.div>


          </section>
        </div>


        <section className="team-container text-center text-white my-10 relative max-w-screen-md mx-auto">
          <h3 className="text-5xl font-bold uppercase border-4 mb-4">Related Pages</h3>
          <Link to="/team">
            <button className="py-2 px-4 border-2 border-white related-btn text-white hover:opacity-10">
              <div className="font-bold underline decoration-red-500">Privacy</div>
            </button>
            <button className="py-2 px-4 border-2 border-white related-btn text-white hover:opacity-10">
              <div className="font-bold underline decoration-red-500">Cookies</div>
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

export default TOS;
