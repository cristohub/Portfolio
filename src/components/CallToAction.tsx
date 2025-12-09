import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BotonLlamada from "./BotonLlamada";

interface CallToActionProps {
  titulo: string;
  descripcion: string;
  imagen: string; // Imagen de fondo
  textoBoton: string;
  enlaceBoton: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  titulo,
  descripcion,
  imagen,
  textoBoton,
  enlaceBoton,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants: Record<string, any> = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.2 },
    },
  };

  const textVariants: Record<string, any> = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, delay: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="relative py-5 rounded-[34px] overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${imagen})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Contenido visible encima de la imagen oscurecida */}
      <div className="container relative z-10">
        <div className="row align-items-center">
          <motion.div className="col-md-12 text-center" variants={textVariants}>
            <h2 className="fw-bold text-white">{titulo}</h2>
            <p className="fs-5 mb-4">{descripcion}</p>
            <BotonLlamada texto={textoBoton} enlace={enlaceBoton} icono=">" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CallToAction;
