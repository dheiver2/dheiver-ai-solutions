import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Tool = {
  logo: string;
  name: string;
  tagline: string;
  bullets: string[];
};

const tools: Tool[] = [
  {
    logo: '/logos/claude.svg',
    name: 'Claude AI',
    tagline: 'Pair-programming avançado e arquitetura de agentes.',
    bullets: ['RAG e context engineering', 'Sub-agents e orquestração', 'Janela de contexto longa'],
  },
  {
    logo: '/logos/cursor.svg',
    name: 'Cursor',
    tagline: 'IDE com IA nativa — 3-5x mais produtivo no código.',
    bullets: ['Composer e edits inline', 'Codebase Q&A com embeddings', 'Refactors agênticos'],
  },
  {
    logo: '/logos/openai.svg',
    name: 'ChatGPT',
    tagline: 'Prototipagem rápida, ideação e specs em minutos.',
    bullets: ['Custom GPTs e tools', 'Function calling', 'Code interpreter para análise'],
  },
];

const MentoringStack = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div className="w-full py-20 md:py-28 bg-[#0D1117] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-500/[0.04] rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-14"
        >
          <span className="inline-block text-amber-400 text-xs font-bold tracking-[0.2em] mb-4">
            STACK MODERNA — 2026
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            A diferença entre{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              estudar IA
            </span>{' '}
            e{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              trabalhar com IA
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A maioria das vagas júnior e pleno de IA hoje pede experiência prática com pelo menos uma destas ferramentas.
            Você sai da mentoria usando todas — como instrumento de trabalho diário, não como "estudei numa aula".
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-[#07090F] border border-slate-800/60 rounded-2xl p-6 hover:border-amber-500/40 transition-colors flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-lg shrink-0">
                  <img
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    loading="lazy"
                    className="w-7 h-7 object-contain"
                  />
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white">{tool.name}</h3>
              </div>

              <p className="text-sm text-slate-300 mb-5 leading-snug">
                {tool.tagline}
              </p>

              <ul className="space-y-2 mt-auto">
                {tool.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs md:text-sm text-slate-400">
                    <span className="text-amber-400 mt-0.5">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-slate-500 mt-10 max-w-2xl mx-auto"
        >
          Não é "ter visto IA". É{' '}
          <span className="text-amber-400 font-semibold">dominar o workflow</span>{' '}
          que recrutadores estão usando como filtro de entrada em vagas júnior e pleno.
        </motion.p>
      </div>
    </div>
  );
};

export default MentoringStack;
