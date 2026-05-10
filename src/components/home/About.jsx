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
    <section id="about" className="py-24 bg-accent/30 dark:bg-accent/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=1000" 
                alt="Trainer with a dog" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 border-8 border-white/20 rounded-3xl z-10"></div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-white dark:bg-card p-6 rounded-2xl shadow-xl z-20 max-w-xs hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <span className="text-3xl font-bold text-primary">15+</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">Years of</p>
                  <p className="text-muted-foreground">Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <SectionHeading 
              title="We Understand Your Dog Better Than Anyone Else" 
              subtitle="About DogsLand" 
              centered={false} 
            />
            
            <p className="text-lg text-muted-foreground mb-6">
              At DogsLand, we believe that every dog has the potential to be a wonderful companion. Our proven training methods focus on positive reinforcement, building trust, and creating a strong bond between you and your dog.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you have a brand new puppy or an older dog with behavioral issues, our certified trainers have the experience and passion to help you achieve your goals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button to="/about" variant="primary">Discover Our Story</Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
