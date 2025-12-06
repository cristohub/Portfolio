import React, { useEffect, useRef } from "react";

const ContactSection: React.FC = () => {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Ajustar la altura del widget según la ventana
    const adjustHeight = () => {
      if (calendlyRef.current) {
        // 80% del viewport, pero al menos 600px y espacio extra de 2rem
        const newHeight = Math.max(window.innerHeight * 0.8, 600);
        calendlyRef.current.style.height = `${newHeight}px`;
        calendlyRef.current.style.paddingBottom = "2rem";
      }
    };

    adjustHeight(); // Ajuste inicial
    window.addEventListener("resize", adjustHeight); // Ajuste al cambiar tamaño

    return () => {
      window.removeEventListener("resize", adjustHeight);
    };
  }, []);

  return (
    <section
      id="contacto"
      className="py-5 px-3 rounded-t-3xl bg-white text-gray-900"
    >
      <div className="container text-center">
        <h2 className="font-bold mb-4 text-4xl md:text-5xl">
          ¿Tienes una idea <br /> o pregunta?
        </h2>

        <div
          ref={calendlyRef}
          className="calendly-inline-widget mx-auto w-full mb-8"
          data-url="https://calendly.com/cristofersani/nueva-reunion?hide_event_type_details=1&hide_gdpr_banner=1"
          aria-label="Programar reunión con Cristófer Sani"
        ></div>

        <p className="text-sm mt-2">
          Si no puedes usar el calendario, envíame un correo a{" "}
          <a
            href="mailto:cristofersani04@ejemplo.com"
            className="text-blue-600 underline"
          >
            cristofersani04@ejemplo.com
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
