import React from 'react';
import { Hero } from '../components/home/Hero';
import { About } from '../components/home/About';
import { OwnerMessage } from '../components/home/OwnerMessage';
import { ServicesList } from '../components/home/ServicesList';
import { Stats } from '../components/home/Stats';
import { TrainersList } from '../components/home/TrainersList';
import { TestimonialsCarousel } from '../components/home/TestimonialsCarousel';
import { CTASection } from '../components/home/CTASection';

export const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <OwnerMessage />
      <ServicesList />
      <Stats />
      <TrainersList />
      <TestimonialsCarousel />
      <CTASection />
    </div>
  );
};
