import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MentoringObjections = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const objections = [
    { objection: '"Não tenho experiência com IA"', answer: 'Perfeito. A mentoria começa do zero. 70% dos mentorados nunca tinham tocado em Machine Learning antes.' },
    { objection: '"R$ 697/mês é caro"', answer: 'Um engenheiro de IA JR ganha R$ 8.000-15.000/mês. O investimento total (R$ 2.091) se paga no primeiro salário. Bootcamps cobram R$ 21.900 sem mentoria individual.' },
    { objection: '"Não tenho tempo"', answer: 'São 1h por semana de sessão + 3-4h de prática. Menos que assistir uma série na Netflix.' },
    { objection: '"Existem cursos gratuitos"', answer: 'Cursos ensinam teoria. Mentoria entrega portfólio, networking e preparação para entrevistas reais.' },
    { objection: '"E se não funcionar?"', answer: 'Garantia incondicional de 14 dias. Se não gostar, devolvemos 100% do valor sem perguntas.' },
  ];

  return (
    <div className="w-full py-20 md:py-28 bg-[#0D1117]">
      <div ref={ref} className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-amber-400 text-xs font-bold tracking-[0.2em] mb-4">AINDA TEM DÚVIDAS?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Vou ser <span className="text-amber-400">brutalmente honesto</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {objections.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="bg-[#161B22] border border-slate-800/60 rounded-xl p-5 hover:border-amber-500/20 transition-colors"
            >
              <p className="text-sm font-bold text-white mb-1.5">{item.objection}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentoringObjections;
