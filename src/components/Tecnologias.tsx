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
        // Eliminamos anchoVisible porque no se usa
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
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-5">Habilidades Técnicas</h2>

        <div
          ref={containerRef}
          className="overflow-hidden"
          style={{
            width: "100%",
            position: "relative",
            height: "80px",
            cursor: isDragging.current ? "grabbing" : "grab",
          }}
        >
          <motion.div
            className="d-flex gap-4 align-items-center"
            style={{
              whiteSpace: "nowrap",
              display: "inline-flex",
              x,
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
