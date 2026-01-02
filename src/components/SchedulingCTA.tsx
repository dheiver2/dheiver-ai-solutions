import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Phone, Mail, CheckCircle2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  challenge: string;
  budget: string;
  timeline: string;
}

const SchedulingCTA = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    challenge: '',
    budget: '',
    timeline: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simular envio (integrar com seu backend/email service)
    try {
      // Aqui você integraria com Formspree, SendGrid, ou outro serviço
      console.log('Form data:', formData);
      
      // Simular delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitted(true);
      setFormData({
        name: '', email: '', phone: '', company: '', industry: '',
        challenge: '', budget: '', timeline: '',
      });

      // Redirecionar ou mostrar sucesso
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="agendamento" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container-width section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Vamos Transformar Seu Negócio com IA
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Agendamos uma consulta estratégica de 45 minutos onde vamos:
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Entender seus principais desafios e objetivos',
                'Identificar oportunidades de IA específicas para seu negócio',
                'Mostrar cases similares ao seu cenário',
                'Apresentar um roadmap personalizado',
                'Discutir investimento e timeline realistas',
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-200">
              <div>
                <p className="text-2xl font-bold text-blue-600">45 min</p>
                <p className="text-sm text-gray-600">Consulta estratégica</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">Grátis</p>
                <p className="text-sm text-gray-600">Sem compromisso</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">Expert</p>
                <p className="text-sm text-gray-600">Especialista em IA</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">Personalizado</p>
                <p className="text-sm text-gray-600">Para seu contexto</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Agendamento Confirmado!
                </h3>
                <p className="text-gray-600 mb-4">
                  Confirme o link do calendário enviado para seu email e aguarde nossa chamada.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Nome Completo
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                    className="w-full"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Telefone
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(51) 98988-9898"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Empresa
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Sua empresa"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Indústria
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900"
                      required
                    >
                      <option value="">Selecione...</option>
                      <option value="fintech">Fintech</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="manufatura">Manufatura</option>
                      <option value="saude">Saúde</option>
                      <option value="educacao">Educação</option>
                      <option value="logistica">Logística</option>
                      <option value="outras">Outras</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Qual é seu maior desafio com dados/processos?
                  </label>
                  <Textarea
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    placeholder="Descreva brevemente o desafio que você está enfrentando..."
                    required
                    className="w-full"
                    rows={3}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Orçamento Estimado
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900"
                      required
                    >
                      <option value="">Selecione...</option>
                      <option value="10-30">R$ 10k - 30k</option>
                      <option value="30-60">R$ 30k - 60k</option>
                      <option value="60-150">R$ 60k - 150k</option>
                      <option value="150+">R$ 150k+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900"
                      required
                    >
                      <option value="">Selecione...</option>
                      <option value="imediato">Imediato (próximas 2 semanas)</option>
                      <option value="proximo-mes">Próximo mês</option>
                      <option value="proximo-trimestre">Próximo trimestre</option>
                      <option value="explorando">Apenas explorando</option>
                    </select>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 text-base font-semibold rounded-lg transition-all"
                >
                  {loading ? 'Agendando...' : 'Agendar Consulta Grátis'}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Prometemos: sem spam, sem vendas pesadas, apenas consultoria genuína.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SchedulingCTA;
