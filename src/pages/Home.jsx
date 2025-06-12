import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Templates from '../components/Templates';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-dark-800/[0.05] dark:bg-grid-light/5 bg-[size:20px_20px] z-0"></div>
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <Templates />
        <Skills />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
