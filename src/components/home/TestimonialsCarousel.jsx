import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { testimonials } from '../../data/mockData';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="py-20 md:py-28 bg-accent/20 dark:bg-accent/5">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Success Stories"
          centered={true}
        />

        <div className="relative w-full mx-auto mt-10">
          {/* Desktop Controls */}
          <button
            onClick={prevSlide}
            className="absolute -left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-800 p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 dark:border-gray-700 hover:bg-orange-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-orange-600 transition-all focus:outline-none hidden md:flex items-center justify-center group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-7 h-7 transition-transform group-hover:-translate-x-" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-2 lg:-right-6 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-800 p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 dark:border-gray-700 hover:bg-orange-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-orange-600 transition-all focus:outline-none hidden md:flex items-center justify-center group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-7 h-7 transition-transform group-hover:translate-x-1" />
          </button>

          <div className="overflow-hidden px-2 py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] dark:shadow-none border border-gray-100 dark:border-gray-800 relative w-full"
              >
                <Quote className="absolute top-8 left-8 w-20 h-20 text-orange-500/5 dark:text-orange-500/5 rotate-180 pointer-events-none hidden md:block" />
                <Quote className="absolute bottom-8 right-8 w-20 h-20 text-orange-500/5 dark:text-orange-500/5 pointer-events-none hidden md:block" />

                <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-14 lg:gap-20 relative z-10 w-full">

                  {/* Profile Section (Left) */}
                  <div className="flex flex-col items-center justify-center shrink-0">
                    <div className="relative mb-5">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover border-[6px] lg:border-[8px] border-orange-50 dark:border-orange-900/40 shadow-xl"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-green-500 w-8 h-8 lg:w-10 lg:h-10 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center shadow-sm" title="Verified Client">
                        <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <h4 className="font-extrabold text-gray-900 dark:text-white text-xl lg:text-2xl text-center">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm lg:text-base font-bold text-orange-600 dark:text-orange-400 mt-1.5 uppercase tracking-[0.15em] text-center">{testimonials[currentIndex].role}</p>
                  </div>

                  {/* Divider (Desktop only) */}
                  <div className="hidden md:block w-px h-40 bg-gray-200 dark:bg-gray-800 shrink-0"></div>

                  {/* Review Content (Right) */}
                  <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 w-full">
                    <div className="flex justify-center md:justify-start gap-1.5 mb-6 lg:mb-8">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 lg:w-7 lg:h-7 fill-orange-400 text-orange-400 drop-shadow-sm" />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg md:text-2xl lg:text-3xl font-medium italic leading-relaxed md:leading-relaxed lg:leading-[1.6]">
                      "{testimonials[currentIndex].content}"
                    </p>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-500 ${index === currentIndex
                  ? "bg-orange-500 w-10 shadow-md"
                  : "bg-gray-300 dark:bg-gray-700 hover:bg-orange-300 w-3"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-6 mt-8 md:hidden">
            <button onClick={prevSlide} className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 active:scale-95 transition-transform">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextSlide} className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 active:scale-95 transition-transform">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
