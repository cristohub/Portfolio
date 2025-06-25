import React from "react";
import Tecnologias from "./Tecnologias";

const Acerca = () => {
  return (
    <section className="container py-4" id="acerca">
      <div className="row">
        <article
          className="col-12 col-lg-6 mb-4 mb-lg-0"
          style={{ padding: "1rem" }}
        >
          <h2>Acerca de mí</h2>
          <p>
            Hola, soy Cristófer. Me apasiona el desarrollo web y estoy
            aprendiendo a crear interfaces modernas y responsivas usando React y
            Bootstrap.
          </p>
        </article>
        <div className="col-12 col-lg-6" style={{ padding: "1rem" }}>
          <Tecnologias />
        </div>
      </div>
    </section>
  );
};

export default Acerca;
