import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { testimonials } from '../../data/mockData';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export const TestimonialsCarousel = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="What Our Clients Say" 
          subtitle="Success Stories" 
        />
        
        <div className="flex overflow-x-auto pb-12 pt-8 gap-6 snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[320px] md:min-w-[400px] flex-shrink-0 snap-center bg-card rounded-3xl p-8 shadow-xl relative border border-border"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/20" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground text-lg italic mb-8 relative z-10 line-clamp-4">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
