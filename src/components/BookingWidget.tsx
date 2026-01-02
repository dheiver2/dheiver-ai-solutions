import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  Building2,
  Target,
  ArrowRight,
  Check,
  Sparkles
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BookingWidget = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    goal: '',
    date: '',
    time: '',
  });

  const timeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const goals = [
    { icon: '🎯', label: 'Aumentar Vendas', value: 'sales' },
    { icon: '💰', label: 'Reduzir Custos', value: 'costs' },
    { icon: '⚡', label: 'Automação', value: 'automation' },
    { icon: '📊', label: 'Analytics & BI', value: 'analytics' },
    { icon: '🤖', label: 'Chatbot/NLP', value: 'nlp' },
    { icon: '👁️', label: 'Visão Computacional', value: 'vision' },
  ];

  const benefits = [
    '✅ Consulta gratuita de 30 minutos',
    '✅ Análise personalizada do seu negócio',
    '✅ Roadmap preliminar de IA',
    '✅ Estimativa de ROI',
    '✅ Sem compromisso',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate current step
    if (step === 1 && (!formData.name || !formData.email || !formData.phone || !formData.company)) {
      toast({
        title: 'Preencha todos os campos',
        description: 'Por favor, complete todas as informações antes de continuar.',
        variant: 'destructive',
      });
      return;
    }

    if (step === 2 && !formData.goal) {
      toast({
        title: 'Selecione um objetivo',
        description: 'Escolha o principal objetivo para sua consultoria.',
        variant: 'destructive',
      });
      return;
    }

    if (step === 3 && (!formData.date || !formData.time)) {
      toast({
        title: 'Escolha data e horário',
        description: 'Selecione quando deseja realizar a consultoria.',
        variant: 'destructive',
      });
      return;
    }

    if (step < 3) {
      setStep(step + 1);
    } else {
      // Final submission
      console.log('Booking data:', formData);
      toast({
        title: '🎉 Agendamento Confirmado!',
        description: `Sua consultoria está marcada para ${formData.date} às ${formData.time}. Enviaremos um email de confirmação.`,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        goal: '',
        date: '',
        time: '',
      });
      setStep(1);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-amber-50">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400 text-black rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Oferta Limitada - Apenas 5 Vagas/Semana</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Agende Sua
              <span className="block bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                Consultoria Gratuita
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              30 minutos que podem transformar seu negócio. Descubra como IA pode multiplicar seus resultados.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-6 text-white">
              <p className="text-sm font-semibold mb-2">⚡ Garantia Total</p>
              <p className="text-lg">
                Se não identificarmos pelo menos 3 oportunidades de melhoria com IA, 
                <span className="font-bold text-amber-400"> fazemos uma segunda consultoria gratuitamente</span>.
              </p>
            </div>
          </motion.div>

          {/* Right - Booking Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-200 p-8">
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center">
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center font-bold
                      ${step >= s ? 'bg-amber-400 text-black' : 'bg-gray-200 text-gray-500'}
                      transition-all duration-300
                    `}>
                      {step > s ? <Check className="w-5 h-5" /> : s}
                    </div>
                    {s < 3 && (
                      <div className={`h-1 w-16 mx-2 ${step > s ? 'bg-amber-400' : 'bg-gray-200'} transition-all duration-300`} />
                    )}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Contact Info */}
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-black mb-4">Seus Dados</h3>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Nome Completo *
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="João Silva"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="joao@empresa.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Telefone/WhatsApp *
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Building2 className="w-4 h-4 inline mr-2" />
                        Empresa *
                      </label>
                      <Input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Nome da sua empresa"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Goal Selection */}
                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-black mb-4">Principal Objetivo</h3>
                    <p className="text-gray-600 mb-6">O que você mais deseja alcançar com IA?</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {goals.map((goal) => (
                        <button
                          key={goal.value}
                          type="button"
                          onClick={() => setFormData({...formData, goal: goal.value})}
                          className={`
                            p-4 rounded-xl border-2 transition-all duration-300
                            ${formData.goal === goal.value 
                              ? 'border-amber-400 bg-amber-50 scale-105' 
                              : 'border-gray-200 hover:border-gray-300'
                            }
                          `}
                        >
                          <div className="text-3xl mb-2">{goal.icon}</div>
                          <div className="text-sm font-semibold text-gray-900">{goal.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Date & Time */}
                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-black mb-4">Agendar Horário</h3>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Data *
                      </label>
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Clock className="w-4 h-4 inline mr-2" />
                        Horário *
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setFormData({...formData, time})}
                            className={`
                              py-2 px-3 rounded-lg border-2 text-sm font-semibold transition-all duration-300
                              ${formData.time === time 
                                ? 'border-amber-400 bg-amber-400 text-black' 
                                : 'border-gray-200 hover:border-gray-300 text-gray-700'
                              }
                            `}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-8">
                  {step > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(step - 1)}
                      className="flex-1"
                    >
                      Voltar
                    </Button>
                  )}
                  <Button
                    type="submit"
                    className={`
                      ${step === 1 ? 'w-full' : 'flex-1'}
                      bg-amber-400 hover:bg-amber-500 text-black font-bold
                    `}
                  >
                    {step === 3 ? 'Confirmar Agendamento' : 'Continuar'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                <p className="text-xs text-gray-500 text-center mt-4">
                  🔒 Seus dados estão seguros e protegidos
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingWidget;
