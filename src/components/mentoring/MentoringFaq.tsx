import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { buildMentoringWhatsAppLink } from './mentoringConfig';

const MentoringFaq = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const faqs = [
    { id: '1', question: 'Qual nível de experiência necessário?', answer: 'Conhecimentos básicos de Python já ajudam, mas você consegue acompanhar mesmo começando do zero em IA.' },
    { id: '2', question: 'Já sou dev. Vale a pena ou é básico demais?', answer: 'A trilha é personalizada na sessão de diagnóstico — quem já tem base técnica pula fundamentos e foca em LLMs, RAG, MLOps e construção de portfólio aplicado, com projeto-âncora para mostrar à liderança ou usar em entrevistas de vaga IA pleno.' },
    { id: '3', question: 'Não quero mudar de emprego, quero ser promovido. Funciona?', answer: 'Sim. Os mesmos projetos guiados viram seu case interno: você apresenta entregas reais à liderança, justifica a promoção com resultados mensuráveis e ainda revisa o LinkedIn para se posicionar como o profissional de IA da sua área.' },
    { id: '4', question: 'Trabalho fora de tech. Tenho como me beneficiar?', answer: 'Se tem base mínima de programação, lógica ou análise de dados, sim. Se está totalmente fora de tech, te avisamos com clareza no diagnóstico antes de você comprar — preferimos te dizer que não é o momento certo do que vender mentoria que não vai funcionar.' },
    { id: '5', question: 'Quanto tempo dedicar por semana?', answer: '8-10 horas: 2-3h aula + 5-7h projetos. Você organiza seu próprio tempo.' },
    { id: '6', question: 'Posso assistir as aulas gravadas?', answer: 'Sim! Todas gravadas com acesso lifetime. Recomendamos participar ao vivo.' },
    { id: '7', question: 'E se eu quiser parar?', answer: 'Garantia de 14 dias com reembolso integral. Após, reembolso proporcional.' },
    { id: '8', question: 'Os projetos são reais?', answer: 'Sim! Datasets verdadeiros. Portfólio pronto para recrutadores ou para apresentar internamente.' },
    { id: '9', question: 'Tem auxílio para emprego?', answer: 'Sim! Prep. entrevistas, revisão CV, conexões com empresas — vale também para quem busca promoção interna ou recolocação lateral.' },
  ];

  return (
    <div className="w-full py-20 md:py-28 bg-[#07090F]">
      <div ref={ref} className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">Dúvidas Frequentes</h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * parseInt(faq.id) }}
              className="bg-[#0D1117] border border-slate-800/60 rounded-xl overflow-hidden"
            >
              <button
                className="w-full p-5 flex items-center justify-between text-left text-white hover:bg-white/[0.02] transition-colors"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                <span className="text-sm font-semibold pr-4">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openId === faq.id ? 45 : 0 }}
                  className="text-amber-400 text-lg flex-shrink-0"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-slate-500 text-sm mb-3">Outra dúvida? Respondo em até 2h</p>
          <a
            href={buildMentoringWhatsAppLink('Tenho uma dúvida sobre a mentoria em Engenharia de IA.')}
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-slate-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all"
          >
            WHATSAPP
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default MentoringFaq;
