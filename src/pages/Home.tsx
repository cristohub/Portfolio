import React from "react";

import CallToAction from "../components/CallToAction";
import ContactSection from "../components/ContactSection";
import SliderProjects from "../components/SliderProjects";
import Acerca from "../components/Acerca";
import Hero from "../components/Hero";

const Home: React.FC = () => {
  return (
    <>
      <section style={{ borderRadius: "0 0 34px 34px", background: "" }}>
        <Hero />
        <Acerca />
      </section>

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
