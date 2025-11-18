import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Play, 
  X, 
  Check,
  ArrowRight,
  Sparkles,
  Trophy,
  Rocket,
  Target
} from 'lucide-react';

const VideoShowcase = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const videos = [
    {
      id: 1,
      title: 'Como a IA aumentou vendas em 287%',
      duration: '3:45',
      thumbnail: '🎯',
      category: 'Case de Sucesso',
      description: 'Veja como a TechCorp transformou seu e-commerce com Machine Learning',
      views: '12.5K',
      featured: true,
    },
    {
      id: 2,
      title: 'Automatização que economizou R$ 2.3M',
      duration: '4:12',
      thumbnail: '💰',
      category: 'ROI Comprovado',
      description: 'Descubra como automação inteligente reduziu custos operacionais',
      views: '8.3K',
      featured: true,
    },
    {
      id: 3,
      title: 'Visão Computacional na Indústria',
      duration: '5:20',
      thumbnail: '🏭',
      category: 'Inovação',
      description: 'Sistema de qualidade que detecta 99.2% dos defeitos automaticamente',
      views: '15.2K',
      featured: false,
    },
  ];

  const benefits = [
    {
      icon: Trophy,
      title: 'Resultados Garantidos',
      description: 'ROI médio de 320% em 6 meses ou seu dinheiro de volta',
    },
    {
      icon: Rocket,
      title: 'Implementação Rápida',
      description: 'Do planejamento ao resultado em 45-90 dias',
    },
    {
      icon: Target,
      title: 'Customização Total',
      description: 'Solução única desenvolvida para seu negócio específico',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-width relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400 text-black rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Veja IA em Ação</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transformações Reais
            <span className="block bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
              Capturadas em Vídeo
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Não acredite apenas nas palavras. Veja empresas reais alcançando resultados extraordinários com nossas soluções
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(video.id)}
            >
              <Card className="overflow-hidden bg-gray-900 border-gray-800 hover:border-amber-400 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/20">
                {video.featured && (
                  <div className="bg-amber-400 text-black text-xs font-bold px-3 py-1 text-center">
                    ⭐ MAIS ASSISTIDO
                  </div>
                )}
                
                <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                  <div className="text-8xl transform group-hover:scale-110 transition-transform duration-300">
                    {video.thumbnail}
                  </div>
                  
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-black ml-1" fill="black" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold">
                    {video.duration}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                    {video.category}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{video.views} visualizações</span>
                    <span className="flex items-center gap-1 text-amber-400 font-semibold">
                      Assistir <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-black font-bold px-10 py-6 text-lg">
            Agende Sua Demonstração Gratuita
          </Button>
          <p className="text-sm text-gray-400 mt-4">
            30 minutos de consulta • Análise personalizada • Sem compromisso
          </p>
        </motion.div>
      </div>

      {/* Video Modal (Placeholder) */}
      <AnimatePresence>
        {selectedVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-9xl mb-6">
                    {videos.find(v => v.id === selectedVideo)?.thumbnail}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {videos.find(v => v.id === selectedVideo)?.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {videos.find(v => v.id === selectedVideo)?.description}
                  </p>
                  <p className="text-sm text-amber-400">
                    💡 Vídeo de demonstração - Entre em contato para ver o caso completo
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoShowcase;
