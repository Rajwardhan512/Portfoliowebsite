import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[var(--neuro-bg-primary)] py-12 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-4"
          >
            <h4 className="text-lg font-semibold text-[var(--neuro-text-primary)]">
              Navigation
            </h4>
            <div className="flex flex-col items-center gap-3">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  whileHover={{ scale: 1.05 }}
                  className="text-center text-[var(--neuro-text-secondary)] hover:text-[var(--neuro-accent)] transition-colors duration-200"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-4"
          >
            <h4 className="text-lg font-semibold text-[var(--neuro-text-primary)]">Social</h4>
            <div className="flex flex-col items-center gap-3">
              <motion.a
                href="https://github.com/Rajwardhan512"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="text-[var(--neuro-text-secondary)] hover:text-[var(--neuro-accent)] transition-colors duration-200"
              >
                GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rajwardhan343/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="text-[var(--neuro-text-secondary)] hover:text-[var(--neuro-accent)] transition-colors duration-200"
              >
                LinkedIn
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-4"
          >
            <h4 className="text-lg font-semibold text-[var(--neuro-text-primary)]">
              Contact
            </h4>
            <div className="flex flex-col items-center gap-3 text-[var(--neuro-text-secondary)]">
              <p>📍 Pune, Maharashtra</p>
              <p>💼 Open to Opportunities</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="neuro-inset h-px mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-[var(--neuro-text-secondary)]"
          >
            <span>© {currentYear}</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>Made with passion</span>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="neuro-button p-3 hover:glow-effect transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-[var(--neuro-accent)]" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;