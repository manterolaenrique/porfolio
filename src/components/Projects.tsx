'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Globe, X, Eye } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // Función para abrir el popup
  const handleOpenPopup = (projectTitle: string) => {
    setSelectedProject(projectTitle);
  };

  // Función para cerrar el popup
  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  const projects = [
    {
      title: 'Herramientas de Guitarra',
      description: 'Aplicación web interactiva para guitarristas con visualizador de acordes, escalas, círculo de quintas y afinador. Incluye modo claro/oscuro y cambio de cifrado musical.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      image: '/guitar.png',
      liveUrl: 'https://guitar-app-git.vercel.app',
      githubUrl: 'https://github.com/manterolaenrique/guitar-app-git',
      icon: Globe,
    },
    {
      title: 'Costeador de Eventos y Viajes',
      description: 'Aplicación web para organizar, dividir y visualizar gastos de eventos y viajes grupales. Incluye gestión de participantes, cálculo automático de saldos y dashboard interactivo.',
      technologies: ['React', 'Next.js', 'TypeScript', 'CSS'],
      image: '/costeador.png',
      liveUrl: 'https://app-costo-hotg.vercel.app/',
      githubUrl: 'https://github.com/manterolaenrique/AppCosto',
      icon: Code,
    },
    {
      title: 'Portfolio Personal',
      description: 'Portfolio profesional moderno y atractivo construido con Next.js, React, TailwindCSS y Framer Motion. Incluye diseño responsivo, animaciones suaves y optimización SEO.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: '/porfolio.png',
      liveUrl: 'https://porfolio-lilac-seven.vercel.app/', 
      githubUrl: 'https://github.com/manterolaenrique/porfolio',
      icon: Globe,
    },
    {
      title: 'Sitio para Bandas Musicales',
      description: 'Plantilla personalizable para bandas desarrollada con Next.js, React, TailwindCSS y Sanity. Permite configurar colores, secciones, redes sociales y contacto de forma dinámica. Diseño responsivo y editable desde CMS.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Sanity'],
      image: '/web-bands.png',
      liveUrl: 'https://web-bands.vercel.app/',
      githubUrl: 'https://github.com/manterolaenrique/web-bands',
      icon: Globe,
    },
  ];

  return (
    <section id="projects" className="section-padding section-bg-gray">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-32"
        >
          <h2 className="heading-xl">
            Proyectos Destacados
          </h2>
          <div className="divider-gradient-large"></div>
        </motion.div>

        {/* Grid de proyectos compactos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              {/* Tarjeta compacta */}
              <div className="card h-full">
                {/* Imagen del proyecto */}
                <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-600 overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      alt={`${project.title} - Preview`}
                      fill
                      className="object-cover transition-transform"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      priority={index === 0}
                      onError={(e) => {
                        console.log('Error loading image:', project.image);
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const iconContainer = target.parentElement?.querySelector('.fallback-icon');
                        if (iconContainer) {
                          (iconContainer as HTMLElement).style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback icon */}
                    <div className="fallback-icon absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
                      <project.icon className="w-16 h-16 text-white opacity-80" />
                    </div>
                  </div>
                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                </div>

                {/* Contenido compacto */}
                <div className="card-content p-4">
                  {/* Título del proyecto */}
                  <h3 className="heading-4xl mb-3 text-center">
                    {project.title}
                  </h3>
                  
                  {/* Tecnologías */}
                  <div className="tech-container mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="tech-tag text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Botones */}
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary btn-sm flex-1"
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                      
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary btn-sm flex-1"
                      >
                        <Github size={14} />
                        Código
                      </a>
                    </div>
                    
                    {/* Botón Ver más */}
                    <button
                      onClick={() => handleOpenPopup(project.title)}
                      className="btn-github btn-sm w-full"
                    >
                      <Eye size={14} />
                      Ver más
                    </button>
                  </div>
                </div>
              </div>

              {/* Indicador de hover */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Popup Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="project-popup-overlay"
              onClick={handleClosePopup}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="project-popup-content"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.title === selectedProject);
                  if (!project) return null;

                  return (
                    <>
                      {/* Header con botón de cerrar */}
                      <div className="flex items-center justify-between p-8 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="heading-2xl">{project.title}</h3>
                        <button
                          onClick={handleClosePopup}
                          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                        >
                          <X size={20} />
                        </button>
                      </div>

                      {/* Contenido del popup */}
                      <div className="p-8">
                        {/* Imagen más grande */}
                        <div className="relative h-64 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl overflow-hidden mb-6">
                          <Image
                            src={project.image}
                            alt={`${project.title} - Preview`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 600px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                        </div>

                        {/* Descripción */}
                        <p className="text-body-large mb-6 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tecnologías */}
                        <div className="tech-container-large mb-6">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="tech-tag"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Botones */}
                        <div className="flex gap-4">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary btn-md flex-1"
                          >
                            <ExternalLink size={18} />
                            Ver demo
                          </a>
                          
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary btn-md flex-1"
                          >
                            <Github size={18} />
                            Ver código
                          </a>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA para más proyectos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center relative top-8"
        >
          <a
            href="https://github.com/manterolaenrique"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github btn-lg"
          >
            <Github size={20} />
            Ver más proyectos en GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
} 