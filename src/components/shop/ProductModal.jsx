import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageCircle } from 'lucide-react';
import { getWhatsAppLink, getCallLink } from '../../utils/contactHelper';

export const ProductModal = ({ product, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [product]);

  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-card w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden relative flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={20} className="text-foreground" />
          </button>

          {/* Image Section */}
          <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-muted">
            <img 
              src={product.image} 
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {product.badge && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                  {product.badge}
                </span>
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/2 p-8 overflow-y-auto">
            <div className="mb-2 text-sm font-semibold text-primary uppercase tracking-wider">
              {product.category}
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">{product.name}</h2>
            <div className="text-3xl font-bold text-foreground mb-6">${product.price.toFixed(2)}</div>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between pb-4 border-b border-border">
                <span className="text-muted-foreground">Size/Weight</span>
                <span className="font-semibold text-foreground">{product.size}</span>
              </div>
              <div className="flex justify-between pb-4 border-b border-border">
                <span className="text-muted-foreground">Recommended For</span>
                <span className="font-semibold text-foreground">{product.ageCategory}</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              {product.description}
              <br/><br/>
              <em>* This item is available for pickup or local delivery. Please contact us to place your order.</em>
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href={getCallLink()}
                className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-xl font-semibold transition-colors shadow-sm"
              >
                <Phone size={18} />
                Call to Order
              </a>
              <a 
                href={getWhatsAppLink('product', product.name)}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-xl font-semibold transition-colors shadow-sm"
              >
                <MessageCircle size={18} />
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
