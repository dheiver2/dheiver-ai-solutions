import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  MENTORING_DISPLAY_PHONE,
  MENTORING_MONTHLY_PRICE,
  MENTORING_SEATS_LEFT,
  buildMentoringWhatsAppLink,
} from './mentoringConfig';

const MentoringCta = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    const COUNTDOWN_KEY = 'mentoring_cta_countdown_target';
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
    <div className="w-full py-20 md:py-28 bg-[#07090F] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/[0.05] rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Nos próximos 90 dias, você pode seguir em tentativa e erro ou{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">entrar com um plano acompanhado.</span>
          </h2>

          <p className="text-base text-slate-400 mb-4 max-w-lg mx-auto">
            Se a sua meta é migrar para IA com mais clareza, esta mentoria junta direção, execução e feedback em um só lugar.
          </p>
          <p className="text-sm text-amber-400/80 font-medium mb-8 max-w-lg mx-auto">
            Você não precisa fazer tudo sozinho para começar certo.
          </p>

          {/* Timer */}
          <div className="bg-[#0D1117] border border-slate-800/60 rounded-xl p-5 mb-8 inline-block w-full max-w-sm">
            <p className="text-[11px] text-amber-400 font-bold tracking-wider mb-3">INSCRIÇÕES FECHAM EM</p>
            <div className="flex justify-center gap-4">
              {[
                { value: timeLeft.hours, label: 'HRS' },
                { value: timeLeft.minutes, label: 'MIN' },
                { value: timeLeft.seconds, label: 'SEG' },
              ].map((unit, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span className="text-2xl font-bold text-amber-500/40 self-start mt-1">:</span>}
                  <div className="text-center">
                    <div className="bg-[#161B22] rounded-lg px-3 py-2 min-w-[52px] border border-slate-700/50">
                      <p className="text-2xl font-mono font-bold text-white tabular-nums">{String(unit.value).padStart(2, '0')}</p>
                    </div>
                    <p className="text-[10px] text-slate-500 font-medium mt-1.5">{unit.label}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          <motion.a
            href={buildMentoringWhatsAppLink('Quero reservar uma conversa sobre a mentoria em Engenharia de IA.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { if (typeof window !== 'undefined' && window.fbq) { window.fbq('track', 'Lead', { content_name: 'cta_final_whatsapp' }); } }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block w-full max-w-sm mx-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-base py-4 rounded-lg transition-all duration-300 shadow-lg shadow-amber-500/25 mb-3"
          >
            Quero conversar sobre a mentoria →
          </motion.a>

          <p className="text-xs text-slate-500 font-medium mb-8">
            ✓ R$ {MENTORING_MONTHLY_PRICE}/mês &nbsp;|&nbsp; ✓ {MENTORING_SEATS_LEFT} vagas restantes &nbsp;|&nbsp; ✓ Garantia 14 dias
          </p>

          {/* Steps */}
          <div className="flex justify-center gap-8 text-sm text-slate-500 mb-8">
            {[
              { n: '1', label: 'WhatsApp' },
              { n: '2', label: 'Conversa' },
              { n: '3', label: 'Inscrição' },
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="bg-amber-500/20 text-amber-400 w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">{step.n}</span>
                <span>{step.label}</span>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="pt-6 border-t border-slate-800/60">
            <a href={buildMentoringWhatsAppLink('Quero tirar uma dúvida rápida sobre a mentoria em IA.')} className="text-amber-400 font-bold text-sm hover:text-amber-300 transition-colors">
              {MENTORING_DISPLAY_PHONE}
            </a>
            <p className="text-xs text-slate-500 mt-1">Dr. Dheiver Santos • PhD • Prof. Universidades Federais</p>
          </div>

          {/* Trademarks disclaimer */}
          <p className="mt-8 text-[10px] leading-relaxed text-slate-600 max-w-xl mx-auto">
            Claude, Cursor e ChatGPT são marcas registradas dos seus respectivos proprietários (Anthropic, Anysphere e OpenAI). O programa ensina o uso profissional destas ferramentas — não há afiliação, parceria ou endosso oficial.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MentoringCta;
