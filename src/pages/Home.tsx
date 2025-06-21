import React from 'react';
import EstadoTrabajo from "../components/EstadoTrabajo";
import cristoferImg from '../assets/images/cristofer-sani.png';
import CallToAction from "../components/CallToAction";
import ContactSection from "../components/ContactSection";

const Home: React.FC = () => {
  return (
    <>
    

<section>
  <div className="container-fluid"> {/* Aquí el contenedor */}
    <div className="row align-items-center">
      
      {/* Imagen */}
      <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
        <img 
          src={cristoferImg} 
          alt="Cristofer Sani" 
          className="img-fluid rounded"
          style={{ 
            maxWidth: '100%',
            height: 'auto',
            objectFit: 'cover'
          }}
        />
      </div>

      {/* Contenido */}
      <div className="col-12 col-md-4 ">
        <div className="mt-4 text-end">
          <EstadoTrabajo />
        </div>

        <h1 className="text-danger fw-bold fs-4">Hola, Soy Cristofer Sani</h1>
        <h2 className="fs-2 fw-bolder text-dark">Desarrollador De Aplicaciones Web</h2>

        <div className="mt-4 d-flex align-items-center gap-2 fw-semibold">
          <i className="bi bi-box-arrow-up-right text-danger"></i>
          <a href="/cv.pdf" target="_blank" className="text-decoration-underline text-dark">Ver CV</a>
        </div>

        <hr className="my-4 w-50" />

        <div className="d-flex gap-4 fs-3">
          <a href="https://linkedin.com/in/tuusuario" target="_blank" className="text-primary">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/tuusuario" target="_blank" className="text-dark">
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>

    </div>
  </div>
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







    <ContactSection />


    
  
    </>
  );
};

export default Home;
