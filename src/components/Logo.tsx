
import React from 'react';

const Logo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Background Circle with Gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#000000', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#374151', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Main Circle */}
        <circle 
          cx="50" 
          cy="50" 
          r="48" 
          fill="url(#logoGradient)" 
          stroke="#ffffff" 
          strokeWidth="1"
          filter="url(#glow)"
        />
        
        {/* Neural Network Nodes */}
        <circle cx="25" cy="25" r="3" fill="#ffffff" opacity="0.9" />
        <circle cx="75" cy="25" r="3" fill="#ffffff" opacity="0.9" />
        <circle cx="50" cy="40" r="3" fill="#ffffff" opacity="0.9" />
        <circle cx="25" cy="55" r="3" fill="#ffffff" opacity="0.9" />
        <circle cx="75" cy="55" r="3" fill="#ffffff" opacity="0.9" />
        <circle cx="50" cy="70" r="3" fill="#ffffff" opacity="0.9" />
        
        {/* Neural Network Connections */}
        <path d="M 25 25 L 50 40 L 75 25" stroke="#ffffff" strokeWidth="1" opacity="0.6" fill="none" />
        <path d="M 25 25 L 25 55" stroke="#ffffff" strokeWidth="1" opacity="0.6" fill="none" />
        <path d="M 75 25 L 75 55" stroke="#ffffff" strokeWidth="1" opacity="0.6" fill="none" />
        <path d="M 50 40 L 25 55" stroke="#ffffff" strokeWidth="1" opacity="0.6" fill="none" />
        <path d="M 50 40 L 75 55" stroke="#ffffff" strokeWidth="1" opacity="0.6" fill="none" />
        <path d="M 25 55 L 50 70" stroke="#ffffff" strokeWidth="1" opacity="0.6" fill="none" />
        <path d="M 75 55 L 50 70" stroke="#ffffff" strokeWidth="1" opacity="0.6" fill="none" />
        
        {/* Mathematical Symbols */}
        <text x="50" y="20" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="serif" opacity="0.8">∑</text>
        <text x="20" y="45" textAnchor="middle" fill="#ffffff" fontSize="6" fontFamily="serif" opacity="0.7">∂</text>
        <text x="80" y="45" textAnchor="middle" fill="#ffffff" fontSize="6" fontFamily="serif" opacity="0.7">∫</text>
        <text x="35" y="80" textAnchor="middle" fill="#ffffff" fontSize="5" fontFamily="serif" opacity="0.6">α</text>
        <text x="65" y="80" textAnchor="middle" fill="#ffffff" fontSize="5" fontFamily="serif" opacity="0.6">β</text>
        
        {/* Central AI Symbol */}
        <text x="50" y="87" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="sans-serif">AI</text>
      </svg>
    </div>
  );
};

export default Logo;
