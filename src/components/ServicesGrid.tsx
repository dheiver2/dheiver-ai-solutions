import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Eye, 
  MessageSquare, 
  Zap, 
  TrendingUp, 
  Shield,
  ArrowRight 
} from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  useCases: string[];
}

const ServicesGrid = () => {
  const services: Service[] = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning Avançado",
      description: "Modelos preditivos que transformam dados em decisões inteligentes",
      features: [
        "Regressão e classificação",
        "Clustering e segmentação",
        "Ensemble methods",
        "Deep Learning"
      ],
      useCases: ["Previsão de demanda", "Scoring de clientes", "Detecção de anomalias"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Visão Computacional",
      description: "IA que enxerga e interpreta imagens e vídeos em tempo real",
      features: [
        "Detecção de objetos",
        "Reconhecimento facial",
        "OCR avançado",
        "Análise de vídeo"
      ],
      useCases: ["Controle de qualidade", "Segurança", "Automação industrial"]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Processamento de Linguagem Natural",
      description: "Compreensão profunda de textos, chatbots e análise de sentimento",
      features: [
        "Chatbots inteligentes",
        "Análise de sentimento",
        "Extração de entidades",
        "Tradução automática"
      ],
      useCases: ["Atendimento ao cliente", "Análise de reviews", "Classificação automática"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automação Inteligente",
      description: "RPA + IA para automatizar processos complexos e repetitivos",
      features: [
        "Automação de workflows",
        "Processamento de documentos",
        "Integração de sistemas",
        "Bot de processos"
      ],
      useCases: ["Onboarding digital", "Processamento de pedidos", "Gestão de estoque"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Business Intelligence + IA",
      description: "Dashboards inteligentes que revelam oportunidades ocultas",
      features: [
        "Data warehousing",
        "Analytics avançado",
        "Visualização 3D",
        "Forecasting"
      ],
      useCases: ["KPI real-time", "Análise competitiva", "Planejamento estratégico"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Estratégia & Implementação",
      description: "Roadmap completo de transformação digital com IA para seu negócio",
      features: [
        "Diagnóstico de oportunidades",
        "Seleção de tecnologias",
        "MVP e prototipagem",
        "Governance e compliance"
      ],
      useCases: ["Transformação digital", "Inovação", "Escala de soluções"]
    },
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
            Serviços Especializados em IA
          </h2>
          <p className="text-lg text-gray-600">
            Do diagnóstico à implementação. Soluções end-to-end adaptadas ao seu negócio.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>

              {/* Features */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Capacidades</p>
                <ul className="space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Aplicações</p>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.map((useCase, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
