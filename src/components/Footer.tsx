'use client';

import { motion } from 'framer-motion';
import { Heart, Linkedin, Github, Mail, AlertCircle, X } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/enrique-manterola-8bb572189/',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/manterolaenrique',
      icon: Github,
    },
    {
      name: 'Email',
      url: 'mailto:enrique.manterola@email.com',
      icon: Mail,
    },
  ];

  return (
    <footer className="section-padding section-bg-dark text-white w-full">
      <div className="footer-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center w-full"
        >
          {/* Logo/Nombre */}
          <div className="mb-10 w-full">
            <h3 className="heading-2xl text-white">
              Enrique Manterola
            </h3>
            <p className="text-caption">
              Full Stack Developer
            </p>
          </div>

          {/* Enlaces sociales */}
          <div className="flex justify-center gap-6 mb-10 flex-wrap w-full">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target={link.name === 'Email' ? undefined : '_blank'}
                rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="icon-social group"
              >
                <link.icon size={22} />
              </motion.a>
            ))}
          </div>

          {/* Indicador de Issue */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8 w-full"
          >
          </motion.div>

          {/* Información adicional */}
          <div className="mb-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-400 justify-items-center w-full">
              <div className="text-center">
                <h4 className="font-semibold text-white mb-3 text-base">Tecnologías</h4>
                <p className="text-gray-300">React, Angular, Node.js, TypeScript</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-white mb-3 text-base">Ubicación</h4>
                <p className="text-gray-300">Disponible para trabajo remoto</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-white mb-3 text-base">Disponibilidad</h4>
                <p className="text-gray-300">Abierto a nuevas oportunidades</p>
              </div>
            </div>
          </div>

          {/* Línea divisoria */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
            <p className="text-caption-small">
              © {currentYear} Enrique Manterola. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center gap-2 text-caption-small">
              <span>Hecho con</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Heart size={16} className="text-red-500 fill-current" />
              </motion.div>
              <span>por Enrique Manterola</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 