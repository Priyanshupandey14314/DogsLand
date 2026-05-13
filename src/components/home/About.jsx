import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const About = () => {
  const features = [
    "Certified Professional Trainers",
    "Positive Reinforcement Methods",
    "Customized Training Plans",
    "Safe & Clean Facilities"
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-accent/30 dark:bg-accent/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-16">
          <SectionHeading
            title="We Understand Your Dog Better Than Anyone Else"
            subtitle="About DogsLand"
            centered={true}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 relative w-full max-w-lg mx-auto lg:max-w-none"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=1000"
                alt="Trainer with a dog"
                className="w-full h-[450px] md:h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 border-[6px] border-white/20 rounded-[2.5rem] z-20 pointer-events-none"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 lg:-right-8 bg-white dark:bg-gray-900 p-5 md:p-6 rounded-3xl shadow-2xl z-30 max-w-[240px] hidden sm:block border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 dark:bg-orange-900/40 p-4 rounded-2xl">
                  <span className="text-3xl lg:text-4xl font-extrabold text-orange-600 dark:text-orange-400">15+</span>
                </div>
                <div>
                  <p className="font-extrabold text-gray-900 dark:text-white text-lg leading-tight">Years of</p>
                  <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          >

            <p className="text-base md:text-lg text-black-600 dark:text-black-300 mb-6 leading-relaxed max-w-2xl">
              At DogsLand, we believe that every dog has the potential to be a wonderful companion. Our proven training methods focus on positive reinforcement, building trust, and creating a strong bond between you and your dog.
            </p>
            <p className="text-base md:text-lg text-black-600 dark:text-black-300 mb-10 leading-relaxed max-w-2xl">
              Whether you have a brand new puppy or an older dog with behavioral issues, our certified trainers have the experience and passion to help you achieve your goals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 mb-12 w-fit sm:w-full max-w-2xl mx-auto lg:mx-0">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center justify-start gap-3.5">
                  <div className="bg-black-600 dark:bg-black-900 p-1.5 rounded-full shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-orange-800 dark:text-orange-600 shrink-0" />
                  </div>
                  <span className="font-semibold text-black-800 dark:text-black-200 text-sm md:text-base text-left">{feature}</span>
                </div>
              ))}
            </div>

            <Button to="/about" variant="primary" className="px-8 py-3.5 text-lg rounded-full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all">
              Discover Our Story
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
