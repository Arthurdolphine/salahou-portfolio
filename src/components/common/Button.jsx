import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  primary = false, 
  outline = false, 
  small = false, 
  fullWidth = false,
  icon = null,
  className = '',
  ...props 
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`
        flex items-center justify-center gap-2 font-bold rounded-lg transition
        ${small ? 'py-2 px-4 text-sm' : 'py-3 px-6'}
        ${fullWidth ? 'w-full' : ''}
        ${
          primary 
            ? 'bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-dark-900 shadow-lg shadow-emerald-500/20' 
            : outline 
              ? 'border border-emerald-400 text-emerald-400 hover:bg-emerald-400/10' 
              : 'bg-dark-800 text-light hover:bg-dark-700'
        }
        ${className}
      `}
      {...props}
    >
      {icon}
      {children}
    </motion.button>
  );
};

export default Button;
