import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  animated?: boolean;
  variant?: 'full' | 'symbol' | 'text';
  size?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({ 
  className = "h-12", 
  animated = true,
  variant = 'full',
  size = 'medium'
}) => {
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

  // Animation variants for the neural network
  const networkVariants = {
    hidden: { 
      pathLength: 0, 
      opacity: 0 
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const nodeVariants = {
    hidden: { 
      scale: 0, 
      opacity: 0 
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const glowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0.3, 0.7, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Symbol component
  const Symbol = () => (
    <div className="relative">
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <defs>
          {/* Gold to Dark Gradient */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EAB308" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          
          {/* Dark Gradient */}
          <linearGradient id="darkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="50%" stopColor="#1F2937" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>
          
          {/* Glow Filter */}
          <filter id="goldGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Drop Shadow */}
          <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.3"/>
          </filter>
        </defs>
        
        {/* Outer Ring */}
        <circle 
          cx="40" 
          cy="40" 
          r="38" 
          fill="none" 
          stroke="url(#darkGradient)"
          strokeWidth="1.5"
          opacity="0.8"
        />
        
        {/* Background Circle */}
        <circle 
          cx="40" 
          cy="40" 
          r="35" 
          fill="#FFFFFF"
          stroke="#E5E7EB"
          strokeWidth="1"
          filter="url(#dropShadow)"
        />

        {/* Central Hexagon */}
        <polygon 
          points="40,18 52,25 52,35 40,42 28,35 28,25" 
          fill="url(#darkGradient)"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          filter="url(#goldGlow)"
        />
        
        {/* Neural Network Connections */}
        {animated ? (
          <g>
            <motion.path 
              d="M 20 30 Q 40 15 60 30" 
              stroke="url(#goldGradient)" 
              strokeWidth="1.5" 
              fill="none" 
              opacity="0.7"
              variants={networkVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path 
              d="M 20 50 Q 40 65 60 50" 
              stroke="url(#goldGradient)" 
              strokeWidth="1.5" 
              fill="none" 
              opacity="0.7"
              variants={networkVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            />
            <motion.path 
              d="M 15 40 Q 25 40 35 40" 
              stroke="url(#goldGradient)" 
              strokeWidth="1" 
              fill="none" 
              opacity="0.5"
              variants={networkVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1 }}
            />
            <motion.path 
              d="M 45 40 Q 55 40 65 40" 
              stroke="url(#goldGradient)" 
              strokeWidth="1" 
              fill="none" 
              opacity="0.5"
              variants={networkVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1 }}
            />
          </g>
        ) : (
          <g>
            <path d="M 20 30 Q 40 15 60 30" stroke="url(#goldGradient)" strokeWidth="1.5" fill="none" opacity="0.7"/>
            <path d="M 20 50 Q 40 65 60 50" stroke="url(#goldGradient)" strokeWidth="1.5" fill="none" opacity="0.7"/>
            <path d="M 15 40 Q 25 40 35 40" stroke="url(#goldGradient)" strokeWidth="1" fill="none" opacity="0.5"/>
            <path d="M 45 40 Q 55 40 65 40" stroke="url(#goldGradient)" strokeWidth="1" fill="none" opacity="0.5"/>
          </g>
        )}

        {/* Neural Nodes */}
        {[
          { x: 20, y: 30 }, { x: 60, y: 30 },
          { x: 15, y: 40 }, { x: 65, y: 40 },
          { x: 20, y: 50 }, { x: 60, y: 50 }
        ].map((node, index) => (
          animated ? (
            <motion.circle
              key={index}
              cx={node.x}
              cy={node.y}
              r="2.5"
              fill="url(#goldGradient)"
              variants={nodeVariants}
              initial="hidden"
              animate={["visible", "pulse"]}
              style={{ animationDelay: `${index * 0.2}s` }}
              filter="url(#goldGlow)"
            />
          ) : (
            <circle
              key={index}
              cx={node.x}
              cy={node.y}
              r="2.5"
              fill="url(#goldGradient)"
              filter="url(#goldGlow)"
            />
          )
        ))}
        
        {/* Central AI Symbol */}
        <text 
          x="40" 
          y="44" 
          textAnchor="middle" 
          fill="#FFFFFF" 
          fontSize="12" 
          fontWeight="700" 
          fontFamily="Inter, sans-serif"
          letterSpacing="1"
        >
          AI
        </text>

        {/* Corner Tech Details */}
        <g opacity="0.6">
          <rect x="8" y="8" width="6" height="1" fill="url(#goldGradient)" rx="0.5"/>
          <rect x="8" y="11" width="4" height="1" fill="url(#goldGradient)" rx="0.5"/>
          
          <rect x="66" y="68" width="6" height="1" fill="url(#goldGradient)" rx="0.5"/>
          <rect x="68" y="71" width="4" height="1" fill="url(#goldGradient)" rx="0.5"/>
        </g>

        {/* Animated Glow Effect */}
        {animated && (
          <motion.circle 
            cx="40" 
            cy="40" 
            r="38" 
            fill="none" 
            stroke="url(#goldGradient)"
            strokeWidth="0.5"
            opacity="0"
            variants={glowVariants}
            initial="hidden"
            animate="visible"
          />
        )}
      </svg>
    </div>
  );

  // Text component
  const Text = () => (
    <div className="flex flex-col justify-center">
      <svg viewBox="0 0 280 60" className="w-full h-full">
        <defs>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#111827" />
            <stop offset="70%" stopColor="#374151" />
            <stop offset="100%" stopColor="#EAB308" />
          </linearGradient>
        </defs>
        
        {/* Main Text - Dr. Dheiver Santos */}
        <text 
          x="0" 
          y={currentSize.main} 
          fill="url(#textGradient)" 
          fontSize={currentSize.main}
          fontWeight="700" 
          fontFamily="Inter, sans-serif"
          letterSpacing="-0.5"
        >
          Dr. Dheiver Santos
        </text>
        
        {/* Subtitle */}
        <text 
          x="0" 
          y={parseInt(currentSize.main) + parseInt(currentSize.sub) + 4} 
          fill="#6B7280" 
          fontSize={currentSize.sub}
          fontWeight="500" 
          fontFamily="Inter, sans-serif"
          letterSpacing="2"
          opacity="0.8"
        >
          CONSULTORIA EM INTELIGÊNCIA ARTIFICIAL
        </text>

        {/* Underline accent */}
        <rect 
          x="0" 
          y={parseInt(currentSize.main) + parseInt(currentSize.sub) + 12} 
          width="60" 
          height="2" 
          fill="url(#goldGradient)" 
          rx="1"
        />
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

  // Full logo (symbol + text)
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
