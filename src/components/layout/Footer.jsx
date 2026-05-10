import React from 'react';
import { Link } from 'react-router-dom';
import { Dog, Share2, Camera, MessageCircle, Video, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary mb-6">
              <Dog className="w-8 h-8 text-primary" />
              <span className="text-white">Dogs<span className="text-primary">Land</span></span>
            </Link>
            <p className="text-gray-300 mb-6">
              Premium dog training services designed to transform your pet into a well-behaved, loyal companion through positive reinforcement.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Video className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/#about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/#services" className="text-gray-300 hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-primary transition-colors">Client Reviews</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-primary transition-colors">FAQ's</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-primary transition-colors">Latest News</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>123 Canine Avenue, Pet City, PC 12345</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hello@dogsland.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to get training tips and special offers directly to your inbox.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary hover:bg-[#e67a35] text-white font-medium py-3 rounded-lg transition-colors">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} DogsLand. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
