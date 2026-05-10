import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Button = ({ children, to, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[#e67a35] focus:ring-[var(--primary)]",
    secondary: "bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[#4a3024] focus:ring-[var(--secondary)]",
    outline: "border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] focus:ring-[var(--primary)]",
    ghost: "bg-transparent text-[var(--foreground)] hover:bg-[var(--muted)] focus:ring-[var(--muted)]",
  };

  const combinedClasses = `${baseStyle} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={combinedClasses}
      {...props}
    >
      {children}
    </motion.button>
  );
};
