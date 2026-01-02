import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Check, 
  ArrowRight, 
  Shield, 
  Zap, 
  Target,
  TrendingUp,
  Users,
  Award,
  ChevronRight,
  Star,
  BarChart,
  Briefcase
} from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Consultoria Básica',
      price: 'R$ 5.000',
      period: '/mês',
      description: 'Ideal para startups e PMEs iniciando em IA',
      features: [
        'Consultoria mensal (4h)',
        'Análise de viabilidade de IA',
        'Roadmap personalizado',
        'Suporte por email',
        'Acesso à base de conhecimento',
      ],
      cta: 'Começar Agora',
      popular: false,
      color: 'from-gray-50 to-gray-100',
      badge: null,
    },
    {
      name: 'Implementação Pro',
      price: 'R$ 15.000',
      period: '/mês',
      description: 'Para empresas prontas para implementar IA',
      features: [
        'Tudo do plano Básico',
        'Consultoria semanal (16h/mês)',
        'Desenvolvimento de POC',
        'Treinamento de equipe',
        'Suporte prioritário 24/7',
        'Integração com sistemas existentes',
        'Dashboards customizados',
      ],
      cta: 'Mais Popular',
      popular: true,
      color: 'from-black to-gray-900',
      badge: 'Mais Escolhido',
    },
    {
      name: 'Enterprise Custom',
      price: 'Sob Consulta',
      period: '',
      description: 'Solução completa para grandes corporações',
      features: [
        'Tudo do plano Pro',
        'Dedicação exclusiva',
        'Desenvolvimento full-stack',
        'MLOps e infraestrutura',
        'Compliance e segurança avançada',
        'SLA garantido',
        'Suporte on-site',
        'Escalabilidade ilimitada',
      ],
      cta: 'Falar com Especialista',
      popular: false,
      color: 'from-amber-50 to-amber-100',
      badge: 'Enterprise',
    },
  ];

  const guarantees = [
    {
      icon: Shield,
      title: 'Garantia de 30 Dias',
      description: 'Se não estiver satisfeito, devolvemos 100% do investimento'
    },
    {
      icon: Award,
      title: 'ROI Comprovado',
      description: 'Média de 300% de retorno sobre investimento em 6 meses'
    },
    {
      icon: Users,
      title: 'Suporte Dedicado',
      description: 'Equipe especializada disponível para você'
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container-width">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-sm font-semibold mb-6">
            <Target className="w-4 h-4" />
            <span>Investimento que se Paga</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Escolha o Plano Ideal para
            <span className="block bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
              Seu Crescimento
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparência total. Sem taxas ocultas. Cancele quando quiser.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-amber-400 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ {plan.badge}
                  </div>
                </div>
              )}
              
              <div 
                className={`
                  relative h-full rounded-2xl p-8 
                  ${plan.popular 
                    ? 'bg-black text-white border-2 border-amber-400 shadow-2xl scale-105' 
                    : 'bg-white border-2 border-gray-200 hover:border-gray-300'
                  }
                  transition-all duration-300 hover:shadow-xl
                `}
              >
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-black'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-black'}`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={`text-lg ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'text-yellow-400' : 'text-yellow-500'
                      }`} />
                      <span className={`text-sm ${plan.popular ? 'text-gray-200' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-amber-400 hover:bg-amber-500 text-black' 
                      : 'bg-black hover:bg-gray-800 text-white'
                  } font-semibold py-6 text-lg group`}
                >
                  <Link to="/contact" className="flex items-center justify-center gap-2">
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantees */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {guarantees.map((guarantee, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                <guarantee.icon className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2">{guarantee.title}</h3>
              <p className="text-gray-600">{guarantee.description}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Footer */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-black to-gray-900 rounded-2xl p-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Não tem certeza qual plano escolher?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Agende uma consulta gratuita de 30 minutos e vamos encontrar a solução perfeita
          </p>
          <Button asChild size="lg" className="bg-amber-400 hover:bg-amber-500 text-black font-bold px-8 py-6 text-lg">
            <Link to="/contact">
              Agendar Consulta Gratuita
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
