import { motion } from "framer-motion";

export function QRRequestSection() {
  const whatsappUrl = "https://wa.me/593969474171";
  const phoneDisplay = "+593 969 474 171";
  const email = "cristofersani04@gmail.com";

  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-[#111827] to-[#0b0f19] overflow-hidden flex items-center justify-center">
      {/* Subtle purple glow background */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#7c3aed]/10 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        {/* Main Ticket Card */}
        <motion.div
          className="relative w-full max-w-md bg-[#f9fafb] rounded-3xl shadow-2xl overflow-hidden group hover:shadow-[0_20px_50px_rgba(124,58,237,0.15)] transition-all duration-500"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          {/* First Section - QR Code */}
          <div className="w-full flex flex-col items-center justify-center px-6 py-7 bg-white/60">
            <motion.h2
              className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-5 font-syne"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Solicita un presupuesto
            </motion.h2>

            {/* QR Code Container */}
            <motion.div
              className="relative w-44 h-44 sm:w-52 sm:h-52 bg-white rounded-2xl p-4 flex items-center justify-center shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* QR Code Image */}
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=400&data=${encodeURIComponent(whatsappUrl)}`}
                alt="WhatsApp QR Code"
                className="w-full h-full rounded-xl"
              />
            </motion.div>

            {/* Instruction Text with WhatsApp Icon */}
            <motion.div
              className="flex items-center justify-center gap-2 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-center text-gray-600 text-xs sm:text-sm">
                Escanea el código con tu cámara de WhatsApp
              </p>
            </motion.div>
          </div>

          {/* Divisor estilo ticket */}
          <div className="relative flex items-center">
            <div className="absolute -left-4 w-8 h-8 bg-gradient-to-b from-[#111827] to-[#0b0f19] rounded-full z-10" />
            <div className="w-full border-t-2 border-dashed border-gray-300" />
            <div className="absolute -right-4 w-8 h-8 bg-gradient-to-b from-[#111827] to-[#0b0f19] rounded-full z-10" />
          </div>

          {/* Second Section - Contact Info */}
          <div className="w-full flex flex-col items-center justify-center px-6 py-6 bg-[#f9fafb]">
            {/* Email */}
            <motion.div
              className="flex items-center gap-3 w-full justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-gray-800 font-medium text-sm sm:text-base">
                {email}
              </span>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="flex items-center gap-3 w-full justify-center mt-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                <img
                  src="/whatsapp-symbol-logo-svgrepo-com.svg"
                  alt="WhatsApp"
                  className="w-6 h-6"
                />
              </div>
              <span className="text-gray-800 font-medium text-sm sm:text-base">
                {phoneDisplay}
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Action Button Below Card */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white font-semibold hover:shadow-lg transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(124, 58, 237, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="/whatsapp-symbol-logo-svgrepo-com.svg"
            alt="WhatsApp"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
          <span className="text-sm sm:text-base">Contactar por WhatsApp</span>
        </motion.a>
      </div>
    </section>
  );
}
