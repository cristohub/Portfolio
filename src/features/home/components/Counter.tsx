import React from 'react';
import { useCounterAnimation } from '../../../shared/hooks/useCounterAnimation';

interface CounterProps {
  targetValue: number;
  suffix?: string;
  label: string;
  color: string;
  delay?: number;
}

const Counter: React.FC<CounterProps> = ({ 
  targetValue, 
  suffix = '', 
  label, 
  color,
  delay = 0 
}) => {
  const { count, elementRef, isVisible } = useCounterAnimation({ 
    targetValue,
    duration: 2000 
  });

  return (
    <div
      ref={elementRef}
      className={`counter-card ${isVisible ? 'counter-visible' : ''}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        padding: '2.5rem 2rem',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
      }}
    >
      <style>{`
        .counter-card {
          will-change: opacity, transform;
        }

        .counter-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .counter-number {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, ${color}, ${adjustColor(color, 20)});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }

        .counter-suffix {
          font-size: 0.85em;
          margin-top: 0.05em;
        }

        .counter-label {
          font-size: clamp(0.875rem, 2vw, 1rem);
          font-weight: 600;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-align: center;
          margin: 0;
        }

        .stat-icon {
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          background: linear-gradient(135deg, ${adjustColor(color, -20)}, ${color});
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          color: white;
          box-shadow: 0 8px 24px ${color}33;
          animation: iconFloat 3s ease-in-out infinite;
        }

        @keyframes iconFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @media (max-width: 768px) {
          .stat-icon {
            width: 3.5rem;
            height: 3.5rem;
            font-size: 1.5rem;
          }
        }
      `}</style>

      <div className="stat-icon">
        <span>📊</span>
      </div>
      
      <div className="counter-number">
        {count}
        <span className="counter-suffix">{suffix}</span>
      </div>
      
      <p className="counter-label">{label}</p>
    </div>
  );
};

// Función auxiliar para ajustar el color
function adjustColor(color: string, percent: number): string {
  // Si es un color hex
  if (color.startsWith('#')) {
    const hex = color.slice(1);
    const num = parseInt(hex, 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min(255, Math.max(0, (num >> 16) + amt));
    const G = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amt));
    const B = Math.min(255, Math.max(0, (num & 0x0000FF) + amt));
    return `rgb(${R}, ${G}, ${B})`;
  }
  // Si es un color rgb/rgba, devolverlo tal cual
  return color;
}

export default Counter;
