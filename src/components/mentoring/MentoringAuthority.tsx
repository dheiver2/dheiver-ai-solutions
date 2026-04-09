import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MentoringAuthority = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const skills = ['LLMs & GenAI', 'RAG Systems', 'Computer Vision', 'MLOps', 'Deep Learning', 'Transformers', 'Fine-tuning', 'Kubernetes'];
  const certifications = ['Google Cloud ML Engineer', 'AWS ML Specialty', 'TensorFlow Developer', 'Databricks ML Associate'];

  const impacts = [
    { company: 'Santander', result: 'Squad 8 eng • -60% custos • +3x velocidade' },
    { company: 'Grupo Fleury', result: 'GenAI e Computer Vision para diagnósticos' },
    { company: 'Engie Energia', result: 'Otimização de energia e previsão de demanda' },
    { company: 'Petrobras', result: 'ML pipelines para análise operacional' },
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
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Credenciais & Experiência
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { value: 'PhD', label: 'Eng. Química', sub: 'UFBA / UFRJ' },
            { value: '15+', label: 'Anos Exp.', sub: 'Santander • Fleury • Engie' },
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
              <span key={idx} className="px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full font-medium text-xs">
                {skill}
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
          className="bg-[#0D1117] border border-slate-800/60 rounded-2xl p-6 md:p-8"
        >
          <p className="text-xs font-bold text-amber-400 tracking-wider mb-6">IMPACTO EM EMPRESAS</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {impacts.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1 h-full bg-gradient-to-b from-amber-400 to-amber-600 rounded-full flex-shrink-0" />
                <div>
                  <p className="font-bold text-amber-400 text-sm">{item.company}</p>
                  <p className="text-sm text-slate-400 mt-0.5">{item.result}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MentoringAuthority;
