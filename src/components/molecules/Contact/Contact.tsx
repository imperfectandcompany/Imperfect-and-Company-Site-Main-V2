import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function useMeasureHeight(ref: React.RefObject<HTMLElement>) {
  const [height, setHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [ref]);

  return height;
}

function Contact() {
  const [openTab, setOpenTab] = useState<string | null>(null);

  const endOfContentRef = useRef<HTMLUListElement>(null);

  const measuredHeight = useMeasureHeight(endOfContentRef);

  useEffect(() => {
    if (endOfContentRef.current) {
      // Scrolls to the ref's current element
      endOfContentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [openTab]);


  const toggleTab = (tabName: string) => {
    if (openTab === tabName) {
      setOpenTab(null);
    } else {
      setOpenTab(tabName);
    }
  };

  const sections = [
    {
      title: 'Projects',
      links: [
        { name: 'Postogon', path: 'projects/postogon' },
        { name: 'Imperfect Private', path: 'projects/imperfectgamers' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Contact Us',
      links: [
        { name: 'hello@imperfectandcompany.com', path: 'mailto:hello@imperfectandcompany.com' },
      ],
    },
  ];

  return (
    <div className="c-footer__contact">
      <div className="">
        <h2 className="sr-only">Imperfect and Company</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {sections.map((section, index) => (
            <div key={section.title}>
              {/* Mobile view - Collapsible */}
              <div className="md:hidden">
                <button
                  className={`flex justify-between items-center w-full text-sm font-bold cursor-pointer relative ${index === sections.length - 1 && openTab === section.title ? '' : ''}`}
                  onClick={() => toggleTab(section.title)}
                >
                  <span>{section.title}</span>
                  <motion.span
                    className={`transition-transform transform ${openTab === section.title ? 'rotate-180' : ''}`}
                    initial={false}
                    animate={{ rotate: openTab === section.title ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }} // Add spring physics for a smoother effect
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openTab === section.title && (
                    <motion.ul
                      className={`list-none ${measuredHeight} mt-2 space-y-1 ${index === sections.length - 1 ? '' : ''}`} // Conditionally apply 'mb-0' for the last item
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto", transition: { duration: 0.5, ease: "easeOut" } }}
                      exit={{
                        opacity: 0,
                        height: openTab === section.title ? measuredHeight : 0,
                        transition: { duration: 0.3, ease: "easeOut" },
                        overflow: "hidden"
                      }}
                      ref={endOfContentRef}
                    >
                      {section.links.map((link) => (
                        <motion.li key={link.name} className="block cursor-pointer">
                          {/^https?:\/\//.test(link.path) || /^mailto:/.test(link.path) ? (
                            <a href={link.path} className="hover:underline w-full inline-block text-black">
                              {link.name}
                            </a>
                          ) : (
                            <Link to={link.path} className="hover:underline w-full inline-block text-black">
                              {link.name}
                            </Link>
                          )}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
              {/* Desktop view - Non-collapsible */}
              <div className="hidden md:block">
                <h4 className="text-sm font-bold">{section.title}</h4>
                <ul className="list-none mt-2 space-y-1">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      {/^https?:\/\//.test(link.path) || /^mailto:/.test(link.path) ? (
                        // For external links or mailto
                        <a href={link.path} className="hover:underline text-black" target="_blank" rel="noopener noreferrer">
                          {link.name}
                        </a>
                      ) : (
                        // For internal routing
                        <Link to={link.path} className="hover:underline text-black">
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
