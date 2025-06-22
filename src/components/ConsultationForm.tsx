import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Loader2, CheckCircle, Send, Calendar, Phone, Mail, MessageSquare } from 'lucide-react';

const consultationSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  company: z.string().min(2, 'Nome da empresa é obrigatório'),
  projectType: z.string().min(1, 'Selecione um tipo de projeto'),
  budget: z.string().min(1, 'Selecione uma faixa de orçamento'),
  description: z.string().min(20, 'Descrição deve ter pelo menos 20 caracteres'),
  preferredContactMethod: z.enum(['email', 'phone', 'whatsapp']),
  urgency: z.enum(['low', 'medium', 'high']),
  agreeToTerms: z.boolean().refine(val => val === true, 'Você deve aceitar os termos')
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

const ConsultationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid }
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
    mode: 'onChange'
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const onSubmit = async (data: ConsultationFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Store in localStorage (our simple database)
      const consultation = {
        id: Date.now().toString(),
        ...data,
        createdAt: new Date().toISOString(),
        status: 'pending' as const
      };

      const existing = JSON.parse(localStorage.getItem('consultations') || '[]');
      existing.push(consultation);
      localStorage.setItem('consultations', JSON.stringify(existing));

      setIsSubmitted(true);
      toast.success('Solicitação enviada com sucesso! Entraremos em contato em breve.');
      
    } catch (error) {
      toast.error('Erro ao enviar solicitação. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto text-center py-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-10 h-10 text-green-600" />
        </motion.div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Solicitação Enviada!</h3>
        <p className="text-gray-600 mb-6">
          Recebemos sua solicitação de consulta. Nossa equipe entrará em contato dentro de 24 horas.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          Enviar Nova Solicitação
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-2xl mx-auto"
    >
      <motion.div variants={itemVariants} className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Solicite uma Consulta</h2>
        <p className="text-gray-600">
          Preencha o formulário abaixo e nossa equipe entrará em contato para discutir seu projeto.
        </p>
      </motion.div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Information */}
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações Pessoais</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nome Completo *</Label>
              <Input
                id="name"
                {...register('name')}
                placeholder="Seu nome completo"
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="seu@email.com"
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="phone">Telefone *</Label>
              <Input
                id="phone"
                {...register('phone')}
                placeholder="(11) 99999-9999"
                className={errors.phone ? 'border-red-500' : ''}
              />
              {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>}
            </div>
            <div>
              <Label htmlFor="company">Empresa *</Label>
              <Input
                id="company"
                {...register('company')}
                placeholder="Nome da sua empresa"
                className={errors.company ? 'border-red-500' : ''}
              />
              {errors.company && <p className="text-sm text-red-600 mt-1">{errors.company.message}</p>}
            </div>
          </div>
        </motion.div>

        {/* Project Information */}
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações do Projeto</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="projectType">Tipo de Projeto *</Label>
              <Select onValueChange={(value) => setValue('projectType', value)}>
                <SelectTrigger className={errors.projectType ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Selecione o tipo de projeto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="machine-learning">Machine Learning</SelectItem>
                  <SelectItem value="computer-vision">Visão Computacional</SelectItem>
                  <SelectItem value="nlp">Processamento de Linguagem Natural</SelectItem>
                  <SelectItem value="automation">Automação Inteligente</SelectItem>
                  <SelectItem value="consulting">Consultoria Estratégica</SelectItem>
                  <SelectItem value="other">Outro</SelectItem>
                </SelectContent>
              </Select>
              {errors.projectType && <p className="text-sm text-red-600 mt-1">{errors.projectType.message}</p>}
            </div>

            <div>
              <Label htmlFor="budget">Orçamento Estimado *</Label>
              <Select onValueChange={(value) => setValue('budget', value)}>
                <SelectTrigger className={errors.budget ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Selecione a faixa de orçamento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5k-15k">R$ 5.000 - R$ 15.000</SelectItem>
                  <SelectItem value="15k-50k">R$ 15.000 - R$ 50.000</SelectItem>
                  <SelectItem value="50k-100k">R$ 50.000 - R$ 100.000</SelectItem>
                  <SelectItem value="100k+">R$ 100.000+</SelectItem>
                  <SelectItem value="discuss">Prefiro discutir</SelectItem>
                </SelectContent>
              </Select>
              {errors.budget && <p className="text-sm text-red-600 mt-1">{errors.budget.message}</p>}
            </div>

            <div>
              <Label htmlFor="description">Descrição do Projeto *</Label>
              <Textarea
                id="description"
                {...register('description')}
                placeholder="Descreva seu projeto, objetivos e desafios..."
                rows={4}
                className={errors.description ? 'border-red-500' : ''}
              />
              {errors.description && <p className="text-sm text-red-600 mt-1">{errors.description.message}</p>}
            </div>
          </div>
        </motion.div>

        {/* Contact Preferences */}
        <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferências de Contato</h3>
          <div className="space-y-4">
            <div>
              <Label>Método de Contato Preferido *</Label>
              <RadioGroup
                onValueChange={(value) => setValue('preferredContactMethod', value as any)}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="email-contact" />
                  <Label htmlFor="email-contact" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="phone" id="phone-contact" />
                  <Label htmlFor="phone-contact" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Telefone
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="whatsapp" id="whatsapp-contact" />
                  <Label htmlFor="whatsapp-contact" className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label>Urgência do Projeto *</Label>
              <RadioGroup
                onValueChange={(value) => setValue('urgency', value as any)}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="low" id="low-urgency" />
                  <Label htmlFor="low-urgency">Baixa - Posso esperar algumas semanas</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="medium-urgency" />
                  <Label htmlFor="medium-urgency">Média - Gostaria de começar em 2-4 semanas</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="high" id="high-urgency" />
                  <Label htmlFor="high-urgency">Alta - Preciso começar o mais rápido possível</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </motion.div>

        {/* Terms and Submit */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="terms"
              onCheckedChange={(checked) => setValue('agreeToTerms', checked as boolean)}
            />
            <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
              Aceito os termos de uso e autorizo o contato da equipe Dr. Dheiver Santos para discussão do projeto.
            </Label>
          </div>
          {errors.agreeToTerms && <p className="text-sm text-red-600">{errors.agreeToTerms.message}</p>}

          <Button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 text-lg font-semibold"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Enviando Solicitação...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Enviar Solicitação de Consulta
              </>
            )}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ConsultationForm; 