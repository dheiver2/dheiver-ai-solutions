import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Como funciona o processo de consultoria?",
      answer: "Iniciamos com uma consulta gratuita de 45 minutos para entender seu desafio. Depois fazemos diagnóstico técnico, apresentamos roadmap e orçamento, e implementamos a solução com suporte contínuo."
    },
    {
      question: "Qual é o investimento mínimo?",
      answer: "Começamos a partir de R$ 5k para diagnóstico e roadmap. Soluções MVP saem por R$ 20k-50k. Implementações completas variam de R$ 60k a R$ 250k+ dependendo da complexidade."
    },
    {
      question: "Quanto tempo leva para implementar uma solução?",
      answer: "Diagnóstico: 2-4 semanas. MVP: 4-8 semanas. Implementação completa: 8-16 semanas. O timeline exato depende do escopo e complexidade do projeto."
    },
    {
      question: "Vocês trabalham com empresas de qualquer tamanho?",
      answer: "Sim! Trabalhamos desde startups até grandes corporações. Temos experiência em e-commerce, fintech, manufatura, saúde, educação e logística."
    },
    {
      question: "O que inclui o suporte pós-implementação?",
      answer: "Oferecemos monitoramento 24/7, otimização contínua, retraining periódico de modelos, novas features e consultoria estratégica. Pacotes começam em R$ 10k/mês."
    },
    {
      question: "Como vocês garantem a qualidade da solução?",
      answer: "Usamos metodologias ágeis, testes rigorosos, documentação completa, treinamento da equipe e suporte contínuo. 98% de satisfação entre nossos clientes."
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-width">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600">
            Esclarecemos as principais dúvidas sobre consultoria em IA
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 text-lg pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-200 bg-gray-50"
                >
                  <div className="p-6 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 mb-4">Sua pergunta não está aqui?</p>
          <a
            href="#agendamento"
            className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
          >
            Agendar Consulta Gratuita
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
