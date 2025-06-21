
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

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
    
    // Simulação de envio do formulário
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entrarei em contato em até 24 horas.",
    });
    
    // Reset form
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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container-width section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-6">
              Vamos Conversar
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pronto para transformar seus desafios em oportunidades? Entre em contato 
              para discutir como a IA pode revolucionar seu negócio.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="animate-fade-in">
              <h3 className="font-playfair text-2xl font-bold text-black mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white font-bold">
                    📧
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">E-mail</h4>
                    <p className="text-gray-600">contato@dheiversantos.com</p>
                    <p className="text-sm text-gray-500">Resposta em até 24 horas</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white font-bold">
                    💼
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">LinkedIn</h4>
                    <p className="text-gray-600">linkedin.com/in/dheiversantos</p>
                    <p className="text-sm text-gray-500">Conecte-se profissionalmente</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white font-bold">
                    🎓
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Lattes</h4>
                    <p className="text-gray-600">Currículo acadêmico</p>
                    <p className="text-sm text-gray-500">Publicações e pesquisas</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-playfair text-xl font-bold text-black mb-4">
                  Especializado em:
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-sm text-gray-600">• Machine Learning</div>
                  <div className="text-sm text-gray-600">• Deep Learning</div>
                  <div className="text-sm text-gray-600">• Visão Computacional</div>
                  <div className="text-sm text-gray-600">• Processamento NLP</div>
                  <div className="text-sm text-gray-600">• Estratégia de IA</div>
                  <div className="text-sm text-gray-600">• Auditoria Técnica</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h3 className="font-playfair text-2xl font-bold text-black mb-6">
                  Solicitar Consulta
                </h3>
                
                <div className="space-y-6">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
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
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                      placeholder="Descreva o desafio que sua organização enfrenta e como podemos ajudar..."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-black text-white hover:bg-gray-800 py-3 text-lg font-medium transition-all duration-300"
                  >
                    Enviar Solicitação
                  </Button>
                </div>
                
                <p className="text-sm text-gray-500 mt-4 text-center">
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
