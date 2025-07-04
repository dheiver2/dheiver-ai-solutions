
import React from 'react';
import HeroSection from '@/components/HeroSection';
import IntelligentAgentsSection from '@/components/IntelligentAgentsSection'; // Importar a nova seção

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <IntelligentAgentsSection /> {/* Adicionar a nova seção */}
    </div>
  );
};

export default Home;
