import React from "react";
import BotonTecnologia from "./BotonTecnologia";
import { categoriasTecnologias } from "../data/tecnologias";

const Tecnologias: React.FC = () => {
  return (
    <article className="bg-light py-5">
      <div className="">
        <h2 className=" fw-bold mb-5">Habilidades Técnicas</h2>
        <div className="row">
          {categoriasTecnologias.map((categoria, index) => (
            <div key={index} className="col-12 col-md-6 mb-4">
              <h4 className="fw-semibold">{categoria.titulo}</h4>
              <div className="d-flex flex-wrap gap-3 mt-2">
                {categoria.tecnologias.map((tec, i) => (
                  <BotonTecnologia
                    key={i}
                    nombre={tec.nombre}
                    icono={tec.icono}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Tecnologias;
