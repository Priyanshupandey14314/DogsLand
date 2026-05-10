import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PawPrint, CheckCircle, Shield, Activity, Lock, Home } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { AnimatedCard } from '../ui/AnimatedCard';
import { services } from '../../data/mockData';

const iconMap = {
  "paw": <PawPrint className="w-8 h-8 text-primary" />,
  "check-circle": <CheckCircle className="w-8 h-8 text-primary" />,
  "shield": <Shield className="w-8 h-8 text-primary" />,
  "activity": <Activity className="w-8 h-8 text-primary" />,
  "lock": <Lock className="w-8 h-8 text-primary" />,
  "home": <Home className="w-8 h-8 text-primary" />
};

export const ServicesList = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Premium Training Programs" 
          subtitle="Our Services" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <AnimatedCard key={service.id} delay={index * 0.1}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 dark:bg-card/90 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {service.description}
                </p>
                <Link 
                  to={`/services#${service.id}`}
                  className="inline-flex items-center font-semibold text-primary hover:text-secondary dark:hover:text-white transition-colors"
                >
                  Learn More <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
