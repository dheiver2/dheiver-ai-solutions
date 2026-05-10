import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

type Cert = {
  title: string;
  image: string;
  issued: string;
  certNo?: string;
  verifyUrl?: string;
};

const certs: Cert[] = [
  {
    title: 'Introduction to Claude Cowork',
    image: '/certificates/intro-claude-cowork.png',
    issued: 'Mai 2026',
  },
  {
    title: 'Claude 101',
    image: '/certificates/claude-101.png',
    issued: 'Mai 2026',
    certNo: '9q6ac38oss9v',
    verifyUrl: 'https://verify.skilljar.com/c/9q6ac38oss9v',
  },
  {
    title: 'Claude Code 101',
    image: '/certificates/claude-code-101.png',
    issued: 'Mai 2026',
  },
  {
    title: 'Claude Code in Action',
    image: '/certificates/claude-code-in-action.png',
    issued: 'Mai 2026',
    certNo: 'bt4ixjbmcjrq',
    verifyUrl: 'https://verify.skilljar.com/c/bt4ixjbmcjrq',
  },
];

const MentoringClaudeCerts = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div className="w-full py-20 md:py-28 bg-[#07090F] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm">
              <img
                src="/logos/claude.svg"
                alt="Claude logo"
                loading="lazy"
                className="h-4 w-4 object-contain"
              />
            </span>
            <span className="text-amber-400 text-xs font-bold tracking-[0.2em]">
              CERTIFICADO PELA ANTHROPIC
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Treinado oficialmente em{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Claude AI
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Não vendo "achismo de IA". Sou treinado e certificado diretamente pela Anthropic — a empresa que constrói o Claude — em programas oficiais com verificação pública.
          </p>
        </motion.div>

        {/* Marquee carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <style>{`
            @keyframes claudeCertsMarquee {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .claude-certs-track {
              animation: claudeCertsMarquee 36s linear infinite;
              will-change: transform;
            }
            .claude-certs-viewport:hover .claude-certs-track {
              animation-play-state: paused;
            }
            @media (prefers-reduced-motion: reduce) {
              .claude-certs-track {
                animation: none;
              }
            }
          `}</style>
          <div className="claude-certs-viewport relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-20 bg-gradient-to-r from-[#07090F] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-20 bg-gradient-to-l from-[#07090F] to-transparent" />
            <div className="claude-certs-track flex gap-5 w-max">
              {[...certs, ...certs].map((cert, i) => {
                const isClone = i >= certs.length;
                const Card = (
                  <div
                    className="group relative w-[280px] sm:w-[340px] md:w-[400px] flex-shrink-0 rounded-2xl border border-slate-800/60 bg-[#0D1117] overflow-hidden hover:border-amber-500/40 transition-all duration-300"
                  >
                    {/* Cert image */}
                    <div className="aspect-[4/3] w-full bg-[#161B22] overflow-hidden">
                      <img
                        src={cert.image}
                        alt={`Certificado: ${cert.title}`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        onError={(e) => {
                          // Fallback in case the image asset is missing
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>

                    {/* Card body */}
                    <div className="p-4 md:p-5">
                      <p className="text-[10px] font-bold text-amber-400 tracking-wider mb-1">
                        ANTHROPIC · {cert.issued}
                      </p>
                      <h3 className="text-sm md:text-base font-bold text-white mb-2 leading-snug">
                        {cert.title}
                      </h3>
                      {cert.verifyUrl ? (
                        <span className="inline-flex items-center gap-1 text-[11px] text-amber-300/90 font-medium">
                          <ExternalLink className="h-3 w-3" />
                          Verificar autenticidade
                        </span>
                      ) : (
                        <span className="text-[11px] text-slate-500 font-medium">
                          Certificado de conclusão
                        </span>
                      )}
                    </div>
                  </div>
                );

                return cert.verifyUrl ? (
                  <a
                    key={`${cert.title}-${i}`}
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-hidden={isClone ? true : undefined}
                    tabIndex={isClone ? -1 : 0}
                    aria-label={`Verificar certificado ${cert.title} no Skilljar`}
                  >
                    {Card}
                  </a>
                ) : (
                  <div
                    key={`${cert.title}-${i}`}
                    aria-hidden={isClone ? true : undefined}
                  >
                    {Card}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-slate-500">
            Certificações emitidas por <span className="text-slate-300 font-semibold">Anthropic</span> via plataforma Skilljar — verificáveis publicamente.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MentoringClaudeCerts;
