export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const defaultSEO: SEOConfig = {
  title: "Dr. Dheiver Santos - Mentoria Avançada em Inteligência Artificial",
  description: "🚀 Mentoria especializada em IA avançada e projetos complexos. Dr. Dheiver Santos oferece soluções inovadoras em Machine Learning, Visão Computacional e Processamento de Linguagem Natural. Transforme seu negócio com IA!",
  keywords: "Mentoria inteligência artificial, especialista IA, machine learning, deep learning, visão computacional, processamento linguagem natural, automação inteligente, chatbots, análise preditiva, computer vision, NLP, neural networks, data science, AI consulting",
  image: "https://dheiver-ai-solutions.com/dheiver-photo.jpg",
  url: "https://dheiver-ai-solutions.com",
  type: "website"
};

export const pageSEO = {
  home: {
    title: "Dr. Dheiver Santos - Mentoria Avançada em IA | Especialista em Machine Learning",
    description: "🚀 Transforme seu negócio com IA! Mentoria especializada em Machine Learning, Deep Learning, Visão Computacional e NLP. Soluções de alta complexidade para empresas inovadoras. Consulta gratuita disponível!",
    keywords: "Mentoria IA, machine learning, inteligência artificial empresarial, automação inteligente, Mentoria tecnológica, deep learning, computer vision, chatbots, análise preditiva, neural networks, data science"
  },
  about: {
    title: "Sobre Dr. Dheiver Santos - Especialista em Inteligência Artificial",
    description: "Conheça Dr. Dheiver Santos, especialista em IA com mais de 10 anos de experiência em projetos complexos de Machine Learning, Visão Computacional e Processamento de Linguagem Natural. Doutor em IA.",
    keywords: "Dr. Dheiver Santos, especialista IA, experiência machine learning, consultor inteligência artificial, doutor IA, computer vision, NLP, deep learning"
  },
  services: {
    title: "Serviços de Mentoria em IA - Machine Learning & Deep Learning",
    description: "Serviços especializados em IA: Mentoria estratégica, Machine Learning, Visão Computacional, NLP, Automação Inteligente, Chatbots. Transforme dados em resultados! Orçamento personalizado.",
    keywords: "serviços IA, Mentoria machine learning, deep learning, visão computacional, NLP, automação, chatbots, análise preditiva, computer vision, neural networks, AI consulting"
  },
  projects: {
    title: "Projetos de IA Bem-Sucedidos - Cases de Machine Learning",
    description: "Conheça nossos projetos de sucesso em Inteligência Artificial. Cases reais de implementação de ML, Computer Vision, NLP e automação inteligente em empresas. Portfolio completo.",
    keywords: "projetos IA, cases machine learning, exemplos deep learning, portfolio IA, computer vision, NLP, automação inteligente, casos de sucesso"
  },
  insights: {
    title: "Insights sobre IA - Tendências em Machine Learning e Tecnologia",
    description: "Artigos e insights sobre as últimas tendências em Inteligência Artificial, Machine Learning, Deep Learning, Computer Vision, NLP e inovações tecnológicas. Conteúdo especializado.",
    keywords: "insights IA, tendências machine learning, artigos inteligência artificial, inovação tecnológica, deep learning, computer vision, NLP, neural networks, AI trends"
  },
  contact: {
    title: "Contato - Mentoria em Inteligência Artificial | Agende sua Consulta",
    description: "Entre em contato para Mentoria especializada em IA. Agende uma consulta gratuita e descubra como transformar seu negócio com Inteligência Artificial. Atendimento personalizado.",
    keywords: "contato Mentoria IA, agendar consulta machine learning, Mentoria inteligência artificial, consulta gratuita, orçamento IA, atendimento especializado"
  }
};

export const generateStructuredData = (config: SEOConfig) => {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": config.title,
    "description": config.description,
    "url": config.url,
    "logo": "https://dheiver-ai-solutions.com/logo.svg",
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
      "Mentoria em Inteligência Artificial",
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

export const getLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dr. Dheiver Santos - Mentoria IA",
    "description": "Mentoria especializada em soluções de Inteligência Artificial avançada e projetos de alta complexidade",
    "url": "https://dheiver-ai-solutions.com",
    "telephone": "+55-51-99999-9999",
    "email": "contato@dheiver-ai-solutions.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Porto Alegre",
      "addressRegion": "RS",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -30.0346,
      "longitude": -51.2177
    },
    "openingHours": [
      "Mo-Fr 09:00-18:00"
    ],
    "priceRange": "$$-$$$",
    "image": "https://dheiver-ai-solutions.com/dheiver-photo.jpg",
    "logo": "https://dheiver-ai-solutions.com/logo.svg",
    "sameAs": [
      "https://linkedin.com/in/dheiver-santos",
      "https://github.com/dheiver2"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Mentoria IA",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mentoria em Machine Learning",
            "description": "Desenvolvimento de soluções personalizadas em ML"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Visão Computacional",
            "description": "Implementação de sistemas de computer vision"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Processamento de Linguagem Natural",
            "description": "Soluções em NLP e chatbots inteligentes"
          }
        }
      ]
    }
  };
};

export const getFAQSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que é Mentoria em Inteligência Artificial?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Mentoria em IA envolve análise, desenvolvimento e implementação de soluções baseadas em inteligência artificial para resolver problemas complexos de negócio, incluindo machine learning, deep learning, visão computacional e processamento de linguagem natural."
        }
      },
      {
        "@type": "Question", 
        "name": "Quais são os principais serviços oferecidos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oferecemos Mentoria estratégica em IA, desenvolvimento de modelos de machine learning, implementação de sistemas de visão computacional, criação de chatbots e assistentes virtuais, automação inteligente de processos e análise preditiva de dados."
        }
      },
      {
        "@type": "Question",
        "name": "Como funciona o processo de Mentoria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O processo inicia com uma consulta gratuita para entender suas necessidades, seguido de análise técnica detalhada, proposta customizada, desenvolvimento da solução e acompanhamento pós-implementação para garantir os melhores resultados."
        }
      },
      {
        "@type": "Question",
        "name": "Qual o tempo médio para implementar uma solução de IA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O tempo varia conforme a complexidade do projeto, podendo ir de 2-4 semanas para soluções simples até 3-6 meses para projetos complexos de machine learning ou visão computacional."
        }
      }
    ]
  };
};

export const getBreadcrumbSchema = (items: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export const getPersonSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr. Dheiver Santos",
    "jobTitle": "Especialista em Inteligência Artificial",
    "description": "Doutor e especialista em IA com mais de 10 anos de experiência em projetos complexos de Machine Learning, Visão Computacional e Processamento de Linguagem Natural",
    "url": "https://dheiver-ai-solutions.com/about",
    "image": "https://dheiver-ai-solutions.com/dheiver-photo.jpg",
    "worksFor": {
      "@type": "Organization",
      "name": "Dr. Dheiver Santos - Mentoria IA"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "Universidade Federal do Rio Grande do Sul"
    },
    "knowsAbout": [
      "Inteligência Artificial",
      "Machine Learning", 
      "Deep Learning",
      "Visão Computacional",
      "Processamento de Linguagem Natural",
      "Automação Inteligente",
      "Neural Networks",
      "Data Science"
    ],
    "sameAs": [
      "https://linkedin.com/in/dheiver-santos",
      "https://github.com/dheiver2"
    ]
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