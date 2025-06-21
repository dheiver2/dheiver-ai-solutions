
import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Machine Learning Avançado",
      description: "Desenvolvimento de modelos personalizados de aprendizado de máquina para problemas específicos do seu negócio.",
      features: ["Modelos Preditivos", "Algoritmos Customizados", "Otimização de Performance", "Análise de Dados Complexos"],
      icon: "🧠"
    },
    {
      title: "Visão Computacional",
      description: "Soluções avançadas em processamento e análise de imagens para automação e insights visuais.",
      features: ["Reconhecimento de Padrões", "Detecção de Objetos", "Análise de Imagens Médicas", "Controle de Qualidade Visual"],
      icon: "👁️"
    },
    {
      title: "Processamento de Linguagem Natural",
      description: "Sistemas inteligentes para compreensão, análise e geração de texto em escala empresarial.",
      features: ["Análise de Sentimentos", "Chatbots Avançados", "Extração de Informações", "Tradução Automática"],
      icon: "💬"
    },
    {
      title: "Estratégia e Auditoria de IA",
      description: "Consultoria estratégica para implementação e otimização de sistemas de IA existentes.",
      features: ["Roadmap de IA", "Auditoria Técnica", "Governança de Dados", "ROI de Projetos IA"],
      icon: "📊"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-width section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-6">
              Serviços Especializados
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções de IA sob medida para resolver os desafios mais complexos do seu negócio, 
              com foco em resultados mensuráveis e impacto estratégico.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="animate-fade-in-up hover-scale bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-playfair text-2xl font-bold text-black mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-black text-white p-8 rounded-lg animate-fade-in">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="font-playfair text-3xl font-bold mb-4">
                Abordagem Personalizada
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Cada projeto é único. Trabalhamos em estreita colaboração com sua equipe 
                para entender profundamente seus desafios e desenvolver soluções que 
                se alinhem perfeitamente aos seus objetivos estratégicos.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">Análise</div>
                  <div className="text-sm text-gray-300">Diagnóstico profundo do problema</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">Desenvolvimento</div>
                  <div className="text-sm text-gray-300">Criação da solução customizada</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">Implementação</div>
                  <div className="text-sm text-gray-300">Deploy e acompanhamento</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
