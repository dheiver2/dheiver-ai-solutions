import React, { useState } from 'react';

const MentoringLeadCapture = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setLoading(true);

    // Simulate a small delay for UX feedback
    await new Promise((r) => setTimeout(r, 600));

    setLoading(false);
    setSubmitted(true);

    // Trigger PDF download
    const link = document.createElement('a');
    link.href = '/trilha-engenharia-ia-90-dias.pdf';
    link.download = 'Trilha-Engenharia-IA-90-Dias.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (submitted) {
    return (
      <div className="w-full py-10 bg-amber-50">
        <div className="max-w-xl mx-auto px-5 text-center">
          <div className="bg-white border-2 border-amber-600 p-8">
            <p className="text-3xl mb-4">🎉</p>
            <h3 className="text-xl font-bold text-black mb-2">
              Trilha enviada com sucesso!
            </h3>
            <p className="text-sm text-stone-700 mb-5 leading-relaxed">
              O download do PDF iniciou automaticamente.<br />
              Confira também seu email <span className="font-bold text-black">{email}</span>
            </p>

            <a
              href="/trilha-engenharia-ia-90-dias.pdf"
              download="Trilha-Engenharia-IA-90-Dias.pdf"
              className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 font-bold text-sm transition-colors duration-200 mb-4"
            >
              BAIXAR PDF NOVAMENTE
            </a>

            <div className="border-t border-stone-200 pt-4 mt-4">
              <p className="text-xs text-stone-600 mb-2">Quer acelerar sua jornada?</p>
              <a
                href="https://wa.me/5551989889898?text=Baixei%20a%20trilha%20de%20IA%20e%20quero%20saber%20mais%20sobre%20a%20mentoria!"
                className="inline-block bg-stone-950 hover:bg-stone-800 text-white px-6 py-2.5 font-bold text-xs transition-colors duration-200"
              >
                FALAR COM DR. DHEIVER NO WHATSAPP →
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-10 bg-amber-50">
      <div className="max-w-xl mx-auto px-5">
        <div className="text-center mb-6">
          <p className="text-amber-800 font-bold text-xs mb-2 tracking-wider">
            MATERIAL GRATUITO
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-2">
            Trilha de Engenharia de IA<br />
            <span className="text-amber-800">em 90 Dias</span>
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed">
            Roadmap completo semana a semana — do zero ao nível júnior.<br />
            Preencha abaixo e receba o PDF gratuito.
          </p>
        </div>

        {/* Preview do conteúdo */}
        <div className="bg-white border border-stone-200 p-5 mb-6">
          <p className="text-xs font-bold text-stone-500 mb-3 uppercase tracking-wide">
            O que você vai encontrar no PDF:
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs text-stone-800">
            <div className="flex items-start gap-2">
              <span className="text-amber-700 font-bold mt-0.5">✓</span>
              <span>Currículo completo de 12 semanas</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-700 font-bold mt-0.5">✓</span>
              <span>5 projetos reais para portfólio</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-700 font-bold mt-0.5">✓</span>
              <span>Stack tecnológico completo</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-700 font-bold mt-0.5">✓</span>
              <span>Roadmap de ML, LLMs e MLOps</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-700 font-bold mt-0.5">✓</span>
              <span>Preparação para entrevistas</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-700 font-bold mt-0.5">✓</span>
              <span>Faixa salarial e próximos passos</span>
            </div>
          </div>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 bg-white border-2 border-stone-300 text-black text-sm font-medium placeholder:text-stone-400 focus:border-amber-600 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Seu melhor email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-white border-2 border-stone-300 text-black text-sm font-medium placeholder:text-stone-400 focus:border-amber-600 focus:outline-none transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-700 hover:bg-amber-800 disabled:bg-amber-600 text-white py-3.5 font-bold text-sm transition-colors duration-200 flex items-center justify-center gap-2"
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
              'QUERO A TRILHA GRATUITA →'
            )}
          </button>
        </form>

        <p className="text-[10px] text-stone-500 text-center mt-3">
          Seus dados estão seguros. Não enviamos spam.
        </p>
      </div>
    </div>
  );
};

export default MentoringLeadCapture;
