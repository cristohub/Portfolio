import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import EstadoTrabajo from "./EstadoTrabajo";
import cristoferImg from "../assets/images/cristofer-sani.png";

// Detectar si estamos en móvil
const isMobile = window.innerWidth <= 768;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Hero: React.FC = () => {
  return (
    <motion.section
      id="inicio"
      className=""
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Imagen */}
          <motion.div
            className="col-12 col-md-6 text-center mb-4 mb-md-0"
            variants={imageVariants}
          >
            <img
              src={cristoferImg}
              alt="Cristofer Sani"
              className="img-fluid rounded"
              style={{
                maxWidth: isMobile ? "60%" : "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </motion.div>

          {/* Contenido */}
          <motion.div className="col-12 col-md-4" variants={textVariants}>
            <div className="mt-4">
              <EstadoTrabajo />
            </div>

            <motion.h1
              className="text-danger fw-bold fs-4"
              variants={textVariants}
            >
              Hola, Soy Cristofer Sani
            </motion.h1>

            <motion.h2
              className="fs-2 fw-bolder text-dark"
              variants={textVariants}
            >
              Desarrollador De Aplicaciones Web
            </motion.h2>

            <motion.div
              className="mt-4 d-inline-flex align-items-center gap-2 fw-semibold"
              variants={textVariants}
            >
              <a
                href="https://drive.google.com/file/d/1NU1cn8mE2Sem37C2bEC05xvl3yGytzLQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-danger text-light d-inline-flex align-items-center gap-2"
              >
                <i className="bi bi-box-arrow-up-right"></i>
                Ver CV
              </a>
            </motion.div>

            <motion.hr className="my-4 w-50" variants={textVariants} />

            <motion.div
              className="d-flex gap-4 align-items-center fs-3"
              variants={textVariants}
            >
              <a
                href="https://linkedin.com/in/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary d-flex align-items-center"
                style={{ width: "30px", height: "30px" }}
              >
                <i className="bi bi-linkedin" style={{ fontSize: "30px" }}></i>
              </a>

              <a
                href="mailto:tuemail@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center"
                style={{ width: "30px", height: "30px" }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
                  alt="Gmail"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
