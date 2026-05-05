import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness, CalendarDays, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
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
    <div className="relative w-full bg-[#07090F] overflow-hidden md:min-h-screen">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      {/* Ambient glow behind photo */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-amber-500/[0.08] blur-[100px]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-12 md:items-center md:min-h-screen pt-14 md:pt-12">

          {/* PHOTO — compact on mobile, prominent on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 md:order-2 pt-2 md:pt-0 flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-br from-amber-500/20 via-amber-500/5 to-transparent rounded-full blur-xl" />

              {/* Photo container — smaller on mobile to reduce scroll */}
              <div className="relative w-48 h-60 sm:w-56 sm:h-72 md:w-72 md:h-[360px] lg:w-80 lg:h-[400px] overflow-hidden rounded-2xl ring-2 ring-amber-500/20 shadow-2xl shadow-amber-500/10">
                <img
                  src="/dheiver-photo.png"
                  alt="Dr. Dheiver Santos — Mentor de Engenharia de IA"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay bottom */}
                <div className="absolute inset-x-0 bottom-0 h-20 md:h-24 bg-gradient-to-t from-[#07090F] to-transparent" />
              </div>

              {/* Name badge */}
              <div className="absolute -bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 bg-[#0D1117]/90 backdrop-blur-sm border border-slate-700/60 rounded-full px-4 py-2 md:px-5 md:py-2.5 whitespace-nowrap">
                <p className="text-white text-xs md:text-sm font-bold">Dr. Dheiver Santos</p>
                <p className="text-amber-400 text-[9px] md:text-[10px] text-center font-medium">PhD • Prof. Federal • ML Engineer</p>
              </div>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
           className="order-2 md:order-1 mt-8 md:mt-0 text-center md:text-left pb-6 md:pb-0"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3 py-1.5 mb-4 md:px-4 md:mb-5">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-400 text-[10px] md:text-[11px] font-semibold tracking-wide">
                MENTORIA 1:1 PARA TRANSIÇÃO EM IA
              </span>
            </div>

            <h1 className="text-[1.75rem] leading-[1.15] md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3 md:mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              Em 90 dias, sua{' '}
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                próxima conquista em IA
              </span>: vaga, promoção ou virar referência na sua área
            </h1>

            <p className="text-sm md:text-lg text-slate-400 leading-relaxed mb-5 md:mb-6 max-w-lg mx-auto md:mx-0">
              Mentoria 1:1 com PhD e professor universitário para profissionais — do zero ao tech mid-level — que querem sair com{' '}
              <strong className="text-slate-200">portfólio real, projetos em produção e plano concreto de carreira</strong>{' '}
              para serem contratados, promovidos ou se posicionarem como referência em IA.
            </p>

            <div className="grid gap-2.5 md:gap-3 mb-5 md:mb-6 grid-cols-1 sm:grid-cols-3">
              {[
                { icon: CalendarDays, title: '12 semanas', text: 'roteiro objetivo para sair da dispersão' },
                { icon: BriefcaseBusiness, title: '5 projetos guiados', text: 'para montar um portfólio com narrativa' },
                { icon: Download, title: 'Sessões 1:1', text: 'com feedback real em currículo e entrevistas' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl md:rounded-2xl border border-slate-800/80 bg-white/[0.03] p-3 md:p-4 text-left">
                  <item.icon className="mb-2 md:mb-3 h-4 w-4 text-amber-400" />
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Countdown bar — moved here so it's seen before CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-4 md:mb-5"
            >
              <div className="bg-[#0D1117] border border-slate-800/60 rounded-xl p-3 md:p-4 max-w-md mx-auto md:mx-0">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[10px] md:text-[11px] text-amber-400 font-bold tracking-wider">🔥 PRÓXIMA TURMA FECHA EM</p>
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                </div>
                <div className="flex justify-center gap-2 md:gap-3">
                  {[
                    { value: timeLeft.hours, label: 'HRS' },
                    { value: timeLeft.minutes, label: 'MIN' },
                    { value: timeLeft.seconds, label: 'SEG' },
                  ].map((unit, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <span className="text-lg md:text-xl font-bold text-amber-500/40 self-start mt-1">:</span>}
                      <div className="text-center">
                        <div className="bg-[#161B22] rounded-lg px-2.5 py-1.5 min-w-[44px] md:min-w-[48px] border border-slate-700/50">
                          <p className="text-lg md:text-xl font-mono font-bold text-white tabular-nums">
                            {String(unit.value).padStart(2, '0')}
                          </p>
                        </div>
                        <p className="text-[9px] text-slate-500 font-medium mt-1">{unit.label}</p>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA hierarchy — primary + secondary + tertiary text link */}
            <div className="flex flex-col gap-2.5 md:gap-3 mb-4 md:mb-5">
              <motion.a
                href={buildMentoringWhatsAppLink('Quero conversar sobre a mentoria e entender qual caminho se aplica ao meu caso (vaga, promoção ou virar referência em IA).')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { if (typeof window !== 'undefined' && window.fbq) { window.fbq('track', 'Lead', { content_name: 'hero_whatsapp_cta' }); } }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm px-6 md:px-8 py-3.5 md:py-4 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/25"
              >
                Quero avaliar minha entrada
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <a
                href="#mentoring-lead-capture"
                className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium text-sm px-6 md:px-8 py-3 md:py-3.5 rounded-xl transition-all duration-300"
              >
                Baixar trilha gratuita de 90 dias
              </a>
              <Link
                to="/area-mentorando/login"
                className="inline-flex items-center justify-center gap-1.5 text-xs md:text-sm font-medium text-amber-300 transition hover:text-amber-200"
              >
                Ver como funciona a area do mentorando
                <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap justify-center md:justify-start gap-x-3 gap-y-1 text-[12px] md:text-[13px] text-slate-500">
              <span>✓ Garantia 14 dias</span>
              <span>✓ R$ 697/mês</span>
              <span>✓ {MENTORING_SEATS_LEFT} vagas restantes</span>
            </div>

            {/* Stack strip — sinal visual de modernidade */}
            <div className="mt-4 md:mt-5 flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-2">
              <span className="text-[10px] md:text-[11px] font-bold tracking-wider text-slate-500">
                STACK QUE VOCÊ DOMINA
              </span>
              <a
                href="#mentoring-stack"
                aria-label="Saiba mais sobre a stack de IA do programa"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-white/[0.03] px-2.5 py-1 transition hover:border-amber-500/40"
              >
                {[
                  { src: '/logos/claude.svg', alt: 'Claude AI' },
                  { src: '/logos/cursor.svg', alt: 'Cursor' },
                  { src: '/logos/openai.svg', alt: 'ChatGPT' },
                ].map((l) => (
                  <span
                    key={l.alt}
                    className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-white shadow-sm"
                    title={l.alt}
                  >
                    <img src={l.src} alt={`${l.alt} logo`} loading="lazy" className="h-3 w-3 object-contain" />
                  </span>
                ))}
                <span className="text-[10px] md:text-[11px] text-slate-400">+ LLMs · MLOps · RAG</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom spacer */}
        <div className="pb-8 md:pb-12" />
      </div>
    </div>
  );
};

export default MentoringHero;
