import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Target,
  BarChart3,
  Zap,
  Award,
  Users,
  CheckCircle2
} from 'lucide-react';

const ResultsShowcase = () => {
  const caseStudies = [
    {
      company: 'TechCorp Brasil',
      industry: 'E-commerce',
      challenge: 'Baixa taxa de conversão e custos operacionais altos',
      solution: 'Sistema de recomendação com ML + Automação de atendimento',
      results: [
        { metric: '+287%', label: 'Aumento em Vendas', icon: TrendingUp },
        { metric: 'R$ 2.3M', label: 'Economia Anual', icon: DollarSign },
        { metric: '45 dias', label: 'Tempo de Implementação', icon: Clock },
        { metric: '4.8/5', label: 'Satisfação do Cliente', icon: Award },
      ],
      testimonial: 'A implementação de IA transformou completamente nosso negócio. O ROI foi além de qualquer expectativa.',
      author: 'Carlos Silva',
      role: 'CEO, TechCorp',
      image: '💼',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      company: 'IndustryMax',
      industry: 'Manufatura',
      challenge: 'Defeitos de qualidade e desperdício de materiais',
      solution: 'Visão Computacional para controle de qualidade em tempo real',
      results: [
        { metric: '94%', label: 'Redução de Defeitos', icon: Target },
        { metric: 'R$ 1.8M', label: 'Economia em Materiais', icon: DollarSign },
        { metric: '99.2%', label: 'Precisão do Sistema', icon: CheckCircle2 },
        { metric: '60 dias', label: 'Payback Period', icon: Clock },
      ],
      testimonial: 'Nunca imaginei que IA poderia ter um impacto tão direto e mensurável na nossa linha de produção.',
      author: 'Ana Costa',
      role: 'Diretora de Operações',
      image: '🏭',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      company: 'FinanceFlow',
      industry: 'Serviços Financeiros',
      challenge: 'Detecção de fraudes e análise de risco manual',
      solution: 'ML para detecção de anomalias e scoring de risco automatizado',
      results: [
        { metric: '98.7%', label: 'Precisão na Detecção', icon: Target },
        { metric: 'R$ 4.2M', label: 'Fraudes Evitadas', icon: DollarSign },
        { metric: '-85%', label: 'Tempo de Análise', icon: Zap },
        { metric: '10x', label: 'Mais Transações Analisadas', icon: BarChart3 },
      ],
      testimonial: 'A solução de IA nos deu uma vantagem competitiva impossível de replicar manualmente.',
      author: 'Roberto Mendes',
      role: 'CTO, FinanceFlow',
      image: '💰',
      color: 'from-amber-500 to-amber-600',
    },
  ];

  const stats = [
    { number: '50+', label: 'Projetos Entregues', icon: Award },
    { number: 'R$ 45M+', label: 'Economia Gerada', icon: DollarSign },
    { number: '98%', label: 'Taxa de Sucesso', icon: Target },
    { number: '4.9/5', label: 'Satisfação Média', icon: Users },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-width">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-6">
            <TrendingUp className="w-4 h-4" />
            <span>Resultados Comprovados</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Transformações Reais,
            <span className="block bg-gradient-to-r from-yellow-600 to-yellow-600 bg-clip-text text-transparent">
              Resultados Mensuráveis
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como empresas como a sua multiplicaram seus resultados com nossas soluções de IA
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-amber-400" />
              </div>
              <div className="text-4xl font-bold text-black mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-2 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left Side - Info */}
                  <div className="p-8 md:p-12 bg-gradient-to-br from-gray-50 to-white">
                    <div className="text-6xl mb-6">{study.image}</div>
                    
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-black mb-2">
                        {study.company}
                      </h3>
                      <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">
                        {study.industry}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-bold text-gray-500 uppercase mb-2">Desafio</h4>
                        <p className="text-gray-700">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-gray-500 uppercase mb-2">Solução</h4>
                        <p className="text-gray-700">{study.solution}</p>
                      </div>

                      <div className="pt-6 border-t">
                        <p className="text-lg italic text-gray-800 mb-4">
                          "{study.testimonial}"
                        </p>
                        <div>
                          <p className="font-bold text-black">{study.author}</p>
                          <p className="text-sm text-gray-600">{study.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Results */}
                  <div className={`p-8 md:p-12 bg-gradient-to-br ${study.color} text-white`}>
                    <h4 className="text-2xl font-bold mb-8">Resultados Alcançados</h4>
                    
                    <div className="grid grid-cols-2 gap-6">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                          <result.icon className="w-8 h-8 mb-4 opacity-90" />
                          <div className="text-3xl md:text-4xl font-bold mb-2">
                            {result.metric}
                          </div>
                          <div className="text-sm opacity-90">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                      <p className="text-sm font-semibold mb-2">ROI Médio</p>
                      <p className="text-3xl font-bold">320% em 6 meses</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;
