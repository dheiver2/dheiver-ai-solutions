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
          <span className="inline-block text-amber-400 text-xs font-bold tracking-[0.2em] mb-3">GARANTIA INCONDICIONAL</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            14 dias ou seu<br />dinheiro de volta.
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed mb-4 max-w-md mx-auto">
            Participe das primeiras 2 sessões. Se sentir que não é para você,
            devolvemos <strong className="text-white">100% do valor</strong> sem
            burocracia, sem perguntas.
          </p>
          <p className="text-sm text-slate-500">
            Simples assim. O risco é <span className="text-amber-400 font-bold">zero</span>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MentoringGuarantee;
