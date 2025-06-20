import React from "react";
import BotonLlamada from "./BotonLlamada";

interface CallToActionProps {
  titulo: string;
  descripcion: string;
  imagen: string;
  textoBoton: string;
  enlaceBoton: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  titulo,
  descripcion,
  imagen,
  textoBoton,
  enlaceBoton,
}) => {
  return (
    <section className="py-5" style={{ backgroundColor: "#a6eeff" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Imagen */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={imagen}
              alt="Imagen Call To Action"
              className="img-fluid"
              style={{ maxWidth: "90%" }}
            />
          </div>

          {/* Texto */}
          <div className="col-md-6 text-center">
            <h2 className="fw-bold text-primary">{titulo}</h2>
            <p className="fs-5 mb-4">{descripcion}</p>
            <BotonLlamada texto={textoBoton} enlace={enlaceBoton} icono=">" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
