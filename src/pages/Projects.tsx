
import React from 'react';
import Navigation from '@/components/Navigation';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';

const Projects = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
