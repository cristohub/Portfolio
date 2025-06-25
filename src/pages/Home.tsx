import React from "react";
import EstadoTrabajo from "../components/EstadoTrabajo";
import cristoferImg from "../assets/images/cristofer-sani.png";
import CallToAction from "../components/CallToAction";
import ContactSection from "../components/ContactSection";
import SliderProjects from "../components/SliderProjects";
import Acerca from "../components/Acerca";

const Home: React.FC = () => {
  return (
    <>
      <section id="inicio" className=" py-5">
        <div className="container-fluid">
          {" "}
          {/* Aquí el contenedor */}
          <div className="row align-items-center">
            {/* Imagen */}
            <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
              <img
                src={cristoferImg}
                alt="Cristofer Sani"
                className="img-fluid rounded"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Contenido */}
            <div className="col-12 col-md-4 ">
              <div className="mt-4 text-end">
                <EstadoTrabajo />
              </div>

              <h1 className="text-danger fw-bold fs-4">
                Hola, Soy Cristofer Sani
              </h1>
              <h2 className="fs-2 fw-bolder text-dark">
                Desarrollador De Aplicaciones Web
              </h2>

              <div className="mt-4  d-flex align-items-center gap-2 fw-semibold">
                <a
                  href="https://drive.google.com/file/d/1NU1cn8mE2Sem37C2bEC05xvl3yGytzLQ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-danger text-light d-inline-flex align-items-center gap-2"
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                  Ver CV
                </a>
              </div>

              <hr className="my-4 w-50" />

              <div className="d-flex gap-4 align-items-center fs-3">
                <a
                  href="https://linkedin.com/in/tuusuario"
                  target="_blank"
                  className="text-primary d-flex align-items-center"
                  style={{ width: "30px", height: "30px" }}
                >
                  <i
                    className="bi bi-linkedin"
                    style={{ fontSize: "30px" }}
                  ></i>
                </a>

                <a
                  href="mailto:tuemail@gmail.com"
                  target="_blank"
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <Acerca />

      <section>
        <CallToAction
          titulo="¿Necesitas Un Sitio Web A Medida?"
          descripcion="Cuéntame tu idea y la hacemos realidad."
          imagen="/cta-image.png"
          textoBoton="Contactar"
          enlaceBoton="#contacto"
        />
      </section>

      <SliderProjects />

      <ContactSection />
    </>
  );
};

export default Home;
