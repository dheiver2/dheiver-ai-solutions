import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { 
  SEOConfig, 
  defaultSEO, 
  pageSEO, 
  generateStructuredData,
  getLocalBusinessSchema,
  getPersonSchema
} from '../lib/seo';

interface SEOHeadProps {
  config?: Partial<SEOConfig>;
  includeLocalBusiness?: boolean;
  includePerson?: boolean;
}

export default function SEOHead({ 
  config, 
  includeLocalBusiness = false, 
  includePerson = false 
}: SEOHeadProps) {
  const location = useLocation();
  
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
  
  // Update URL for current page
  finalConfig.url = `https://dheiver-ai-solutions.com${location.pathname}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalConfig.title}</title>
      <meta name="description" content={finalConfig.description} />
      {finalConfig.keywords && <meta name="keywords" content={finalConfig.keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={finalConfig.title} />
      <meta property="og:description" content={finalConfig.description} />
      <meta property="og:url" content={finalConfig.url} />
      <meta property="og:type" content={finalConfig.type || 'website'} />
      {finalConfig.image && <meta property="og:image" content={finalConfig.image} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalConfig.title} />
      <meta name="twitter:description" content={finalConfig.description} />
      {finalConfig.image && <meta name="twitter:image" content={finalConfig.image} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalConfig.url} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
      
      {/* Language and Location */}
      <meta name="language" content="pt-BR" />
      <meta name="geo.region" content="BR" />
      <meta name="geo.placename" content="Porto Alegre, RS" />
      <meta name="geo.position" content="-30.0346;-51.2177" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateStructuredData(finalConfig))}
      </script>
      
      {/* Local Business Schema */}
      {includeLocalBusiness && (
        <script type="application/ld+json">
          {JSON.stringify(getLocalBusinessSchema())}
        </script>
      )}
      
      {/* Person Schema */}
      {includePerson && (
        <script type="application/ld+json">
          {JSON.stringify(getPersonSchema())}
        </script>
      )}
      
      {/* Performance and Core Web Vitals */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* PWA Meta Tags */}
      <meta name="application-name" content="Dr. Dheiver Santos - Consultoria IA" />
      <meta name="apple-mobile-web-app-title" content="Consultoria IA" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#000000" />
      
      {/* Additional Meta Tags for Better Indexing */}
      <meta name="author" content="Dr. Dheiver Santos" />
      <meta name="publisher" content="Dr. Dheiver Santos - Consultoria IA" />
      <meta name="copyright" content="© 2024 Dr. Dheiver Santos - Consultoria IA" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  );
}