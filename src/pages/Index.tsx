import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemsAndSolutions from '@/components/ProblemsAndSolutions';
import CasesShowcase from '@/components/CasesShowcase';
import ServicesGrid from '@/components/ServicesGrid';
import PricingModels from '@/components/PricingModels';
import SchedulingCTA from '@/components/SchedulingCTA';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      
      <section id="problemas">
        <ProblemsAndSolutions />
      </section>

      <section id="cases">
        <CasesShowcase />
      </section>

      <section id="servicos">
        <ServicesGrid />
      </section>

      <section id="pricing">
        <PricingModels />
      </section>

      <section id="agendamento">
        <SchedulingCTA />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
