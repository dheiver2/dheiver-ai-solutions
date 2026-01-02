import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  animated?: boolean;
  variant?: 'full' | 'symbol' | 'text';
  size?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({
  className = 'h-12',
  animated = true,
  variant = 'full',
  size = 'medium'
}) => {
  const uid = React.useId();

  const sizeClasses = {
    small: 'h-8',
    medium: 'h-12',
    large: 'h-16'
  };

  const textSizes = {
    small: { main: '14', sub: '8' },
    medium: { main: '18', sub: '10' },
    large: { main: '24', sub: '12' }
  };

  const currentSize = textSizes[size];

  const ids = {
    goldGradient: `${uid}-goldGradient`,
    neutralGradient: `${uid}-neutralGradient`,
    textGradient: `${uid}-textGradient`,
    goldGlow: `${uid}-goldGlow`,
    dropShadow: `${uid}-dropShadow`
  };

  const networkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.8, ease: 'easeInOut' }
    }
  };

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
    pulse: {
      scale: [1, 1.12, 1],
      opacity: [0.85, 1, 0.85],
      transition: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' }
    }
  };

  const glowVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: [0.25, 0.7, 0.25], transition: { duration: 3.8, repeat: Infinity, ease: 'easeInOut' } }
  };

  const Symbol = () => (
    <div className="relative">
      <svg viewBox="0 0 96 96" className="w-full h-full" role="img" aria-label="Logomarca">
        <defs>
          <linearGradient id={ids.goldGradient} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="42%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          <linearGradient id={ids.neutralGradient} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.55" />
          </linearGradient>

          <filter id={ids.goldGlow} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id={ids.dropShadow} x="-60%" y="-60%" width="220%" height="220%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000000" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Outer Halo */}
        <circle cx="48" cy="48" r="45" fill="none" stroke={`url(#${ids.goldGradient})`} strokeWidth="1.25" opacity="0.3" />
        <circle cx="48" cy="48" r="41" fill="none" stroke={`url(#${ids.neutralGradient})`} strokeWidth="1" opacity="0.6" />

        {/* Core Badge */}
        <g filter={`url(#${ids.dropShadow})`}>
          <path d="M48 20 L68 32 L68 56 L48 68 L28 56 L28 32 Z" fill={`url(#${ids.neutralGradient})`} opacity="0.92" />
          <path
            d="M48 18 L70 31 L70 57 L48 70 L26 57 L26 31 Z"
            fill="none"
            stroke={`url(#${ids.goldGradient})`}
            strokeWidth="1.5"
            filter={`url(#${ids.goldGlow})`}
          />
        </g>

        {/* Circuit / Neural Connections */}
        {animated ? (
          <g>
            <motion.path
              d="M 18 36 Q 48 16 78 36"
              stroke={`url(#${ids.goldGradient})`}
              strokeWidth="1.5"
              fill="none"
              opacity="0.7"
              variants={networkVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M 18 60 Q 48 80 78 60"
              stroke={`url(#${ids.goldGradient})`}
              strokeWidth="1.5"
              fill="none"
              opacity="0.7"
              variants={networkVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.35 }}
            />
            <motion.path
              d="M 12 48 Q 24 48 36 48"
              stroke={`url(#${ids.goldGradient})`}
              strokeWidth="1"
              fill="none"
              opacity="0.55"
              variants={networkVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.7 }}
            />
            <motion.path
              d="M 60 48 Q 72 48 84 48"
              stroke={`url(#${ids.goldGradient})`}
              strokeWidth="1"
              fill="none"
              opacity="0.55"
              variants={networkVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.7 }}
            />
          </g>
        ) : (
          <g>
            <path d="M 18 36 Q 48 16 78 36" stroke={`url(#${ids.goldGradient})`} strokeWidth="1.5" fill="none" opacity="0.7" />
            <path d="M 18 60 Q 48 80 78 60" stroke={`url(#${ids.goldGradient})`} strokeWidth="1.5" fill="none" opacity="0.7" />
            <path d="M 12 48 Q 24 48 36 48" stroke={`url(#${ids.goldGradient})`} strokeWidth="1" fill="none" opacity="0.55" />
            <path d="M 60 48 Q 72 48 84 48" stroke={`url(#${ids.goldGradient})`} strokeWidth="1" fill="none" opacity="0.55" />
          </g>
        )}

        {/* Neural Nodes */}
        {[
          { x: 18, y: 36 },
          { x: 78, y: 36 },
          { x: 12, y: 48 },
          { x: 84, y: 48 },
          { x: 18, y: 60 },
          { x: 78, y: 60 }
        ].map((node, index) =>
          animated ? (
            <motion.circle
              key={index}
              cx={node.x}
              cy={node.y}
              r="2.8"
              fill={`url(#${ids.goldGradient})`}
              variants={nodeVariants}
              initial="hidden"
              animate={['visible', 'pulse']}
              transition={{ delay: index * 0.08 }}
              filter={`url(#${ids.goldGlow})`}
            />
          ) : (
            <circle key={index} cx={node.x} cy={node.y} r="2.8" fill={`url(#${ids.goldGradient})`} filter={`url(#${ids.goldGlow})`} />
          )
        )}

        {/* Monogram */}
        <g aria-hidden="true">
          <path
            d="M40 38 C40 33 44 30 49.5 30 C57 30 62 34.5 62 42 C62 49.5 57 54 49.5 54 L46 54 L46 61 L40 61 Z M46 36 L49.2 36 C53.8 36 56 38.2 56 42 C56 45.8 53.8 48 49.2 48 L46 48 Z"
            fill="currentColor"
            opacity="0.92"
          />
          <path
            d="M52 58 C55.5 58 58.8 56.8 61.2 54.8"
            fill="none"
            stroke={`url(#${ids.goldGradient})`}
            strokeWidth="2"
            strokeLinecap="round"
            filter={`url(#${ids.goldGlow})`}
            opacity="0.9"
          />
        </g>

        {/* Micro-details */}
        <g opacity="0.6">
          <rect x="10" y="10" width="7" height="1.2" fill={`url(#${ids.goldGradient})`} rx="0.6" />
          <rect x="10" y="13" width="5" height="1.2" fill={`url(#${ids.goldGradient})`} rx="0.6" />
          <rect x="79" y="82" width="7" height="1.2" fill={`url(#${ids.goldGradient})`} rx="0.6" />
          <rect x="81" y="85" width="5" height="1.2" fill={`url(#${ids.goldGradient})`} rx="0.6" />
        </g>

        {animated && (
          <motion.circle
            cx="48"
            cy="48"
            r="45"
            fill="none"
            stroke={`url(#${ids.goldGradient})`}
            strokeWidth="0.9"
            opacity="0"
            variants={glowVariants}
            initial="hidden"
            animate="visible"
          />
        )}
      </svg>
    </div>
  );

  const Text = () => (
    <div className="flex flex-col justify-center">
      <svg viewBox="0 0 280 60" className="w-full h-full" role="img" aria-label="Nome">
        <defs>
          <linearGradient id={ids.textGradient} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
            <stop offset="70%" stopColor="currentColor" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id={ids.goldGradient} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="45%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
        </defs>

        <text
          x="0"
          y={currentSize.main}
          fill={`url(#${ids.textGradient})`}
          fontSize={currentSize.main}
          fontWeight="700"
          fontFamily="Inter, sans-serif"
          letterSpacing="-0.5"
        >
          Dr. Dheiver Santos
        </text>

        <text
          x="0"
          y={parseInt(currentSize.main) + parseInt(currentSize.sub) + 4}
          fill="currentColor"
          fontSize={currentSize.sub}
          fontWeight="500"
          fontFamily="Inter, sans-serif"
          letterSpacing="2"
          opacity="0.75"
        >
          CONSULTORIA EM INTELIGÊNCIA ARTIFICIAL
        </text>

        <rect x="0" y={parseInt(currentSize.main) + parseInt(currentSize.sub) + 12} width="60" height="2" fill={`url(#${ids.goldGradient})`} rx="1" />
      </svg>
    </div>
  );

  if (variant === 'symbol') {
    return (
      <div className={`${sizeClasses[size]} ${className} aspect-square`}>
        <Symbol />
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className={`${className} w-auto`}>
        <Text />
      </div>
    );
  }

  return (
    <div className={`${className} flex items-center gap-4 w-auto`}>
      <div className={`${sizeClasses[size]} aspect-square flex-shrink-0`}>
        <Symbol />
      </div>
      <div className="flex-1 min-w-0">
        <Text />
      </div>
    </div>
  );
};

export default Logo;
