import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Navigate, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "@/components/ErrorBoundary";
import { PageLoader } from "@/components/LoadingSpinner";
import { logger } from "@/services/logger";
import { isMentorandoAuthenticated } from "@/lib/mentorandoAuth";

// Lazy load pages
const Mentoring = lazy(() => import("./pages/Mentoring"));
const MentorandoArea = lazy(() => import("./pages/MentorandoArea"));
const MentorandoAuth = lazy(() => import("./pages/MentorandoAuth"));
const Obrigado = lazy(() => import("./pages/Obrigado"));

// Configure React Query with better defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    },
  },
});

// Componente que monitora hash e faz scroll automático
const ScrollToHash = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        // Aguarda um pouco para garantir que o DOM foi renderizado
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    };

    // Executar na primeira carga
    handleHashChange();

    // Listener para mudanças de hash
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return null;
};

const ProtectedMentorandoRoute = ({ children }: { children: React.ReactElement }) => {
  const location = useLocation();

  if (!isMentorandoAuthenticated()) {
    return <Navigate to="/area-mentorando/login" replace state={{ from: location }} />;
  }

  return children;
};

const App = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <HashRouter>
              <ScrollToHash />
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Mentoring />} />
                  <Route path="/obrigado" element={<Obrigado />} />
                  <Route path="/area-mentorando/login" element={<MentorandoAuth />} />
                  <Route
                    path="/area-mentorando"
                    element={
                      <ProtectedMentorandoRoute>
                        <MentorandoArea />
                      </ProtectedMentorandoRoute>
                    }
                  />
                  <Route path="*" element={<Mentoring />} />
                </Routes>
              </Suspense>
            </HashRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
