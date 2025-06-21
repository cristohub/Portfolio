import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsAppButton: React.FC = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+34691010409"
      accountName="Cristofer Sani"
      avatar="/Cristofer-Sani.png" // Pon tu logo en /public/logo.png
      chatMessage="Hola 👋 ¿En qué podemos ayudarte?"
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
