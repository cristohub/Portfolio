const EstadoTrabajo = () => {
  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.7);
            }
            70% {
              box-shadow: 0 0 0 12px rgba(40, 167, 69, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(40, 167, 69, 0);
            }
          }

          .pulse {
            animation: pulse 2s infinite;
          }
        `}
      </style>

      <div
        className="d-inline-flex align-items-center bg-light px-4 py-2 rounded-pill fw-bold shadow-sm mb-3"
        style={{ color: "black" }}
      >
        <span className="me-3">Abierto Al Trabajo</span>
        <span
          className="bg-success rounded-circle pulse"
          style={{ width: "14px", height: "14px" }}
        ></span>
      </div>
    </>
  );
};

export default EstadoTrabajo;
