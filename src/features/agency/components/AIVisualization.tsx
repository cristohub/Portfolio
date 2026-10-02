import { useEffect, useState } from 'react';

export function AIVisualization() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="relative w-full h-96 md:h-[500px] flex items-center justify-center">
      <svg
        viewBox="0 0 400 500"
        className="w-full h-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Neural Network Background */}
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.3" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Neural Network Nodes - Left side */}
        <g id="neuralNet">
          {/* Node 1 */}
          <circle cx="80" cy="120" r="8" fill="#06b6d4" opacity="0.8" filter="url(#glow)" />
          {/* Node 2 */}
          <circle cx="80" cy="200" r="8" fill="#0891b2" opacity="0.8" filter="url(#glow)" />
          {/* Node 3 */}
          <circle cx="80" cy="280" r="8" fill="#06b6d4" opacity="0.8" filter="url(#glow)" />
          {/* Node 4 */}
          <circle cx="80" cy="360" r="8" fill="#0891b2" opacity="0.8" filter="url(#glow)" />

          {/* Hidden Layer */}
          <circle cx="200" cy="90" r="6" fill="#7c3aed" opacity="0.7" filter="url(#glow)" />
          <circle cx="200" cy="160" r="6" fill="#a855f7" opacity="0.7" filter="url(#glow)" />
          <circle cx="200" cy="230" r="6" fill="#7c3aed" opacity="0.7" filter="url(#glow)" />
          <circle cx="200" cy="300" r="6" fill="#a855f7" opacity="0.7" filter="url(#glow)" />
          <circle cx="200" cy="370" r="6" fill="#7c3aed" opacity="0.7" filter="url(#glow)" />

          {/* Output Layer */}
          <circle cx="320" cy="150" r="8" fill="#06b6d4" opacity="0.8" filter="url(#glow)" />
          <circle cx="320" cy="280" r="8" fill="#0891b2" opacity="0.8" filter="url(#glow)" />
          <circle cx="320" cy="380" r="8" fill="#06b6d4" opacity="0.8" filter="url(#glow)" />

          {/* Connections */}
          <line x1="88" y1="120" x2="194" y2="90" stroke="#06b6d4" strokeWidth="0.5" opacity="0.3" />
          <line x1="88" y1="120" x2="194" y2="160" stroke="#06b6d4" strokeWidth="0.5" opacity="0.3" />
          <line x1="88" y1="200" x2="194" y2="230" stroke="#0891b2" strokeWidth="0.5" opacity="0.3" />
          <line x1="88" y1="280" x2="194" y2="300" stroke="#06b6d4" strokeWidth="0.5" opacity="0.3" />
          <line x1="88" y1="360" x2="194" y2="370" stroke="#0891b2" strokeWidth="0.5" opacity="0.3" />

          <line x1="206" y1="90" x2="312" y2="150" stroke="#7c3aed" strokeWidth="0.5" opacity="0.3" />
          <line x1="206" y1="160" x2="312" y2="150" stroke="#a855f7" strokeWidth="0.5" opacity="0.3" />
          <line x1="206" y1="230" x2="312" y2="280" stroke="#7c3aed" strokeWidth="0.5" opacity="0.3" />
          <line x1="206" y1="300" x2="312" y2="280" stroke="#a855f7" strokeWidth="0.5" opacity="0.3" />
          <line x1="206" y1="370" x2="312" y2="380" stroke="#7c3aed" strokeWidth="0.5" opacity="0.3" />
        </g>

        {/* Growth Chart - Right side */}
        <g id="chart">
          {/* Chart Background */}
          <rect x="10" y="30" width="150" height="200" fill="none" stroke="#1e4d5c" strokeWidth="0.5" opacity="0.3" rx="4" />

          {/* Grid lines */}
          <line x1="10" y1="80" x2="160" y2="80" stroke="#0891b2" strokeWidth="0.3" opacity="0.2" />
          <line x1="10" y1="130" x2="160" y2="130" stroke="#0891b2" strokeWidth="0.3" opacity="0.2" />
          <line x1="10" y1="180" x2="160" y2="180" stroke="#0891b2" strokeWidth="0.3" opacity="0.2" />

          {/* Chart Bars */}
          <rect x="25" y="160" width="12" height="70" fill="url(#chartGradient)" rx="2" opacity={animate ? 1 : 0.3} className="transition-all duration-1000" />
          <rect x="45" y="140" width="12" height="90" fill="url(#chartGradient)" rx="2" opacity={animate ? 1 : 0.3} className="transition-all duration-1000 delay-200" />
          <rect x="65" y="110" width="12" height="120" fill="url(#chartGradient)" rx="2" opacity={animate ? 1 : 0.3} className="transition-all duration-1000 delay-300" />
          <rect x="85" y="80" width="12" height="150" fill="url(#chartGradient)" rx="2" opacity={animate ? 1 : 0.3} className="transition-all duration-1000 delay-400" />
          <rect x="105" y="50" width="12" height="180" fill="url(#chartGradient)" rx="2" opacity={animate ? 1 : 0.3} className="transition-all duration-1000 delay-500" />
          <rect x="125" y="35" width="12" height="195" fill="url(#chartGradient)" rx="2" opacity={animate ? 1 : 0.3} className="transition-all duration-1000 delay-600" />

          {/* Chart Border */}
          <polyline
            points="25,160 45,140 65,110 85,80 105,50 125,35"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="1.5"
            opacity="0.6"
          />

          {/* Data points */}
          <circle cx="25" cy="160" r="2.5" fill="#06b6d4" />
          <circle cx="45" cy="140" r="2.5" fill="#06b6d4" />
          <circle cx="65" cy="110" r="2.5" fill="#06b6d4" />
          <circle cx="85" cy="80" r="2.5" fill="#06b6d4" />
          <circle cx="105" cy="50" r="2.5" fill="#06b6d4" />
          <circle cx="125" cy="35" r="2.5" fill="#06b6d4" />
        </g>

        {/* Floating particles (data flow) */}
        <g id="particles" opacity="0.6">
          <circle cx="150" cy="200" r="1.5" fill="#a855f7" className={animate ? 'animate-pulse' : ''} />
          <circle cx="160" cy="220" r="1" fill="#06b6d4" className={animate ? 'animate-pulse' : ''} style={{ animationDelay: '0.2s' }} />
          <circle cx="140" cy="240" r="1.5" fill="#a855f7" className={animate ? 'animate-pulse' : ''} style={{ animationDelay: '0.4s' }} />
          <circle cx="180" cy="180" r="1" fill="#06b6d4" className={animate ? 'animate-pulse' : ''} style={{ animationDelay: '0.1s' }} />
        </g>

        {/* Label: AI Processing */}
        <text x="200" y="440" textAnchor="middle" fill="#9ca3af" fontSize="12" opacity="0.7">
          AI-Powered Growth
        </text>
      </svg>
    </div>
  );
}
