import React from 'react';
import { motion } from 'framer-motion';
import { statistics } from '../../data/mockData';

export const Stats = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-secondary dark:bg-black z-0"></div>
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statistics.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-lg font-medium text-white">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
