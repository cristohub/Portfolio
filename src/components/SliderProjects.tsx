import React from "react";
import CardProyecto from "./CardProject";
import { projects } from "../data/projects";

const ProyectosSlider: React.FC = () => {
  return (
    <section
      className="mt-5 mb-5  d-flex flex-column justify-content-center"
      id="porta"
      style={{ minHeight: "600px" }}
    >
      <h2 className="fw-bold mb-5 px-4 container">
        Trabajos realizados y colaboraciones.
      </h2>
      <div
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
            style={{
              paddingLeft: i === 0 ? "10px" : "0",
              scrollSnapAlign: "start",
              flex: "0 0 auto",
            }}
          >
            <CardProyecto
              titulo={project.titulo}
              descripcion={project.descripcion}
              imagen={project.imagen}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProyectosSlider;
