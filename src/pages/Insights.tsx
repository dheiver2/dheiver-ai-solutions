
import React from 'react';
import Navigation from '@/components/Navigation';
import InsightsSection from '@/components/InsightsSection';
import Footer from '@/components/Footer';

const Insights = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <InsightsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Insights;
