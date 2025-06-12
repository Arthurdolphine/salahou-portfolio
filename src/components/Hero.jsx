import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaPaperPlane } from 'react-icons/fa';
import Button from './common/Button';

const Hero = () => {
  const stats = [
    { value: "50+", label: "Templates Sold" },
    { value: "100%", label: "Satisfaction" },
    { value: "4.9", label: "Avg Rating" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Salahou</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-emerald-400 mb-6">Software Developer & Template Creator</h2>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              I create beautiful, responsive landing page templates for developers and businesses. 
              Built with modern technologies and optimized for performance. Check out my collection below!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                href="#templates" 
                primary 
                icon={<FaEye />}
              >
                View Templates
              </Button>
              
              <Button 
                href="#contact" 
                outline 
                icon={<FaPaperPlane />}
              >
                Contact Me
              </Button>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="glass-effect bg-dark-800/50 p-4 rounded-lg"
                >
                  <div className="text-3xl font-bold text-emerald-400">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl animate-pulse" />
              <img 
                src="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" 
                alt="Developer Illustration" 
                className="relative rounded-full w-full h-full object-cover border-4 border-emerald-400/30"
                loading="lazy"
              />
              <motion.div 
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -right-4 bg-emerald-500 text-dark-900 font-bold py-2 px-4 rounded-full shadow-lg flex items-center"
              >
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Available for work
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
