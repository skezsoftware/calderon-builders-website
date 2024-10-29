import React from "react";
import { motion } from "framer-motion";
import "./about.css";

const AboutPageHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="about-header-container"
    >
      <div className="about-header-content">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="icon-container"
        >
          <i className="bi bi-clock-history"></i>
        </motion.div>
        <h1 className="about-title">Going Back in Time</h1>
        <div className="about-text-container">
          <p className="about-description">
            Explore our journey through the years as we've grown, innovated, 
            and shaped the future of technology. Each milestone tells a story 
            of dedication, creativity, and breakthrough achievements.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPageHeader;
