import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { buildMentoringWhatsAppLink } from './mentoringConfig';

const MentoringFaq = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const faqs = [
    { id: '1', question: 'Qual nível de experiência necessário?', answer: 'Conhecimentos básicos de Python já ajudam, mas você consegue acompanhar mesmo começando do zero em IA.' },
    { id: '2', question: 'Quanto tempo dedicar por semana?', answer: '8-10 horas: 2-3h aula + 5-7h projetos. Você organiza seu próprio tempo.' },
    { id: '3', question: 'Posso assistir as aulas gravadas?', answer: 'Sim! Todas gravadas com acesso lifetime. Recomendamos participar ao vivo.' },
    { id: '4', question: 'E se eu quiser parar?', answer: 'Garantia de 14 dias com reembolso integral. Após, reembolso proporcional.' },
    { id: '5', question: 'Os projetos são reais?', answer: 'Sim! Datasets verdadeiros. Portfólio pronto para recrutadores.' },
    { id: '6', question: 'Tem auxílio para emprego?', answer: 'Sim! Prep. entrevistas, revisão CV, conexões com empresas.' },
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
