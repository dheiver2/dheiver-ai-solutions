import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Clock, Award } from 'lucide-react';

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
  roi: string;
}

const CasesShowcase = () => {
  const cases: CaseStudy[] = [
    {
      company: "Tech Fintech",
      industry: "Serviços Financeiros",
      challenge: "Detecção manual de fraude levava 48h, com taxa de erro de 15%",
      solution: "Sistema de IA com detecção em tempo real usando ML avançado",
      roi: "3.8x",
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
      roi: "4.2x",
      results: [
        { icon: <TrendingUp className="w-5 h-5" />, metric: "Conversão +", value: "38%" },
        { icon: <DollarSign className="w-5 h-5" />, metric: "Ticket Médio", value: "+45%" },
        { icon: <Users className="w-5 h-5" />, metric: "Satisfação", value: "4.8/5" },
      ]
    },
    {
      company: "Manufatura Premium",
      industry: "Indústria 4.0",
      challenge: "Manutenção corretiva causava 200h paradas/mês",
      solution: "IA preditiva monitorando 500+ sensores em tempo real",
      roi: "3.2x",
      results: [
        { icon: <Clock className="w-5 h-5" />, metric: "Downtime Reduzido", value: "87%" },
        { icon: <DollarSign className="w-5 h-5" />, metric: "Economia Manutenção", value: "$850k" },
        { icon: <TrendingUp className="w-5 h-5" />, metric: "Produtividade +", value: "62%" },
      ]
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-yellow-500/20 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow-400/10 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="container-width section-padding relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-500/50 text-yellow-300 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <Award className="w-4 h-4" />
            Casos de Sucesso
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Resultados que
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Transformam Negócios
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-100">
            Empresas que confiaram em nossas soluções de IA e aumentaram receita, reduziram custos e otimizaram operações
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cases.map((caseStudy, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:border-yellow-500/50 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/20"
            >
              {/* ROI Badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg px-4 py-2">
                  <p className="text-xs font-bold text-black uppercase tracking-widest">
                    <span className="text-lg">{caseStudy.roi}</span> ROI
                  </p>
                </div>
              </div>

              {/* Header */}
              <div className="mb-8 mt-6">
                <h3 className="text-2xl font-black text-white mb-3">{caseStudy.company}</h3>
                <div className="inline-flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <p className="text-sm font-bold text-yellow-300 uppercase tracking-widest">
                    {caseStudy.industry}
                  </p>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-6 mb-8 pb-8 border-b border-white/10">
                <div>
                  <p className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2">🎯 Desafio</p>
                  <p className="text-sm text-gray-100 leading-relaxed">{caseStudy.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2">✨ Solução</p>
                  <p className="text-sm text-gray-100 leading-relaxed">{caseStudy.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-4">
                <p className="text-xs font-bold text-yellow-400 uppercase tracking-widest">📊 Resultados</p>
                {caseStudy.results.map((result, resultIdx) => (
                  <div key={resultIdx} className="flex items-start gap-3 group/item">
                    <div className="w-8 h-8 rounded-lg bg-yellow-500/20 border border-yellow-500/50 flex items-center justify-center flex-shrink-0 text-yellow-400 group-hover/item:bg-yellow-500/40 group-hover/item:border-yellow-400 group-hover/item:text-yellow-300 transition-all">
                      {result.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-200 font-medium">{result.metric}</p>
                      <p className="text-xl font-black text-yellow-300 group-hover/item:text-yellow-200 transition-colors">{result.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#agendamento"
                className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-yellow-500/50 group-hover:scale-105"
              >
                Quero Resultados Similares
                <TrendingUp className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesShowcase;
