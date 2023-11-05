import React, { useEffect, useState } from "react";
import "./Header.css"; // Import the CSS for styling
import Navigation from "../../molecules/Navigation/Navigation";

function Header({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean, setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }): React.JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Function to add the "scrolled" class when scrolling down
    function handleScroll() {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    const handleScrollUp = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;
      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    // Add a scroll event listener to call the handleScroll function
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollUp);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollUp);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className={`sticky ${visible ? '' : isMenuOpen ? '' : 'sticky-hidden'}`}>
    <header className={`header ${isScrolled ? isMenuOpen ? "sticky-background" : "sticky-background" : ""}`}>
      <div className="content-header">
        <Navigation isOpen={isMenuOpen} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
    </div>
  );
}

export default Header;