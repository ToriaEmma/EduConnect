import React from 'react';
import { motion } from 'framer-motion';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25 focus:ring-primary",
    secondary: "bg-secondary text-white hover:bg-secondary-dark shadow-lg shadow-secondary/25 focus:ring-secondary",
    outline: "border-2 border-primary text-primary hover:bg-primary/5 focus:ring-primary",
    ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:ring-slate-400",
    danger: "bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/25 focus:ring-red-500",
    white: "bg-white text-slate-900 hover:bg-slate-50 shadow-lg shadow-white/25 focus:ring-white"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3.5 text-lg",
    icon: "p-2"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ y: -1 }}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
