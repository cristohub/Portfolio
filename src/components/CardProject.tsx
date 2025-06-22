import React from "react";

interface Props {
  titulo: string;
  descripcion: string;
  imagen: string;
  activo: boolean;
}

const CardProyecto: React.FC<Props> = ({
  titulo,
  descripcion,
  imagen,
  activo,
}) => {
  return (
    <div
      className="card text-white flex-shrink-0"
      style={{
        width: "300px",
        height: "350px",
        backgroundImage: `url(${imagen})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "15px",
        overflow: "hidden",
        transform: activo ? "scale(1.05)" : "scale(0.95)",
        opacity: activo ? 1 : 0.5,
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
    >
      <div
        className="card-img-overlay d-flex flex-column justify-content-end"
        style={{
          borderRadius: "15px",
          padding: "1rem",
        }}
      >
        <h5 className="card-title mb-1">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
      </div>
    </div>
  );
};

export default CardProyecto;
