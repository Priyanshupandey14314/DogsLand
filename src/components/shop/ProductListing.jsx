import React, { useState, useMemo } from 'react';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { products } from '../../data/mockData';
import { Search, Filter, ShoppingBag } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const ProductListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = useMemo(() => {
    const allCategories = products.map(p => p.category);
    return ["All", ...new Set(allCategories)];
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section className="py-24 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <ShoppingBag className="w-8 h-8 text-primary" />
          </div>
        </div>
        <SectionHeading 
          title="Premium Pet Products" 
          subtitle="Everything Your Dog Needs" 
          centered 
        />

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12">
          {/* Category Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
            <Filter className="text-muted-foreground w-5 h-5 mr-2 shrink-0" />
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors border ${
                  selectedCategory === category 
                    ? 'bg-primary text-primary-foreground border-primary' 
                    : 'bg-card text-foreground border-border hover:border-primary/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80 lg:w-96">
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow shadow-sm"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onViewDetails={setSelectedProduct} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-card rounded-3xl border border-border">
            <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-2xl font-bold text-foreground mb-2">No products found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or search term.</p>
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
};
