import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  name: string;
  provider: string;
  description: string;
  year: number;
  verifyUrl?: string;
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      name: "AWS Certified Solutions Architect",
      provider: "Amazon Web Services",
      description: "Reconhecido como especialista em arquitetura de soluções cloud e design de infraestruturas escaláveis",
      year: 2023,
      verifyUrl: "https://aws.amazon.com/certification/"
    },
    {
      name: "Google Cloud Professional Data Engineer",
      provider: "Google Cloud",
      description: "Expertise em pipelines de dados, machine learning e análise avançada na Google Cloud Platform",
      year: 2024,
      verifyUrl: "https://cloud.google.com/certification/"
    },
    {
      name: "Microsoft Azure AI Engineer Associate",
      provider: "Microsoft",
      description: "Certified em desenvolvimento de soluções de IA com Azure, incluindo machine learning e processamento cognitivo",
      year: 2024,
      verifyUrl: "https://learn.microsoft.com/en-us/certifications/"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="certifications" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container-width">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certificações e Expertise
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Certificado pelas maiores provedoras de cloud e IA do mundo
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="border border-gray-200 rounded-lg p-8 hover:border-yellow-500 hover:bg-yellow-50/30 transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-700">
                  <Award className="w-6 h-6" />
                </div>
                <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">
                  {cert.year}
                </span>
              </div>

              {/* Provider */}
              <p className="text-xs font-semibold text-yellow-600 uppercase mb-2">
                {cert.provider}
              </p>

              {/* Name */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                {cert.name}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 mb-6 flex-grow leading-relaxed">
                {cert.description}
              </p>

              {/* Verify Link */}
              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-semibold text-sm transition-colors"
                >
                  Verificar certificação
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
