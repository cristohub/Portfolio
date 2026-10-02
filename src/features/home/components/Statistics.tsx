import React from 'react';
import Counter from './Counter';

const Statistics: React.FC = () => {
  const stats = [
    {
      value: 20,
      label: 'Proyectos Completados',
      color: '#28a745', // Verde
      suffix: '+',
    },
    {
      value: 50,
      label: 'Clientes Satisfechos',
      color: '#6f42c1', // Morado
      suffix: '+',
    },
    {
      value: 100,
      label: 'Dedicación al Trabajo',
      color: '#0891b2', // Azul
      suffix: '%',
    },
  ];

  return (
    <section className="statistics-section py-5">
      <style>{`
        .statistics-section {
          position: relative;
          overflow: hidden;
          background: linear-gradient(
            135deg,
            rgba(248, 249, 250, 0.7) 0%,
            rgba(240, 248, 255, 0.4) 50%,
            rgba(248, 249, 250, 0.7) 100%
          );
        }

        .statistics-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(40, 167, 69, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(111, 66, 193, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(8, 145, 178, 0.08) 0%, transparent 50%);
          pointer-events: none;
          animation: gradientShift 8s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .statistics-container {
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
          animation: fadeInDown 0.8s ease-out;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section-title {
          font-size: clamp(1.75rem, 5vw, 3rem);
          font-weight: 900;
          color: #1a1a1a;
          letter-spacing: -0.015em;
          margin: 0;
          position: relative;
          display: inline-block;
        }

        .section-title::before {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #28a745, #6f42c1, #0891b2);
          border-radius: 2px;
          box-shadow: 0 4px 16px rgba(40, 167, 69, 0.2);
        }

        .section-subtitle {
          color: #555;
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          margin-top: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          font-weight: 500;
          line-height: 1.6;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
          padding: 2rem 0;
          margin-top: 2rem;
        }

        .stat-item {
          position: relative;
          padding: 2.5rem 2rem;
          border-radius: 1.75rem;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(16px);
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          box-shadow: 
            0 10px 40px rgba(0, 0, 0, 0.06),
            inset 0 1px 2px rgba(255, 255, 255, 0.6);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation: slideUp 0.6s ease-out backwards;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stat-item:nth-child(1) {
          animation-delay: 0s;
        }

        .stat-item:nth-child(2) {
          animation-delay: 0.15s;
        }

        .stat-item:nth-child(3) {
          animation-delay: 0.3s;
        }

        .stat-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 1.75rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .stat-item:hover {
          transform: translateY(-8px);
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.12),
            inset 0 1px 2px rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(255, 255, 255, 0.95);
        }

        .stat-item:hover::before {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .section-title::before {
            bottom: -10px;
            width: 60px;
            height: 3px;
          }
        }
      `}</style>

      <div className="container statistics-container">
        <div className="section-header">
          <h2 className="section-title">Nuestros Resultados</h2>
          <p className="section-subtitle">
            Números que demuestran nuestro compromiso con la calidad y la excelencia en cada proyecto
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <Counter
              key={index}
              targetValue={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              color={stat.color}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
