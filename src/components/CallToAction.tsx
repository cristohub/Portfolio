import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Sin Variants aquí
import BotonLlamada from "./BotonLlamada";

interface CallToActionProps {
  titulo: string;
  descripcion: string;
  imagen: string;
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

  // Puedes poner el tipo explícito como Record<string, any> para evitar problemas
  const containerVariants: Record<string, any> = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const imageVariants: Record<string, any> = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, delay: 0.3, ease: "easeOut" },
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
      className="py-5"
      style={{ backgroundColor: "#a6eeff", borderRadius: "34px" }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Imagen */}
          <motion.div
            className="col-md-6 text-center mb-4 mb-md-0"
            variants={imageVariants}
          >
            <img
              src={imagen}
              alt="Imagen Call To Action"
              className="img-fluid"
              style={{ maxWidth: "90%" }}
            />
          </motion.div>

          {/* Texto */}
          <motion.div className="col-md-6 text-center" variants={textVariants}>
            <h2 className="fw-bold text-primary">{titulo}</h2>
            <p className="fs-5 mb-4">{descripcion}</p>
            <BotonLlamada texto={textoBoton} enlace={enlaceBoton} icono=">" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CallToAction;
