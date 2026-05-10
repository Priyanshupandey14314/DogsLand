import React from 'react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=2000" 
          alt="Happy dog with owner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/90 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Build a Better Relationship With Your Dog?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of happy owners who have transformed their dogs with our professional training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="primary" className="text-lg px-10 py-4 shadow-lg shadow-primary/30">
              Get Started Today
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
