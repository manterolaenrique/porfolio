'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('inicio');

  // Monitorear cambios en activeSection
  useEffect(() => {
    console.log('Active section changed to:', activeSection);
  }, [activeSection]);

  // Detectar sección activa al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Obtener todas las secciones
      const inicioSection = document.getElementById('inicio');
      const aboutSection = document.getElementById('about');
      const projectsSection = document.getElementById('projects');
      
      if (inicioSection && aboutSection && projectsSection) {
        const inicioTop = inicioSection.offsetTop;
        const aboutTop = aboutSection.offsetTop;
        const projectsTop = projectsSection.offsetTop;
        
        console.log('Scroll position:', scrollPosition);
        console.log('Inicio top:', inicioTop);
        console.log('About top:', aboutTop);
        console.log('Projects top:', projectsTop);
        
        // Determinar qué sección está visible con un margen de 100px
        if (scrollPosition < aboutTop - 100) {
          console.log('Setting active: inicio');
          setActiveSection('inicio');
        } else if (scrollPosition < projectsTop - 100) {
          console.log('Setting active: sobre-mi');
          setActiveSection('sobre-mi');
        } else {
          console.log('Setting active: proyectos');
          setActiveSection('proyectos');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Ejecutar una vez al cargar para establecer el estado inicial
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para navegación suave
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio', sectionId: 'inicio' },
    { id: 'sobre-mi', label: 'Sobre mí', sectionId: 'about' },
    { id: 'proyectos', label: 'Proyectos', sectionId: 'projects' }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="navbar"
    >
      <div className="navbar-container">
        {/* Logo/Nombre */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="navbar-logo"
        >
          <span className="navbar-logo-text">EM</span>
        </motion.div>

        {/* Enlaces de navegación */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="navbar-links"
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.sectionId)}
              className={`navbar-link ${activeSection === item.id ? 'navbar-link-active' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            >
              {item.label}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
} 