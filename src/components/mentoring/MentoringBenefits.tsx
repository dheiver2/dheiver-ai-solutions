import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  MENTORING_INSTALLMENTS,
  MENTORING_MONTHLY_PRICE,
  MENTORING_PIX_DISCOUNT_PERCENT,
  MENTORING_PIX_PRICE,
  MENTORING_TOTAL_PRICE,
} from './mentoringConfig';

const MentoringBenefits = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const benefits = [
    { icon: '🚀', text: '5+ projetos reais' },
    { icon: '🎯', text: 'Mentoria 1-on-1 semanal' },
    { icon: '🤖', text: 'Workflow com Claude & Cursor' },
    { icon: '💻', text: 'Código em produção' },
    { icon: '🤝', text: 'Network profissional' },
    { icon: '📋', text: 'Prep. entrevistas' },
    { icon: '📜', text: 'Certificado' },
  ];

  const curriculum = [
    { month: 'Mês 1', title: 'Fundamentos', items: ['ML Fundamentals', 'Deep Learning', 'Classificador'], color: 'from-blue-500/20 to-blue-500/5', border: 'border-blue-500/20' },
    { month: 'Mês 2', title: 'GenAI & LLMs', items: ['LLMs Avançado', 'Workflow Claude & Cursor', 'Chatbot RAG', 'AI Agents'], color: 'from-purple-500/20 to-purple-500/5', border: 'border-purple-500/20' },
    { month: 'Mês 3', title: 'Produção', items: ['MLOps', 'Cloud Deploy', 'Projeto Final'], color: 'from-amber-500/20 to-amber-500/5', border: 'border-amber-500/20' },
  ];

  return (
    <div className="w-full py-20 md:py-28 bg-[#0D1117] relative overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">O que você recebe</h2>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-14">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="bg-[#161B22] border border-slate-800/60 rounded-xl p-4 flex items-center gap-3 hover:border-amber-500/30 transition-colors"
            >
              <span className="text-lg">{b.icon}</span>
              <span className="text-sm text-slate-300 font-medium">{b.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Curriculum */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xs font-bold text-slate-500 tracking-wider mb-6 text-center">PROGRAMA — 12 SEMANAS</p>
          <div className="grid md:grid-cols-3 gap-4">
            {curriculum.map((phase, idx) => (
              <div key={idx} className={`bg-gradient-to-b ${phase.color} border ${phase.border} rounded-xl p-6`}>
                <p className="text-amber-400 font-bold text-xs mb-1">{phase.month}</p>
                <h4 className="text-white font-bold text-lg mb-4">{phase.title}</h4>
                <ul className="space-y-2">
                  {phase.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-sm text-slate-300 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-amber-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* AI-Augmented Project callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 rounded-2xl border border-amber-500/25 bg-gradient-to-br from-amber-500/[0.06] to-transparent p-5 md:p-6"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <p className="text-[11px] font-bold text-amber-400 tracking-wider mb-2">
                🤖 PROJETO AI-AUGMENTED — DESTAQUE NO PORTFÓLIO
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Pelo menos <strong className="text-white">1 dos seus 5 projetos</strong> é construído com Claude + Cursor + Agents do início ao fim. Você não é "alguém que estuda IA" — você é{' '}
                <strong className="text-white">alguém que constrói com IA</strong>.
              </p>
            </div>
            <div className="flex items-center gap-2 md:gap-3 shrink-0">
              {[
                { src: '/logos/claude.svg', alt: 'Claude AI' },
                { src: '/logos/cursor.svg', alt: 'Cursor' },
                { src: '/logos/openai.svg', alt: 'ChatGPT' },
              ].map((l) => (
                <span
                  key={l.alt}
                  className="inline-flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-xl bg-white shadow-md"
                  title={l.alt}
                >
                  <img src={l.src} alt={`${l.alt} logo`} loading="lazy" className="h-5 w-5 md:h-6 md:w-6 object-contain" />
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Format + Investment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-4 mt-10"
        >
          <div className="bg-[#161B22] border border-slate-800/60 rounded-xl p-6">
            <p className="text-xs font-bold text-amber-400 tracking-wider mb-4">FORMATO</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• 1 encontro/semana</li>
              <li>• 3 meses total</li>
              <li>• Online ao vivo + gravado</li>
              <li>• Máximo 5 pessoas</li>
            </ul>
          </div>
          <div className="bg-[#161B22] border border-slate-800/60 rounded-xl p-6">
            <p className="text-xs font-bold text-amber-400 tracking-wider mb-4">INVESTIMENTO</p>
            <p className="text-3xl font-bold text-white">R$ {MENTORING_MONTHLY_PRICE}<span className="text-base text-slate-500 font-normal">/mês</span></p>
            <ul className="space-y-2 text-sm text-slate-400 mt-3">
              <li>• Total: R$ {MENTORING_TOTAL_PRICE} em {MENTORING_INSTALLMENTS} meses</li>
              <li>• {MENTORING_INSTALLMENTS}x sem juros no cartão</li>
              <li>• Pix à vista: R$ {MENTORING_PIX_PRICE} (-{MENTORING_PIX_DISCOUNT_PERCENT}%)</li>
              <li>• Garantia 14 dias</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MentoringBenefits;
