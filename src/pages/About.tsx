import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Award, BookOpen, Users, TrendingUp, Brain, Zap, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const achievements = [
    {
      icon: Award,
      number: "PhD",
      title: "Inteligência Artificial",
      description: "Universidade de renome internacional"
    },
    {
      icon: BookOpen,
      number: "15+",
      title: "Publicações",
      description: "Artigos em conferências e journals"
    },
    {
      icon: Users,
      number: "50+",
      title: "Projetos",
      description: "Entregues com sucesso"
    },
    {
      icon: TrendingUp,
      number: "10+",
      title: "Anos",
      description: "Experiência em IA"
    }
  ];

  const expertise = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Algoritmos avançados para análise preditiva e otimização de processos empresariais."
    },
    {
      icon: Zap,
      title: "Visão Computacional",
      description: "Sistemas de reconhecimento e análise visual para automação industrial."
    },
    {
      icon: Target,
      title: "NLP Avançado",
      description: "Processamento de linguagem natural para chatbots e análise de sentimentos."
    },
    {
      icon: Lightbulb,
      title: "Consultoria Estratégica",
      description: "Transformação digital através de estratégias de IA personalizadas."
    }
  ];

  const timeline = [
    {
      year: "2015",
      title: "Doutorado em IA",
      description: "Especialização em Machine Learning e redes neurais"
    },
    {
      year: "2018",
      title: "Primeiro Projeto Corporativo",
      description: "Sistema de IA para empresa Fortune 500"
    },
    {
      year: "2020",
      title: "Fundação da Consultoria",
      description: "Início da consultoria especializada em IA"
    },
    {
      year: "2024",
      title: "Líder de Mercado",
      description: "Reconhecido como especialista em IA no Brasil"
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
              Sobre <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Dr. Dheiver Santos</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Especialista em Inteligência Artificial com mais de uma década de experiência 
              transformando desafios complexos em soluções inovadoras para empresas de todos os tamanhos.
            </p>
          </motion.div>

          {/* Achievements */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-900 transition-colors duration-300">
                  <achievement.icon className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Bio */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Trajetória Profissional</h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Dr. Dheiver Santos é um renomado especialista em Inteligência Artificial com 
                  PhD pela Universidade Federal da Bahia, focando em algoritmos de machine learning 
                  e suas aplicações práticas no mundo empresarial.
                </p>
                <p>
                  Com mais de 200 publicações em artigos e 10 anos de 
                  experiência prática, Dr. Dheiver tem liderado projetos de transformação 
                  digital em empresas Fortune 500, startups inovadoras e instituições governamentais.
                </p>
                <p>
                  Sua abordagem única combina rigor acadêmico com pragmatismo empresarial, 
                  entregando soluções de IA que geram impacto real e ROI mensurável para seus clientes.
                </p>
              </div>
            </motion.div>

            {/* Photo/Visual Element */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-full flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl">
                    <img 
                      src="/dheiver-photo.jpg" 
                      alt="Dr. Dheiver Santos - Especialista em Inteligência Artificial"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Dr. Dheiver Santos</h3>
                  <p className="text-gray-600 text-lg">PhD em Inteligência Artificial</p>
                  <p className="text-sm text-gray-500 mt-2 font-medium">Especialista em IA de Alta Complexidade</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Expertise */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Áreas de Especialização</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {expertise.map((area, index) => (
                <motion.div
                  key={area.title}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                      <area.icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Marcos da Carreira</h2>
            <div className="max-w-4xl mx-auto">
              {timeline.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-8 mb-8 last:mb-0"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Pronto para transformar seu negócio com IA?
            </h3>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg"
            >
              Agende uma Consulta
            </motion.a>
          </motion.div>
      </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default About;
