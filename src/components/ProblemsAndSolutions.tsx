import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface Problem {
  icon: React.ReactNode;
  title: string;
  problem: string;
  solution: string;
}

const ProblemsAndSolutions = () => {
  const problems: Problem[] = [
    {
      icon: <div className="text-2xl">📊</div>,
      title: "Dados Caóticos",
      problem: "Seus dados estão espalhados, desorganizados e não geram insights",
      solution: "IA que estrutura, limpa e transforma dados em inteligência competitiva"
    },
    {
      icon: <div className="text-2xl">⏱️</div>,
      title: "Processos Lentos",
      problem: "Tarefas repetitivas consomem 60% do tempo da sua equipe",
      solution: "Automação inteligente que libera equipe para estratégia e inovação"
    },
    {
      icon: <div className="text-2xl">🎯</div>,
      title: "Sem Previsibilidade",
      problem: "Você não consegue prever demanda, churn ou comportamento do cliente",
      solution: "Modelos preditivos que antecipam cenários e oportunidades"
    },
    {
      icon: <div className="text-2xl">🤖</div>,
      title: "IA Genérica",
      problem: "Soluções prontas não resolvem seus problemas únicos",
      solution: "IA customizada para seu negócio, indústria e desafios específicos"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-width section-padding">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Seus Problemas, Nossas Soluções
          </h2>
          <p className="text-lg text-gray-600">
            Deixe de perder tempo e dinheiro com soluções genéricas. 
            IA estratégica que entrega ROI real.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {problems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-red-600">Problema:</span> {item.problem}
                  </p>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-yellow-700">Solução:</span> {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemsAndSolutions;
