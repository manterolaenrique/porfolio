'use client';

import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Layers, Palette, Server, GitBranch } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Lenguaje', icon: Code, description: 'TypeScript, Javascript, Java, PHP' },
    { name: 'Framework / Librerías', icon: Layers, description: 'Angular, Node.js, Express, React, NestJS, Flutter, Maui' },
    { name: 'Librerías / Frameworks UI ', icon: Palette, description: 'Tailwind, Bootstrap, Material UI' },
    { name: 'Base de datos', icon: Database, description: 'MySQL, PostgreSQL, MongoDB, DynamoDB' },
    { name: 'DevOps', icon: GitBranch, description: 'Docker, GitHub, Vercel, Nginx' },
  ];

  return (
    <section id="about" className="section-padding-large section-bg-light">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-large"
        >
          <h2 className="heading-xl">
            Sobre mí
          </h2>
          <div className="divider-gradient"></div>
        </motion.div>

        <div className="grid-5-cols">
          {/* Texto descriptivo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-large lg:col-span-3"
          >
            <p className="text-body-large">
             Soy Enrique Manterola y soy un apasionado de la resolución de problemas y me mantengo actualizado con las últimas tendencias y tecnologías en el campo del desarrollo full stack.
             Estoy comprometido con la entrega de soluciones de alta calidad, escalables y seguras, y disfruto trabajando en proyectos desafiantes que me permitan seguir 
             creciendo profesionalmente.
            </p>
            
            <p className="text-body-large">
             En el lado del cliente, tengo experiencia en el uso de frameworks y librerías populares como Angular para desarrollar aplicaciones modernas con una excelente 
             experiencia de usuario.
            </p>
            <p className="text-body-large">
            En cuanto al lado del servidor, tengo experiencia en el desarrollo de APIs y servicios web utilizando tecnologías como Node.js, NestJS, Express, entre otras. También tengo conocimientos sólidos en 
            bases de datos relacionales y no relacionales, como MySQL, PostgreSQL, MongoDB, DynamoDB, lo que me permite diseñar y gestionar eficientemente la persistencia de datos en mis aplicaciones.
            Estoy en búsqueda de nuevas oportunidades para integrarme a un equipo de tecnologías de la información en una empresa donde pueda expandir y perfeccionar mis habilidades, 
            al mismo tiempo que aportar con entusiasmo y compromiso al crecimiento y éxito del equipo.
            </p>
          </motion.div>

          {/* Habilidades */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 lg:col-span-2"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="btn-md btn-width-md"
              >
                <div className="flex items-center gap-4">
                  <div className="icon-primary">
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="heading-4xl">
                      {skill.name}
                    </h3>
                    <p className="text-body-small">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 