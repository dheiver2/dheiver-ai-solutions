import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface Problem {
  title: string;
  problem: string;
  solution: string;
}

const ProblemsAndSolutions = () => {
  const problems: Problem[] = [
    {
      title: "Dados Fragmentados",
      problem: "Informações dispersas, inconsistentes e difíceis de transformar em decisão.",
      solution: "Arquitetura, qualidade e pipelines para converter dados em inteligência acionável."
    },
    {
      title: "Operação Ineficiente",
      problem: "Tarefas repetitivas e retrabalho consomem tempo e elevam custo operacional.",
      solution: "Automação inteligente com governança para escala, velocidade e previsibilidade."
    },
    {
      title: "Baixa Previsibilidade",
      problem: "Sem clareza de demanda, churn e comportamento, o planejamento vira tentativa e erro.",
      solution: "Modelos preditivos com monitoramento e melhoria contínua para decisões confiáveis."
    },
    {
      title: "Soluções Genéricas",
      problem: "Ferramentas prontas não endereçam contexto, dados e restrições do seu negócio.",
      solution: "Soluções sob medida (MVP → produção) alinhadas a ROI, risco e compliance."
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
    <section className="ui-section-light py-20 md:py-28">
      <div className="ui-grid-overlay" aria-hidden="true" />
      <div className="container-width">
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
          <p className="text-lg text-gray-600 leading-relaxed">
            Pare de desperdiçar tempo e orçamento com iniciativas sem direção.
            Construímos IA aplicada com método, governança e impacto mensurável.
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
              className="ui-card group p-8"
            >
              <div className="flex items-start justify-between gap-6 mb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Ponto {String(idx + 1).padStart(2, '0')}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">{item.title}</h3>
                </div>
                <div className="h-12 w-12 rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 flex items-center justify-center text-gray-400 group-hover:text-yellow-600 group-hover:border-yellow-200 transition-colors">
                  <span className="text-sm font-bold">{String(idx + 1).padStart(2, '0')}</span>
                </div>
              </div>

              <div className="space-y-5">
                <div className="rounded-xl border border-gray-200 bg-white/60 p-5 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Problema</p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">{item.problem}</p>
                </div>

                <div className="rounded-xl border border-yellow-200 bg-gradient-to-br from-yellow-50/80 to-white/70 p-5 backdrop-blur">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-8 w-8 rounded-lg bg-yellow-500/10 border border-yellow-300/40 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-yellow-700" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-yellow-800/80 mb-2">Solução</p>
                      <p className="text-sm md:text-base text-gray-800 leading-relaxed">{item.solution}</p>
                    </div>
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
