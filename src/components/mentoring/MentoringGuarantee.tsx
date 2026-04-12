import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MentoringGuarantee = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="w-full py-20 md:py-28 bg-[#0D1117]">
      <div ref={ref} className="max-w-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-[#161B22] to-[#0D1117] border border-amber-500/20 rounded-2xl p-8 md:p-10 text-center"
        >
          <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-5">
            <span className="text-3xl">🛡️</span>
          </div>
          <span className="inline-block text-amber-400 text-xs font-bold tracking-[0.2em] mb-3">GARANTIA INCONDICIONAL DE 14 DIAS</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Se não for o melhor investimento<br />da sua carreira, eu devolvo <span className="text-amber-400">cada centavo.</span>
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed mb-3 max-w-md mx-auto">
            Participe das primeiras 2 sessões completas. Faça os exercícios. Converse comigo.
            Se depois disso você sentir que não é para você — por <strong className="text-white">qualquer motivo</strong> —
            eu pessoalmente devolvo <strong className="text-white">100% do valor</strong>. Sem burocracia.
            Sem perguntas. Sem ressentimento.
          </p>
          <p className="text-sm text-slate-400 leading-relaxed mb-4 max-w-md mx-auto">
            E você ainda fica com todo o material das 2 primeiras semanas. <strong className="text-white">De graça.</strong>
          </p>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg px-4 py-3 inline-block">
            <p className="text-sm text-amber-400 font-bold">
              O risco é ZERO para você. Todo o risco é meu.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MentoringGuarantee;
