import React, { useState, useEffect } from "react";
import ScrollToTopImage from '../resources/images/scroll-to-top.png';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // The Scroll To Top Button would be visible when the user scrolls down from the Top
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

    // Function for scrolling to top of the page
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", 
        });
      };

    useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup for Memory Leaks
    return () => {
        window.removeEventListener("scroll", toggleVisibility);
    };
    }, []);

    return (
        <>
        {isVisible ? <button className="scroll-to-top" onClick={scrollToTop}> <img src={ScrollToTopImage} alt="Scroll To Top"/> </button> : ""}
        </>
    );
}

export default ScrollToTop;