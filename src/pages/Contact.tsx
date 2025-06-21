
import React from 'react';
import Navigation from '@/components/Navigation';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
