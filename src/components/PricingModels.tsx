import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

interface PricingPlan {
  name: string;
  description: string;
  icon: string;
  popular?: boolean;
  features: string[];
  investment: string;
  timeline: string;
  bestFor: string;
}

const PricingModels = () => {
  const plans: PricingPlan[] = [
    {
      name: "Diagnóstico & Roadmap",
      description: "Entenda suas oportunidades",
      icon: "🔍",
      features: [
        "Análise de 3-5 processos",
        "Identificação de oportunidades IA",
        "Roadmap estratégico",
        "Estimativa de ROI",
        "Recomendações de tecnologia",
        "1 reunião de kickoff"
      ],
      investment: "R$ 5k - 15k",
      timeline: "2-4 semanas",
      bestFor: "Empresas explorando IA"
    },
    {
      name: "MVP & Prototipagem",
      description: "Valide sua ideia rapidamente",
      icon: "⚡",
      popular: true,
      features: [
        "Prototipagem de solução",
        "Dataset preparation",
        "Modelo inicial treinado",
        "Documentação técnica",
        "Plano de escalabilidade",
        "4 semanas de suporte"
      ],
      investment: "R$ 20k - 50k",
      timeline: "4-8 semanas",
      bestFor: "Validar conceito antes de escalar"
    },
    {
      name: "Implementação Completa",
      description: "Solução em produção",
      icon: "🚀",
      features: [
        "Desenvolvimento end-to-end",
        "Pipeline de dados",
        "Modelo em produção",
        "Dashboard & monitoramento",
        "Treinamento da equipe",
        "3 meses de suporte"
      ],
      investment: "R$ 60k - 250k+",
      timeline: "8-16 semanas",
      bestFor: "Implementação de IA estratégica"
    },
    {
      name: "Suporte & Evolução",
      description: "Otimize continuamente",
      icon: "📈",
      features: [
        "Monitoramento 24/7",
        "Otimização de modelos",
        "Novas features",
        "Retraining periódico",
        "Consultoria estratégica",
        "Acesso a especialistas"
      ],
      investment: "R$ 10k - 30k/mês",
      timeline: "Contínuo",
      bestFor: "Sistemas em produção"
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-width section-padding">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Modelos de Investimento Flexíveis
          </h2>
          <p className="text-lg text-gray-600">
            Do diagnóstico ao scaling. Escolha o modelo que faz sentido para seu negócio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl p-8 border transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white border-blue-600 shadow-xl transform lg:scale-105'
                  : 'bg-white border-gray-200 hover:shadow-lg'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-blue-700 px-4 py-1 rounded-full text-xs font-bold">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="text-4xl mb-4">{plan.icon}</div>

              {/* Title */}
              <h3 className={`text-2xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-4 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              {/* Investment */}
              <div className={`mb-2 pb-4 border-b ${plan.popular ? 'border-blue-500' : 'border-gray-200'}`}>
                <p className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-500'} mb-1`}>
                  Investimento
                </p>
                <p className={`text-2xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.investment}
                </p>
              </div>

              {/* Timeline */}
              <div className="mb-4">
                <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                  Timeline
                </p>
                <p className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-700'}`}>
                  {plan.timeline}
                </p>
              </div>

              {/* Best For */}
              <div className="mb-6">
                <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                  Ideal para
                </p>
                <p className={`text-sm ${plan.popular ? 'text-blue-50' : 'text-gray-600'}`}>
                  {plan.bestFor}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-yellow-300' : 'text-green-600'}`} />
                    <span className={plan.popular ? 'text-blue-50' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#agendamento"
                className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Conversar
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-2">Dúvida sobre qual modelo escolher?</h3>
          <p className="mb-4 text-blue-100">
            Nossa primeira consulta é gratuita. Vamos entender sua situação e recomendar o melhor caminho.
          </p>
          <a
            href="#agendamento"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Agendar Consulta Grátis
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingModels;
