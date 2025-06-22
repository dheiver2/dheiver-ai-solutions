import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
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

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      details: "+55 (51) 98988-9898",
      description: "Segunda a Sexta, 9h às 18h"
    },
    {
      icon: Mail,
      title: "Email",
      details: "dheiver.santos@gmail.com",
      description: "Resposta em até 24h"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      details: "+55 (51) 98988-9898",
      description: "Atendimento rápido"
    },
    {
      icon: MapPin,
      title: "Localização",
      details: "Porto Alegre, RS",
      description: "Atendimento nacional remoto e presencial"
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
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
              Entre em <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Contato</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Pronto para transformar seu negócio com inteligência artificial? 
              Vamos conversar sobre seu projeto e como podemos ajudar.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                whileHover={{ y: -8 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-900 transition-colors duration-300">
                  <info.icon className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-900 font-medium mb-1">{info.details}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Solicite uma Consulta</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Projeto
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300">
                      <option>Machine Learning</option>
                      <option>Visão Computacional</option>
                      <option>Processamento de Linguagem Natural</option>
                      <option>Automação Inteligente</option>
                      <option>Consultoria Estratégica</option>
                      <option>Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Descrição do Projeto *
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                      placeholder="Descreva seu projeto, objetivos e desafios..."
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gray-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg"
                  >
                    Enviar Solicitação
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* FAQ */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Perguntas Frequentes</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Quanto tempo leva um projeto?</h4>
                    <p className="text-gray-600 text-sm">Dependendo da complexidade, projetos podem levar de 4 a 24 semanas.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Vocês atendem empresas de qualquer tamanho?</h4>
                    <p className="text-gray-600 text-sm">Sim, desde startups até grandes corporações.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Como funciona a consultoria?</h4>
                    <p className="text-gray-600 text-sm">Começamos com uma análise gratuita do seu desafio e proposta personalizada.</p>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Nosso Processo</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Análise Inicial</h4>
                      <p className="text-gray-600 text-sm">Entendemos seu desafio e objetivos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Proposta Técnica</h4>
                      <p className="text-gray-600 text-sm">Desenvolvemos solução personalizada</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Implementação</h4>
                      <p className="text-gray-600 text-sm">Executamos com acompanhamento constante</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
      </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Contact;
