import { useState } from "react";
import emailjs from "@emailjs/browser";

function BriefingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedGoal, setSelectedGoal] = useState<string>("");
  const [companyName, setCompanyName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [selectedInfrastructure, setSelectedInfrastructure] = useState<
    string[]
  >([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const totalSteps = 4;
  const isLastStep = currentStep === totalSteps;
  const goalLabel =
    selectedGoal === "conversion"
      ? "Captar clientes recurrentes"
      : selectedGoal === "sales"
        ? "Venta online / E-commerce"
        : selectedGoal === "brand"
          ? "Imagen de marca premium y autoridad"
          : "—";

  const handleNext = async () => {
    if (
      currentStep === 1 &&
      (!companyName.trim() ||
        !contactEmail.trim() ||
        !phone.trim() ||
        !companyDescription.trim())
    ) {
      alert("Por favor, rellena todos los campos obligatorios para continuar.");
      return;
    }

    if (
      currentStep === 1 &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail.trim())
    ) {
      alert("Introduce un correo electrónico válido.");
      return;
    }

    if (currentStep === 2 && !selectedGoal) {
      alert("Por favor, selecciona un objetivo principal.");
      return;
    }

    if (currentStep === totalSteps) {
      await handleSubmit();
      return;
    }

    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const handleInfrastructureToggle = (id: string) => {
    setSelectedInfrastructure((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleSubmit = async () => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const clientTemplateId = import.meta.env.VITE_EMAILJS_CLIENT_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !clientTemplateId || !publicKey) {
      setSubmitStatus("error");
      setSubmitMessage(
        "Falta configurar EmailJS. Añade VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_CLIENT_TEMPLATE_ID y VITE_EMAILJS_PUBLIC_KEY en el archivo .env.",
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage(null);

    try {
      const ownerEmail = "cristofersani04@gmail.com";
      const templateParams = {
        company_name: companyName || "Sin nombre",
        company_description: companyDescription || "Sin descripción",
        contact_email: contactEmail || "Sin email",
        phone: phone || "Sin teléfono",
        goal: goalLabel,
        infrastructure: selectedInfrastructure.length
          ? selectedInfrastructure.join(", ")
          : "No indicado",
        recipient_email: ownerEmail,
        to_email: ownerEmail,
        to_name: "Cristofer Sani",
        reply_to: contactEmail || ownerEmail,
        message: `Briefing recibido desde la web.\nEmpresa: ${companyName || "Sin nombre"}\nCorreo: ${contactEmail || "Sin email"}\nTeléfono: ${phone || "Sin teléfono"}\nObjetivo: ${goalLabel}\nInfraestructura: ${selectedInfrastructure.length ? selectedInfrastructure.join(", ") : "No indicado"}`,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      await emailjs.send(
        serviceId,
        clientTemplateId,
        {
          ...templateParams,
          to_email: contactEmail || ownerEmail,
          to_name: companyName || "Cliente",
          recipient_email: contactEmail || ownerEmail,
          reply_to: ownerEmail,
          message: `Gracias por completar el briefing.\nHemos recibido tu información y nos pondremos en contacto contigo pronto.\nEmpresa: ${companyName || "Sin nombre"}\nCorreo: ${contactEmail || "Sin email"}\nTeléfono: ${phone || "Sin teléfono"}\nObjetivo: ${goalLabel}`,
        },
        publicKey,
      );

      setSubmitStatus("success");
      setSubmitMessage(
        "Tu briefing se ha enviado correctamente. También hemos enviado un correo de confirmación al cliente.",
      );
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        "No se pudo enviar el briefing. Revisa la configuración de EmailJS y el template.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="flex min-h-screen flex-col justify-between bg-black p-6 text-white">
      <style>{`
        body { font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif; background-color: #000000; color: #f5f5f7; -webkit-font-smoothing: antialiased; }
        .apple-input { background-color: #1c1c1e; border: 1px solid #3a3a3c; border-radius: 12px; color: #ffffff; transition: all 0.2s ease; }
        .apple-input:focus { border-color: #0071e3; box-shadow: 0 0 0 4px rgba(0, 113, 227, 0.15); outline: none; }
        .apple-card-option { background-color: #1c1c1e; border: 2px solid #3a3a3c; border-radius: 16px; cursor: pointer; transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1); }
        .apple-card-option:hover { border-color: #86868b; transform: scale(1.01); }
        .apple-card-option.selected { border-color: #0071e3; background-color: rgba(0, 113, 227, 0.05); }
      `}</style>

      <header className="mx-auto flex w-full max-w-3xl items-center justify-end py-2" />

      <main className="mx-auto my-auto w-full max-w-xl rounded-[2rem] border border-zinc-800/80 bg-zinc-900/40 p-8 shadow-2xl backdrop-blur-xl md:p-10">
        <div className="mb-10 h-1 overflow-hidden rounded-full bg-zinc-800">
          <div
            className="h-full bg-[#0071e3] transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>

        <div>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
            {currentStep === 1 && "Hablemos de tu negocio."}
            {currentStep === 2 && "¿Cuál es el objetivo principal?"}
            {currentStep === 3 && "Infraestructura actual."}
            {currentStep === 4 && "Arquitectura Analizada."}
          </h2>
          <p className="mb-8 text-sm text-zinc-400 md:text-base">
            {currentStep === 1 &&
              "Ayúdame a entender la base de tu empresa en Madrid para diseñar la arquitectura adecuada."}
            {currentStep === 2 &&
              "Selecciona la función más crítica que debe cumplir tu nueva plataforma web."}
            {currentStep === 3 &&
              "Indícame con qué recursos cuentas actualmente para arrancar de inmediato."}
            {currentStep === 4 &&
              "El prototipo de tu briefing se ha estructurado localmente de forma limpia."}
          </p>

          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
                  Nombre de la Empresa
                </label>
                <input
                  type="text"
                  className="apple-input w-full p-4 text-base"
                  placeholder="Ej. Clínica Dental Salamanca"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
                  Correo de contacto
                </label>
                <input
                  type="email"
                  className="apple-input w-full p-4 text-base"
                  placeholder="Ej. hola@empresa.com"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="apple-input w-full p-4 text-base"
                  placeholder="Ej. +34 600 000 000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
                  ¿A qué se dedican y quién es su cliente ideal?
                </label>
                <textarea
                  rows={3}
                  className="apple-input w-full p-4 text-base"
                  placeholder="Ej. Ofrecemos odontología avanzada en la zona centro."
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  key: "conversion",
                  icon: "🎯",
                  title: "Captar Clientes (Leads)",
                  text: "Formularios optimizados, llamadas de acción claras y agendamiento automático.",
                  color: "text-blue-500 bg-blue-500/10",
                },
                {
                  key: "sales",
                  icon: "🛍️",
                  title: "Venta Directa o E-commerce",
                  text: "Catálogo de productos, pasarela de pago segura y gestión de inventario.",
                  color: "text-emerald-500 bg-emerald-500/10",
                },
                {
                  key: "brand",
                  icon: "✨",
                  title: "Autoridad y Marca Personal",
                  text: "Diseño de vanguardia y presentación premium de servicios.",
                  color: "text-purple-500 bg-purple-500/10",
                },
              ].map((option) => (
                <button
                  type="button"
                  key={option.key}
                  className={`apple-card-option flex items-start space-x-4 p-5 text-left ${
                    selectedGoal === option.key ? "selected" : ""
                  }`}
                  onClick={() => setSelectedGoal(option.key)}
                >
                  <div className={`mt-1 rounded-lg p-2 ${option.color}`}>
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-white">
                      {option.title}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-400">{option.text}</p>
                  </div>
                </button>
              ))}
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              {[
                { id: "domain", label: "Ya tengo Dominio y Hosting comprados" },
                {
                  id: "branding",
                  label: "Tengo Logotipo y manual de marca corporativo",
                },
                {
                  id: "payments",
                  label: "Necesito pasarelas de pago (Stripe, Bizum, etc.)",
                },
              ].map((item) => (
                <label
                  key={item.id}
                  className="flex cursor-pointer items-center space-x-3 rounded-xl border border-zinc-800 bg-zinc-800/40 p-4"
                >
                  <input
                    type="checkbox"
                    checked={selectedInfrastructure.includes(item.id)}
                    onChange={() => handleInfrastructureToggle(item.id)}
                    className="h-5 w-5 rounded border-zinc-700 bg-zinc-800 accent-blue-500"
                  />
                  <span className="text-sm text-zinc-300">{item.label}</span>
                </label>
              ))}
            </div>
          )}

          {currentStep === 4 && (
            <div className="rounded-2xl border border-zinc-800 bg-zinc-800/30 p-5 text-left text-sm text-zinc-300">
              <p>
                <strong>Empresa:</strong> {companyName || "—"}
              </p>
              <p>
                <strong>Correo:</strong> {contactEmail || "—"}
              </p>
              <p>
                <strong>Teléfono:</strong> {phone || "—"}
              </p>
              <p>
                <strong>Enfoque Estratégico:</strong> {goalLabel}
              </p>
              <p className="mt-3">
                <strong>Infraestructura previa:</strong>
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-zinc-400">
                {selectedInfrastructure.includes("domain") ? (
                  <li>Hosting/Dominio: Sí ✓</li>
                ) : (
                  <li>Hosting/Dominio: No ✗</li>
                )}
                {selectedInfrastructure.includes("branding") ? (
                  <li>Identidad Visual: Sí ✓</li>
                ) : (
                  <li>Identidad Visual: No ✗</li>
                )}
                {selectedInfrastructure.includes("payments") ? (
                  <li>Pasarela de Pago: Sí ✓</li>
                ) : (
                  <li>Pasarela de Pago: No ✗</li>
                )}
              </ul>
            </div>
          )}
        </div>

        {submitMessage && (
          <div
            className={`mt-6 rounded-xl border px-4 py-3 text-sm ${
              submitStatus === "success"
                ? "border-emerald-600/40 bg-emerald-500/10 text-emerald-300"
                : "border-red-600/40 bg-red-500/10 text-red-300"
            }`}
          >
            {submitMessage}
          </div>
        )}

        <div className="mt-10 flex items-center justify-between">
          <button
            type="button"
            onClick={handleBack}
            className={`px-4 py-2 text-sm font-medium text-zinc-400 transition hover:text-white ${
              currentStep === 1 ? "invisible" : "visible"
            }`}
          >
            Atrás
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={isSubmitting}
            className="rounded-full bg-[#0071e3] px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-[#0077ed] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting
              ? "Enviando..."
              : isLastStep
                ? "Finalizar Briefing"
                : currentStep === totalSteps - 1
                  ? "Finalizar Briefing"
                  : "Siguiente"}
          </button>
        </div>
      </main>

      <footer className="mx-auto w-full max-w-3xl py-4 text-center text-xs text-zinc-600"></footer>
    </div>
  );
}

export default BriefingPage;
