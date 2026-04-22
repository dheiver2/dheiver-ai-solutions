import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';
import { buildMentoringWhatsAppLink } from './mentoringConfig';

const VIDEO_ID = 'aSqsoPaP2jQ';
const VIDEO_TITLE = 'Apresentação da mentoria em Engenharia de IA';

const talkingPoints = [
  'Por que estudar sozinho não te leva à primeira vaga em IA',
  'O plano de 90 dias que substitui o caos de tutoriais por rotina',
  'Como o portfólio é construído com narrativa de contratação',
];

const MentoringVideoPitch = () => {
  const [playing, setPlaying] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const handlePlay = () => {
    setPlaying(true);
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'VideoPitchPlay', { content_name: 'mentoring_video_pitch' });
    }
  };

  return (
    <div className="relative w-full bg-[#07090F] py-16 md:py-24 overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-amber-500/[0.06] blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-block text-amber-400 text-xs font-bold tracking-[0.2em] mb-3">
            APRESENTAÇÃO EM 1 MINUTO
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Veja como a mentoria funciona{' '}
            <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              em 60 segundos
            </span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Em pouco mais de um minuto você entende o método, o ritmo das sessões e o que sai do outro lado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center justify-items-center md:justify-items-start">
          {/* Phone-frame video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Glow ring */}
            <div className="absolute -inset-6 bg-gradient-to-br from-amber-500/20 via-amber-500/5 to-transparent rounded-[3rem] blur-2xl" />

            {/* Phone frame (9:16) */}
            <div className="relative w-[260px] sm:w-[280px] md:w-[300px] aspect-[9/16] rounded-[2rem] bg-[#0B0F18] ring-1 ring-slate-800/80 shadow-2xl shadow-black/60 overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-20" />

              {playing ? (
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                  title={VIDEO_TITLE}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              ) : (
                <button
                  type="button"
                  onClick={handlePlay}
                  aria-label={`Reproduzir: ${VIDEO_TITLE}`}
                  className="group relative block w-full h-full text-left"
                >
                  <img
                    src={`https://i.ytimg.com/vi/${VIDEO_ID}/oar2.jpg`}
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      if (!img.dataset.fallback) {
                        img.dataset.fallback = '1';
                        img.src = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`;
                      }
                    }}
                    alt={`Capa do vídeo: ${VIDEO_TITLE}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex items-center justify-center w-16 h-16 rounded-full bg-amber-500 text-black shadow-xl shadow-amber-500/40 transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[10px] font-bold tracking-[0.18em] text-amber-300 uppercase">
                      ▶ 0:60 · Dr. Dheiver
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white leading-tight">
                      Como você entra na sua primeira vaga de IA
                    </p>
                  </div>
                </button>
              )}
            </div>
          </motion.div>

          {/* Talking points + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full max-w-md text-center md:text-left"
          >
            <p className="text-xs font-bold tracking-[0.2em] text-amber-400 mb-4">
              O QUE VOCÊ VAI ENTENDER
            </p>
            <ul className="space-y-3.5 mb-6 md:mb-8">
              {talkingPoints.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-amber-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={buildMentoringWhatsAppLink(
                'Acabei de assistir a apresentação da mentoria e quero conversar com o Dheiver.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && window.fbq) {
                  window.fbq('track', 'Lead', { content_name: 'video_pitch_whatsapp_cta' });
                }
              }}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-sm px-6 md:px-8 py-3.5 md:py-4 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/25"
            >
              Quero conversar com o Dheiver
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="mt-3 text-xs text-slate-500">
              Resposta em até 24h · Vagas limitadas para esta turma
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MentoringVideoPitch;
