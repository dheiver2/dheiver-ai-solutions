
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    projectType: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entrarei em contato em até 24 horas.",
    });
    
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      projectType: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container-width section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
              Vamos Conversar
            </h2>
            <div className="w-16 md:w-24 h-1 bg-black mx-auto mb-6 md:mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pronto para transformar seus desafios em oportunidades? Entre em contato 
              para discutir como a IA pode revolucionar seu negócio.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="animate-fade-in space-y-8">
              <div>
                <h3 className="font-playfair text-xl md:text-2xl font-bold text-black mb-6">
                  Informações de Contato
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-black mb-2">E-mail</h4>
                      <p className="text-gray-600 break-all">contato@dheiversantos.com</p>
                      <p className="text-sm text-gray-500 mt-1">Resposta em até 24 horas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-black mb-2">WhatsApp</h4>
                      <p className="text-gray-600">+55 (11) 99999-9999</p>
                      <p className="text-sm text-gray-500 mt-1">Disponível das 9h às 18h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-black mb-2">Localização</h4>
                      <p className="text-gray-600">São Paulo, SP - Brasil</p>
                      <p className="text-sm text-gray-500 mt-1">Atendimento remoto e presencial</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <Clock size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-black mb-2">Horário</h4>
                      <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                      <p className="text-sm text-gray-500 mt-1">Consultas por agendamento</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-playfair text-lg md:text-xl font-bold text-black mb-4">
                  Especializado em:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="text-sm text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></span>
                    Machine Learning
                  </div>
                  <div className="text-sm text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></span>
                    Deep Learning
                  </div>
                  <div className="text-sm text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></span>
                    Visão Computacional
                  </div>
                  <div className="text-sm text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></span>
                    Processamento NLP
                  </div>
                  <div className="text-sm text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></span>
                    Estratégia de IA
                  </div>
                  <div className="text-sm text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3 flex-shrink-0"></span>
                    Auditoria Técnica
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-200">
                <h3 className="font-playfair text-xl md:text-2xl font-bold text-black mb-6">
                  Solicitar Consulta
                </h3>
                
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-900"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail Profissional *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-900"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa/Organização
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-900"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Projeto
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 bg-white"
                    >
                      <option value="">Selecione o tipo de projeto</option>
                      <option value="machine-learning">Machine Learning</option>
                      <option value="computer-vision">Visão Computacional</option>
                      <option value="nlp">Processamento de Linguagem Natural</option>
                      <option value="ai-strategy">Estratégia de IA</option>
                      <option value="audit">Auditoria de IA</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Descreva seu Desafio *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none text-gray-900"
                      placeholder="Descreva o desafio que sua organização enfrenta e como podemos ajudar..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-black text-white hover:bg-gray-800 py-3 text-base md:text-lg font-medium transition-all duration-300"
                  >
                    Enviar Solicitação
                  </Button>
                </div>
                
                <p className="text-xs md:text-sm text-gray-500 mt-4 text-center leading-relaxed">
                  Todas as informações são tratadas com confidencialidade total
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
