import React, { useEffect, useRef, useState } from 'react';

const mediaItems = [
  {
    source: 'CNN Brasil',
    badge: 'DESTAQUE',
    badgeColor: 'bg-red-600',
    title: 'Brasileiro Desafia Big Techs com Nova Tecnologia para Criação de Agentes de IA',
    subtitle: 'Plataforma Mangaba AI foca em "engenharia de agentes" para criar sistemas cognitivos autônomos e reduzir dependência de tecnologias estrangeiras.',
    link: 'https://cnnbra.com.br/artigo/15870001',
  },
  {
    source: 'UFAL — Universidade Federal de Alagoas',
    badge: 'ACADÊMICO',
    badgeColor: 'bg-blue-700',
    title: 'Professor se torna membro honorário de grupo científico internacional',
    subtitle: 'Dheiver Santos é nomeado membro honorário do conselho editorial do IJBST, destacando sua produção acadêmica em engenharias e computação.',
    link: 'https://noticias.ufal.br/servidor/noticias/2019/7/professor-se-torna-membro-honorario-de-grupo-cientifico-internacional',
  },
  {
    source: 'ECO NEWS',
    badge: 'INOVAÇÃO',
    badgeColor: 'bg-emerald-700',
    title: 'Tocantins é o último em inovação no País. Mas existe uma luz no fim do túnel',
    subtitle: 'Dheiver apresentado como pesquisador, professor e empreendedor na área de inteligência artificial e Indústria 4.0, chefe na Rede BRIDGE.',
    link: 'https://econews.com.br/tocantins-e-o-ultimo-em-inovacao-no-pais-mas-existe-uma-luz-no-fim-do-tunel/amp/',
  },
  {
    source: 'OAB/AL — Ordem dos Advogados',
    badge: 'PESQUISA',
    badgeColor: 'bg-amber-700',
    title: 'OAB divulga selecionados para Grupo de Pesquisa sobre IA no Direito',
    subtitle: 'Dheiver Francisco Santos selecionado para grupo de estudo sobre IA aplicada ao Direito, com foco em entregas práticas e estudos jurídicos tech-driven.',
    link: 'https://www.oab-al.org.br/2022/06/oab-divulga-selecionados-para-grupo-de-pesquisa-sobre-inteligencia-artificial-no-direito/',
  },
];

const MentoringMedia = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isHovered) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % mediaItems.length);
    }, 4500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  const goTo = (index: number) => setCurrent(index);
  const goPrev = () => setCurrent((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % mediaItems.length);

  return (
    <div className="w-full py-8 bg-stone-950">
      <div className="max-w-xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-amber-500 font-bold text-xs mb-2 tracking-wider">NA MÍDIA</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            Quem é <span className="text-amber-500">Dheiver Santos</span>
          </h2>
          <p className="text-sm text-stone-300 mt-2">Reconhecido por veículos nacionais e instituições de referência</p>
        </div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Cards */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {mediaItems.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex-shrink-0 block"
              >
                <div className="bg-stone-900 border border-stone-800 p-5 mx-1 hover:border-amber-500/40 transition-colors duration-300">
                  {/* Source + Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs text-stone-400 font-bold uppercase tracking-wide">{item.source}</p>
                    <span className={`${item.badgeColor} text-white text-[10px] font-bold px-2 py-0.5`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white leading-snug mb-2">
                    {item.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs text-stone-300 leading-relaxed mb-4">
                    {item.subtitle}
                  </p>

                  {/* Read link */}
                  <span className="text-amber-500 text-xs font-bold hover:text-amber-400 transition-colors inline-flex items-center gap-1">
                    Ler matéria completa →
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-stone-900/80 hover:bg-stone-800 text-white w-8 h-8 flex items-center justify-center transition-colors"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-stone-900/80 hover:bg-stone-800 text-white w-8 h-8 flex items-center justify-center transition-colors"
            aria-label="Próximo"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {mediaItems.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-amber-500 w-6' : 'bg-stone-600 hover:bg-stone-500'
              }`}
              aria-label={`Ir para matéria ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentoringMedia;
