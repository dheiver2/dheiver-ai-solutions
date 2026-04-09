import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    <div className="relative w-full min-h-screen bg-[#07090F] overflow-hidden flex items-center">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      {/* Ambient glow */}
      <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-amber-500/[0.06] blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/[0.04] blur-[100px]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-400 text-xs font-semibold tracking-wide">
                3.000+ VAGAS DE IA ABERTAS ESTE MÊS
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              Torne-se{' '}
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                Engenheiro de IA
              </span>{' '}
              <br className="hidden md:block" />
              em 3 meses
            </h1>

            <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              Mentoria 1-on-1 com PhD que já entregou <strong className="text-slate-200">150+ projetos</strong> para
              Santander, Grupo Fleury e Petrobras.{' '}
              <strong className="text-slate-200">Mesmo sem experiência em IA.</strong>
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <motion.a
                href="https://wa.me/5551989889898?text=Quero%20mudar%20minha%20carreira%20com%20a%20mentoria%20em%20IA!"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm px-8 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-amber-500/25"
              >
                QUERO SER ENGENHEIRO DE IA
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </motion.a>
              <a
                href="#mentoring-lead-capture"
                className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium text-sm px-8 py-4 rounded-lg transition-all duration-300"
              >
                Baixar Trilha Gratuita
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-xs">✓</span>
                <span className="text-slate-400">Garantia 14 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-xs">✓</span>
                <span className="text-slate-400">R$ 578/mês</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-xs">✓</span>
                <span className="text-slate-400">3 vagas</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Stats card + Timer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Glow behind card */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-2xl blur-xl" />

            <div className="relative bg-[#0D1117] border border-slate-800/80 rounded-2xl p-8 backdrop-blur-sm">
              {/* Photo + Name */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-800/60">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-amber-500/30 flex-shrink-0">
                  <img
                    src="/dheiver-photo.png"
                    alt="Dr. Dheiver Santos"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-bold text-base">Dr. Dheiver Santos</p>
                  <p className="text-slate-400 text-sm">PhD • ML Engineer • 15+ anos</p>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <a href="https://orcid.org/0000-0002-8599-9436" target="_blank" rel="noopener noreferrer" className="text-center group">
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-to-b from-amber-400 to-amber-600 bg-clip-text text-transparent group-hover:from-amber-300 group-hover:to-amber-500 transition-all">100+</p>
                  <p className="text-[11px] text-slate-500 font-medium tracking-wider mt-1">ARTIGOS</p>
                </a>
                <div className="text-center border-x border-slate-800/60">
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-to-b from-amber-400 to-amber-600 bg-clip-text text-transparent">150+</p>
                  <p className="text-[11px] text-slate-500 font-medium tracking-wider mt-1">PROJETOS</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-to-b from-amber-400 to-amber-600 bg-clip-text text-transparent">40K+</p>
                  <p className="text-[11px] text-slate-500 font-medium tracking-wider mt-1">LEITORES</p>
                </div>
              </div>

              {/* Countdown */}
              <div className="bg-[#161B22] rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[11px] text-amber-400 font-bold tracking-wider">🔥 PRÓXIMA TURMA FECHA EM</p>
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                </div>
                <div className="flex justify-center gap-4">
                  {[
                    { value: timeLeft.hours, label: 'HRS' },
                    { value: timeLeft.minutes, label: 'MIN' },
                    { value: timeLeft.seconds, label: 'SEG' },
                  ].map((unit, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <span className="text-2xl font-bold text-amber-500/50 self-start">:</span>}
                      <div className="text-center">
                        <div className="bg-[#0D1117] rounded-lg px-3 py-2 min-w-[52px] border border-slate-700/50">
                          <p className="text-2xl font-mono font-bold text-white tabular-nums">
                            {String(unit.value).padStart(2, '0')}
                          </p>
                        </div>
                        <p className="text-[10px] text-slate-500 font-medium mt-1.5">{unit.label}</p>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
                <p className="text-center text-[11px] text-slate-500 mt-3">
                  Apenas <span className="text-amber-400 font-semibold">3 vagas restantes</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MentoringHero;
