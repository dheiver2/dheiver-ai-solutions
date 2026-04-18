import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Award, Printer } from 'lucide-react';
import { getCurrentMentorando } from '@/lib/mentorandoAuth';

const formatDate = (iso: string): string => {
  try {
    const date = new Date(iso);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return new Date().toLocaleDateString('pt-BR');
  }
};

const MentorandoCertificate = () => {
  const navigate = useNavigate();
  const user = getCurrentMentorando();

  useEffect(() => {
    if (!user) {
      navigate('/area-mentorando/login', { replace: true });
    }
  }, [user, navigate]);

  if (!user) return null;

  const issueDate = formatDate(new Date().toISOString());
  const startDate = formatDate(user.createdAt);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white print:bg-white print:text-black">
      <style>{`
        @media print {
          @page { size: A4 landscape; margin: 0; }
          body { background: #ffffff !important; }
          .print-hide { display: none !important; }
          .print-cert { box-shadow: none !important; border: 12px solid #f59e0b !important; margin: 0 !important; border-radius: 0 !important; min-height: 100vh; }
        }
      `}</style>

      <div className="print-hide sticky top-0 z-40 border-b border-white/10 bg-[#050816]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-8 md:py-4">
          <Link
            to="/area-mentorando"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-xs text-slate-200 transition hover:border-white/30 hover:bg-white/5 md:px-4 md:text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-xs font-bold text-black transition hover:bg-amber-300 md:px-5 md:text-sm"
          >
            <Printer className="h-4 w-4" />
            Baixar em PDF
          </button>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12 print:p-0">
        <article className="print-cert relative overflow-hidden rounded-[32px] border border-amber-400/30 bg-gradient-to-br from-[#0B1020] via-[#0B1020] to-[#111833] p-8 shadow-2xl shadow-black/40 md:p-14 print:border-amber-500 print:bg-white print:text-black print:shadow-none">
          <div
            className="pointer-events-none absolute inset-0 opacity-40 print:hidden"
            style={{
              background:
                'radial-gradient(circle at 15% 10%, rgba(245,158,11,0.25), transparent 42%), radial-gradient(circle at 85% 85%, rgba(59,130,246,0.18), transparent 45%)',
            }}
          />

          <div className="relative">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-300 print:border-amber-600 print:bg-amber-100 print:text-amber-800">
                <Award className="h-4 w-4" />
                Certificado de conclusao
              </div>
              <div className="hidden text-right md:block">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400 print:text-slate-600">
                  Mentoria IA Junior
                </p>
                <p className="text-sm font-bold text-white print:text-slate-900">Dr. Dheiver Santos</p>
              </div>
            </div>

            <p className="mt-12 text-center text-sm uppercase tracking-[0.28em] text-slate-400 md:mt-16 print:text-slate-600">
              Certificamos que
            </p>

            <h1
              className="mt-5 text-center text-4xl font-bold leading-tight text-white md:text-6xl print:text-slate-900"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {user.name}
            </h1>

            <div className="mx-auto mt-6 h-px w-48 bg-gradient-to-r from-transparent via-amber-400 to-transparent md:w-72 print:via-amber-600" />

            <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-slate-300 md:mt-10 md:text-lg md:leading-9 print:text-slate-700">
              concluiu o programa <strong className="text-white print:text-slate-900">Engenharia de IA Junior em 90 dias</strong>, com foco em
              Python, Git/GitHub, OpenAI API, construcao de portfolio e preparacao para disputar vagas junior
              no mercado de IA.
            </p>

            <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center print:border-slate-300 print:bg-slate-50">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 print:text-slate-600">
                  Inicio da jornada
                </p>
                <p className="mt-2 text-sm font-bold text-white print:text-slate-900">{startDate}</p>
              </div>
              <div className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-4 text-center print:border-amber-600 print:bg-amber-50">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300 print:text-amber-800">
                  Data de emissao
                </p>
                <p className="mt-2 text-sm font-bold text-white print:text-slate-900">{issueDate}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center print:border-slate-300 print:bg-slate-50">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 print:text-slate-600">
                  Codigo
                </p>
                <p className="mt-2 text-sm font-mono font-bold text-white print:text-slate-900">
                  {user.id.slice(-8).toUpperCase()}
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center gap-4 md:mt-16 md:flex-row md:justify-between">
              <div className="text-center md:text-left">
                <div className="mx-auto h-px w-40 bg-white/30 md:mx-0 print:bg-slate-400" />
                <p
                  className="mt-3 text-lg font-semibold text-white print:text-slate-900"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Dr. Dheiver Santos
                </p>
                <p className="text-xs text-slate-400 print:text-slate-600">
                  Engenheiro e mentor responsavel
                </p>
              </div>

              <div className="text-center md:text-right">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400 print:text-slate-600">
                  Verificar em
                </p>
                <p className="text-xs font-medium text-slate-300 print:text-slate-700">
                  dheiver.com.br/area-mentorando
                </p>
              </div>
            </div>
          </div>
        </article>

        <p className="print-hide mt-6 text-center text-xs text-slate-500">
          Clique em &ldquo;Baixar em PDF&rdquo; e selecione &ldquo;Salvar como PDF&rdquo; no dialogo de impressao.
        </p>
      </main>
    </div>
  );
};

export default MentorandoCertificate;
