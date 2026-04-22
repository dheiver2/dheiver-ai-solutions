import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import MentoringHero from '@/components/mentoring/MentoringHero';
import MentoringVideoPitch from '@/components/mentoring/MentoringVideoPitch';
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
import StickyBuyCta from '@/components/mentoring/StickyBuyCta';

const Mentoring = () => {
  // Auto-hide top-right Members badge on scroll-down so it stops covering
  // section content on mobile (e.g. pricing card title). Re-shows on scroll-up
  // and is always visible at the very top.
  const [navHidden, setNavHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const handle = () => {
      const y = window.scrollY;
      if (y < 120) {
        setNavHidden(false);
      } else if (y > lastY + 6) {
        setNavHidden(true);
      } else if (y < lastY - 6) {
        setNavHidden(false);
      }
      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handle);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#07090F] pb-20 md:pb-0">
      {/* Top-right Area de Membros access — auto-hides on scroll-down to avoid covering content */}
      <div
        className={`fixed right-3 top-3 z-50 md:right-5 md:top-5 transition-all duration-300 ease-out ${
          navHidden ? 'pointer-events-none -translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
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

      {/* 2. VSL — Vídeo de apresentação curto (60s) logo após o gancho */}
      <section id="mentoring-video-pitch" className="scroll-mt-24">
        <MentoringVideoPitch />
      </section>

      {/* 3. DOR — Agita o problema */}
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

      <StickyBuyCta />
    </div>
  );
};

export default Mentoring;
