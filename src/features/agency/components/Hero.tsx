import { useLanguage } from '../../../shared/hooks/useLanguage';
import { translations } from '../data/translations';
import { motion } from 'framer-motion';

export function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-20 left-1/4 w-96 h-96 bg-[#7c3aed]/30 rounded-full mix-blend-screen blur-3xl"
        animate={{ y: [0, -50, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-1/4 w-96 h-96 bg-[#a855f7]/20 rounded-full mix-blend-screen blur-3xl"
        animate={{ y: [0, 50, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"/>

      <motion.div
        className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold font-syne leading-tight">
            {t.heroLine1}
            <br />
            {t.heroLine2}
            <br />
            <motion.span
              className="inline-block bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#7c3aed] bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              {t.heroLine3}
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-[#9ca3af] max-w-2xl mx-auto leading-relaxed"
        >
          {t.heroSubtext}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 pt-6 justify-center"
        >
          <motion.a
            href="#services"
            className="relative px-8 py-4 font-semibold rounded-lg overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed] to-[#a855f7] group-hover:shadow-xl group-hover:shadow-[#7c3aed]/50 transition-all duration-300"/>
            <div className="absolute inset-0 bg-gradient-to-r from-[#6d28d9] to-[#9333ea] opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            <span className="relative text-white">{t.heroCta1}</span>
          </motion.a>

          <motion.a
            href="#projects"
            className="px-8 py-4 font-semibold rounded-lg border-2 border-white text-white hover:text-[#0a0a0f] transition-colors duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"/>
            <span className="relative z-10 group-hover:text-[#0a0a0f]">{t.heroCta2}</span>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="pt-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6 mx-auto text-[#7c3aed]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
