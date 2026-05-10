import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

const images = [
  "../assets/dbg1.jpg",
  "../assets/dbg2.jpg",
  "../assets/dog3.jpg",
];

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="Dogs training"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent dark:from-black/90 dark:via-black/70"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-semibold mb-6 backdrop-blur-sm">
              #1 Dog Training Center
            </span>
            <h1 className="lg:text-5xl font-bold text-white leading-tight mb-6">
              Transform Your Dog Into a <span className="text-primary">Loyal & Well-Trained</span> Companion
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-10 max-w-2xl">
              Professional training services that build a lifelong bond of trust, respect, and love between you and your furry best friend.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" variant="primary" className="text-md px-5 py-1">
                Book Training
              </Button>
              <Button to="/contact" variant="outline" className="text-md px-5 py-1 text-white border-white hover:bg-white hover:text-secondary hover:border-white">
                Free Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
