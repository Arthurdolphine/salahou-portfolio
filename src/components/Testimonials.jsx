import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Startup Founder",
      content: "The developer portfolio template was exactly what I needed. Clean design and easy to customize. Highly recommended!",
      rating: 5
    },
    {
      name: "Sarah Smith",
      role: "UX Designer",
      content: "I've purchased several templates from Salahou. Each one is well-coded and follows modern design principles.",
      rating: 5
    },
    {
      name: "Michael Johnson",
      role: "Freelance Developer",
      content: "Saved me dozens of hours of development time. The documentation was clear and the support was responsive.",
      rating: 4.5
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    
    return stars;
  };

  return (
    <section id="testimonials" className="py-20 bg-dark-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Testimonials</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            What people say about my templates and services.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect bg-dark-700/50 rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
              <div className="flex mt-4">
                {renderStars(testimonial.rating)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
