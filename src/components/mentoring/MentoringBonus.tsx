import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MentoringBonus = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const bonuses = [
    { number: '01', title: 'Template de CV para IA', description: 'Modelo usado por engenheiros contratados em Big Techs brasileiras. Formatação ATS-friendly otimizada.', value: 'R$ 397' },
    { number: '02', title: 'Acesso à Comunidade Privada', description: 'Grupo exclusivo com mentorados, vagas em primeira mão e networking direto com profissionais de IA do mercado.', value: 'R$ 597' },
    { number: '03', title: '3 Entrevistas Simuladas', description: 'Mock interviews reais com feedback detalhado. O mesmo processo usado por Santander, Grupo Boticário e Petrobras.', value: 'R$ 1.197'},
  ];

  return (
    <div className="w-full py-20 md:py-28 bg-[#07090F] relative overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-amber-400 text-xs font-bold tracking-[0.2em] mb-4">BÔNUS EXCLUSIVOS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Além da mentoria, você leva{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">R$ 2.191 em bônus</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {bonuses.map((bonus, i) => (
            <motion.div
              key={bonus.number}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-[#0D1117] border border-slate-800/60 rounded-xl p-5 hover:border-amber-500/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="bg-gradient-to-br from-amber-500 to-orange-600 text-black text-xs font-bold w-7 h-7 rounded-lg flex items-center justify-center">
                    {bonus.number}
                  </span>
                  <p className="text-sm font-bold text-white">{bonus.title}</p>
                </div>
                <p className="text-xs text-slate-600 line-through">{bonus.value}</p>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed ml-10">{bonus.description}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm text-slate-500">
          Todos os bônus estão <span className="text-amber-400 font-semibold">inclusos gratuitamente</span> na mentoria.
        </p>
      </div>
    </div>
  );
};

export default MentoringBonus;
