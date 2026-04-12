import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MentoringPain = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const pains = [
    { icon: '📺', text: 'Assiste tutoriais no YouTube há meses — e o máximo que construiu foi um "hello world" de ML que não impressiona ninguém' },
    { icon: '💰', text: 'Abre o LinkedIn e vê 47 vagas de IA pagando R$ 8.000 a R$ 25.000... mas nem consegue passar na triagem do currículo' },
    { icon: '📂', text: 'Seu portfólio está vazio. Recrutadores olham seu GitHub em 8 segundos e seguem para o próximo candidato' },
    { icon: '🎓', text: 'Já pesquisou bootcamps a R$ 21.900 e pós-graduações a R$ 24.000 — e mesmo assim, nenhum te dá mentoria individual' },
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
            Eu já vi isso acontecer<br />
            <span className="text-red-400">300 vezes.</span>
          </h2>
          <p className="text-base text-slate-400 mt-4 max-w-xl mx-auto">
            Pessoas inteligentes, capazes, que ficam travadas no ciclo de "estudar sozinhas" por 1, 2, 3 anos — enquanto gente com metade da capacidade passa na frente porque teve orientação certa.
          </p>
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
            Enquanto você lê isso, 12 pessoas acabaram de se candidatar para a vaga de IA que você queria.
          </p>
          <p className="text-sm text-slate-400 mt-1">
            O mercado de IA cresce 35% ao ano. A pergunta não é SE vai ter vaga — é se VOCÊ vai estar pronto quando ela aparecer.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MentoringPain;
