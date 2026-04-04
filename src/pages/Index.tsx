import React from 'react';
import HeroSection from '@/components/HeroSection';
import CasesShowcase from '@/components/CasesShowcase';
import ServicesGrid from '@/components/ServicesGrid';
import PricingModels from '@/components/PricingModels';
import CtaFinal from '@/components/CtaFinal';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section id="hero" className="scroll-mt-20">
        <HeroSection />
      </section>

      <section id="servicos" className="scroll-mt-20">
        <ServicesGrid />
      </section>

      <section id="cases" className="scroll-mt-20">
        <CasesShowcase />
      </section>

      <section id="pricing" className="scroll-mt-20">
        <PricingModels />
      </section>

      <section id="cta-final" className="scroll-mt-20">
        <CtaFinal />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
