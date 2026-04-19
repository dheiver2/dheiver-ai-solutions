import React, { useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle2, Mail, MessageCircle, UserPlus } from 'lucide-react';
import Footer from '@/components/Footer';
import {
  MENTORING_DISPLAY_PHONE,
  buildMentoringWhatsAppLink,
} from '@/components/mentoring/mentoringConfig';

const Obrigado = () => {
  const [searchParams] = useSearchParams();
  const method = searchParams.get('method');
  const sessionId = searchParams.get('session_id');

  const methodLabel = useMemo(() => {
    if (method === 'cartao') return 'cartão de crédito';
    if (method === 'pix') return 'Pix';
    return 'pagamento';
  }, [method]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Purchase', {
        content_name: 'mentoria_ia_3_meses',
        currency: 'BRL',
      });
    }
  }, []);

  const whatsappHref = buildMentoringWhatsAppLink(
    `Acabei de concluir o ${methodLabel}${sessionId ? ` (sessão ${sessionId})` : ''} e quero receber o acesso à área do mentorando.`
  );

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.18),transparent_30%),linear-gradient(180deg,#050816_0%,#0B1020_55%,#050816_100%)]" />

      <main className="mx-auto max-w-2xl px-5 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/40">
            <CheckCircle2 className="h-9 w-9 text-emerald-400" />
          </div>

          <h1 className="mt-6 text-3xl font-bold leading-tight md:text-5xl" style={{ fontFamily: "'Inter', sans-serif" }}>
            Pagamento confirmado.
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Bem-vindo(a) à mentoria.
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-slate-300 md:text-lg">
            Seu acesso já está <strong className="text-white">liberado</strong>. Em alguns minutos você recebe um email com o link da área do mentorando e o próximo passo para agendar sua primeira sessão 1:1.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">1. Recibo no email</p>
                <p className="mt-1 text-sm text-slate-400">Stripe envia automaticamente. Se não chegar em 10 minutos, confira spam/lixo eletrônico.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400">
                <UserPlus className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">2. Acesso à área do mentorando</p>
                <p className="mt-1 text-sm text-slate-400">Enviamos um email com o link. Você também pode ir direto para <Link to="/area-mentorando/login" className="text-amber-300 underline-offset-4 hover:underline">área do mentorando</Link> e fazer seu cadastro usando o mesmo email do pagamento.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">3. Agendamento da 1ª sessão 1:1</p>
                <p className="mt-1 text-sm text-slate-400">Combinamos no WhatsApp. Prefere acelerar? Me chama agora pelo <span className="text-white">{MENTORING_DISPLAY_PHONE}</span>.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-black transition hover:bg-emerald-400"
          >
            <MessageCircle className="h-4 w-4" />
            Falar com Dheiver no WhatsApp
          </a>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/5"
          >
            Voltar para a mentoria
          </Link>
        </div>

        <p className="mt-10 text-center text-xs text-slate-500">
          Pagamento processado com segurança pelo Stripe · Garantia de 14 dias · CNPJ/razão social no recibo
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default Obrigado;
