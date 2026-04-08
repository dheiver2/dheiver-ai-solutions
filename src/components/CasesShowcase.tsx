import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, MessageCircle } from 'lucide-react';

interface CaseStudy {
  company: string;
  industry: string;
  challenge: string;
  result: string;
  roi: string;
}

const CasesShowcase = () => {
  const whatsappNumber = '5551989889898';

  const cases: CaseStudy[] = [
    {
      company: "Fintech de Investimentos",
      industry: "Serviços Financeiros",
      challenge: "Detecção de fraude manual levava 48h",
      result: "Detecção em tempo real - 94% de fraude evitada",
      roi: "3.8x"
    },
    {
      company: "E-commerce Brasil",
      industry: "Varejo Digital",
      challenge: "72% de abandono de carrinho",
      result: "38% de aumento em conversão com recomendação de IA",
      roi: "4.2x"
    },
  ];

  const getWhatsappLink = () => {
    const message = encodeURIComponent(
      'Olá! 👋 Quero implementar uma solução similar aos casos apresentados.'
    );
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <section className="py-20 md:py-28 bg-black text-white">
      <div className="container-width">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Resultados Reais
          </h2>
          <p className="text-base sm:text-lg text-gray-200">
            Empresas que transformaram negócios com nossas soluções.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto">
          {cases.map((caseStudy, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="border border-yellow-500/30 rounded-lg p-8 hover:border-yellow-500 hover:bg-yellow-500/5 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">{caseStudy.company}</h3>
                  <p className="text-xs sm:text-sm text-gray-300">{caseStudy.industry}</p>
                </div>
                <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg px-3 py-2 text-center flex-shrink-0">
                  <p className="text-xl sm:text-2xl font-bold text-yellow-400">{caseStudy.roi}</p>
                  <p className="text-xs text-yellow-300">ROI</p>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div>
                  <p className="text-xs font-semibold text-yellow-400 uppercase mb-2">Desafio</p>
                  <p className="text-sm sm:text-base text-gray-200">{caseStudy.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-yellow-400 uppercase mb-2">Resultado</p>
                  <p className="text-sm sm:text-base text-gray-200">{caseStudy.result}</p>
                </div>
              </div>

              <a
                href={getWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-sm sm:text-base transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                Quero algo assim
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesShowcase;
