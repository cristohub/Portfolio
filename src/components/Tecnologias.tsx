import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BotonTecnologia from "./BotonTecnologia";
import { categoriasTecnologias } from "../data/tecnologias";

const Tecnologias: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <article className=" py-5">
      <div className="container position-relative">
        <h2 className="fw-bold mb-5 ">Habilidades Técnicas</h2>

        <div className="row g-4 justify-content-center">
          {categoriasTecnologias.map((categoria) => (
            <motion.div
              key={categoria.titulo}
              layoutId={`card-${categoria.titulo}`}
              className="col-6 col-md-4 col-lg-3"
              style={{ cursor: "pointer" }}
              onClick={() => setSelected(categoria.titulo)}
            >
              <div
                className="bg-white p-4  shadow h-100 d-flex align-items-center justify-content-center"
                style={{ borderRadius: "34px" }}
              >
                <h4 className="fw-semibold text-center mb-0">
                  {categoria.titulo}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              key="modal-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.5)",
                zIndex: 1000,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
              }}
              onClick={() => setSelected(null)}
            >
              {/* Evitar cerrar modal al click en el contenido */}
              <motion.div
                layoutId={`card-${selected}`}
                className="bg-white p-4 rounded shadow"
                style={{
                  maxWidth: "600px",
                  width: "100%",
                  maxHeight: "80vh",
                  overflowY: "auto",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="btn btn-danger mb-3"
                  onClick={() => setSelected(null)}
                >
                  X
                </button>

                <h3 className="mb-4 text-center">{selected}</h3>

                <div className="d-flex flex-wrap gap-3 justify-content-center">
                  {categoriasTecnologias
                    .find((cat) => cat.titulo === selected)
                    ?.tecnologias.map((tec, i) => (
                      <BotonTecnologia
                        key={i}
                        nombre={tec.nombre}
                        icono={tec.icono}
                      />
                    ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
};

export default Tecnologias;
