import React from 'react';
import MentoringHero from '@/components/mentoring/MentoringHero';
import MentoringAuthority from '@/components/mentoring/MentoringAuthority';
import MentoringBenefits from '@/components/mentoring/MentoringBenefits';
import MentoringFaq from '@/components/mentoring/MentoringFaq';
import MentoringCta from '@/components/mentoring/MentoringCta';
import Footer from '@/components/Footer';

const Mentoring = () => {
  return (
    <div className="min-h-screen bg-white">
      <section id="mentoring-hero" className="scroll-mt-20">
        <MentoringHero />
      </section>

      <section id="mentoring-authority" className="scroll-mt-20">
        <MentoringAuthority />
      </section>

      <section id="mentoring-benefits" className="scroll-mt-20">
        <MentoringBenefits />
      </section>

      <section id="mentoring-faq" className="scroll-mt-20">
        <MentoringFaq />
      </section>

      <section id="mentoring-cta" className="scroll-mt-20">
        <MentoringCta />
      </section>

      <Footer />
    </div>
  );
};

export default Mentoring;
