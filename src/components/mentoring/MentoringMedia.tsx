import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const mediaItems = [
  {
    source: 'UFAL',
    badge: 'ACADÊMICO',
    badgeColor: 'bg-blue-500',
    title: 'Professor se torna membro honorário de grupo científico internacional',
    subtitle: 'Dheiver Santos é nomeado membro honorário do conselho editorial do IJBST.',
    link: 'https://noticias.ufal.br/servidor/noticias/2019/7/professor-se-torna-membro-honorario-de-grupo-cientifico-internacional',
  },
  {
    source: 'ECO NEWS',
    badge: 'INOVAÇÃO',
    badgeColor: 'bg-emerald-500',
    title: 'Tocantins é o último em inovação no País. Mas existe uma luz no fim do túnel',
    subtitle: 'Dheiver apresentado como pesquisador e empreendedor na área de IA e Indústria 4.0.',
    link: 'https://econews.com.br/tocantins-e-o-ultimo-em-inovacao-no-pais-mas-existe-uma-luz-no-fim-do-tunel/amp/',
  },
  {
    source: 'OAB/AL',
    badge: 'PESQUISA',
    badgeColor: 'bg-amber-500',
    title: 'OAB divulga selecionados para Grupo de Pesquisa sobre IA no Direito',
    subtitle: 'Dheiver selecionado para grupo de estudo sobre IA aplicada ao Direito.',
    link: 'https://www.oab-al.org.br/2022/06/oab-divulga-selecionados-para-grupo-de-pesquisa-sobre-inteligencia-artificial-no-direito/',
  },
];

const MentoringMedia = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (isHovered) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % mediaItems.length);
    }, 4500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isHovered]);

  return (
    <div className="w-full py-20 md:py-28 bg-[#07090F]">
      <div ref={ref} className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-amber-400 text-xs font-bold tracking-[0.2em] mb-4">NA MÍDIA</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Quem é <span className="text-amber-400">Dheiver Santos</span>
          </h2>
          <p className="text-sm text-slate-400 mt-2">Reconhecido por veículos nacionais e instituições de referência</p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden rounded-2xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${current * 100}%)` }}>
            {mediaItems.map((item, i) => (
              <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="w-full flex-shrink-0 block px-1">
                <div className="bg-[#0D1117] border border-slate-800/60 rounded-xl p-6 hover:border-amber-500/30 transition-colors duration-300 mx-auto max-w-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">{item.source}</p>
                    <span className={`${item.badgeColor} text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full`}>
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.subtitle}</p>
                  <span className="text-amber-400 text-sm font-semibold inline-flex items-center gap-1">
                    Ler matéria completa →
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Arrows */}
          <button onClick={() => setCurrent((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm text-lg"
            aria-label="Anterior">‹</button>
          <button onClick={() => setCurrent((prev) => (prev + 1) % mediaItems.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm text-lg"
            aria-label="Próximo">›</button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {mediaItems.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-amber-400 w-8' : 'bg-slate-700 w-1.5 hover:bg-slate-600'}`}
              aria-label={`Ir para matéria ${i + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentoringMedia;
