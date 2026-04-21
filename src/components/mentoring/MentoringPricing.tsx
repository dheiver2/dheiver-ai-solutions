import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  MENTORING_INSTALLMENTS,
  MENTORING_MONTHLY_PRICE,
  MENTORING_PIX_DISCOUNT_PERCENT,
  MENTORING_PIX_PRICE,
  MENTORING_PIX_SAVINGS,
  MENTORING_SEATS_LEFT,
  MENTORING_STRIPE_PIX_LINK,
  MENTORING_TOTAL_PRICE,
  buildMentoringPixWhatsAppLink,
  buildMentoringWhatsAppLink,
  startMentoringCheckout,
} from './mentoringConfig';

const MentoringPricing = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="w-full py-20 md:py-28 bg-[#07090F] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.02] via-transparent to-transparent" />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-amber-400 text-xs font-bold tracking-[0.2em] mb-4">INVESTIMENTO</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Quanto custa{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">encurtar a sua transição</span>?
          </h2>
        </motion.div>

        {/* Price anchoring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-2 mb-8"
        >
          {[
            { label: 'Bootcamp presencial (Le Wagon, etc.)', price: 'R$ 21.900' },
            { label: 'Pós-graduação em IA', price: 'R$ 24.000+' },
            { label: 'Mentoria individual no mercado (R$ 700-1.000/h)', price: 'R$ 8.400+' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between bg-[#0D1117] border border-slate-800/40 rounded-lg p-4">
              <p className="text-sm text-slate-400">{item.label}</p>
              <p className="text-sm text-slate-500 line-through">{item.price}</p>
            </div>
          ))}
        </motion.div>

        {/* Main price card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative bg-gradient-to-b from-[#161B22] to-[#0D1117] border-2 border-amber-500/30 rounded-2xl p-8 text-center mb-8"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-black text-xs font-bold px-4 py-1 rounded-full">
            MELHOR VALOR
          </div>

          <p className="text-sm text-slate-400 mb-1">Mentoria Engenharia de IA Júnior — 3 meses</p>
          <p className="text-sm text-slate-600 line-through mb-2">de R$ 4.197</p>
          <p className="text-5xl md:text-6xl font-bold bg-gradient-to-b from-amber-400 to-amber-600 bg-clip-text text-transparent mb-1">
            R$ {MENTORING_MONTHLY_PRICE}<span className="text-xl">/mês</span>
          </p>
          <p className="text-sm text-slate-400 mb-6">Total: R$ {MENTORING_TOTAL_PRICE} em {MENTORING_INSTALLMENTS} pagamentos</p>

          {/* Payment options — 2 clear choices, clickable */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined' && window.fbq) {
                  window.fbq('track', 'InitiateCheckout', { content_name: 'pricing_card_stripe', value: MENTORING_TOTAL_PRICE, currency: 'BRL' });
                }
                void startMentoringCheckout();
              }}
              className="relative bg-[#0D1117] border-2 border-emerald-500/30 rounded-xl p-4 text-left transition-all hover:border-emerald-400/60 hover:bg-[#0F1620] hover:-translate-y-0.5"
            >
              <span className="absolute -top-2.5 left-3 text-[9px] font-bold tracking-wider bg-emerald-500 text-black px-2 py-0.5 rounded">SEM JUROS</span>
              <p className="text-[11px] uppercase tracking-wider text-slate-500 mb-1">Cartão de crédito</p>
              <p className="text-xl font-bold text-white leading-tight">{MENTORING_INSTALLMENTS}x de R$ {MENTORING_MONTHLY_PRICE}</p>
              <p className="text-[11px] text-slate-400 mt-1">Total: R$ {MENTORING_TOTAL_PRICE}</p>
              <p className="text-[10px] text-emerald-400 mt-2 font-semibold">Pagar agora →</p>
            </button>
            <a
              href={MENTORING_STRIPE_PIX_LINK || buildMentoringPixWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { if (typeof window !== 'undefined' && window.fbq) { window.fbq('track', 'InitiateCheckout', { content_name: 'pricing_pix', value: MENTORING_PIX_PRICE, currency: 'BRL' }); } }}
              className="relative bg-[#0D1117] border-2 border-amber-500/30 rounded-xl p-4 text-left transition-all hover:border-amber-400/60 hover:bg-[#0F1620] hover:-translate-y-0.5"
            >
              <span className="absolute -top-2.5 left-3 text-[9px] font-bold tracking-wider bg-amber-500 text-black px-2 py-0.5 rounded">-{MENTORING_PIX_DISCOUNT_PERCENT}% PIX</span>
              <p className="text-[11px] uppercase tracking-wider text-slate-500 mb-1">À vista no Pix</p>
              <p className="text-xl font-bold text-white leading-tight">R$ {MENTORING_PIX_PRICE}</p>
              <p className="text-[11px] text-emerald-400 mt-1">Economize R$ {MENTORING_PIX_SAVINGS}</p>
              <p className="text-[10px] text-amber-400 mt-2 font-semibold">{MENTORING_STRIPE_PIX_LINK ? 'Pagar agora →' : 'Gerar Pix via WhatsApp →'}</p>
            </a>
          </div>

          <p className="text-[11px] text-amber-400/70 font-medium mb-6">Inclui acompanhamento individual, projetos guiados, revisão de currículo e preparação para entrevistas.</p>

          {/* Included */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-left mb-8">
            {['12 sessões individuais', '5+ projetos de portfólio', 'Currículo adaptado para IA', 'Plano de estudos semanal', '3 simulações de entrevista', 'Suporte via WhatsApp', 'Certificado de conclusão', 'Garantia de 14 dias', 'Acesso às gravações', 'Mentor PhD + professor'].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-300">
                <span className="text-amber-400 text-xs">✓</span>
                <span className="text-xs">{item}</span>
              </div>
            ))}
          </div>

          <motion.button
            type="button"
            onClick={() => {
              if (typeof window !== 'undefined' && window.fbq) {
                window.fbq('track', 'InitiateCheckout', { content_name: 'pricing_main_cta_stripe', value: MENTORING_TOTAL_PRICE, currency: 'BRL' });
              }
              void startMentoringCheckout();
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm py-4 rounded-lg transition-all duration-300 shadow-lg shadow-amber-500/25"
          >
            PAGAR AGORA COM SEGURANÇA →
          </motion.button>
          <p className="text-[11px] text-slate-500 mt-3 flex items-center justify-center gap-1.5">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Pagamento processado pelo Stripe · Dados criptografados
          </p>
          <p className="text-xs text-slate-500 mt-2">Apenas {MENTORING_SEATS_LEFT} vagas restantes nesta turma</p>
          <a
            href={buildMentoringWhatsAppLink('Tenho uma dúvida antes de pagar a mentoria em Engenharia de IA.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-xs text-slate-400 hover:text-amber-300 transition-colors underline-offset-4 hover:underline"
          >
            Prefere tirar dúvida antes? Fale no WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default MentoringPricing;
