import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, TrendingUp, Award } from 'lucide-react';

type Persona = {
  Icon: typeof Briefcase;
  label: string;
  description: string;
  before: string[];
  after: string[];
};

const personas: Persona[] = [
  {
    Icon: Briefcase,
    label: 'Quero minha primeira vaga em IA',
    description: 'Está partindo do zero (ou trocando de área) e quer entrar no mercado de IA.',
    before: [
      'Sem direção, perdido em tutoriais',
      'Sem portfólio para mostrar',
      'Inseguro em entrevistas técnicas',
    ],
    after: [
      'Eng. de IA JR contratado, R$ 8K–15K',
      '5+ projetos reais no portfólio',
      'CV + LinkedIn revisados, 3 mocks feitos',
    ],
  },
  {
    Icon: TrendingUp,
    label: 'Quero migrar para IA ou subir aqui dentro',
    description: 'Já é dev, analista ou tech mid-level — quer transição interna ou pular direto para vaga IA.',
    before: [
      'Stack travado em tarefas repetitivas',
      'Sem stack moderna (LLMs, MLOps)',
      'Sem case forte para mostrar à liderança',
    ],
    after: [
      'Promoção interna ou vaga IA pleno',
      'Domina LLMs, RAG e MLOps na prática',
      'Projeto-âncora aprovado pela liderança',
    ],
  },
  {
    Icon: Award,
    label: 'Quero virar referência em IA na empresa',
    description: 'Já trabalha com tech ou dados — quer se posicionar como o profissional de IA da área.',
    before: [
      'Tech invisível, sem autoridade reconhecida',
      'LinkedIn parado, sem narrativa de IA',
      'Sem network ativo no ecossistema',
    ],
    after: [
      'Referência técnica de IA dentro da empresa',
      '5 projetos publicados com narrativa clara',
      'LinkedIn posicionado, network ativo',
    ],
  },
];

const MentoringFuture = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div className="w-full py-20 md:py-28 bg-[#0D1117] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/[0.04] rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-14"
        >
          <span className="inline-block text-amber-400 text-xs font-bold tracking-[0.2em] mb-4">DAQUI 90 DIAS...</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Qual é a{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">sua próxima conquista</span>{' '}
            em IA?
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto">
            Mesmo programa, mesma mentoria 1:1 — trilha ajustada ao seu ponto de partida e ao seu objetivo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {personas.map((persona, i) => (
            <motion.div
              key={persona.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-[#07090F] border border-slate-800/60 rounded-2xl p-6 hover:border-amber-500/30 transition-colors flex flex-col"
            >
              <persona.Icon className="w-6 h-6 text-amber-400 mb-3" aria-hidden />
              <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-snug">
                {persona.label}
              </h3>
              <p className="text-xs md:text-sm text-slate-400 mb-5 leading-relaxed">
                {persona.description}
              </p>

              {/* ANTES */}
              <div className="mb-4">
                <p className="text-[10px] font-bold text-red-400 tracking-wider mb-2">ANTES</p>
                <ul className="space-y-1.5">
                  {persona.before.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs md:text-sm text-slate-400 leading-snug">
                      <span className="text-red-500/60 mt-0.5">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* DEPOIS */}
              <div className="bg-gradient-to-br from-amber-500/5 to-transparent border border-amber-500/15 rounded-xl p-4 mt-auto">
                <p className="text-[10px] font-bold text-amber-400 tracking-wider mb-2">DEPOIS</p>
                <ul className="space-y-1.5">
                  {persona.after.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs md:text-sm text-white leading-snug">
                      <span className="text-amber-400 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-slate-400">
            A diferença entre os dois?{' '}
            <span className="text-amber-400 font-semibold">
              90 dias de mentoria com quem já entregou IA em Santander, Boticário, Fleury e Petrobras.
            </span>
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Você não precisa de mais um curso. Precisa de alguém que já chegou onde você quer ir te mostrando o caminho.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MentoringFuture;
