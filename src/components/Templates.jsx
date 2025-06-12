import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaStore, FaMobileAlt, FaShoppingCart, FaEye } from 'react-icons/fa';
import Button from './common/Button';

const Templates = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const templateCategories = [
    { id: 'all', name: 'All' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'app', name: 'Mobile App' },
  ];
  
  const templates = [
    {
      id: 1,
      title: "Developer Portfolio",
      description: "Modern portfolio template with dark mode and project showcase.",
      category: "portfolio",
      price: 29,
      originalPrice: 49,
      icon: <FaLaptopCode className="text-6xl text-white" />,
      color: "from-emerald-500 to-cyan-600",
      badge: "Popular"
    },
    {
      id: 2,
      title: "E-Commerce Pro",
      description: "Clean e-commerce template with product showcase and cart.",
      category: "ecommerce",
      price: 39,
      icon: <FaStore className="text-6xl text-white" />,
      color: "from-purple-500 to-pink-500",
      badge: "New"
    },
    {
      id: 3,
      title: "Mobile App Showcase",
      description: "App landing page with feature highlights and download CTA.",
      category: "app",
      price: 34,
      originalPrice: 59,
      icon: <FaMobileAlt className="text-6xl text-white" />,
      color: "from-yellow-500 to-red-500",
      badge: "Sale"
    }
  ];
  
  const filteredTemplates = activeFilter === 'all' 
    ? templates 
    : templates.filter(template => template.category === activeFilter);

  return (
    <section id="templates" className="py-20 bg-dark-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Templates</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Premium landing page templates designed for developers and startups. Fully responsive and customizable.
          </motion.p>
          
          {/* Template Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center flex-wrap mt-6 gap-2"
          >
            {templateCategories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-600 text-dark-900'
                    : 'bg-dark-700 text-light hover:bg-dark-600'
                }`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="template-card glass-effect bg-dark-700/50 rounded-xl overflow-hidden"
            >
              <div className={`h-48 bg-gradient-to-r ${template.color} flex items-center justify-center relative`}>
                {template.icon}
                {template.badge && (
                  <div className="absolute top-4 right-4 bg-dark-900/80 text-white text-xs px-2 py-1 rounded">
                    {template.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{template.title}</h3>
                  <span className="bg-emerald-500/10 text-emerald-500 text-sm px-2 py-1 rounded capitalize">
                    {template.category}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{template.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-emerald-400 font-bold text-lg">${template.price}</span>
                    {template.originalPrice && (
                      <span className="text-gray-500 line-through text-sm ml-2">${template.originalPrice}</span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button small icon={<FaShoppingCart />}>
                      Buy
                    </Button>
                    <Button small outline icon={<FaEye />}>
                      Preview
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button outline icon={<FaEye />}>
            View All Templates
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Templates;
