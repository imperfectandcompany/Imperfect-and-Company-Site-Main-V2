import React, { useEffect, useState } from 'react';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import './TOS.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const termsData = {
  "title": "Terms of Service for Imperfect and Company",
  "introduction": "Welcome to Imperfect and Company. By accessing or registering on any websites or services operated by Imperfect and Company, including but not limited to Imperfect Gamers, Postogon, Imperfect Sounds, and any associated merchandise stores (collectively, 'our Services'), you agree to be bound by these Terms of Service ('Terms' or 'Agreement'). Please read these Terms carefully.",
  "sections": [
    {
      "title": "Definitions",
      "content": "'The Servers' or 'IG' refers specifically to the game-servers hosted at Imperfect Gamers and should not be interpreted to represent any other entity or service. 'We,' 'Us,' 'Our,' and 'The Company' refer to Imperfect and Company, its owners, affiliates, and subsidiaries. 'You' and 'Your' refer to you, as a user of our Services."
    },
    {
      "title": "Use of Our Services",
      "content": "You accept that by using our Services, you are responsible for your actions and content. We reserve the right to manage your account and content as per these Terms. You agree to use our Services in a manner that reflects our values and community standards. Non-compliance may lead to account suspension or termination."
    },
    {
      "title": "Electronic Signatures and Transactions",
      "content": "Our Services are operated and hosted within the United States. By using our Services, you acknowledge that the Electronic Signatures in Global and National Commerce Act (ESIGN) applies to your interactions with us."
    },
    {
      "title": "Refunds",
      "content": "Our refund policy is service-specific and is detailed on the respective service's website. Generally, we do not offer refunds except under circumstances where we determine a refund is warranted."
    },
    {
      "title": "Account Termination",
      "content": "We reserve the right to terminate your access to our Services if you fail to abide by these Terms or represent the values of our community. Termination decisions will be made at our discretion and may be without notice."
    },
    {
      "title": "Modifications to Terms",
      "content": "We reserve the right to modify these Terms at any time. Changes will be communicated through our Services, and your continued use of our Services after such changes have been posted will constitute your agreement to the modified Terms."
    },
    {
      "title": "Disclaimers",
      "content": "We disclaim all responsibility for mistakes made by you with respect to our identity or service offerings. Our Services are provided 'as is,' and we make no warranties regarding the reliability, security, or performance of our Services."
    },
    {
      "title": "Limitation of Liability",
      "content": "To the fullest extent permitted by law, Imperfect and Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses."
    },
    {
      "title": "Governing Law",
      "content": "These Terms shall be governed by and construed in accordance with the laws of the state in which Imperfect and Company is registered, without regard to its conflict of law provisions."
    },
    {
      "title": "Dispute Resolution",
      "content": "All disputes related to these Terms will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, rather than in court, except that you may assert claims in small claims court if your claims qualify."
    },
    {
      "title": "Acceptance of Terms",
      "content": "By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms."
    }
  ],
  "effectiveDate": "These Terms are effective as of January 15th 2024.",
  "contactInformation": "For any concerns or questions regarding these Terms, please contact us at contact@imperfectandcompany.com"
}


function TOS() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'Terms of Service - Imperfect and Company';
  }, []);
  
  return (
    <motion.div initial="hidden" animate="visible" exit="hidden">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className='md:min-h-screen'>

        <div className='hero-image'>
          <div className='mt-10 text-5xl font-bold uppercase text-center'>
          {termsData.title}
          </div>
        </div>

        <section className='team-container text-center text-white my-4 relative max-w-screen-md mx-auto'>
          <p className='mb-10 p-4'>
            {termsData.introduction}
          </p>
          {/* Decorative graphic elements ... */}
        </section>

        <div className='p-8'>
          {termsData.sections.map((section, index) => (
            <section key={index} className='py-8 text-white'>
              <h2 className='font-bold text-3xl mb-4'>{section.title}</h2>
              <p className='text-gray-400'>{section.content}</p>
            </section>
          ))}

          <section className='py-8 text-white'>
            <h2 className='font-bold text-3xl mb-4'>Effective Date</h2>
            <p className='text-gray-400'>{termsData.effectiveDate}</p>
          </section>

          <section className='py-8 text-white'>
            <h2 className='font-bold text-3xl mb-4'>Contact Information</h2>
            <p className='text-gray-400'>{termsData.contactInformation}</p>
          </section>
        </div>
{
  false ?         <section className="team-container text-center text-white my-10 relative max-w-screen-md mx-auto">
  <h3 className="text-5xl font-bold uppercase border-4 mb-4">Related Pages</h3>
  <Link to="/privacy-policy">
    <button className="py-2 px-4 border-2 border-white related-btn text-white hover:opacity-10">
      <div className="font-bold underline decoration-red-500">Privacy</div>
    </button>
  </Link>
  <Link to="/cookie-policy">
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
</section> : <></>
}

      </div>
      <Footer />
    </motion.div>
  );
}

export default TOS;
