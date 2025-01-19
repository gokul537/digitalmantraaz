import React from "react";
import { motion } from "framer-motion";

const ToastNotification = ({ message }) => {
  return (
    <motion.div
      className="toast"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      {message}
    </motion.div>
  );
};

export default ToastNotification;
