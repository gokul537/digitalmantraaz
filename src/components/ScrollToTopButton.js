import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true); // Show button when scrolled down 300px
    } else {
      setIsVisible(false); // Hide button when near the top
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <motion.button
      className="scroll-to-top-button"
      onClick={scrollToTop}
      style={{ display: isVisible ? "block" : "none" }} // Only show button when scrolled down
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }} // Fade in when visible
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.1, // Enlarge the button slightly on hover
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)", // Hover shadow effect
      }}
      whileTap={{
        scale: 0.95, // Slightly shrink the button on click
      }}
    >
      ↑
    </motion.button>
  );
};

export default ScrollToTopButton;
