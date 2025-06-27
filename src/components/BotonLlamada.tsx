import React from "react";

interface BotonLlamadaProps {
  texto: string;
  enlace: string;
  icono?: React.ReactNode;
}

const BotonLlamada: React.FC<BotonLlamadaProps> = ({
  texto,
  enlace,
  icono,
}) => {
  // Funciones para animar el botón al pasar el ratón
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.transform = "scale(1.05)";
    target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
    target.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.transform = "scale(1)";
    target.style.boxShadow = "none";
    target.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
  };

  return (
    <a
      href={enlace}
      className="btn btn-dark px-4 py-2"
      style={{ borderRadius: "34px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {texto} {icono && <span className="ms-2">{icono}</span>}
    </a>
  );
};

export default BotonLlamada;
