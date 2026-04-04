import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Clock } from 'lucide-react';

const CtaFinal = () => {
  const whatsappNumber = '5551989889898';
  const whatsappMessage = encodeURIComponent(
    'Olá! 👋 Estou interessado em transformar meu negócio com IA. Gostaria de conversar com um especialista.'
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="cta-final" className="py-20 md:py-28 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.65)]"
          >
            Pronto para transformar sua empresa?
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto drop-shadow-[0_1px_12px_rgba(0,0,0,0.5)]"
          >
            Fale agora com um especialista em IA e descubra como podemos impulsionar seu negócio.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black px-10 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl group"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Iniciar Conversa no WhatsApp
          </motion.a>

          {/* Trust Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10 flex items-center justify-center gap-2 text-gray-400 text-sm"
          >
            <Clock className="w-4 h-4" />
            <p>Resposta em até 2 horas • Sem custo • 100% confidencial</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaFinal;
