import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Brain, Eye, MessageSquare, Zap, TrendingUp, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const services = [
    {
      icon: Brain,
      title: "Machine Learning Avançado",
      description: "Desenvolvemos algoritmos de ML customizados para análise preditiva, otimização de processos e automação inteligente.",
      features: [
        "Análise Preditiva",
        "Otimização de Processos",
        "Sistemas de Recomendação",
        "Detecção de Anomalias"
      ]
    },
    {
      icon: Eye,
      title: "Visão Computacional",
      description: "Sistemas de reconhecimento visual para automação industrial, controle de qualidade e análise de imagens.",
      features: [
        "Reconhecimento de Objetos",
        "Controle de Qualidade",
        "Análise de Imagens Médicas",
        "Automação Industrial"
      ]
    },
    {
      icon: MessageSquare,
      title: "Processamento de Linguagem Natural",
      description: "Chatbots inteligentes, análise de sentimentos e sistemas de processamento de texto avançados.",
      features: [
        "Chatbots Conversacionais",
        "Análise de Sentimentos",
        "Extração de Informações",
        "Tradução Automática"
      ]
    },
    {
      icon: Zap,
      title: "Automação Inteligente",
      description: "Integração de IA em processos empresariais para automação completa de workflows complexos.",
      features: [
        "RPA com IA",
        "Workflows Inteligentes",
        "Automação de Decisões",
        "Integração de Sistemas"
      ]
    },
    {
      icon: TrendingUp,
      title: "Consultoria Estratégica",
      description: "Planejamento estratégico para implementação de IA, roadmaps tecnológicos e transformação digital.",
      features: [
        "Roadmap de IA",
        "Análise de Viabilidade",
        "Planejamento Estratégico",
        "Treinamento de Equipes"
      ]
    },
    {
      icon: Shield,
      title: "IA Ética e Segura",
      description: "Implementação de sistemas de IA seguros, éticos e em conformidade com regulamentações.",
      features: [
        "Auditoria de Algoritmos",
        "Compliance LGPD",
        "IA Explicável",
        "Mitigação de Vieses"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Análise e Descoberta",
      description: "Entendemos profundamente seu desafio, objetivos e contexto empresarial."
    },
    {
      step: "02",
      title: "Estratégia e Planejamento",
      description: "Desenvolvemos uma estratégia técnica personalizada e roadmap detalhado."
    },
    {
      step: "03",
      title: "Desenvolvimento e Implementação",
      description: "Executamos a solução com metodologia ágil e acompanhamento constante."
    },
    {
      step: "04",
      title: "Entrega e Suporte",
      description: "Entregamos a solução completa com treinamento e suporte contínuo."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation />
      
      <motion.div
        className="pt-24 pb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container-width section-padding">
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Nossos <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Serviços</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Soluções de IA sob medida para transformar seus desafios empresariais 
              em vantagens competitivas sustentáveis.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300 flex-shrink-0">
                    <service.icon className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Principais Recursos:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <Button 
                        asChild 
                        className="bg-gray-900 hover:bg-gray-800 text-white w-full"
                      >
                        <Link to="/contact" className="flex items-center justify-center gap-2">
                          Solicitar Orçamento
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Process Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nosso Processo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div variants={itemVariants} className="bg-white p-12 rounded-2xl shadow-xl border border-gray-100 mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Por que escolher nossos serviços?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expertise Comprovada</h3>
                <p className="text-gray-600 text-sm">Mais de 10 anos de experiência e 50+ projetos entregues com sucesso.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Soluções Seguras</h3>
                <p className="text-gray-600 text-sm">Implementação de IA ética, segura e em conformidade com regulamentações.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">ROI Mensurável</h3>
                <p className="text-gray-600 text-sm">Foco em resultados tangíveis e retorno sobre investimento comprovado.</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Pronto para transformar seu negócio?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Agende uma consulta gratuita e descubra como a IA pode revolucionar seus processos.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold">
                <Link to="/contact" className="flex items-center gap-2">
                  Agendar Consulta Gratuita
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
      </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Services;
