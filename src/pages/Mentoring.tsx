import React from 'react';
import Navigation from '@/components/Navigation';
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
import { MENTORING_SEATS_LEFT, buildMentoringWhatsAppLink } from '@/components/mentoring/mentoringConfig';

const Mentoring = () => {
  return (
    <div className="min-h-screen bg-[#07090F] pb-24 md:pb-0">
      <Navigation />

      {/* 1. GANCHO — Atenção imediata + promessa */}
      <section id="mentoring-hero" className="scroll-mt-24">
        <MentoringHero />
      </section>

      {/* 2. DOR — Agita o problema */}
      <section id="mentoring-pain" className="scroll-mt-24">
        <MentoringPain />
      </section>

      {/* 3. FUTURO — Mostra a transformação */}
      <section id="mentoring-future" className="scroll-mt-24">
        <MentoringFuture />
      </section>

      {/* 4. LEAD CAPTURE — Agora que sentiu a dor e viu o futuro, captura o lead */}
      <section id="mentoring-lead-capture" className="scroll-mt-24">
        <MentoringLeadCapture />
      </section>

      {/* 5. AUTORIDADE — Por que confiar em mim */}
      <section id="mentoring-authority" className="scroll-mt-24">
        <MentoringAuthority />
      </section>

      {/* 6. MÍDIA — Prova social externa */}
      <section id="mentoring-media" className="scroll-mt-24">
        <MentoringMedia />
      </section>

      {/* 7. BENEFÍCIOS — O que você recebe */}
      <section id="mentoring-benefits" className="scroll-mt-24">
        <MentoringBenefits />
      </section>

      {/* 8. BÔNUS — Stack de valor */}
      <section id="mentoring-bonus" className="scroll-mt-24">
        <MentoringBonus />
      </section>

      {/* 9. PREÇO — Ancoragem + oferta */}
      <section id="mentoring-pricing" className="scroll-mt-24">
        <MentoringPricing />
      </section>

      {/* 10. GARANTIA — Inversão de risco */}
      <section id="mentoring-guarantee" className="scroll-mt-24">
        <MentoringGuarantee />
      </section>

      {/* 11. OBJEÇÕES — Mata as últimas dúvidas */}
      <section id="mentoring-objections" className="scroll-mt-24">
        <MentoringObjections />
      </section>

      {/* 12. FAQ — Perguntas técnicas */}
      <section id="mentoring-faq" className="scroll-mt-24">
        <MentoringFaq />
      </section>

      {/* 13. CTA FINAL — Última chamada */}
      <section id="mentoring-cta" className="scroll-mt-24">
        <MentoringCta />
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-amber-500/20 bg-[#07090F]/95 px-4 py-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-md items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold text-white">Mentoria em IA</p>
            <p className="text-[11px] text-amber-400">{MENTORING_SEATS_LEFT} vagas restantes nesta turma</p>
          </div>
          <a
            href={buildMentoringWhatsAppLink('Quero falar sobre a mentoria em Engenharia de IA.')}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 text-xs font-bold text-black shadow-lg shadow-amber-500/20"
          >
            Falar agora
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mentoring;
