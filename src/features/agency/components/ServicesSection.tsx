import { useLanguage } from "../../../shared/hooks/useLanguage";
import { translations } from "../data/translations";
import { useInView } from "../../../shared/hooks/useInView";
import { motion } from "framer-motion";

export function ServicesSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [ref] = useInView();

  const services: Array<{
    empty?: boolean;
    title?: string;
    desc?: string;
    icon?: number;
    stage?: string;
  }> = [
    { empty: true }, // Position 1: Empty
    {
      title: t.service1Title,
      desc: t.service1Desc,
      icon: 0,
      stage: "1",
    },
    {
      title: t.service2Title,
      desc: t.service2Desc,
      icon: 1,
      stage: "2",
    },
    {
      title: t.service3Title,
      desc: t.service3Desc,
      icon: 2,
      stage: "3",
    },
    {
      title: t.service4Title,
      desc: t.service4Desc,
      icon: 3,
      stage: "4",
    },
    { empty: true }, // Position 6: Empty
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-syne text-white mb-4">
            {t.servicesTitle}
          </h2>
          <p className="text-[#9ca3af] text-lg max-w-2xl mx-auto">
            Our approach is system-driven and precision-focused. We don't
            decorate products - we architect them.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            if (service.empty) {
              return <div key={index} className=""></div>;
            }

            return (
              <motion.div
                key={index}
                className="group relative h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Glow background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#7c3aed]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                {/* Card */}
                <div className="relative backdrop-blur-md border border-[#7c3aed]/30 rounded-xl p-8 bg-white/5 hover:bg-white/10 transition-all duration-500 h-full flex flex-col">
                  {/* Stage Label */}
                  <div className="text-sm text-[#9ca3af] mb-4 tracking-wide">
                    Stage {service.stage}.
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold font-syne text-white mb-6 group-hover:text-[#a855f7] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#9ca3af] text-sm leading-relaxed flex-grow">
                    {service.desc}
                  </p>

                  {/* Animated underline */}
                  <div className="mt-6 h-0.5 bg-gradient-to-r from-[#7c3aed] to-[#a855f7] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Animated background orbs */}
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-[#7c3aed]/20 rounded-full mix-blend-screen blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 -right-40 w-80 h-80 bg-[#a855f7]/20 rounded-full mix-blend-screen blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
    </section>
  );
}
