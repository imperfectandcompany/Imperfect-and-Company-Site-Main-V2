import React, { useState } from "react";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import "./ImperfectGamers.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import igisomorphic from "../../images/imperfect-gamers.svg";



function ImperfectGamers() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const influencers = [
    { name: 'summit1g', image: 'https://www.levelpush.com/wp-content/uploads/2020/05/summit1g-scaled.jpg', alt: 'Image representing streamer summit1g' },
    { name: 'swaggersouls', image: 'https://images.yen.com.gh/images/8b16a1ebf35a0e10.jpg?imwidth=720', alt: 'Image representing youtube personality swaggersouls' },
    { name: 'pancho', image: 'https://static.wikia.nocookie.net/youtube/images/f/f5/Panchonewlook.png/', alt: 'Image representing youtube personalty pancho' },
    { name: 'rico vina', image: 'https://popularnetworth.com/wp-content/uploads/2023/03/327438843_652901563191181_6033273894737309268_n.jpg', alt: 'Image representing actor rico vina' },
    { name: 'Fitz', image: 'https://www.famousbirthdays.com/faces/fitz-image.jpg', alt: 'Image representing cs:go contnt creator Fitz' },
  ];

  const [selectedInfluencer, setSelectedInfluencer] = React.useState(influencers[0]);

  function StatsCard({ icon, number, text }: { icon: string, number: string, text: string }) {
    return (
        <div className="stats-card shadow-lg">
            <i className={`${icon} stats-icon`}></i>
            <div className="stats-number">{number}</div>
            <div className="stats-text">{text}</div>
        </div>
    );
}


  return (
    <motion.div initial="hidden" animate="visible" exit="hidden">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="md:min-h-screen">
        <div className="hero-image">
          <object type="image/svg+xml" data={igisomorphic} className="w-1/2 h-32 mx-auto">Your browser does not support SVG</object>
        </div>
        <div className="p-8">
          <section className="about py-8 text-white text-center">
            <h1 className="font-bold text-3xl mb-4">What is Imperfect Gamers</h1>
            <p className="text-white">
              A subsidiary of Imperfect and Company, Imperfect Gamers runs a network of one of the most known Counter Strike: Global Offensive community servers. We are unique in that we provide the only music community through CS:GO surfing.
            </p>
          </section>

          <div className="text-center">
            <span className="inline-block w-1 h-1 rounded-full bg-red-500 ml-1"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-red-500 ml-1"></span>
            <span className="inline-block w-40 h-1 rounded-full bg-red-500"></span>
            <span className="inline-block w-3 h-1 rounded-full bg-red-500 ml-1"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-red-500 ml-1"></span>
          </div>


          <section className="history-section py-8">
  <div className="history-overlay">
    <h2 className="font-bold text-3xl mb-4 history-text">Our History</h2>
    <p className="history-text">
              Historically ranked in the Top 10 (game-tracker) over the years, Imperfect Gamers revolves around
              entertainment, particularly freestyle rap,
              singing, producing, prank calls, and much more. We're a supportive community where drama has no place,
              and respect for
              fellow users is paramount.
              </p>
  </div>
</section>

<section className="stats-section">
                        <div className=" mx-auto px-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                <StatsCard icon="fas fa-dollar-sign" number="5 Figures" text="In Revenue" />
                                <StatsCard icon="fas fa-chart-line" number="150M+" text="Hits" />
                                <StatsCard icon="fab fa-youtube" number="Millions" text="YouTube Views" />
                                <StatsCard icon="fab fa-tiktok" number="Viral" text="On TikTok" />
                                <StatsCard icon="fas fa-user-slash" number="40,000" text="Bad Actors Banned" />
                                <StatsCard icon="fas fa-shopping-cart" number="Hundreds" text="Purchases" />
                                <StatsCard icon="fas fa-users" number="250,000+" text="Users" />
                                <StatsCard icon="fas fa-clock" number="Since 2015" text="Operations" />
                            </div>
                        </div>
                    </section>

<div className="featured-section-container">
<section className="common-section-style py-8 text-white">
            <h2 className="font-bold text-3xl mb-4">Our Legacy</h2>
            <p className="text-gray-400 mb-10">
            Several successful entertainers can trace their roots back to IG. We
              support and encourage our playerbase to be creative and empower them with a community platform aimed
              towards pure entertainment.
            </p>
          </section>

          <div className="image-feature-container ">
            <div className="image-carousel">
              {influencers.map((influencer, index) => (
                <>
                  <img
                    key={index + 1}
                    src={influencer.image}
                    alt={influencer.alt}
                    className={`rounded-lg  ${selectedInfluencer?.name === influencer.name ? 'active' : 'inactive'}`}
                    onClick={() => selectedInfluencer?.name !== influencer.name && setSelectedInfluencer(influencer)}
                  />
                </>
              ))}
            </div>

            
            <div className="featuring-section">
              <div className="featuring-text">
                <h2 className="text-2xl mb-2">FEATURING</h2>
                <p className="text-4xl font-bold">{selectedInfluencer?.name.toUpperCase()}</p>
              </div>
            </div>
          </div>
</div>

          <section className="mt-8">
            <h2 className="text-3xl font-bold text-white mb-4">Imperfect Gamers Team</h2>
            <p className="mb-4 text-gray-300">IG is staffed by a volunteer team comprised of Head Admins, Admins,
              Moderators, Zoners, Developers, and Media Specialists.</p>
            <div className="grid grid-cols-2 gap-8 text-gray-400">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Owners</h3>
                <p className="mb-2">Provide leadership and executive direction in all aspects of the network.</p>
                <h3 className="text-xl font-bold text-white mb-2">Admins</h3>
                <p className="mb-2">Assist Head Admins in carrying out various administrative tasks on the servers.</p>
                <h3 className="text-xl font-bold text-white mb-2">Zoners</h3>
                <p className="mb-2">Ensure our maps are functioning with all start/end zones, checkpoints, stages, and
                  bonuses properly setup.</p>
                <h3 className="text-xl font-bold text-white mb-2">Media Specialists</h3>
                <p className="mb-2">Create content such as videos to share on social media platforms for entertainment
                  and/or utility.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Head Admins</h3>
                <p className="mb-2">Assist the server owners in daily operations including recruiting and training new
                  staff, resolving issues and inquiries, and promoting IG's mission.</p>
                <h3 className="text-xl font-bold text-white mb-2">Moderators</h3>
                <p className="mb-2">The backbone of IG, moderators set the tone on IG servers by monitoring order and
                  helping new players become accustomed to the IG way.</p>
                <h3 className="text-xl font-bold text-white mb-2">Developers</h3>
                <p className="mb-2">Software engineers and coders that work the backend of IG, creating and editing code
                  to alter the player experience on IG servers.</p>
              </div>
            </div>
          </section>
        </div>
        {
  true ?         <section className="team-container text-center text-white my-10 relative max-w-screen-md mx-auto">
  <h3 className="text-5xl font-bold uppercase border-4 mb-4">Related Pages</h3>
  <Link to="/projects/postogon">
    <button className="py-2 px-4 border-2 border-white related-btn text-white hover:opacity-10">
    <div>Postogon</div>
    </button>
  </Link>
  <div className="text-center mt-4">
    <span className="inline-block w-1 h-1 rounded-full bg-red-500 ml-1"></span>
    <span className="inline-block w-3 h-1 rounded-full bg-red-500 ml-1"></span>
    <span className="inline-block w-40 h-1 rounded-full bg-red-500"></span>
    <span className="inline-block w-3 h-1 rounded-full bg-red-500 ml-1"></span>
    <span className="inline-block w-1 h-1 rounded-full bg-red-500 ml-1"></span>
  </div>
</section> : <></>
}



      </div>
      <Footer />
    </motion.div>
  );
}

export default ImperfectGamers;
