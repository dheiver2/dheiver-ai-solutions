import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Eye, Zap, MessageCircle } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServicesGrid = () => {
  const whatsappNumber = '5551989889898';

  const services: Service[] = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Implementação de IA",
      description: "Modelos preditivos e automação de processos com machine learning",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Visão Computacional",
      description: "IA que enxerga e interpreta imagens e vídeos em tempo real",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automação com IA",
      description: "RPA + IA para automatizar processos complexos do seu negócio",
    },
  ];

  const getWhatsappLink = (service: string) => {
    const message = encodeURIComponent(
      `Olá! 👋 Gostaria de saber mais sobre ${service}.`
    );
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

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
      <div className="container-width">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Serviços
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Soluções personalizadas de IA para seu negócio.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group border border-gray-200 rounded-lg p-8 hover:border-yellow-500 hover:bg-yellow-50/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-700 mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                {service.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">{service.description}</p>

              <a
                href={getWhatsappLink(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-yellow-100 hover:bg-yellow-200 text-yellow-700 hover:text-yellow-800 font-semibold text-sm px-4 py-2 rounded transition-colors group/link"
              >
                <MessageCircle className="w-4 h-4" />
                Saber mais
                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
