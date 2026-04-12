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
    <div className="min-h-screen bg-[#07090F]">
      {/* 1. GANCHO — Atenção imediata + promessa */}
      <section id="mentoring-hero">
        <MentoringHero />
      </section>

      {/* 2. DOR — Agita o problema */}
      <section id="mentoring-pain">
        <MentoringPain />
      </section>

      {/* 3. FUTURO — Mostra a transformação */}
      <section id="mentoring-future">
        <MentoringFuture />
      </section>

      {/* 4. LEAD CAPTURE — Agora que sentiu a dor e viu o futuro, captura o lead */}
      <section id="mentoring-lead-capture">
        <MentoringLeadCapture />
      </section>

      {/* 5. AUTORIDADE — Por que confiar em mim */}
      <section id="mentoring-authority">
        <MentoringAuthority />
      </section>

      {/* 6. MÍDIA — Prova social externa */}
      <section id="mentoring-media">
        <MentoringMedia />
      </section>

      {/* 7. BENEFÍCIOS — O que você recebe */}
      <section id="mentoring-benefits">
        <MentoringBenefits />
      </section>

      {/* 8. BÔNUS — Stack de valor */}
      <section id="mentoring-bonus">
        <MentoringBonus />
      </section>

      {/* 9. PREÇO — Ancoragem + oferta */}
      <section id="mentoring-pricing">
        <MentoringPricing />
      </section>

      {/* 10. GARANTIA — Inversão de risco */}
      <section id="mentoring-guarantee">
        <MentoringGuarantee />
      </section>

      {/* 11. OBJEÇÕES — Mata as últimas dúvidas */}
      <section id="mentoring-objections">
        <MentoringObjections />
      </section>

      {/* 12. FAQ — Perguntas técnicas */}
      <section id="mentoring-faq">
        <MentoringFaq />
      </section>

      {/* 13. CTA FINAL — Última chamada */}
      <section id="mentoring-cta">
        <MentoringCta />
      </section>
    </div>
  );
};

export default Mentoring;
