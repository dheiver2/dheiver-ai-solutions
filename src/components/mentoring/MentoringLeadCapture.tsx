import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { buildMentoringWhatsAppLink } from './mentoringConfig';

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbyyTnwdIIUDTUwutNYmlGEzu-07PURH9PsFT6DJbG_EicYagYj50Hpnhd7HEjAWHq6uoQ/exec';

const MentoringLeadCapture = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setLoading(true);

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), source: 'mentoring-landing' }),
      });
    } catch {
      console.warn('Falha ao salvar lead — PDF entregue mesmo assim.');
    }

    setLoading(false);
    setSubmitted(true);
    if (typeof window !== 'undefined' && window.fbq) { window.fbq('track', 'CompleteRegistration', { content_name: 'lead_capture_pdf' }); }

    const link = document.createElement('a');
    link.href = '/trilha-engenharia-ia-90-dias.pdf';
    link.download = 'Trilha-Engenharia-IA-90-Dias.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const features = [
    'Currículo completo de 12 semanas',
    '5 projetos reais para portfólio',
    'Stack tecnológico completo',
    'Roadmap de ML, LLMs e MLOps',
    'Preparação para entrevistas',
    'Faixa salarial e próximos passos',
  ];

  if (submitted) {
    return (
      <div className="w-full py-20 bg-[#0D1117]">
        <div className="max-w-lg mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#161B22] border border-amber-500/20 rounded-2xl p-8"
          >
            <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎉</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Trilha enviada com sucesso!</h3>
            <p className="text-sm text-slate-400 mb-6">
              O download do PDF iniciou automaticamente.<br />
              Confira também seu email <span className="text-amber-400 font-medium">{email}</span>
            </p>
            <a
              href="/trilha-engenharia-ia-90-dias.pdf"
              download="Trilha-Engenharia-IA-90-Dias.pdf"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-lg font-bold text-sm transition-colors mb-4"
            >
              BAIXAR PDF NOVAMENTE
            </a>
            <div className="border-t border-slate-800 pt-4 mt-4">
              <p className="text-xs text-slate-500 mb-3">Quer acelerar sua jornada?</p>
              <a
                href={buildMentoringWhatsAppLink('Baixei a trilha de IA e quero saber mais sobre a mentoria.')}
                className="inline-block bg-white/5 hover:bg-white/10 border border-slate-700 text-white px-6 py-2.5 rounded-lg font-bold text-xs transition-all"
              >
                FALAR COM DR. DHEIVER NO WHATSAPP →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-20 md:py-28 bg-[#0D1117] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/[0.04] rounded-full blur-[100px]" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-amber-400 text-xs font-bold tracking-[0.2em] mb-4">MATERIAL GRATUITO</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
              Trilha de Engenharia de IA{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">em 90 Dias</span>
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Roadmap completo, semana a semana, para sair do zero em IA com direção, projetos e próximos passos claros.
            </p>
            <div className="grid grid-cols-1 gap-2.5">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-400 text-xs">✓</span>
                  </span>
                  {f}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-amber-500/15 bg-amber-500/[0.04] p-4">
              <p className="text-xs font-bold tracking-[0.16em] text-amber-400">O QUE VOCÊ LEVA</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Um mapa prático para estudar sem se perder: fundamentos, stack recomendada, projetos de portfólio e como se posicionar para vagas júnior.
              </p>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-[#161B22] border border-slate-800/80 rounded-2xl p-6 md:p-8">
              <p className="text-white font-bold text-lg mb-1">Receba o PDF gratuito</p>
              <p className="text-slate-500 text-sm mb-6">Preencha abaixo e baixe agora. Sem cartão e sem enrolação.</p>

              <div className="space-y-3 mb-4">
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3.5 bg-[#0D1117] border border-slate-700/80 rounded-lg text-white text-sm placeholder:text-slate-600 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 focus:outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3.5 bg-[#0D1117] border border-slate-700/80 rounded-lg text-white text-sm placeholder:text-slate-600 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 focus:outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:opacity-60 text-black py-3.5 rounded-lg font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    ENVIANDO...
                  </>
                ) : (
                  'QUERO BAIXAR A TRILHA →'
                )}
              </button>

              <p className="text-[11px] text-slate-600 text-center mt-3">
                Seus dados ficam protegidos. Nada de spam.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MentoringLeadCapture;
