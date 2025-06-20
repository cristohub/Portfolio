import React from "react";

interface BotonLlamadaProps {
  texto: string;
  enlace: string;
  icono?: React.ReactNode;
}

const BotonLlamada: React.FC<BotonLlamadaProps> = ({ texto, enlace, icono }) => {
  return (
    <a href={enlace} className="btn btn-dark px-4 py-2"  style={{ borderRadius: '34px' }} >
      {texto} {icono && <span className="ms-2">{icono}</span>}
    </a>
  );
};

export default BotonLlamada;
