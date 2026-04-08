import React from 'react';
import MentoringHero from '@/components/mentoring/MentoringHero';
import MentoringPain from '@/components/mentoring/MentoringPain';
import MentoringFuture from '@/components/mentoring/MentoringFuture';
import MentoringAuthority from '@/components/mentoring/MentoringAuthority';
import MentoringBenefits from '@/components/mentoring/MentoringBenefits';
import MentoringBonus from '@/components/mentoring/MentoringBonus';
import MentoringPricing from '@/components/mentoring/MentoringPricing';
import MentoringObjections from '@/components/mentoring/MentoringObjections';
import MentoringFaq from '@/components/mentoring/MentoringFaq';
import MentoringGuarantee from '@/components/mentoring/MentoringGuarantee';
import MentoringMedia from '@/components/mentoring/MentoringMedia';
import MentoringLeadCapture from '@/components/mentoring/MentoringLeadCapture';
import MentoringCta from '@/components/mentoring/MentoringCta';

const Mentoring = () => {
  return (
    <div className="min-h-screen bg-white">
      <section id="mentoring-hero">
        <MentoringHero />
      </section>

      <section id="mentoring-lead-capture">
        <MentoringLeadCapture />
      </section>

      <section id="mentoring-pain">
        <MentoringPain />
      </section>

      <section id="mentoring-future">
        <MentoringFuture />
      </section>

      <section id="mentoring-authority">
        <MentoringAuthority />
      </section>

      <section id="mentoring-media">
        <MentoringMedia />
      </section>

      <section id="mentoring-benefits">
        <MentoringBenefits />
      </section>

      <section id="mentoring-bonus">
        <MentoringBonus />
      </section>

      <section id="mentoring-pricing">
        <MentoringPricing />
      </section>

      <section id="mentoring-objections">
        <MentoringObjections />
      </section>

      <section id="mentoring-faq">
        <MentoringFaq />
      </section>

      <section id="mentoring-guarantee">
        <MentoringGuarantee />
      </section>

      <section id="mentoring-cta">
        <MentoringCta />
      </section>
    </div>
  );
};

export default Mentoring;
