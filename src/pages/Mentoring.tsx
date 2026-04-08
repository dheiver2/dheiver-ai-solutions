import React from 'react';
import MentoringHero from '@/components/mentoring/MentoringHero';
import MentoringAuthority from '@/components/mentoring/MentoringAuthority';
import MentoringBenefits from '@/components/mentoring/MentoringBenefits';
import MentoringFaq from '@/components/mentoring/MentoringFaq';
import MentoringCta from '@/components/mentoring/MentoringCta';

const Mentoring = () => {
  return (
    <div className="min-h-screen bg-white">
      <section id="mentoring-hero">
        <MentoringHero />
      </section>

      <section id="mentoring-authority">
        <MentoringAuthority />
      </section>

      <section id="mentoring-benefits">
        <MentoringBenefits />
      </section>

      <section id="mentoring-faq">
        <MentoringFaq />
      </section>

      <section id="mentoring-cta">
        <MentoringCta />
      </section>
    </div>
  );
};

export default Mentoring;
