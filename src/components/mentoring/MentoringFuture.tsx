import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MentoringFuture = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const before = [
    'Sem direção na carreira',
    'Salário estagnado',
    'Sem portfólio em IA',
    'Perdido em tutoriais',
    'Inseguro em entrevistas',
    'Sem network na área',
  ];

  const after = [
    'Eng. de IA JR contratado',
    'Salário R$ 8K–15K',
    '5+ projetos no portfólio',
    'Domina LLMs e MLOps',
    'Confiante e preparado',
    'Network com profissionais',
  ];

  return (
    <div className="w-full py-20 md:py-28 bg-[#0D1117] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/[0.04] rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-amber-400 text-xs font-bold tracking-[0.2em] mb-4">DAQUI 90 DIAS...</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Imagine abrir o LinkedIn e ver<br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">"ML Engineer JR"</span>{' '}
            no seu perfil.
          </h2>
          <p className="text-base text-slate-400 max-w-lg mx-auto">
            Recrutadores te chamando. Salário 2-3x maior. Trabalhando com o que mais cresce no mundo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* ANTES */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#07090F] border border-red-500/20 rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <p className="text-xs font-bold text-red-400 tracking-wider">ANTES</p>
            </div>
            <ul className="space-y-3">
              {before.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-400">
                  <span className="text-red-500/60 text-xs">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* DEPOIS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-[#0D1117] to-[#111820] border border-amber-500/20 rounded-2xl p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/[0.05] rounded-full blur-[40px]" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <p className="text-xs font-bold text-amber-400 tracking-wider">DEPOIS</p>
              </div>
              <ul className="space-y-3">
                {after.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white">
                    <span className="text-amber-400 text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-8 text-sm text-slate-400"
        >
          A diferença entre os dois? <span className="text-amber-400 font-semibold">3 meses de mentoria.</span>
        </motion.p>
      </div>
    </div>
  );
};

export default MentoringFuture;
