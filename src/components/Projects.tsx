'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Globe } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
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
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real, notificaciones y dashboard interactivo.',
      technologies: ['Angular', 'Firebase', 'TypeScript', 'Material UI'],
      image: '/task-app-preview.jpg',
      liveUrl: 'https://task-app-demo.com',
      githubUrl: 'https://github.com/enrique/task-management',
      icon: Code,
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
          <p className="text-body-medium max-w-2xl mx-auto mb-16">
            Una muestra de mis proyectos más recientes y destacados
          </p>
        </motion.div>

        <div className="grid-3-cols mb-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: index * 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="card w-full max-w-sm"
            >
              {/* Imagen del proyecto */}
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-600 overflow-hidden">
                {/* Next.js Image con fallback a img estándar */}
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={`${project.title} - Preview`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                    onError={(e) => {
                      console.log('Error loading image:', project.image);
                      // Fallback al ícono si la imagen no carga
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const iconContainer = target.parentElement?.querySelector('.fallback-icon');
                      if (iconContainer) {
                        (iconContainer as HTMLElement).style.display = 'flex';
                      }
                    }}
                    onLoad={() => {
                      console.log('Image loaded successfully:', project.image);
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

              {/* Contenido */}
              <div className="card-content-large">
                <h3 className="heading-4xl">
                  {project.title}
                </h3>
                
                <p className="text-body-large mb-6">
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="tech-container-large">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enlaces */}
                <div className="flex gap-8 relative top-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary btn-sm btn-width-sm"
                  >
                    <ExternalLink size={16} />
                    Ver demo
                  </a>
                  
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary btn-sm btn-width-sm"
                  >
                    <Github size={16} />
                    Código
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA para más proyectos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-32"
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