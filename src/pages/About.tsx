
import React from 'react';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;
