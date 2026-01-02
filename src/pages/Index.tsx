import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemsAndSolutions from '@/components/ProblemsAndSolutions';
import CasesShowcase from '@/components/CasesShowcase';
import ServicesGrid from '@/components/ServicesGrid';
import PricingModels from '@/components/PricingModels';
import FAQSimple from '@/components/FAQSimple';
import SchedulingCTA from '@/components/SchedulingCTA';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section id="hero" className="scroll-mt-20">
        <HeroSection />
      </section>
      
      <section id="problemas" className="scroll-mt-20">
        <ProblemsAndSolutions />
      </section>

      <section id="cases" className="scroll-mt-20">
        <CasesShowcase />
      </section>

      <section id="servicos" className="scroll-mt-20">
        <ServicesGrid />
      </section>

      <section id="pricing" className="scroll-mt-20">
        <PricingModels />
      </section>

      <section id="faq" className="scroll-mt-20">
        <FAQSimple />
      </section>

      <section id="agendamento" className="scroll-mt-20">
        <SchedulingCTA />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
