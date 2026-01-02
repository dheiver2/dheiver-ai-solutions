import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

interface CaseStudy {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    icon: React.ReactNode;
    metric: string;
    value: string;
  }[];
}

const CasesShowcase = () => {
  const cases: CaseStudy[] = [
    {
      company: "Tech Fintech",
      industry: "Serviços Financeiros",
      challenge: "Detecção manual de fraude levava 48h, com taxa de erro de 15%",
      solution: "Sistema de IA com detecção em tempo real usando ML avançado",
      results: [
        { icon: <TrendingUp className="w-5 h-5" />, metric: "Redução de Fraude", value: "94%" },
        { icon: <Clock className="w-5 h-5" />, metric: "Tempo de Resposta", value: "2 min" },
        { icon: <DollarSign className="w-5 h-5" />, metric: "Economia Anual", value: "$2.1M" },
      ]
    },
    {
      company: "E-commerce Brasil",
      industry: "Varejo Digital",
      challenge: "Taxa de checkout abandonment de 72%, sem personalização",
      solution: "IA para recomendação de produtos e otimização de checkout",
      results: [
        { icon: <TrendingUp className="w-5 h-5" />, metric: "Conversão +", value: "38%" },
        { icon: <DollarSign className="w-5 h-5" />, metric: "Ticket Médio", value: "+45%" },
        { icon: <Users className="w-5 h-5" />, metric: "Satisfação", value: "4.8/5" },
      ]
    },
    {
      company: "Manufatura Premium",
      industry: "Indústria",
      challenge: "Manutenção corretiva causava 200h paradas/mês",
      solution: "IA preditiva monitorando 500+ sensores em tempo real",
      results: [
        { icon: <Clock className="w-5 h-5" />, metric: "Downtime Reduzido", value: "87%" },
        { icon: <DollarSign className="w-5 h-5" />, metric: "Economia Manutenção", value: "$850k" },
        { icon: <TrendingUp className="w-5 h-5" />, metric: "Produtividade +", value: "62%" },
      ]
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
            Resultados que Falam Sozinhos
          </h2>
          <p className="text-lg text-gray-600">
            Empresas que confiaram em nossas soluções de IA e transformaram seus negócios
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all"
            >
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{caseStudy.company}</h3>
                <p className="text-sm font-semibold text-blue-600 bg-blue-50 w-fit px-3 py-1 rounded-full">
                  {caseStudy.industry}
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Desafio</p>
                  <p className="text-sm text-gray-700">{caseStudy.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">O que Fizemos</p>
                  <p className="text-sm text-gray-700">{caseStudy.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="border-t border-gray-200 pt-6">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Resultados</p>
                <div className="space-y-3">
                  {caseStudy.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="text-yellow-600">{result.icon}</div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-700">{result.metric}</p>
                      </div>
                      <p className="font-bold text-lg text-yellow-600">{result.value}</p>
                    </div>
                  ))}
                </div>
              </div>
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
          <p className="text-gray-700 mb-4">Quer ver seu negócio crescer assim também?</p>
          <a
            href="#agendamento"
            className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-yellow-500 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
          >
            Agendar Consulta Estratégica
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CasesShowcase;
