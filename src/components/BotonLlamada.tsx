import React from "react";
import { motion } from "framer-motion";

interface BotonLlamadaProps {
  texto: string;
  enlace: string; // Usa el mismo formato con # que el id del destino, p. ej. "#contacto"
  icono?: string;
}

const BotonLlamada: React.FC<BotonLlamadaProps> = ({
  texto,
  enlace,
  icono,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // evitamos el salto brusco
    const target = document.querySelector(enlace);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className="btn btn-primary"
      style={{ borderRadius: "34px" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
    >
      {texto} {icono}
    </motion.button>
  );
};

export default BotonLlamada;
