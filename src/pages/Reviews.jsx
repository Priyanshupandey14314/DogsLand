import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { AnimatedCard } from '../components/ui/AnimatedCard';
import { CTASection } from '../components/home/CTASection';
import { testimonials } from '../data/mockData';
import { Star, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const moreTestimonials = [
  ...testimonials,
  {
    id: 5,
    name: "Jessica Parker",
    role: "Poodle Owner",
    content: "The behavior correction classes were exactly what we needed. Our poodle used to bark at everything, but now he is so much calmer.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 6,
    name: "Thomas Wright",
    role: "Husky Owner",
    content: "Huskies are notoriously stubborn, but the trainers at DogsLand really know their stuff. Highly recommend the advanced obedience course.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
  }
];

export const Reviews = () => {
  return (
    <div className="pt-24 pb-0 bg-background">
      {/* Hero Section */}
      <section className="bg-accent/30 dark:bg-accent/5 py-16 mb-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Real Stories, <span className="text-primary">Real Results</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Don't just take our word for it. Read what our happy clients have to say about their experience with DogsLand.
            </p>
            
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="bg-white dark:bg-card px-6 py-4 rounded-2xl shadow-lg flex items-center gap-4">
                <div className="flex flex-col items-end">
                  <span className="text-3xl font-bold text-foreground">4.9</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <div className="h-12 w-px bg-border mx-2"></div>
                <div className="text-left">
                  <span className="block font-bold text-foreground">Google Reviews</span>
                  <span className="text-sm text-muted-foreground">Based on 500+ reviews</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {moreTestimonials.map((review, index) => (
            <AnimatedCard key={review.id} delay={index * 0.1} className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg text-foreground flex items-center gap-1">
                    {review.name} <CheckCircle className="w-4 h-4 text-green-500" />
                  </h3>
                  <span className="text-sm text-muted-foreground">{review.role}</span>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < review.rating ? 'fill-primary text-primary' : 'fill-muted text-muted'}`} 
                  />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                "{review.content}"
              </p>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="py-24 bg-secondary dark:bg-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Watch Their Transformations" subtitle="Video Testimonials" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[1, 2].map((item) => (
              <div key={item} className="relative rounded-3xl overflow-hidden aspect-video bg-black group cursor-pointer">
                <img 
                  src={`https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800&sig=${item}`} 
                  alt="Video thumbnail" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/40 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};
