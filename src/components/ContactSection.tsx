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

  const handleWhatsAppClick = () => {
    const phoneNumber = '5551989889898'; // Formato internacional correto
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre seus serviços de IA.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container-width section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              Vamos Conversar
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-black via-gray-600 to-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pronto para transformar seus desafios em oportunidades? Entre em contato 
              para discutir como a IA pode revolucionar seu negócio.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="animate-fade-in space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <h3 className="font-playfair text-2xl font-bold text-black mb-8 text-center">
                  Entre em Contato
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-700 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                      <Mail size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-black mb-2">E-mail</h4>
                      <p className="text-gray-600 break-all">dheiver.santos@gmail.com</p>
                      <p className="text-sm text-gray-500 mt-1">Resposta em até 24 horas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                      <Phone size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-black mb-2">WhatsApp</h4>
                      <p className="text-gray-600">+55 (51) 98988-9898</p>
                      <p className="text-sm text-gray-500 mt-1">Disponível das 9h às 18h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                      <MapPin size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-black mb-2">Localização</h4>
                      <p className="text-gray-600">Porto Alegre, RS - Brasil</p>
                      <p className="text-sm text-gray-500 mt-1">Atendimento nacional remoto e presencial</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                      <Clock size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-black mb-2">Horário</h4>
                      <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                      <p className="text-sm text-gray-500 mt-1">Consultas por agendamento</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full"
                  >
                    💬 Conversar no WhatsApp
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl text-white shadow-xl">
                <h4 className="font-playfair text-xl font-bold mb-6 text-center">
                  Especializado em:
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    'Machine Learning',
                    'Deep Learning', 
                    'Visão Computacional',
                    'Processamento NLP',
                    'Estratégia de IA',
                    'Auditoria Técnica'
                  ].map((skill, index) => (
                    <div key={skill} className="flex items-center p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                      <span className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mr-4 flex-shrink-0 animate-pulse" style={{ animationDelay: `${index * 0.2}s` }}></span>
                      <span className="text-white font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <h3 className="font-playfair text-2xl font-bold text-black mb-8 text-center">
                  Solicitar Consulta
                </h3>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 bg-gray-50 hover:bg-white transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                      E-mail Profissional *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 bg-gray-50 hover:bg-white transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700">
                      Empresa/Organização
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 bg-gray-50 hover:bg-white transition-colors"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700">
                      Tipo de Projeto
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 bg-gray-50 hover:bg-white transition-colors"
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
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                      Descreva seu Desafio *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none text-gray-900 bg-gray-50 hover:bg-white transition-colors"
                      placeholder="Descreva o desafio que sua organização enfrenta e como podemos ajudar..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-black via-gray-800 to-black hover:from-gray-800 hover:via-black hover:to-gray-800 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Enviar Solicitação
                  </Button>
                </div>
                
                <p className="text-sm text-gray-500 mt-6 text-center leading-relaxed">
                  🔒 Todas as informações são tratadas com confidencialidade total
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
