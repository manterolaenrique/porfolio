'use client';

import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Download } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/enrique-manterola',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'from-blue-700 to-blue-800',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/enrique-manterola',
      icon: Github,
      color: 'from-gray-800 to-gray-900',
      hoverColor: 'from-gray-900 to-black',
    },
    {
      name: 'Email',
      url: 'mailto:enrique.manterola@email.com',
      icon: Mail,
      color: 'from-red-500 to-red-600',
      hoverColor: 'from-red-600 to-red-700',
    },
    {
      name: 'CV',
      url: '/CV - Manterola Enrique.pdf',
      icon: Download,
      color: 'from-green-500 to-green-600',
      hoverColor: 'from-green-600 to-green-700',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-slate-900 w-full">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 w-full"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Conectemos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y ver cómo puedo ayudarte a hacerlo realidad.
          </p>
        </motion.div>

        {/* Enlaces sociales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="contact-buttons mb-16"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target={link.name === 'Email' ? undefined : '_blank'}
              rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`contact-button bg-gradient-to-r ${link.color} group`}
            >
              <div className="icon-container">
                <link.icon size={22} />
              </div>
              <span>{link.name}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Información adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center w-full"
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-10 shadow-lg w-full">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Disponible para nuevos proyectos
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed text-lg">
              Actualmente estoy disponible para proyectos freelance y oportunidades de colaboración. 
              Si tienes una idea interesante o necesitas ayuda con tu proyecto, no dudes en contactarme.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Disponible para proyectos</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="font-medium">Respuesta en 24h</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="font-medium">Presupuestos gratuitos</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 