import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, CheckCircle2, Clock, Users, Zap } from 'lucide-react';

const SchedulingCTA = () => {
  const whatsappNumber = '5551989889898';
  const whatsappMessage = encodeURIComponent(
    'Olá! 👋 Gostaria de agendar uma consulta estratégica de 45 minutos sobre IA para meu negócio.\n\nPode ser?'
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const consultationBenefits = [
    'Entender seus principais desafios e objetivos',
    'Identificar oportunidades de IA específicas para seu negócio',
    'Mostrar cases similares ao seu cenário',
    'Apresentar um roadmap personalizado',
    'Discutir investimento e timeline realistas',
  ];

  const consultationDetails = [
    { icon: Clock, label: '45 minutos', value: 'Consulta Estratégica' },
    { icon: Users, label: 'Especialista', value: 'IA Expert' },
    { icon: Zap, label: 'Sem Custo', value: 'Totalmente Gratuito' },
  ];

  return (
    <section id="agendamento" className="py-20 md:py-28 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.65)]">
              Vamos Transformar Seu Negócio com IA
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-[0_1px_12px_rgba(0,0,0,0.5)]">
              Agendamos uma consulta estratégica de 45 minutos onde vamos:
            </p>
          </motion.div>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-3 mb-12 max-w-2xl mx-auto"
          >
            {consultationBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-gray-100">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Consultation Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {consultationDetails.map((detail, idx) => {
              const Icon = detail.icon;
              return (
                <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
                  <Icon className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
                  <p className="text-sm font-semibold text-gray-100 mb-1">{detail.label}</p>
                  <p className="text-lg font-bold text-white">{detail.value}</p>
                </div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap"
          >
            {/* Primary: WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Conversar no WhatsApp
            </a>

            {/* Secondary: Phone */}
            <a
              href="tel:+5551989889898"
              className="inline-flex items-center gap-3 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              Ligar Agora
            </a>

            {/* Tertiary: Email */}
            <a
              href="mailto:dheiver.santos@gmail.com?subject=Agendamento%20de%20Consulta%20IA&body=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20sobre%20IA."
              className="inline-flex items-center gap-3 border-2 border-gray-500 text-gray-300 hover:bg-gray-500 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
              Enviar Email
            </a>
          </motion.div>

          {/* Trust Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center text-gray-400 text-sm"
          >
            <p>
              ✓ Resposta em até 2 horas  |  ✓ Sem spam  |  ✓ 100% confidencial
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SchedulingCTA;
