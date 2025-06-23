import React from "react";

interface Props {
  titulo: string;
  descripcion: string;
  imagen: string;
}

const CardProyecto: React.FC<Props> = ({ titulo, descripcion, imagen }) => {
  return (
    <div
      className="card text-white flex-shrink-0 position-relative overflow-hidden"
      style={{
        width: "300px",
        height: "350px",
        backgroundImage: `url(${imagen})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "15px",
        cursor: "pointer",
        transition: "transform 0.3s ease",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          transition: "background-color 0.3s ease",
        }}
      ></div>

      <div
        className="card-img-overlay d-flex flex-column justify-content-end"
        style={{
          zIndex: 2,
          padding: "1rem",
        }}
      >
        <h5 className="card-title mb-1">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
      </div>

      <style>
        {`
          .card:hover {
            transform: scale(1.05);
          }
          .card:hover .position-absolute {
            background-color: rgba(0, 0, 0, 0.6);
          }
        `}
      </style>
    </div>
  );
};

export default CardProyecto;
