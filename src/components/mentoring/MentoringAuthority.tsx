import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

const MentoringAuthority = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const logoFor = (domain: string) => `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

  const skills: { label: string; logo?: string }[] = [
    { label: 'Claude AI', logo: logoFor('claude.ai') },
    { label: 'Cursor', logo: logoFor('cursor.com') },
    { label: 'ChatGPT', logo: logoFor('openai.com') },
    { label: 'AI Agents' },
    { label: 'LLMs & GenAI' },
    { label: 'RAG Systems' },
    { label: 'MLOps' },
    { label: 'Computer Vision' },
    { label: 'Deep Learning' },
    { label: 'Transformers' },
    { label: 'Fine-tuning' },
    { label: 'Kubernetes' },
  ];
  const certifications = ['Google Cloud ML Engineer', 'AWS ML Specialty', 'TensorFlow Developer', 'Databricks ML Associate'];

  const impacts = [
    { company: 'Santander', result: 'Squad 8 eng • -60% custos • +3x velocidade', logo: logoFor('santander.com.br') },
    { company: 'Grupo Boticário', result: 'IA para personalização e supply chain inteligente', logo: logoFor('grupoboticario.com.br') },
    { company: 'Grupo Fleury', result: 'GenAI e Computer Vision para diagnósticos', logo: logoFor('fleury.com.br') },
    { company: 'Petrobras', result: 'ML pipelines para análise operacional', logo: logoFor('petrobras.com.br') },
    { company: 'Engie Energia', result: 'Otimização de energia e previsão de demanda', logo: logoFor('engie.com.br') },
    { company: 'Universidades Federais', result: 'Professor de IA e Machine Learning na academia', icon: GraduationCap },
  ];

  return (
    <div className="w-full py-20 md:py-28 bg-[#07090F] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/[0.03] rounded-full blur-[100px]" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-amber-400 text-xs font-bold tracking-[0.2em] mb-4">QUEM VAI TE MENTORAR</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Por que eu faço isso?
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Eu passei 15 anos construindo IA para grandes empresas. Vi de perto como é difícil entrar nesse mercado sem orientação —
            porque eu também passei por isso. Decidi mentorar porque acredito que <strong className="text-slate-200">talento sem direção é desperdício</strong>,
            e o Brasil precisa de mais engenheiros de IA que vieram da vida real, não só de universidades de elite.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { value: 'PhD', label: 'Eng. Química', sub: 'UFBA / UFRJ • Prof. Universidades Federais' },
            { value: '15+', label: 'Anos Exp.', sub: 'Santander • Boticário • Fleury • Petrobras' },
            { value: '100+', label: 'Artigos', sub: 'Web of Science • Scopus', link: 'https://orcid.org/0000-0002-8599-9436' },
            { value: '150+', label: 'Projetos', sub: 'Saúde • Indústria • Finanças' },
          ].map((stat, i) => {
            const Wrapper = stat.link ? 'a' : 'div';
            const wrapperProps = stat.link ? { href: stat.link, target: '_blank', rel: 'noopener noreferrer' } : {};
            return (
              <Wrapper key={i} {...wrapperProps as any} className="bg-[#0D1117] border border-slate-800/60 rounded-xl p-5 text-center hover:border-amber-500/30 transition-colors">
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-b from-amber-400 to-amber-600 bg-clip-text text-transparent">{stat.value}</p>
                <p className="text-sm font-semibold text-white mt-1">{stat.label}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">{stat.sub}</p>
              </Wrapper>
            );
          })}
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-xs font-bold text-slate-500 tracking-wider mb-4">TECNOLOGIAS</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full font-medium text-xs"
              >
                {skill.logo && (
                  <img
                    src={skill.logo}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="w-3.5 h-3.5 rounded-sm bg-white/90 p-[1px] object-contain"
                  />
                )}
                {skill.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <p className="text-xs font-bold text-slate-500 tracking-wider mb-4">CERTIFICAÇÕES</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                <span className="text-amber-400">→</span>
                {cert}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#0D1117] border border-slate-800/60 rounded-2xl p-6 md:p-8 overflow-hidden"
        >
          <p className="text-xs font-bold text-amber-400 tracking-wider mb-6">IMPACTO EM EMPRESAS</p>
          <style>{`
            @keyframes impactMarquee {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .impact-marquee-track {
              animation: impactMarquee 28s linear infinite;
              will-change: transform;
            }
            .impact-marquee-viewport:hover .impact-marquee-track {
              animation-play-state: paused;
            }
          `}</style>
          <div className="impact-marquee-viewport relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0D1117] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0D1117] to-transparent" />
            <div className="impact-marquee-track flex gap-5 w-max">
              {[...impacts, ...impacts].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={`${item.company}-${i}`}
                    className="flex items-center gap-3 min-w-[260px] md:min-w-[320px] flex-shrink-0"
                    aria-hidden={i >= impacts.length ? true : undefined}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2 flex-shrink-0 shadow-sm ring-1 ring-amber-400/20">
                      {item.logo ? (
                        <img
                          src={item.logo}
                          alt={item.company}
                          loading="lazy"
                          className="max-w-full max-h-full object-contain"
                        />
                      ) : Icon ? (
                        <Icon className="w-6 h-6 text-amber-600" />
                      ) : null}
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-amber-400 text-sm truncate">{item.company}</p>
                      <p className="text-sm text-slate-400 mt-0.5">{item.result}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MentoringAuthority;
