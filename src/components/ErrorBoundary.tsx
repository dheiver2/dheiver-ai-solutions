import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to monitoring service (Sentry, LogRocket, etc.)
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo,
    });

    // Send to error tracking service
    if (import.meta.env.PROD) {
      // Example: Sentry.captureException(error, { extra: errorInfo });
      this.logErrorToService(error, errorInfo);
    }
  }

  logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // Integrate with your error tracking service
    const errorData = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };

    // Example API call to logging service
    fetch('/api/log-error', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(errorData),
    }).catch(console.error);
  };

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
                <AlertTriangle className="w-10 h-10 text-red-600" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Algo deu errado
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                Desculpe pelo inconveniente. Nosso sistema encontrou um erro inesperado.
                Nossa equipe foi notificada e estamos trabalhando para resolver o problema.
              </p>

              {import.meta.env.DEV && this.state.error && (
                <div className="mb-8 text-left bg-red-50 border border-red-200 rounded-lg p-4 overflow-auto max-h-64">
                  <p className="font-mono text-sm text-red-800 mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </p>
                  {this.state.error.stack && (
                    <pre className="font-mono text-xs text-red-700 whitespace-pre-wrap">
                      {this.state.error.stack}
                    </pre>
                  )}
                  {this.state.errorInfo && (
                    <details className="mt-4">
                      <summary className="cursor-pointer text-sm font-semibold text-red-800 mb-2">
                        Component Stack
                      </summary>
                      <pre className="font-mono text-xs text-red-700 whitespace-pre-wrap">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={this.handleReset}
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Tentar Novamente
                </Button>
                
                <Button
                  onClick={this.handleGoHome}
                  variant="outline"
                  size="lg"
                  className="border-2 border-black text-black hover:bg-black hover:text-white"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Voltar ao Início
                </Button>
              </div>

              <p className="mt-8 text-sm text-gray-500">
                Se o problema persistir, entre em contato com nosso suporte:{' '}
                <a 
                  href="mailto:suporte@dheiver.com" 
                  className="text-black font-semibold hover:underline"
                >
                  suporte@dheiver.com
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
