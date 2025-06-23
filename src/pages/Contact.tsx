import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';

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

  const handleWhatsAppClick = () => {
    const phoneNumber = '5551989889898';
    const message = encodeURIComponent('Olá Dr. Dheiver! Gostaria de conversar sobre soluções de IA para minha empresa.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: MessageSquare,
      title: "WhatsApp",
      details: "+55 (51) 98988-9898",
      description: "Resposta imediata",
      highlight: true,
      action: handleWhatsAppClick
    },
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
      icon: MapPin,
      title: "Localização",
      details: "Porto Alegre, RS",
      description: "Atendimento nacional remoto"
    }
  ];

  const benefits = [
    "Consultoria inicial gratuita",
    "Atendimento personalizado",
    "Soluções sob medida",
    "Suporte técnico especializado",
    "Acompanhamento pós-implementação"
  ];

  return (
    <div className="min-h-screen bg-white">
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
              Dr. <span className="text-black font-bold">Dheiver Santos</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 mb-8">
              Pronto para transformar seu negócio com inteligência artificial? 
              Entre em contato comigo pelo WhatsApp e vamos discutir seu projeto.
            </p>
          </motion.div>

          {/* WhatsApp CTA Principal */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="max-w-4xl mx-auto bg-black rounded-3xl p-8 md:p-12 text-center shadow-2xl">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <MessageSquare className="w-10 h-10 text-black" />
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Fale Comigo no WhatsApp
              </h2>
              <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                A forma mais rápida e direta de começar sua jornada de transformação digital com IA
              </p>
              
              <motion.button
                onClick={handleWhatsAppClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg md:text-xl shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
              >
                <MessageSquare className="w-6 h-6" />
                Iniciar Conversa
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              
              <p className="text-gray-300 text-sm mt-4">
                +55 (51) 98988-9898 • Disponível das 9h às 18h
              </p>
            </div>
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
                onClick={info.action}
                className={`p-6 rounded-2xl shadow-lg border text-center group cursor-pointer transition-all duration-300 ${
                  info.highlight 
                    ? 'bg-gray-100 border-gray-300 hover:shadow-gray-300/50' 
                    : 'bg-white border-gray-100 hover:shadow-xl'
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300 ${
                  info.highlight 
                    ? 'bg-black text-white group-hover:bg-gray-800' 
                    : 'bg-gray-100 text-gray-700 group-hover:bg-gray-900 group-hover:text-white'
                }`}>
                  <info.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-900 font-medium mb-1">{info.details}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
                {info.highlight && (
                  <div className="mt-3 inline-flex items-center text-black text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Preferencial
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefícios */}
            <motion.div variants={itemVariants}>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">O que Nossos Serviços Oferecem?</h2>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-800 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl text-white text-center">
                  <h3 className="text-gray-300 text-sm font-bold text-lg mb-2">Consultoria Inicial Gratuita</h3>
                  <p className="text-gray-300 text-sm">
                    Primeira conversa sem custo para entender suas necessidades
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Process e FAQ */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Process */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Como Funciona</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Contato Inicial</h4>
                      <p className="text-gray-600 text-sm">Entre em contato pelo WhatsApp</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Análise Gratuita</h4>
                      <p className="text-gray-600 text-sm">Conversa sobre seus desafios</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Proposta Personalizada</h4>
                      <p className="text-gray-600 text-sm">Solução sob medida para você</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Perguntas Frequentes</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">A primeira consulta é realmente gratuita?</h4>
                    <p className="text-gray-600 text-sm">Sim! A primeira conversa é sempre gratuita para entender seu projeto.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Atendem empresas de qualquer tamanho?</h4>
                    <p className="text-gray-600 text-sm">Sim, desde startups até grandes corporações.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Como é o atendimento pelo WhatsApp?</h4>
                    <p className="text-gray-600 text-sm">Rápido, direto e personalizado. Resposta garantida no mesmo dia.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Final */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Pronto para Começar?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Não perca tempo. Sua transformação digital começa com uma simples mensagem.
              </p>
              
              <motion.button
                onClick={handleWhatsAppClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
              >
                <MessageSquare className="w-6 h-6" />
                Conversar Agora
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>
      </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Contact;
