import { useLanguage } from '../../../shared/hooks/useLanguage';
import { translations } from '../data/translations';
import { motion } from 'framer-motion';

export function ContactCTA() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="contact" className="py-16 md:py-24 px-6 relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-[#7c3aed]/20 rounded-full mix-blend-screen blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#a855f7]/20 rounded-full mix-blend-screen blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* CTA Card */}
        <motion.div
          className="relative rounded-2xl p-8 md:p-12 overflow-hidden border border-[#7c3aed]/50 backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-500 group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Gradient border effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#a855f7] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
          />

          {/* Animated corner decorations */}
          <motion.div
            className="absolute top-0 left-0 w-16 h-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
          >
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.line x1="0" y1="100" x2="100" y2="0" stroke="#7c3aed" strokeWidth="2" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-0 right-0 w-16 h-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
          >
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.line x1="100" y1="100" x2="0" y2="0" stroke="#a855f7" strokeWidth="2" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
            </svg>
          </motion.div>

          {/* Content */}
          <div className="relative z-10 space-y-6">
            {/* Headline */}
            <motion.h2
              className="text-3xl md:text-5xl font-bold font-syne leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-white">{t.contactTitle}</span>
              {' '}
              <motion.span
                className="bg-gradient-to-r from-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent"
                animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                {t.contactTitleHighlight}
              </motion.span>
            </motion.h2>

            {/* Subheadline with arrow */}
            <motion.div
              className="flex items-center gap-3 pt-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-lg text-white font-medium">
                {t.contactSubtitle}
              </p>
              <motion.div
                className="text-[#7c3aed] text-xl flex items-center gap-1 group-hover:text-[#a855f7] transition-colors"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↓
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
