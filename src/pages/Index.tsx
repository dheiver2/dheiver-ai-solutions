import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle, 
  Quote,
  Award,
  BarChart3,
  Clock,
  Shield,
  Star
} from 'lucide-react';

const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const services = [
    {
      title: "Machine Learning",
      description: "Algoritmos avançados para análise preditiva e otimização de processos empresariais",
      features: ["Análise Preditiva", "Otimização", "Automação"]
    },
    {
      title: "Visão Computacional",
      description: "Sistemas de reconhecimento visual para automação industrial e controle de qualidade",
      features: ["Reconhecimento", "Automação", "Qualidade"]
    },
    {
      title: "NLP Avançado",
      description: "Processamento de linguagem natural para chatbots e análise de sentimentos",
      features: ["Chatbots", "Análise", "Processamento"]
    },
    {
      title: "Automação IA",
      description: "Workflows inteligentes e automação de processos complexos com IA",
      features: ["Workflows", "Automação", "Inteligência"]
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Expertise Comprovada",
      description: "Mais de 10 anos de experiência e 50+ projetos entregues com sucesso"
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Metodologia ágil com entregas em prazos otimizados e resultados rápidos"
    },
    {
      icon: Shield,
      title: "IA Ética e Segura",
      description: "Soluções em conformidade com LGPD e melhores práticas de segurança"
    },
    {
      icon: BarChart3,
      title: "ROI Comprovado",
      description: "Resultados mensuráveis com retorno sobre investimento demonstrado"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "CTO, TechCorp",
      content: "A implementação da IA revolucionou nossos processos. Aumentamos a eficiência em 300% e reduzimos custos significativamente.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "CEO, InnovaTech",
      content: "Dr. Dheiver entregou uma solução de ML que superou todas as expectativas. Profissionalismo incomparável.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Diretora, DataFlow",
      content: "O sistema de visão computacional desenvolvido transformou nossa linha de produção. Qualidade excepcional.",
      rating: 5
    }
  ];

  const process = [
    {
      step: "01",
      title: "Análise e Descoberta",
      description: "Entendemos profundamente seu desafio e objetivos de negócio"
    },
    {
      step: "02", 
      title: "Estratégia Personalizada",
      description: "Desenvolvemos uma solução de IA sob medida para suas necessidades"
    },
    {
      step: "03",
      title: "Implementação Ágil",
      description: "Executamos com metodologia ágil e acompanhamento constante"
    },
    {
      step: "04",
      title: "Suporte Contínuo",
      description: "Oferecemos treinamento e suporte para maximizar os resultados"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Sem sobreposição com navegação */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen flex items-center">
        {/* Background Elements - Cores neutras */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -right-64 w-96 h-96 bg-gray-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-gold-200/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-width relative z-10">
          <motion.div 
            className="max-w-6xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full text-sm font-semibold mb-8 shadow-lg hover:bg-gray-900 transition-colors"
            >
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Consultoria Premium em Inteligência Artificial</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-black mb-6 leading-tight"
            >
              Transforme Seu Negócio com
              <span className="block bg-gradient-to-r from-black via-gray-800 to-gold-600 bg-clip-text text-transparent">
                Inteligência Artificial
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              <span className="font-semibold text-black">Dr. Dheiver Santos</span> oferece soluções de IA de alta complexidade 
              para empresas que buscam <span className="text-gold-600 font-medium">inovação real</span> e 
              <span className="text-gold-600 font-medium"> resultados mensuráveis</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Button asChild size="lg" className="bg-black hover:bg-gray-900 text-white px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gold-500/20">
                <Link to="/contact" className="flex items-center gap-2">
                  <span>Agendar Consulta Gratuita</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-gold-400" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-black text-black hover:bg-black hover:text-white px-10 py-4 text-lg font-semibold transition-all duration-300">
                <Link to="/services">
                  Explorar Serviços
                </Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">10+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Projetos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">300%</div>
                <div className="text-sm text-gray-600">Melhoria Média em Eficiência</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - SEM ÍCONES */}
      <section className="py-20 bg-white relative">
        <div className="container-width">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Soluções de <span className="text-gold-600">IA Avançada</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Desenvolvemos tecnologias de ponta que revolucionam processos e criam vantagens competitivas sustentáveis
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-sm font-bold px-3 py-1 rounded-full bg-black text-white">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" className="text-gray-900 hover:text-gray-700 p-0 font-semibold">
                    Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container-width">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Por que escolher nossa <span className="text-gold-600">consultoria</span>?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-black group-hover:bg-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white relative">
        <div className="container-width">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Nosso <span className="text-gold-600">Processo</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Metodologia comprovada para entregar soluções de IA que geram resultados reais
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-black group-hover:bg-gold-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 transition-colors duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black text-white relative">
        <div className="container-width">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">O que nossos</span> <span className="text-amber-400">clientes dizem</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-amber-500/50 transition-colors duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-amber-400 mb-4" />
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white relative overflow-hidden">
        {/* Gold accent */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container-width relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Pronto para</span> <span className="text-amber-400">revolucionar</span> <span className="text-white">seu negócio?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Agende uma consulta gratuita e descubra como a IA pode transformar seus resultados
            </p>
            <Button asChild size="lg" className="bg-white text-black hover:bg-gold-100 px-10 py-4 text-lg font-semibold shadow-xl transition-all duration-300">
              <Link to="/contact" className="flex items-center gap-2">
                <span>Começar Agora</span>
                <ArrowRight className="w-5 h-5 text-gold-600" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
