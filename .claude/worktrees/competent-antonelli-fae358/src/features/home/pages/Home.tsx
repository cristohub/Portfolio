import React from "react";
import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import SliderProjects from "../../projects/components/SliderProjects";
import ContactSection from "../../contact/components/ContactSection";

const Home: React.FC = () => {
  return (
    <>
      <section style={{ borderRadius: "0 0 34px 34px", background: "" }}>
        <Hero />
      </section>

      <section>
        <CallToAction
          titulo="¿Necesitas Un Sitio Web A Medida?"
          descripcion="Cuéntame tu idea y la hacemos realidad."
          imagen="/fondocall.svg"
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
