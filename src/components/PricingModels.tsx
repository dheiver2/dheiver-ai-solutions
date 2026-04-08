import React from 'react';
import { motion } from 'framer-motion';
import { Check, MessageCircle } from 'lucide-react';

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  features: string[];
}

const PricingModels = () => {
  const whatsappNumber = '5551989889898';

  const plans: PricingPlan[] = [
    {
      name: "Mentoria",
      description: "Diagnóstico e estratégia de IA",
      price: "a partir de R$ 5.000",
      features: [
        "Análise de oportunidades",
        "Roadmap estratégico",
        "Estimativa de ROI",
        "Recomendações"
      ]
    },
    {
      name: "Implementação",
      description: "Solução personalizada em produção",
      price: "a partir de R$ 15.000",
      features: [
        "Desenvolvimento completo",
        "Integração de dados",
        "Dashboard e monitoramento",
        "Suporte 24/7"
      ]
    },
  ];

  const getWhatsappLink = (plan: string) => {
    const message = encodeURIComponent(
      `Olá! 👋 Gostaria de contratar o pacote ${plan}.`
    );
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container-width">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Investimento
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Pacotes simples e diretos para seu negócio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg p-8 hover:border-yellow-500 hover:bg-yellow-50/30 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">{plan.description}</p>

              <p className="text-2xl sm:text-3xl font-bold text-yellow-600 mb-6">{plan.price}</p>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                    <Check className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={getWhatsappLink(plan.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-base transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                Escolher pacote
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingModels;
