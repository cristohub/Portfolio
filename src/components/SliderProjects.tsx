import React from "react";
import CardProject from "./CardProject";
import { projects } from "../data/projects";

const ProyectosSlider: React.FC = () => {
  return (
    <section className="mt-5">
      <h2 className="text-center  fw-bold mb-4">Proyectos Realizados</h2>
      <div
        className="d-flex justify-content-center overflow-auto bg-info gap-3 px-3 py-4"
        style={{
          overflowX: "auto",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch", // iOS
        }}
      >
        {projects.map((project, i) => (
          <CardProject
            key={i}
            titulo={project.titulo}
            descripcion={project.descripcion}
            imagen={project.imagen}
          />
        ))}
      </div>
    </section>
  );
};

export default ProyectosSlider;
