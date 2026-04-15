import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness, CalendarDays, Download } from 'lucide-react';
import { MENTORING_SEATS_LEFT, buildMentoringWhatsAppLink } from './mentoringConfig';

const MentoringHero = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const COUNTDOWN_KEY = 'mentoring_countdown_target';
    const DURATION_MS = 6245 * 1000;

    let targetTime = Number(localStorage.getItem(COUNTDOWN_KEY) || 0);
    if (!targetTime || targetTime <= Date.now()) {
      targetTime = Date.now() + DURATION_MS;
      localStorage.setItem(COUNTDOWN_KEY, String(targetTime));
    }

    const updateTimer = () => {
      const diff = Math.max(0, targetTime - Date.now());
      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
      if (diff <= 0) {
        targetTime = Date.now() + DURATION_MS;
        localStorage.setItem(COUNTDOWN_KEY, String(targetTime));
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#07090F] overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      {/* Ambient glow behind photo */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-amber-500/[0.08] blur-[100px]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-8">
        {/* ===== MOBILE: Stacked layout (photo first) ===== */}
        {/* ===== DESKTOP: Side by side ===== */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-12 md:items-center md:min-h-screen pt-8 md:pt-12">

          {/* PHOTO — Always visible first on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 md:order-2 pt-8 md:pt-0 flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-br from-amber-500/20 via-amber-500/5 to-transparent rounded-full blur-xl" />

              {/* Photo container */}
              <div className="relative w-52 h-64 md:w-72 md:h-[360px] lg:w-80 lg:h-[400px] overflow-hidden rounded-2xl ring-2 ring-amber-500/20 shadow-2xl shadow-amber-500/10">
                <img
                  src="/dheiver-photo.png"
                  alt="Dr. Dheiver Santos — Mentor de Engenharia de IA"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#07090F] to-transparent" />
              </div>

              {/* Name badge overlaying photo */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#0D1117]/90 backdrop-blur-sm border border-slate-700/60 rounded-full px-5 py-2 whitespace-nowrap">
                <p className="text-white text-sm font-bold">Dr. Dheiver Santos</p>
                <p className="text-amber-400 text-[10px] text-center font-medium">PhD • Prof. Federal • ML Engineer • 15+ anos</p>
              </div>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 md:order-1 mt-12 md:mt-0 text-center md:text-left pb-6 md:pb-0"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-400 text-[11px] font-semibold tracking-wide">
                MENTORIA 1:1 PARA TRANSIÇÃO DE CARREIRA EM IA
              </span>
            </div>

            <h1 className="text-[2.2rem] leading-[1.08] md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              Do zero à sua{' '}
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                primeira vaga em Engenharia de IA
              </span>{' '}
              com um plano claro de 90 dias
            </h1>

            <p className="text-[15px] md:text-lg text-slate-400 leading-relaxed mb-6 max-w-lg mx-auto md:mx-0">
              Mentoria individual com PhD e professor universitário para quem está partindo do zero em IA e quer sair com{' '}
              <strong className="text-slate-200">portfólio, rotina de estudos, revisão de currículo e preparação para entrevistas</strong>.
            </p>

            <div className="grid gap-3 mb-6 sm:grid-cols-3">
              {[
                { icon: CalendarDays, title: '12 semanas', text: 'roteiro objetivo para sair da dispersão' },
                { icon: BriefcaseBusiness, title: '5 projetos guiados', text: 'para montar um portfólio com narrativa' },
                { icon: Download, title: 'Sessões 1:1', text: 'com feedback real em currículo e entrevistas' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-800/80 bg-white/[0.03] p-4 text-left">
                  <item.icon className="mb-3 h-4 w-4 text-amber-400" />
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">{item.text}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 mb-5">
              <motion.a
                href={buildMentoringWhatsAppLink('Quero conversar sobre a mentoria em Engenharia de IA e entender se ela serve para mim.')}
                onClick={() => { if (typeof window !== 'undefined' && window.fbq) { window.fbq('track', 'Lead', { content_name: 'hero_whatsapp_cta' }); } }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/25"
              >
                Quero avaliar minha entrada na mentoria
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <a
                href="#mentoring-lead-capture"
                className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium text-sm px-8 py-3.5 rounded-xl transition-all duration-300"
              >
                Baixar trilha gratuita de 90 dias
              </a>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-[13px] text-slate-500">
              <span>✓ Garantia 14 dias</span>
              <span>✓ R$ 697/mês</span>
              <span>✓ {MENTORING_SEATS_LEFT} vagas restantes</span>
            </div>
          </motion.div>
        </div>

        {/* Countdown bar — sticky feel at bottom of hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pb-8 md:pb-12"
        >
          <div className="bg-[#0D1117] border border-slate-800/60 rounded-xl p-4 max-w-md mx-auto">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[11px] text-amber-400 font-bold tracking-wider">🔥 PRÓXIMA TURMA FECHA EM</p>
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            </div>
            <div className="flex justify-center gap-3">
              {[
                { value: timeLeft.hours, label: 'HRS' },
                { value: timeLeft.minutes, label: 'MIN' },
                { value: timeLeft.seconds, label: 'SEG' },
              ].map((unit, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span className="text-xl font-bold text-amber-500/40 self-start mt-1">:</span>}
                  <div className="text-center">
                    <div className="bg-[#161B22] rounded-lg px-3 py-1.5 min-w-[48px] border border-slate-700/50">
                      <p className="text-xl font-mono font-bold text-white tabular-nums">
                        {String(unit.value).padStart(2, '0')}
                      </p>
                    </div>
                    <p className="text-[9px] text-slate-500 font-medium mt-1">{unit.label}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <p className="text-center text-[11px] text-slate-500 mt-2">
              Apenas <span className="text-amber-400 font-semibold">{MENTORING_SEATS_LEFT} vagas restantes</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MentoringHero;
