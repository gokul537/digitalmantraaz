import React, { useState } from "react";
import { motion } from "framer-motion";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    visible && (
      <motion.button
        className="scroll-to-top"
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        ↑
      </motion.button>
    )
  );
};

export default ScrollToTopButton;
