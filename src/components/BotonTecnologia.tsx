import React, { useState } from "react";

interface BotonTecnologiaProps {
  nombre: string;
  icono?: string;
}

const BotonTecnologia: React.FC<BotonTecnologiaProps> = ({ nombre, icono }) => {
  const [hover, setHover] = useState(false);

  const estilo = {
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    transform: hover ? "translateY(-5px) scale(1.05)" : "none",
    boxShadow: hover
      ? "0 8px 15px rgba(0, 0, 0, 0.2)"
      : "0 1px 3px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div
      className="d-inline-flex align-items-center px-3 py-2 bg-white border rounded-pill shadow-sm gap-2"
      style={estilo}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {icono && (
        <img
          src={icono}
          alt={nombre}
          style={{ width: "20px", height: "20px", objectFit: "contain" }}
        />
      )}
      <span className="fw-medium">{nombre}</span>
    </div>
  );
};

export default BotonTecnologia;
