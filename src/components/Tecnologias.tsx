import React, { useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { categoriasTecnologias } from "../data/tecnologias";
import BotonTecnologia from "./BotonTecnologia";

const Tecnologias: React.FC = () => {
  const tecnologias = categoriasTecnologias.flatMap((cat) => cat.tecnologias);
  const listaRepetida = Array(10).fill(tecnologias).flat();

  const x = useMotionValue(0);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Velocidad del scroll automático (pixeles por frame)
  const velocidad = 1;

  useEffect(() => {
    let animationFrameId: number;

    const animar = () => {
      if (!isDragging.current) {
        const anchoContenedor = containerRef.current?.scrollWidth || 0;
        const maxDesplazamiento = -(anchoContenedor / 2); // Reset cuando pasa la mitad

        let nuevoX = x.get() - velocidad;

        if (nuevoX <= maxDesplazamiento) {
          nuevoX = 0;
        }

        x.set(nuevoX);
      }
      animationFrameId = requestAnimationFrame(animar);
    };

    animar();

    return () => cancelAnimationFrame(animationFrameId);
  }, [x]);

  const handleDragStart = () => {
    isDragging.current = true;
  };

  const handleDragEnd = () => {
    isDragging.current = false;
  };

  return (
    <section className="py-5">
      <div>
        <h2 className="fw-bold mb-5">Habilidades Técnicas</h2>

        <div
          ref={containerRef}
          className="tecnologias-container"
          style={{
            width: "100%",
            height: "80px",
            cursor: isDragging.current ? "grabbing" : "grab",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Degradados laterales para disimular el corte */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "80px",
              height: "100%",
              pointerEvents: "none",
              background:
                "linear-gradient(to right, white 0%, rgba(255,255,255,0) 100%)",
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "80px",
              height: "100%",
              pointerEvents: "none",
              background:
                "linear-gradient(to left, white 0%, rgba(255,255,255,0) 100%)",
              zIndex: 2,
            }}
          />

          <motion.div
            className="d-flex gap-4 align-items-center"
            style={{
              whiteSpace: "nowrap",
              display: "inline-flex",
              x,
              height: "80px",
            }}
            drag="x"
            dragConstraints={{ left: -Infinity, right: 0 }}
            dragElastic={0.05}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            {listaRepetida.map((tec, i) => (
              <div key={i} style={{ flex: "0 0 auto" }}>
                <BotonTecnologia nombre={tec.nombre} icono={tec.icono} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
