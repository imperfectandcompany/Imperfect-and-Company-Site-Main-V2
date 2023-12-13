import React, { useState } from 'react';
import './Team.css';
import { motion } from 'framer-motion';
import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';
import jhan from "../../images/team/jhan_araja.png";
import daiyaan from "../../images/team/daiyaan_ijaz.png";
import { Link } from 'react-router-dom';


const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
};

const tabVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5 }
    },
    exit: { opacity: 0, transition: { duration: 0.5 } }
};

interface FounderDetails {
    moduleTitle: string;
    content: string;
}

interface Founder {
    id: string;
    name: string;
    title: string;
    location: string;
    altText: string;
    description: string;
    image: string;
    details: FounderDetails[];
}

interface FounderProps {
    founder: Founder;
    isActive: boolean;
}

const FounderComponent: React.FC<FounderProps> = ({ founder }) => {
    return (
        <div className="mb-10">
            <h1 className="text-4xl font-bold mb-2">{founder.name}</h1>
            <p className="text-red-400 text-xl font-semibold mb-2">{founder.title}</p>
            <p className="text-gray-400 mb-4">{founder.location}</p>
            <p className="mb-6">{founder.description}</p>
            {founder.details.map((detail, index) => (
                <div key={index} className="founder-detail">
                    <h3>KA{index + 1}:</h3>
                    <h4>{detail.moduleTitle}</h4>
                    <p>{detail.content}</p>
                </div>
            ))}
            <img src={founder.image} alt={`Portrait of ${founder.name}`} className="rounded" />
        </div>
    );
};


const Team: React.FC = () => {
    const [activeFounder, setActiveFounder] = useState<string | null>(null);

    /* stnadby until design is fully ready
    const handleFounderClick = (id: string) => {
        setActiveFounder(id);
        // Logic to scroll to the detail view or handle the display of more information
    };
*/

    const handleCloseClick = () => {
        setActiveFounder(null);
    };


    const foundersData = [
        {
            id: 'daiyaan',
            name: 'Daiyaan Ijaz',
            title: 'Founder & Visionary',
            location: 'United States',
            description: 'Daiyaan has been at the forefront of platform innovation from a young age, with notable ventures like TorvaPlawks, KitPvpCC.com, and Imperfect Gamers, and a Bitcoin exchange service launched in 2014.',
            image: daiyaan,
            altText: 'Daiyaan Ijaz, founder standing in front of a colorful abstract painting, wearing a brown jacket and smiling.',
            details: [
                { moduleTitle: 'Early Innovator', content: 'Started pioneering platforms like TorvaPlawks and KitPvpCC.com in his youth.' },
                { moduleTitle: 'Cryptocurrency Enthusiast', content: 'Launched a Bitcoin exchange service in 2014, showcasing a passion for digital frontiers.' },
            ],
        },
        {
            id: 'jhan',
            name: 'Jhan Araja',
            title: 'Cofounder & Strategist',
            location: 'Germany',
            description: 'With a strong academic background in law, business, and entrepreneurship, Jhan is currently focused on his non-profit initiative, "Bricks From Plastic," transforming waste plastic into building materials in the Philippines.',
            image: jhan,
            altText: 'Jhan Araja, cofounder with a confident stance in a business environment, wearing a suit and looking forward.',
            details: [
                { moduleTitle: 'Academic Excellence', content: 'Studied law, business, and entrepreneurship at QUT and Leuphana with multiple scholarships.' },
                { moduleTitle: 'Non-profit Work', content: 'Leads "Bricks From Plastic," turning waste into construction materials.' },
            ],
        },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);



    return (
        <>
            <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="hidden">
                <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                <div className="md:min-h-screen">
                    <section className="team-container text-center text-white my-10 relative max-w-screen-md mx-auto">
                        <h1 className="text-5xl font-bold uppercase">Our Team</h1>
                        <p className="mb-10 p-4">
                            At Imperfect and Company, we unite diverse expertise, global insights, and a track record of innovation.
                            Our international network of advisors, peers, and mentors perpetually enhances our approach, bolstering our skills and ensuring our venture thrives with unparalleled knowledge and extensive industry ties.
                            We represent a harmonious fusion of visionary leadership, technical mastery, and entrepreneurial vigor.
                        </p>
                        <div className="text-center">
                            <span className="inline-block w-1 h-1 rounded-full bg-red-500 ml-1"></span>
                            <span className="inline-block w-3 h-1 rounded-full bg-red-500 ml-1"></span>
                            <span className="inline-block w-40 h-1 rounded-full bg-red-500"></span>
                            <span className="inline-block w-3 h-1 rounded-full bg-red-500 ml-1"></span>
                            <span className="inline-block w-1 h-1 rounded-full bg-red-500 ml-1"></span>
                        </div>
                    </section>


                    {activeFounder ? (<motion.div
                        id="detail-wrapper"
                        variants={tabVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className=""
                    >
                        <button className="text-white" onClick={handleCloseClick}>Go back</button>
                        <div>
                            {foundersData
                                .filter((founder) => founder.id === activeFounder)
                                .map((founder) => (
                                    <FounderComponent key={founder.id} founder={founder} isActive={true} />
                                ))}
                        </div>
                    </motion.div>) : (<motion.div id="detail-wrapper" className="grid grid-cols-1 md:grid-cols-2 gap-4 p-12">
                        {foundersData.map((founder, index) => (
                            //onClick={() => handleFounderClick(founder.id)} cursor-pointer until we have a detail view fully implemented
                            <div key={index} className="profile-card mb-10  border-2 border-white transition-transform duration-300 ease-in-out hover:border-red-500 hover:-translate-y-1">
                                <img src={founder.image} alt={`${founder.name} profile`} className="w-full h-auto object-cover" />
                                <div className="p-4 bg-gradient-to-t from-black to-transparent absolute bottom-0 w-full">
                                    <h2 className="founder-name text-4xl font-bold mb-2">{founder.name}</h2>
                                    <p className="founder-title text-red-500 text-xl font-semibold mb-2">{founder.title.toUpperCase()}</p>
                                    <p className="founder-location mb-4">{founder.location}</p>
                            <p className="mb-6 text-gray-300">{founder.description}</p>

                                </div>
                            </div>
                        ))}
                    </motion.div>)}

                    <section className="team-container text-center text-white my-10 relative max-w-screen-md mx-auto">
                        <h3 className="text-5xl font-bold uppercase border-4 mb-4">Related Pages</h3>
                        <Link to="/about"> 
                        <button className="py-2 px-4 border-2 border-white related-btn text-white hover:opacity-10">
<div className="font-bold underline decoration-red-500">About</div>
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
            </motion.div >
        </>
    );
};

export default Team;