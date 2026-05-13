import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-10 md:mb-14 flex flex-col ${centered ? 'items-center text-center' : 'items-center lg:items-start text-center lg:text-left'}`}>
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center justify-center px-6 py-2 mb-5 rounded-full bg-gradient-to-r from-orange-50 to-orange-100/50 dark:from-orange-950/40 dark:to-orange-900/20 border border-orange-200/80 dark:border-orange-800/60 shadow-sm backdrop-blur-sm"
        >
          <span className="text-gray-900 dark:text-white font-bold tracking-[0.2em] uppercase text-xl md:text-2xl">
            {subtitle}
          </span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground leading-[1.15] md:leading-[1.15] lg:leading-[1.15] tracking-tight"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        className={`h-1.5 w-24 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full mt-8 ${centered ? 'mx-auto' : 'mx-auto lg:mx-0'}`}
      />
    </div>
  );
};
