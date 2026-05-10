import React from 'react';
import { motion } from 'framer-motion';
import { PuppyListing } from '../components/shop/PuppyListing';
import { ProductListing } from '../components/shop/ProductListing';
import { CTASection } from '../components/home/CTASection';

export const Shop = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      {/* Page Header */}
      <section className="bg-primary/5 py-16 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Our <span className="text-primary">Puppies & Products</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Find your perfect furry companion or browse our curated selection of premium pet accessories, food, and toys. We offer the best for your best friend.
          </motion.p>
        </div>
      </section>

      {/* Main Content Sections */}
      <PuppyListing />
      <ProductListing />
      <CTASection />
    </motion.div>
  );
};
