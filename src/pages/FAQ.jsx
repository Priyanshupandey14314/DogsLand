import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CTASection } from '../components/home/CTASection';
import { faqs } from '../data/mockData';
import { Search, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openId, setOpenId] = useState(null);

  const categories = ['All', ...new Set(faqs.map(faq => faq.category))];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="pt-32 pb-0 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6 mb-24">
        <SectionHeading title="Frequently Asked Questions" subtitle="We've Got Answers" />
        
        {/* Search and Filter */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search for answers..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary shadow-sm text-foreground"
            />
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category 
                    ? 'bg-primary text-white' 
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion list */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                key={faq.id} 
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm"
              >
                <button 
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:bg-muted"
                >
                  <span className="font-semibold text-lg text-foreground pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary transition-transform duration-300 shrink-0 ${openId === faq.id ? 'rotate-180' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No questions found matching your search.</p>
            </div>
          )}
        </div>
      </div>

      <CTASection />
    </div>
  );
};
