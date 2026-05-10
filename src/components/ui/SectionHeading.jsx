import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'}`}>
      <div className={`inline-block px-8 py-5 rounded-[2rem] bg-gradient-to-br from-orange-100/80 via-orange-50/50 to-transparent dark:from-orange-950/40 dark:via-transparent border border-orange-200/60 dark:border-orange-900/50 shadow-sm backdrop-blur-sm ${centered ? 'text-center' : 'text-left'}`}>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-xl xl:text-2xl mb-2"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-orange-500"
        >
          {title}
        </motion.h2>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="h-1.5 w-24 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full mt-6"
      />
    </div>
  );
};
