import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getBreadcrumbSchema } from '../lib/seo';

interface BreadcrumbItem {
  name: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [
    { name: 'Início', url: 'https://dheiver-ai-solutions.com' },
    ...items.map(item => ({ name: item.name, url: `https://dheiver-ai-solutions.com${item.href}` }))
  ];

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(getBreadcrumbSchema(allItems))}
        </script>
      </Helmet>
      
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          <li>
            <Link 
              to="/" 
              className="flex items-center hover:text-foreground transition-colors"
              aria-label="Voltar para página inicial"
            >
              <Home className="h-4 w-4" />
              <span className="sr-only">Início</span>
            </Link>
          </li>
          
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-2" />
              {item.current ? (
                <span className="font-medium text-foreground" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link 
                  to={item.href} 
                  className="hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}