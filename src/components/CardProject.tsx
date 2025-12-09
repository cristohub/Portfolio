import React from "react";

interface Props {
  titulo: string;
  descripcion: string;
  imagen: string;
  link: string;
}

const CardProyecto: React.FC<Props> = ({
  titulo,
  descripcion,
  imagen,
  link,
}) => {
  const Wrapper: any = link ? "a" : "div";

  return (
    <Wrapper
      {...(link
        ? {
            href: link,
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {})}
      className="text-decoration-none"
      style={{ cursor: link ? "pointer" : "default" }}
    >
      <div
        className="card text-white flex-shrink-0 position-relative overflow-hidden"
        style={{
          width: "300px",
          height: "350px",
          backgroundImage: `url(${imagen})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "15px",
          transition: "transform 0.3s ease",
          cursor: link ? "pointer" : "default",
        }}
      >
        <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>

        <div className="contenido position-absolute bottom-0 start-0 w-100 px-3 pb-3 text-white">
          <h5 className="mb-1">{titulo}</h5>
          <p className="mb-0">{descripcion}</p>
        </div>

        <style>
          {`
            .card:hover {
              transform: ${link ? "scale(1.05)" : "none"};
            }

            .overlay {
              background-color: rgba(0, 0, 0, 0);
              transition: background-color 0.3s ease;
              z-index: 1;
            }

            .card:hover .overlay {
              background-color: ${
                link ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0)"
              };
            }

            .contenido {
              opacity: 0;
              transition: opacity 0.3s ease;
              z-index: 2;
            }

            .card:hover .contenido {
              opacity: ${link ? "1" : "0"};
            }
          `}
        </style>
      </div>
    </Wrapper>
  );
};

export default CardProyecto;
