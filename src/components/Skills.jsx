import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, level: 95, color: "text-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt />, level: 90, color: "text-blue-500" },
    { name: "JavaScript", icon: <FaJs />, level: 85, color: "text-yellow-500" },
    { name: "React", icon: <FaReact />, level: 80, color: "text-blue-400" },
    { name: "Node.js", icon: <FaNodeJs />, level: 75, color: "text-green-500" },
    { name: "MongoDB", icon: <FaDatabase />, level: 70, color: "text-blue-600" },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Technologies and tools I use to create high-quality templates.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-item glass-effect bg-dark-800/50 rounded-lg p-6 text-center hover:bg-dark-700 transition"
            >
              <div className={`text-4xl mb-3 ${skill.color}`}>
                {skill.icon}
              </div>
              <h3 className="font-medium">{skill.name}</h3>
              <div className="w-full bg-dark-700 rounded-full h-2 mt-3">
                <div 
                  className={`h-2 rounded-full ${skill.color.replace('text', 'bg')}`} 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
