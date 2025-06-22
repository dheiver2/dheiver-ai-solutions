import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEOConfig, pageSEO, updatePageSEO, defaultSEO } from '@/lib/seo';

export const useSEO = (config?: Partial<SEOConfig>) => {
  const location = useLocation();

  useEffect(() => {
    // Get page-specific SEO config
    const getPageSEO = (): SEOConfig => {
      const path = location.pathname;
      
      switch (path) {
        case '/':
          return { ...defaultSEO, ...pageSEO.home };
        case '/about':
          return { ...defaultSEO, ...pageSEO.about };
        case '/services':
          return { ...defaultSEO, ...pageSEO.services };
        case '/projects':
          return { ...defaultSEO, ...pageSEO.projects };
        case '/insights':
          return { ...defaultSEO, ...pageSEO.insights };
        case '/contact':
          return { ...defaultSEO, ...pageSEO.contact };
        default:
          return defaultSEO;
      }
    };

    // Merge page SEO with custom config
    const finalConfig = { ...getPageSEO(), ...config };
    
    // Update page SEO
    updatePageSEO(finalConfig);
  }, [location.pathname, config]);
};

export default useSEO; 