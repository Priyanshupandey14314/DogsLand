import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Eye, Phone, MessageCircle } from 'lucide-react';
import { getWhatsAppLink, getCallLink } from '../../utils/contactHelper';

export const ProductCard = ({ product, onViewDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border group flex flex-col"
    >
      {/* Image Area */}
      <div className="relative h-56 bg-white overflow-hidden p-4 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badges */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-md shadow-sm">
              {product.badge}
            </span>
          </div>
        )}

        {/* Quick View Overlay Button */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={() => onViewDetails(product)}
            className="flex items-center gap-2 bg-white text-foreground px-4 py-2 rounded-full font-medium hover:bg-primary hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg"
          >
            <Eye size={18} />
            Quick View
          </button>
        </div>
      </div>

      {/* Details Area */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div className="text-xs font-semibold text-primary uppercase tracking-wider">
            {product.category}
          </div>
          <div className="font-bold text-lg text-foreground">
            ${product.price.toFixed(2)}
          </div>
        </div>

        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-1" title={product.name}>
          {product.name}
        </h3>

        <div className="flex gap-2 mb-4">
          <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs font-medium rounded">
            {product.size}
          </span>
          <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs font-medium rounded">
            {product.ageCategory}
          </span>
        </div>

        <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-grow">
          {product.description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          <a
            href={getCallLink()}
            className="flex-1 flex items-center justify-center bg-muted hover:bg-primary/10 text-foreground hover:text-primary py-2 rounded-lg transition-colors border border-border hover:border-primary/30"
            title="Call to Order"
          >
            <Phone size={18} />
          </a>
          <a
            href={getWhatsAppLink('product', product.name)}
            target="_blank"
            rel="noreferrer"
            className="flex-[3] flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-lg font-semibold transition-colors"
          >
            <MessageCircle size={18} />
            Inquire
          </a>
        </div>
      </div>
    </motion.div>
  );
};
