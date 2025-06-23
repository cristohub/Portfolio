import React, { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const ContactSection: React.FC = () => {
  const [selectedInterest, setSelectedInterest] = useState<string>("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const interests = [
    "Diseño UX/UI",
    "Desarrollo web",
    "Desarrollo de sistema",
    "Colaboración",
    "Otra opción",
  ];

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^\d{9}$/.test(phone);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors = [];

    if (!selectedInterest) errors.push("Por favor, selecciona un interés.");
    if (!name.trim()) errors.push("El nombre es obligatorio.");
    if (!lastName.trim()) errors.push("El apellido es obligatorio.");
    if (!email.trim() || !validateEmail(email))
      errors.push("Correo electrónico no válido.");
    if (!phone.trim() || !validatePhone(phone))
      errors.push("Número de teléfono no válido. Debe tener 9 dígitos.");
    if (!comment.trim()) errors.push("El mensaje no puede estar vacío.");

    if (errors.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Corrige los errores",
        html: errors.join("<br>"),
      });
      return;
    }

    const templateParams = {
      interest: selectedInterest,
      name,
      lastName,
      email,
      phone,
      comment,
    };

    emailjs
      .send(
        "service_t5evh0d",
        "template_ns9ze8j",
        templateParams,
        "CF8pokcLxmKWP2D2h"
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: `Gracias por tu mensaje, ${name} ${lastName}!`,
          text: "Nos pondremos en contacto contigo pronto.",
        });

        // Limpiar formulario
        setName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setComment("");
        setSelectedInterest("Diseño UX/UI");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error al enviar el mensaje",
          text: "Por favor, intenta de nuevo más tarde.",
        });
        console.error("EmailJS error:", error);
      });
  };

  return (
    <section
      id="contacto"
      className="py-5 px-3"
      style={{ background: "linear-gradient(135deg, #5f3dc4, #4431a1)" }}
    >
      <div className="container">
        <div className="row align-items-center text-white">
          {/* Izquierda */}
          <div className="col-md-6 mb-5 mb-md-0">
            <h2 className="fw-bold mb-4" style={{ fontSize: "2.5rem" }}>
              ¿Tienes una idea <br /> o pregunta?
            </h2>
            <p className="d-flex align-items-center mb-3">
              <i
                className="bi bi-envelope-fill me-3"
                style={{ fontSize: "1.5rem", color: "#61dafb" }}
              ></i>
              <span>cristofersani04@gmail.com</span>
            </p>
            <p className="d-flex align-items-center mb-3">
              <i
                className="bi bi-linkedin me-3"
                style={{ fontSize: "1.5rem", color: "#61dafb" }}
              ></i>
              <a
                href="https://www.linkedin.com/in/cristofersani"
                target="_blank"
                rel="noreferrer"
                className="text-white text-decoration-none"
              >
                www.linkedin.com/in/cristofersani
              </a>
            </p>
            <p className="d-flex align-items-center mb-3">
              <i
                className="bi bi-telephone-fill me-3"
                style={{ fontSize: "1.5rem", color: "#61dafb" }}
              ></i>
              <span>+34 691 01 04 09</span>
            </p>
          </div>

          {/* Derecha - Formulario */}
          <div
            className="col-md-6 bg-white text-dark p-4 shadow"
            style={{ borderRadius: "34px" }}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold" htmlFor="intereses">
                  Estoy interesado en:
                </label>
                <div className="d-flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      className={`btn btn-sm rounded-pill ${
                        selectedInterest === interest
                          ? "btn-dark text-white"
                          : "btn-outline-secondary"
                      }`}
                      onClick={() => setSelectedInterest(interest)}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="nombre" className="form-label fw-semibold">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  placeholder="Ingresa tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="apellido" className="form-label fw-semibold">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="apellido"
                  placeholder="Ingresa tu apellido"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="telefono" className="form-label fw-semibold">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="telefono"
                  placeholder="Tu número de teléfono"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Tu correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="comentario" className="form-label fw-semibold">
                  Comentario
                </label>
                <textarea
                  className="form-control"
                  placeholder="Déjanos tu comentario o consulta"
                  id="comentario"
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 rounded-pill"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
