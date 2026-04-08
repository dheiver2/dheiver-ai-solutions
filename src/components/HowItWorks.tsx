import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Rocket, TrendingUp } from 'lucide-react';

interface Step {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HowItWorks = () => {
  const steps: Step[] = [
    {
      number: 1,
      icon: <Search className="w-8 h-8" />,
      title: "Discovery",
      description: "Entendemos seus desafios, objetivos e contexto de negócio"
    },
    {
      number: 2,
      icon: <FileText className="w-8 h-8" />,
      title: "Proposal",
      description: "Apresentamos solução personalizada, timeline e investimento"
    },
    {
      number: 3,
      icon: <Rocket className="w-8 h-8" />,
      title: "Implementation",
      description: "Desenvolvemos, integramos e testamos a solução de IA"
    },
    {
      number: 4,
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Optimization",
      description: "Monitoramos, otimizamos e garantimos ROI"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="container-width">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Nosso processo comprovado em 4 etapas para transformar seu negócio
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, idx) => (
            <motion.div key={idx} variants={itemVariants} className="relative">
              <div className="border border-gray-200 rounded-lg p-6 md:p-8 hover:border-yellow-500 hover:bg-yellow-50/30 transition-all duration-300 h-full flex flex-col">
                {/* Step Number Badge */}
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-800 font-bold text-lg mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-yellow-800 mb-4">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">
                  {step.description}
                </p>
              </div>

              {/* Connector Arrow (Desktop Only) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg className="w-8 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 100 50">
                    <path strokeWidth={2} d="M 10 25 Q 50 10 90 25" strokeLinecap="round" />
                    <path strokeWidth={2} d="M 80 20 L 90 25 L 80 30" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
