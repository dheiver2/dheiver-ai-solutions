import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MentoringObjections = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const objections = [
    { objection: '"Estou começando do zero em IA"', answer: 'Tudo bem. A mentoria foi desenhada para quem está partindo do zero, mas quer acelerar com sequência, feedback e aplicações reais. Você não precisa chegar sabendo IA; precisa chegar disposto a executar um plano claro.' },
    { objection: '"R$ 697/mês pesa no orçamento"', answer: 'Faz sentido olhar com cuidado para o investimento. Por isso a oferta inclui mentoria individual, revisão de currículo, projetos guiados e preparação para entrevistas. A pergunta útil aqui é: quanto custa continuar estudando sem direção por mais seis meses?' },
    { objection: '"Minha rotina já é corrida"', answer: 'A estrutura foi pensada para caber na vida real: um encontro por semana e uma trilha objetiva de prática. O foco não é consumir horas e horas de conteúdo, e sim transformar o pouco tempo disponível em progresso consistente.' },
    { objection: '"Já existem cursos gratuitos"', answer: 'Existem, e muitos são bons. O diferencial aqui não é só conteúdo: é diagnóstico do seu momento, correção de rota, portfólio com contexto e alguém experiente revisando o que você entrega.' },
    { objection: '"E se eu entrar e não for para mim?"', answer: 'Você participa das primeiras sessões, sente o ritmo da mentoria e decide com segurança. Se perceber que não faz sentido para o seu momento, a garantia de 14 dias reduz o risco dessa decisão.' },
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
            Respostas diretas para as objeções mais comuns
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
