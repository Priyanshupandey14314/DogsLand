import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { AnimatedCard } from '../ui/AnimatedCard';
import { trainers } from '../../data/mockData';
import { Share2, MessageCircle, Camera } from 'lucide-react';

export const TrainersList = () => {
  return (
    <section className="py-24 bg-accent/30 dark:bg-accent/5">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Meet Our Expert Trainers" 
          subtitle="The Best In The Business" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {trainers.map((trainer, index) => (
            <AnimatedCard key={trainer.id} delay={index * 0.1} className="text-center group">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-white hover:text-primary transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                    <Share2 className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-white hover:text-primary transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-white hover:text-primary transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-150">
                    <Camera className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-1">{trainer.name}</h3>
                <p className="text-primary font-medium">{trainer.role}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
