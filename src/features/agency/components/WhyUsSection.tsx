import { useLanguage } from '../../../shared/hooks/useLanguage';
import { translations } from '../data/translations';
import { useInView } from '../../../shared/hooks/useInView';
import { motion } from 'framer-motion';

export function WhyUsSection() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [ref, isInView] = useInView();

  const stats = [
    {
      number: t.stat1Number,
      label: t.stat1Label,
    },
    {
      number: t.stat2Number,
      label: t.stat2Label,
    },
    {
      number: t.stat3Number,
      label: t.stat3Label,
    },
  ];

  return (
    <section id="why-us" ref={ref} className="py-20 md:py-32 bg-[#111827]/50 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-0 left-1/3 w-96 h-96 bg-[#7c3aed]/20 rounded-full mix-blend-screen blur-3xl"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-syne text-white">
            {t.whyUsTitle}
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#7c3aed]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"/>

              {/* Content */}
              <div className="relative z-10 text-center py-12 px-6">
                <motion.div
                  className="text-6xl md:text-7xl font-bold font-syne bg-gradient-to-r from-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent mb-4"
                  animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-lg text-[#9ca3af] font-medium group-hover:text-white transition-colors">
                  {stat.label}
                </p>

                {/* Underline */}
                <motion.div
                  className="mt-6 h-1 bg-gradient-to-r from-[#7c3aed] to-[#a855f7] rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  style={{ originX: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
