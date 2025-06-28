import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import EstadoTrabajo from "./EstadoTrabajo";
import cristoferImg from "../assets/images/cristofer-sani.png";
import Acerca from "../components/Acerca";

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
  // Mejor detectar tamaño dinámicamente (puedes usar un hook useState + useEffect para hacerlo reactivo)
  const isMobile = window.innerWidth <= 768;

  return (
    <motion.section
      id="inicio"
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
          <motion.div className="col-12 col-md-5" variants={textVariants}>
            <div className="mt-4">
              <EstadoTrabajo />
            </div>

            <motion.h1
              className="text-danger fw-bold"
              style={{
                fontSize: isMobile ? "1.5rem" : "clamp(1.5rem, 2vw, 3rem)",
                lineHeight: 1.2,
              }}
              variants={textVariants}
            >
              Hola, Soy Cristofer Sani
            </motion.h1>

            <motion.h1
              className="fw-bolder text-dark"
              style={{
                fontSize: isMobile ? "2.5rem" : "clamp(3rem, 7vw, 5rem)",
                lineHeight: 1.1,
              }}
              variants={textVariants}
            >
              Desarrollador De Aplicaciones Web
            </motion.h1>

            <motion.div className="text-center">
              <img
                src="/arrow.png"
                alt="Cristofer Sani"
                className="img-fluid rounded"
                style={{
                  maxWidth: isMobile ? "20%" : "30%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </motion.div>

            <motion.div
              className="mt-4 d-flex"
              style={{ marginLeft: "50px" }}
              variants={textVariants}
            >
              <a
                href="https://drive.google.com/file/d/1NU1cn8mE2Sem37C2bEC05xvl3yGytzLQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-danger text-light d-flex align-items-center gap-2 px-4 py-2 rounded-pill shadow"
                style={{
                  fontWeight: 600,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 0 0 transparent";
                }}
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
                className="icon-hover text-primary d-flex align-items-center"
              >
                <i className="bi bi-linkedin" style={{ fontSize: "30px" }}></i>
              </a>

              <a
                href="mailto:cristofersani03@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-hover d-flex align-items-center"
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

              <a
                href="tel:+34691010409"
                className="icon-hover d-flex align-items-center"
                style={{ color: "green" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24 11.72 11.72 0 003.68.59 1 1 0 011 1v3.5a1 1 0 01-1 1A16 16 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.05l-2.23 2.06z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Acerca />
    </motion.section>
  );
};

export default Hero;
