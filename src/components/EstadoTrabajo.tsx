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
              box-shadow: 0 0 0 8px rgba(40, 167, 69, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(40, 167, 69, 0);
            }
          }

          .pulse {
            animation: pulse 1.5s infinite;
          }
        `}
      </style>

      <div className="d-inline-flex align-items-center bg-light px-3 py-1 rounded-pill text-muted mb-3">
        <span className="me-2">Abierto Al Trabajo</span>
        <span
          className="bg-success rounded-circle pulse"
          style={{ width: "8px", height: "8px" }}
        ></span>
      </div>
    </>
  );
};

export default EstadoTrabajo;
