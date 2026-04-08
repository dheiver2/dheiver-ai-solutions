import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  initials?: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "João Silva",
      role: "CEO",
      company: "TechStart Brasil",
      quote: "Implementação perfeita e entrega dentro do prazo. Conseguimos ROI de 3.5x em 90 dias. Muito profissional e atencioso.",
      rating: 5,
      initials: "JS"
    },
    {
      name: "Maria Santos",
      role: "Diretora Operacional",
      company: "E-commerce Inovador",
      quote: "Resolveu completamente nossos problemas de fraude em transações. Agora temos 94% de detecção automática. Excelente suporte!",
      rating: 5,
      initials: "MS"
    },
    {
      name: "Carlos Mendes",
      role: "VP de Produtos",
      company: "Fintech Solutions",
      quote: "A solução de IA aumentou nossa eficiência em 70%. A equipe foi muito clara na comunicação e na entrega. Recomendo!",
      rating: 5,
      initials: "CM"
    },
    {
      name: "Ana Costa",
      role: "Gerente de Dados",
      company: "Retail Corp",
      quote: "Melhorou significativamente nossas recomendações de produtos. Conversão aumentou 38%. Investimento que valeu muito a pena.",
      rating: 5,
      initials: "AC"
    },
    {
      name: "Roberto Oliveira",
      role: "CTO",
      company: "HealthTech Startup",
      quote: "Implementação clean, bem documentada e fácil de integrar. Suporte 24/7 funcionou perfeitamente durante a implementação.",
      rating: 5,
      initials: "RO"
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

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  const getAvatarColor = (index: number) => {
    const colors = [
      'bg-yellow-400',
      'bg-yellow-500',
      'bg-amber-400',
      'bg-yellow-300',
      'bg-amber-500'
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-black text-white">
      <div className="container-width">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            O Que Clientes Dizem
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            Histórias reais de sucesso e transformação com nossas soluções de IA
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="border border-yellow-500/30 rounded-lg p-6 md:p-8 hover:border-yellow-500 hover:bg-yellow-500/5 transition-all duration-300 flex flex-col"
            >
              {/* Rating */}
              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Quote */}
              <p className="text-sm sm:text-base text-gray-200 mb-6 flex-grow leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Separator */}
              <div className="border-t border-yellow-500/20 mb-6"></div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-black text-sm flex-shrink-0 ${getAvatarColor(
                    idx
                  )}`}
                >
                  {testimonial.initials}
                </div>

                {/* Details */}
                <div className="min-w-0">
                  <p className="text-sm sm:text-base font-bold text-white truncate">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {testimonial.role}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof Badge */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-block border border-yellow-500/30 rounded-full px-6 py-3 bg-yellow-500/5">
            <p className="text-gray-300 text-sm sm:text-base">
              <span className="font-bold text-yellow-400">50+ Projetos Entregues</span>
              {' '}|{' '}
              <span className="font-bold text-yellow-400">98% de Satisfação</span>
              {' '}|{' '}
              <span className="font-bold text-yellow-400">3.2x ROI Médio</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
