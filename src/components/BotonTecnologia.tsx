import React, { useState } from "react";

interface BotonTecnologiaProps {
  nombre: string;
  icono?: string;
}

const BotonTecnologia: React.FC<BotonTecnologiaProps> = ({ nombre, icono }) => {
  const [hover, setHover] = useState(false);

  const estilo = {
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    border: "1px solid #ccc",
    cursor: "pointer",
    transform: hover ? "translateY(-5px) scale(1.05)" : "none",
    boxShadow: hover
      ? "0 8px 15px rgba(0, 0, 0, 0.2)"
      : "0 1px 3px rgba(0, 0, 0, 0.1)",
    width: "auto", // Fija ancho para consistencia
    display: "flex",

    alignItems: "center",
    padding: "10px 12px",
    backgroundColor: "white",
    borderRadius: "50px",
    gap: "6px",
  };

  return (
    <div
      style={estilo}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={nombre}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && alert(`Seleccionaste ${nombre}`)}
    >
      {icono && (
        <img
          src={icono}
          alt={nombre}
          style={{ width: "32px", height: "32px", objectFit: "contain" }}
        />
      )}
      <span
        className="fw-medium"
        style={{ fontSize: "0.9rem", textAlign: "center" }}
      >
        {nombre}
      </span>
    </div>
  );
};

export default BotonTecnologia;
