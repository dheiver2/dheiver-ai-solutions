import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MentoringBenefits = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const benefits = [
    { icon: '🚀', text: '5+ projetos reais' },
    { icon: '🎯', text: 'Mentoria 1-on-1 semanal' },
    { icon: '💻', text: 'Código em produção' },
    { icon: '🤝', text: 'Network profissional' },
    { icon: '📋', text: 'Prep. entrevistas' },
    { icon: '📜', text: 'Certificado' },
  ];

  const curriculum = [
    { month: 'Mês 1', title: 'Fundamentos', items: ['ML Fundamentals', 'Deep Learning', 'Classificador'], color: 'from-blue-500/20 to-blue-500/5', border: 'border-blue-500/20' },
    { month: 'Mês 2', title: 'GenAI & LLMs', items: ['LLMs Avançado', 'Fine-tuning', 'Chatbot RAG'], color: 'from-purple-500/20 to-purple-500/5', border: 'border-purple-500/20' },
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
            <p className="text-3xl font-bold text-white">R$ 697<span className="text-base text-slate-500 font-normal">/mês</span></p>
            <ul className="space-y-2 text-sm text-slate-400 mt-3">
              <li>• Total: R$ 2.091</li>
              <li>• Até 3x sem juros</li>
              <li>• Garantia 14 dias</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MentoringBenefits;
