import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsAppButton: React.FC = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+593969474171"
      accountName="Cristofer Sani"
      avatar="/assets/images/cristofer/Cristofer-Sani.svg"
      chatMessage="Hola ¿En qué puedo ayudarte?"
      statusMessage="En línea"
      placeholder="Escribe tu mensaje..."
      darkMode={false}
      messageDelay={1}
      allowEsc
      allowClickAway
      notification
      notificationSound
    />
  );
};

export default WhatsAppButton;
