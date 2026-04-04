import React from 'react';
import HeroSection from '@/components/HeroSection';
import CasesShowcase from '@/components/CasesShowcase';
import ServicesGrid from '@/components/ServicesGrid';
import HowItWorks from '@/components/HowItWorks';
import Certifications from '@/components/Certifications';
import Testimonials from '@/components/Testimonials';
import PricingModels from '@/components/PricingModels';
import FAQ from '@/components/FAQ';
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

      <section id="how-it-works" className="scroll-mt-20">
        <HowItWorks />
      </section>

      <section id="certifications" className="scroll-mt-20">
        <Certifications />
      </section>

      <section id="testimonials" className="scroll-mt-20">
        <Testimonials />
      </section>

      <section id="pricing" className="scroll-mt-20">
        <PricingModels />
      </section>

      <section id="faq" className="scroll-mt-20">
        <FAQ />
      </section>

      <section id="cta-final" className="scroll-mt-20">
        <CtaFinal />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
