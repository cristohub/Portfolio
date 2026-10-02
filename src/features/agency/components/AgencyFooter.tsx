import { useLanguage } from '../../../shared/hooks/useLanguage';
import { translations } from '../data/translations';
import { motion } from 'framer-motion';

export function AgencyFooter() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { label: 'Twitter', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'Instagram', href: '#' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-[#7c3aed]/20 py-12 md:py-16 overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-[#7c3aed]/10 rounded-full mix-blend-screen blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Logo & Description */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.h3
              className="text-2xl font-bold font-syne text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Cristofer Sani
            </motion.h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              {t.footerAbout}
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="font-bold font-syne text-white">{t.footerNav}</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-[#9ca3af] hover:text-[#7c3aed] transition-colors text-sm inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h4 className="font-bold font-syne text-white">Follow</h4>
            <ul className="space-y-2">
              {socialLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-[#9ca3af] hover:text-[#a855f7] transition-colors text-sm inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-[#7c3aed]/20 pt-8 text-center text-[#6b7280] text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {t.footerCopyright}
        </motion.div>
      </div>
    </footer>
  );
}
