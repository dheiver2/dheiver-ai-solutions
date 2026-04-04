import React from 'react';
import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const faqs: FAQItem[] = [
    {
      question: "Quanto tempo leva um projeto de IA?",
      answer: "Geralmente 4-8 semanas (Discovery 1 semana, Development 4-6 semanas, Testing 1 semana). O tempo pode ser mais rápido ou mais lento conforme a complexidade da solução e disponibilidade de dados."
    },
    {
      question: "Qual é a garantia do projeto?",
      answer: "Garantimos ROI mínimo de 2.5x em 90 dias ou reembolso parcial. Oferecemos acompanhamento contínuo e suporte 24/7 durante todo o período de otimização."
    },
    {
      question: "Como funciona o pagamento?",
      answer: "O pagamento funciona em 3 parcelas: 30% na assinatura do contrato, 40% na entrega da solução, e 30% após 90 dias (quando ROI é atingido). Alternativamente, oferecemos 10% de desconto para pagamento à vista."
    },
    {
      question: "Meus dados são seguros?",
      answer: "100% LGPD compliant. Implementamos criptografia end-to-end, não compartilhamos dados com terceiros, e realizamos auditoria trimestral de segurança. Assinamos NDA confidencial padrão."
    },
    {
      question: "Preciso de uma equipe técnica?",
      answer: "Não necessariamente. Fazemos todo o desenvolvimento e implementação. Apenas designamos um ponto de contato seu para alinhamentos semanais e documentação do processo."
    },
    {
      question: "Posso cancelar o contrato?",
      answer: "Sim, você pode cancelar com 30 dias de aviso prévio. Não há multas após cumprir todas as obrigações do período contratado. Entregamos toda a documentação e código-fonte."
    },
    {
      question: "Como é o suporte depois de finalizar?",
      answer: "Inclusos 12 meses de suporte técnico na solução implementada. Depois, oferecemos pacote de manutenção (R$ 2.000/mês) para otimizações contínuas e monitoramento de performance."
    },
    {
      question: "Vocês trabalham com empresas pequenas?",
      answer: "Sim! Especialmente. A consultoria é totalmente adaptada ao budget da empresa. Temos pacotes desde R$ 5 mil até R$ 250 mil+. O importante é o ROI gerado, não o tamanho da empresa."
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="container-width">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Responde às dúvidas mais comuns sobre nossos projetos de IA
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.05 }
            }
          }}
        >
          <Accordion.Root type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Accordion.Item
                  value={`item-${idx}`}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:border-yellow-500 transition-colors"
                >
                  <Accordion.Trigger className="w-full flex items-center justify-between gap-4 px-6 py-4 sm:py-5 bg-white hover:bg-gray-50 transition-colors text-left [&[data-state=open]]:bg-yellow-50">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0 transition-transform [data-state=open]:rotate-180" />
                  </Accordion.Trigger>

                  <Accordion.Content className="overflow-hidden animate-slideDown bg-gray-50 border-t border-gray-200">
                    <p className="text-sm sm:text-base text-gray-700 px-6 py-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion.Root>
        </motion.div>

        {/* CTA Text */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-base sm:text-lg">
            Ainda tem dúvidas?{' '}
            <a href="https://wa.me/5551989889898" target="_blank" rel="noopener noreferrer" className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors">
              Fale com nosso time
            </a>
          </p>
        </motion.div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            height: 0;
          }
          to {
            opacity: 1;
            height: var(--radix-accordion-content-height);
          }
        }

        .animate-slideDown {
          animation: slideDown 300ms ease-out;
        }
      `}</style>
    </section>
  );
};

export default FAQ;
