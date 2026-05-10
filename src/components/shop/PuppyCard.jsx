import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { getWhatsAppLink, getCallLink } from '../../utils/contactHelper';

export const PuppyCard = ({ puppy }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = () => setCurrentImg((prev) => (prev + 1) % puppy.images.length);
  const prevImg = () => setCurrentImg((prev) => (prev - 1 + puppy.images.length) % puppy.images.length);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border group"
    >
      {/* Image Gallery */}
      <div className="relative h-64 overflow-hidden bg-muted">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImg}
            src={puppy.images[currentImg]}
            alt={`${puppy.breed} puppy`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        </AnimatePresence>
        
        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={prevImg} className="p-1 bg-black/50 text-white rounded-full hover:bg-black/70 transition">
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextImg} className="p-1 bg-black/50 text-white rounded-full hover:bg-black/70 transition">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md backdrop-blur-md ${
            puppy.status === 'Available' ? 'bg-green-500/90 text-white' : 'bg-destructive/90 text-white'
          }`}>
            {puppy.status}
          </span>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {puppy.images.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentImg(idx)}
              className={`w-2 h-2 rounded-full transition-all ${idx === currentImg ? 'bg-white w-4' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">{puppy.breed}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-md">
            {puppy.age}
          </span>
          <span className="px-2 py-1 bg-secondary/10 text-secondary text-sm font-semibold rounded-md">
            {puppy.color}
          </span>
        </div>

        <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
          {puppy.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 mt-auto">
          <a 
            href={getCallLink()} 
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-2.5 rounded-xl font-semibold transition-colors shadow-sm"
          >
            <Phone size={18} />
            Call Now
          </a>
          <a 
            href={getWhatsAppLink('puppy', puppy.breed)}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 rounded-xl font-semibold transition-colors shadow-sm"
          >
            <MessageCircle size={18} />
            Book via WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
};
