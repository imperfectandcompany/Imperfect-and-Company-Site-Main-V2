import React, { useState } from 'react';
import './Team.css';
import { motion } from 'framer-motion';
import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';

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
    description: string;
    image: string;
    details: FounderDetails[];
}

interface FounderProps {
    founder: Founder;
    isActive: boolean;
}

const FounderComponent: React.FC<FounderProps> = ({ founder, isActive }) => {
    return (
        <div id={founder.id} className={`phases-tabbox ${isActive ? '__active' : ''}`}>
            <div data-scroll className="phases-content">
                <div className="phases-img">
                <img src={founder.image} alt={founder.name} className="founder-image" />
                <div className="founder-text">
                    <h4>{founder.name}</h4>
                    <p>{founder.description}</p>
                    </div>
                </div>
                <hr />
                {founder.details.map((detail, index) => (
                        <div key={index} className="founder-detail">
                        <h3>Key Pillar {index + 1}:</h3>
                        <h4>{detail.moduleTitle}</h4>
                        <p>{detail.content}</p>
                       </div>
                ))}
            </div>
        </div>
    );
};

const Team: React.FC = () => {
    const foundersData: Founder[] = [
        {
            id: 'daiyaan',
            name: 'Daiyaan Ijaz',
            description: 'Pioneering platforms since his youth...',
            image: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            details: [
                { moduleTitle: 'Past project', content: 'Launched in 2014...' },
                // More details...
            ],
        },
        {
            id: 'jhan',
            name: 'Jhan Doe',
            description: "Jhan's background in technology and innovation has been instrumental in developing groundbreaking software solutions.",
            image: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            details: [
                { moduleTitle: 'Software Development', content: 'Architected a multi-platform ecosystem utilized by millions worldwide.' },
                { moduleTitle: 'Strategic Leadership', content: 'Guided the company through pivotal shifts in the tech landscape.' },
                // More details...
            ],
        },
        {
            id: 'sterling',
            name: 'Sterling Archer',
            description: 'Sterling is known for his expertise in international espionage and his suave approach to intelligence gathering.',
            image: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            details: [
                { moduleTitle: 'Espionage Tactics', content: 'Developed innovative surveillance techniques that revolutionized the field.' },
                { moduleTitle: 'Field Operations', content: 'Led over a hundred covert operations with a remarkable success rate.' },
                // More details...
            ],
        },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<string>(foundersData[0]?.id ?? '');
    const [direction, setDirection] = useState(0); // Used for controlling animation direction

    // When a tab is clicked, set the active tab and determine the direction for the animation
    const handleTabClick = (founderId: string) => {
        const currentIndex = foundersData.findIndex(f => f.id === activeTab);
        const newIndex = foundersData.findIndex(f => f.id === founderId);
        const direction = newIndex > currentIndex ? 1 : -1;
        setDirection(direction);
        setActiveTab(founderId);
    };


    return (
        <>
        <motion.div className="team-page" variants={containerVariants} initial="hidden" animate="visible" exit="hidden">
        <div className=''>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <section className="hero" aria-label="Founders Section">
            Our Team
            <div className="tabs-wrapper">
            <ul className="tabs" role="tablist">
                            {foundersData.map((founder) => (
                    <li key={founder.id} onClick={() => handleTabClick(founder.id)}>
                    <button className={activeTab === founder.id ? '__active' : ''}>
                        {founder.name}
                    </button>
                </li>
                            ))}
                        </ul>

                        {/* Tab content */}
                        <div className="tabs-content">
                            {foundersData.map((founder) => (
                    <motion.div
                    key={founder.id}
                    variants={tabVariants}
                    initial="hidden"
                    animate={activeTab === founder.id ? "visible" : "hidden"}
                    exit="exit"
                    custom={direction}
                >
                <FounderComponent founder={founder} isActive={activeTab === founder.id} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
            </section>
            </div>
            <div className="footer">
            <Footer />
            </div>
        </motion.div>
        </>


    );
};

export default Team;