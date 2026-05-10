import React, { useState, useMemo } from 'react';
import { PuppyCard } from './PuppyCard';
import { puppies } from '../../data/mockData';
import { Search, Filter } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const PuppyListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("All");

  const breeds = useMemo(() => {
    const allBreeds = puppies.map(p => p.breed);
    return ["All", ...new Set(allBreeds)];
  }, []);

  const filteredPuppies = useMemo(() => {
    return puppies.filter(puppy => {
      const matchesSearch = puppy.breed.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBreed = selectedBreed === "All" || puppy.breed === selectedBreed;
      return matchesSearch && matchesBreed;
    });
  }, [searchTerm, selectedBreed]);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Available Puppies" 
          subtitle="Find Your Best Friend" 
          centered 
        />

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12">
          {/* Search */}
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="Search by breed..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow shadow-sm"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
          </div>

          {/* Breed Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
            <Filter className="text-muted-foreground w-5 h-5 mr-2 shrink-0" />
            {breeds.map(breed => (
              <button
                key={breed}
                onClick={() => setSelectedBreed(breed)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors border ${
                  selectedBreed === breed 
                    ? 'bg-primary text-primary-foreground border-primary' 
                    : 'bg-card text-foreground border-border hover:border-primary/50'
                }`}
              >
                {breed}
              </button>
            ))}
          </div>
        </div>

        {/* Puppy Grid */}
        {filteredPuppies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPuppies.map(puppy => (
              <PuppyCard key={puppy.id} puppy={puppy} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-foreground mb-2">No puppies found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or search term.</p>
          </div>
        )}
      </div>
    </section>
  );
};
