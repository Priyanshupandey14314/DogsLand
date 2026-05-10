import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedCard = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className={`bg-card text-card-foreground rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};
