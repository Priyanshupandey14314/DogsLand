import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { AnimatedCard } from '../components/ui/AnimatedCard';
import { blogs } from '../data/mockData';
import { Calendar, User, ArrowRight, Search, ChevronRight } from 'lucide-react';

export const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(blogs.map(blog => blog.category))];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredBlog = blogs[0];

  return (
    <div className="pt-24 pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Featured Blog */}
        {searchTerm === '' && activeCategory === 'All' && (
          <div className="mb-20">
            <SectionHeading title="Latest from Our Blog" subtitle="Training Insights" />
            
            <div className="relative rounded-3xl overflow-hidden group cursor-pointer h-[500px] shadow-2xl mt-12">
              <img 
                src={featuredBlog.image} 
                alt={featuredBlog.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 max-w-4xl">
                <span className="inline-block px-4 py-1 rounded-full bg-primary text-white text-sm font-bold mb-4">
                  {featuredBlog.category}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                  {featuredBlog.title}
                </h2>
                <p className="text-lg text-gray-300 mb-6 hidden md:block line-clamp-2">
                  {featuredBlog.excerpt}
                </p>
                <div className="flex items-center gap-6 text-gray-400 text-sm font-medium">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {featuredBlog.date}</span>
                  <span className="flex items-center gap-2"><User className="w-4 h-4" /> {featuredBlog.author}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredBlogs.map((blog, index) => (
                <AnimatedCard key={blog.id} delay={index * 0.1} className="flex flex-col h-full group cursor-pointer">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 dark:bg-black/90 backdrop-blur-sm text-foreground text-xs font-bold rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {blog.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 line-clamp-3 text-sm flex-grow">
                      {blog.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-sm font-medium flex items-center gap-2 text-foreground">
                        <img src={`https://i.pravatar.cc/150?u=${blog.author}`} alt="author" className="w-6 h-6 rounded-full" />
                        {blog.author}
                      </span>
                      <span className="text-primary font-medium flex items-center group-hover:translate-x-1 transition-transform">
                        Read <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>

            {filteredBlogs.length === 0 && (
              <div className="text-center py-20 bg-muted/30 rounded-2xl border border-dashed border-border">
                <p className="text-xl text-muted-foreground">No posts found matching your criteria.</p>
              </div>
            )}
            
            {/* Pagination Placeholder */}
            {filteredBlogs.length > 0 && (
              <div className="flex justify-center mt-12 gap-2">
                <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-medium">1</button>
                <button className="w-10 h-10 rounded-full bg-muted text-foreground hover:bg-muted/80 flex items-center justify-center font-medium transition-colors">2</button>
                <button className="w-10 h-10 rounded-full bg-muted text-foreground hover:bg-muted/80 flex items-center justify-center font-medium transition-colors">3</button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Search Widget */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-4">Search</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-none"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
            </div>

            {/* Categories Widget */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category}>
                    <button 
                      onClick={() => setActiveCategory(category)}
                      className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                        activeCategory === category 
                          ? 'bg-primary/10 text-primary font-bold' 
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      <span>{category}</span>
                      <ChevronRight className={`w-4 h-4 ${activeCategory === category ? 'text-primary' : 'opacity-0'}`} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {blogs.slice(1, 4).map(blog => (
                  <div key={blog.id} className="flex gap-4 group cursor-pointer">
                    <img src={blog.image} alt="thumbnail" className="w-20 h-20 rounded-lg object-cover" />
                    <div>
                      <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                        {blog.title}
                      </h4>
                      <span className="text-xs text-muted-foreground">{blog.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
