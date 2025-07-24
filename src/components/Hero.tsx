'use client';

import { motion } from 'framer-motion';
import { Mail, Download, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';
import { useCallback } from 'react';

export default function Hero() {
  const handleEmailClick = useCallback(() => {
    window.location.href = 'mailto:enrique.manterola@email.com';
  }, []);

  const handleDownloadCV = useCallback(() => {
    window.open('/CV - Manterola Enrique.pdf', '_blank');
  }, []);

  const handleLinkedInClick = useCallback(() => {
    window.open('https://www.linkedin.com/in/enrique-manterola-8bb572189/', '_blank');
  }, []);

  const handleGitHubClick = useCallback(() => {
    window.open('https://github.com/manterolaenrique', '_blank');
  }, []);

  return (
    <section id="inicio" className="min-h-screen flex-center px-4 py-16 relative overflow-hidden section-with-navbar">
      {/* Fondo con gradiente y elementos decorativos */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900"></div>
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 dark:bg-pink-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid-2-cols">
          {/* Contenido de texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-large text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-small">
                Enrique{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  Manterola
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="heading-3xl">
                Full Stack Developer
              </h2>
              <p className="text-body-medium mb-medium">
                Angular, React & Node.js
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-body-medium leading-relaxed max-w-lg">
                Apasionado por crear soluciones digitales eficientes y escalables.
              </p>
            </motion.div>

            {/* Sección de botones principales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="buttons-section"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8">
                <button
                  onClick={handleEmailClick}
                  className="btn-primary btn-md btn-width-lg"
                  type="button"
                >
                  <Mail size={18} />
                  Enviar mensaje
                </button>
                
                <button
                  onClick={handleDownloadCV}
                  className="btn-secondary btn-md btn-width-lg"
                  type="button"
                >
                  <Download size={18} />
                  Descargar CV
                </button>
              </div>
            </motion.div>

            {/* Sección de botones sociales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="social-buttons-section mt-medium"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8">
                <button
                  onClick={handleLinkedInClick}
                  className="btn-linkedin btn-md btn-width-md"
                  type="button"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </button>
                
                <button
                  onClick={handleGitHubClick}
                  className="btn-github btn-md btn-width-md"
                  type="button"
                >
                  <Github size={18} />
                  GitHub
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Foto de perfil */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 relative">
                {/* Imagen real de perfil */}
                <Image
                  src="/_ODH0307.jpg"
                  alt="Enrique Manterola - Full Stack Developer"
                  fill
                  className="object-cover object-center"
                  style={{ objectPosition: 'center -5%', transform: 'scale(1.30)'  }}
                  priority
                  sizes="(max-width: 768px) 384px, 448px"
                />
                
                {/* Efecto de glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 opacity-20 blur-xl"></div>
              </div>
              
              {/* Elementos decorativos alrededor de la foto */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full animate-pulse animation-delay-1000"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-red-400 rounded-full animate-pulse animation-delay-2000"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 