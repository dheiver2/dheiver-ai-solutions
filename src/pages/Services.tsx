
import React from 'react';
import Navigation from '@/components/Navigation';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
