import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MentoringPain = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const pains = [
    { icon: '📺', text: 'Você assiste tutoriais no YouTube há meses e continua no mesmo lugar' },
    { icon: '💰', text: 'Vê vagas de IA pagando R$ 8.000 a R$ 25.000 e não consegue aplicar' },
    { icon: '📂', text: 'Não tem portfólio, não tem experiência, não sabe por onde começar' },
    { icon: '🎓', text: 'Bootcamps cobram R$ 15.000+ e não te dão mentoria individual' },
  ];

  return (
    <div className="w-full py-20 md:py-28 bg-[#07090F] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-transparent" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-red-400 text-xs font-bold tracking-[0.2em] mb-4 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5">
            A VERDADE QUE NINGUÉM TE CONTA
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Enquanto você pensa,<br />
            <span className="text-red-400">alguém está tomando sua vaga.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="flex items-start gap-4 bg-[#0D1117] border border-slate-800/60 rounded-xl p-5 hover:border-red-500/30 transition-colors duration-300"
            >
              <span className="text-xl flex-shrink-0 mt-0.5">{pain.icon}</span>
              <p className="text-sm text-slate-300 leading-relaxed">{pain.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-6 text-center"
        >
          <p className="text-base font-semibold text-amber-300">
            O mercado de IA no Brasil cresce 35% ao ano.
          </p>
          <p className="text-sm text-slate-400 mt-1">
            Cada mês que passa, mais gente entra antes de você.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MentoringPain;
