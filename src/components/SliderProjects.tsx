import React, { useState, useEffect, useRef } from "react";
import CardProyecto from "./CardProject";
import { projects } from "../data/projects";

const ProyectosSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // entries: cada tarjeta
        let maxRatio = 0;
        let visibleIndex = activeIndex;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            const index = cardRefs.current.findIndex(
              (el) => el === entry.target
            );
            if (index !== -1) visibleIndex = index;
          }
        });

        setActiveIndex(visibleIndex);
      },
      {
        root: containerRef.current,
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // múltiple thresholds para mayor precisión
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="mt-5 mb-5 ">
      <h2 className=" fw-bold mb-4 px-4">
        Trabajos realizados y colaboraciones.
      </h2>
      <div
        ref={containerRef}
        className="d-flex overflow-auto gap-3 py-4"
        style={{
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {projects.map((project, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            style={{
              paddingLeft: i === 0 ? "10px" : "0",
              scrollSnapAlign: "start",
              flex: "0 0 auto",
            }}
            onClick={() => {
              cardRefs.current[i]?.scrollIntoView({ behavior: "smooth" });
              setActiveIndex(i);
            }}
          >
            <CardProyecto
              titulo={project.titulo}
              descripcion={project.descripcion}
              imagen={project.imagen}
              activo={activeIndex === i}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProyectosSlider;
