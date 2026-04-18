import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn, MessageCircle } from 'lucide-react';
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
    <div className="min-h-screen bg-[#07090F] pb-20 md:pb-0">
      {/* Top-right Area de Membros access — visible on all breakpoints now */}
      <div className="fixed right-3 top-3 z-50 md:right-5 md:top-5">
        <Link
          to="/area-mentorando/login"
          aria-label="Entrar na area de membros"
          className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-[#0B1020]/90 px-3 py-2 text-[11px] font-semibold text-emerald-300 shadow-xl shadow-black/30 backdrop-blur transition hover:border-emerald-300/60 hover:bg-[#10182f] md:gap-2 md:px-5 md:py-3 md:text-sm"
        >
          <LogIn className="h-3.5 w-3.5 md:h-4 md:w-4" />
          <span className="sm:hidden">Membros</span>
          <span className="hidden sm:inline">Area de Membros</span>
        </Link>
      </div>

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

      {/* Bottom sticky CTA — mobile only, cleaner hierarchy */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-amber-500/20 bg-[#07090F]/95 backdrop-blur md:hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="mx-auto max-w-md px-3 py-2.5">
          <p className="mb-1.5 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-400/80">
            {MENTORING_SEATS_LEFT} vagas restantes
          </p>
          <div className="flex items-center gap-2">
            <a
              href={buildMentoringWhatsAppLink('Quero falar sobre a mentoria em Engenharia de IA.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2.5 text-xs font-bold text-black shadow-lg shadow-amber-500/20 active:scale-[0.98]"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Falar no WhatsApp
            </a>
            <Link
              to="/area-mentorando/login"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-3 py-2.5 text-[11px] font-semibold text-emerald-300 active:scale-[0.98]"
              aria-label="Entrar na area de membros"
            >
              <LogIn className="h-3.5 w-3.5" />
              Membros
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentoring;
