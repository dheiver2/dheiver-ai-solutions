export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const defaultSEO: SEOConfig = {
  title: "Dr. Dheiver Santos - Consultoria Avançada em Inteligência Artificial",
  description: "🚀 Consultoria especializada em IA avançada e projetos complexos. Dr. Dheiver Santos oferece soluções inovadoras em Machine Learning, Visão Computacional e Processamento de Linguagem Natural.",
  keywords: "consultoria inteligência artificial, especialista IA, machine learning, deep learning, visão computacional, processamento linguagem natural",
  image: "https://dheiver-ai-solutions.com/og-image.jpg",
  url: "https://dheiver-ai-solutions.com",
  type: "website"
};

export const pageSEO = {
  home: {
    title: "Dr. Dheiver Santos - Consultoria Avançada em IA | Especialista em Machine Learning",
    description: "🚀 Transforme seu negócio com IA! Consultoria especializada em Machine Learning, Deep Learning, Visão Computacional e NLP. Soluções de alta complexidade para empresas inovadoras.",
    keywords: "consultoria IA, machine learning, inteligência artificial empresarial, automação inteligente, consultoria tecnológica"
  },
  about: {
    title: "Sobre Dr. Dheiver Santos - Especialista em Inteligência Artificial",
    description: "Conheça Dr. Dheiver Santos, especialista em IA com vasta experiência em projetos complexos de Machine Learning, Visão Computacional e Processamento de Linguagem Natural.",
    keywords: "Dr. Dheiver Santos, especialista IA, experiência machine learning, consultor inteligência artificial"
  },
  services: {
    title: "Serviços de Consultoria em IA - Machine Learning & Deep Learning",
    description: "Serviços especializados em IA: Consultoria estratégica, Machine Learning, Visão Computacional, NLP, Automação Inteligente. Transforme dados em resultados!",
    keywords: "serviços IA, consultoria machine learning, deep learning, visão computacional, NLP, automação"
  },
  projects: {
    title: "Projetos de IA Bem-Sucedidos - Cases de Machine Learning",
    description: "Conheça nossos projetos de sucesso em Inteligência Artificial. Cases reais de implementação de ML, Computer Vision e NLP em empresas.",
    keywords: "projetos IA, cases machine learning, exemplos deep learning, portfolio IA"
  },
  insights: {
    title: "Insights sobre IA - Tendências em Machine Learning e Tecnologia",
    description: "Artigos e insights sobre as últimas tendências em Inteligência Artificial, Machine Learning, Deep Learning e inovações tecnológicas.",
    keywords: "insights IA, tendências machine learning, artigos inteligência artificial, inovação tecnológica"
  },
  contact: {
    title: "Contato - Consultoria em Inteligência Artificial | Agende sua Consulta",
    description: "Entre em contato para consultoria especializada em IA. Agende uma consulta gratuita e descubra como transformar seu negócio com Inteligência Artificial.",
    keywords: "contato consultoria IA, agendar consulta machine learning, consultoria inteligência artificial"
  }
};

export const generateStructuredData = (config: SEOConfig) => {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": config.title,
    "description": config.description,
    "url": config.url,
    "logo": "https://dheiver-ai-solutions.com/logo.png",
    "image": config.image,
    "founder": {
      "@type": "Person",
      "name": "Dr. Dheiver Santos",
      "jobTitle": "Especialista em Inteligência Artificial",
      "description": "Doutor especializado em Machine Learning, Visão Computacional e Processamento de Linguagem Natural"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR"
    },
    "serviceType": [
      "Consultoria em Inteligência Artificial",
      "Machine Learning",
      "Visão Computacional", 
      "Processamento de Linguagem Natural",
      "Automação Inteligente"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Brasil"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "Portuguese"
    }
  };
};

export const updatePageSEO = (config: SEOConfig) => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  
  // Update title
  document.title = config.title;
  
  // Update meta description
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute('content', config.description);
  }
  
  // Update meta keywords
  if (config.keywords) {
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) {
      keywordsMeta.setAttribute('content', config.keywords);
    }
  }
  
  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', config.title);
  }
  
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', config.description);
  }
  
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl && config.url) {
    ogUrl.setAttribute('content', config.url);
  }
  
  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage && config.image) {
    ogImage.setAttribute('content', config.image);
  }
  
  // Update Twitter Card tags
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) {
    twitterTitle.setAttribute('content', config.title);
  }
  
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescription) {
    twitterDescription.setAttribute('content', config.description);
  }
  
  const twitterImage = document.querySelector('meta[name="twitter:image"]');
  if (twitterImage && config.image) {
    twitterImage.setAttribute('content', config.image);
  }
  
  // Update canonical URL
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical && config.url) {
    canonical.setAttribute('href', config.url);
  }
}; 