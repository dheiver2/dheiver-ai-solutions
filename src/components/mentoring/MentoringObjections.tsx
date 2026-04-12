import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MentoringObjections = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const objections = [
    { objection: '"Não tenho experiência com IA"', answer: 'Ótimo. A mentoria foi FEITA para quem está no zero. 70% dos mentorados nunca tinham tocado em Machine Learning. Em 4 semanas já estavam construindo modelos reais. A questão não é de onde você começa — é ter alguém te guiando.' },
    { objection: '"R$ 697/mês é caro"', answer: 'Caro é ganhar R$ 3.000 pelos próximos 5 anos porque você não investiu R$ 697 em si mesmo. Um Eng. de IA JR ganha R$ 8K-15K/mês — você recupera o investimento TOTAL no primeiro salário. Bootcamps cobram R$ 21.900 sem mentoria individual. Qual é o custo de NÃO fazer?' },
    { objection: '"Não tenho tempo"', answer: '1 hora por semana de sessão + 3-4h de prática. Menos que uma série na Netflix. A pergunta real é: você tem tempo para ficar MAIS 2 anos no mesmo cargo, com o mesmo salário, fazendo a mesma coisa?' },
    { objection: '"Existem cursos gratuitos"', answer: 'Sim. E é exatamente por isso que você ainda está aqui lendo isso em vez de trabalhando como Engenheiro de IA. Cursos ensinam teoria. Mentoria entrega portfólio REAL, preparação para entrevistas REAIS e um PhD te corrigindo em tempo real.' },
    { objection: '"E se não funcionar?"', answer: 'Participe das 2 primeiras sessões. Se você sentir que não é para você — por QUALQUER motivo — eu pessoalmente devolvo 100% do seu dinheiro. Sem burocracia, sem perguntas, sem ressentimento. O risco é literalmente zero. O único risco real é não tentar.' },
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
