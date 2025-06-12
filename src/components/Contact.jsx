import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane, FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Button from './common/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: 'general',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Have questions or want to discuss a custom template? Send me a message.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-dark-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" 
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-dark-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" 
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                <select 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-dark-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="general">General Inquiry</option>
                  <option value="support">Template Support</option>
                  <option value="custom">Custom Template Request</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5" 
                  className="w-full bg-dark-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" 
                  required
                ></textarea>
              </div>
              <Button 
                type="submit"
                primary 
                fullWidth
                icon={<FaPaperPlane />}
              >
                Send Message
              </Button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-emerald-400">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaEnvelope className="text-emerald-400 mt-1 mr-4" />
                  <span>contact@salahou.dev</span>
                </div>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-emerald-400 mt-1 mr-4" />
                  <span>Casablanca, Morocco</span>
                </div>
                <div className="flex items-start">
                  <FaPhoneAlt className="text-emerald-400 mt-1 mr-4" />
                  <span>+212 6XX XXX XXX</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-emerald-400">Follow Me</h3>
              <div className="flex space-x-4">
                {[
                  { icon: <FaGithub />, url: "#" },
                  { icon: <FaLinkedinIn />, url: "#" },
                  { icon: <FaTwitter />, url: "#" },
                  { icon: <FaInstagram />, url: "#" },
                  { icon: <FaYoutube />, url: "#" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center hover:bg-emerald-500 hover:text-dark-900 transition"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-emerald-400">Business Hours</h3>
              <div className="glass-effect bg-dark-800/50 rounded-lg p-4">
                <div className="flex justify-between py-2 border-b border-gray-700">
                  <span>Monday - Friday</span>
                  <span className="text-emerald-400">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Saturday - Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
