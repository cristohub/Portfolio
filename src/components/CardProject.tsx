import React from "react";

interface Props {
  titulo: string;
  descripcion: string;
  imagen: string;
}

const CardProyecto: React.FC<Props> = ({ titulo, descripcion, imagen }) => {
  return (
    <div
      className="card text-white flex-shrink-0"
      style={{
        width: "300px", // ← cambia minWidth por width
        height: "350px",
        backgroundImage: `url(${imagen})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "15px",
        overflow: "hidden",
        scrollSnapAlign: "start",
      }}
    >
      <div
        className="card-img-overlay d-flex flex-column justify-content-end"
        style={{
          background: "rgba(0, 0, 0, 0.5)",
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
