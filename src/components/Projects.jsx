import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import GlassCard from './GlassCard';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Actavivo',
      description: 'A free team communication app that helps teams collaborate and stay connected. Built with modern web technologies for seamless user experience.',
      tech: ['Html', 'Css', 'Javascript', 'React', 'Redux', 'Firebase', 'Helcim Payment Gateway'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'https://auth.actavivo.com/css/actavivopublicicon.png',

    },
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with cart, checkout, and payment integration',
      tech: ['React', 'Redux', 'Firebase', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'https://via.placeholder.com/800x400?text=E-Commerce',
      color: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates and drag-drop',
      tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'https://via.placeholder.com/800x400?text=Task+App',
      color: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)'
    },
  ];

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of my recent work
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <GlassCard key={index} delay={index * 0.2} className="project-card">
              <div className="project-image-wrapper">
                <div 
                  className="project-image-overlay"
                  style={{ background: project.color }}
                >
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="project-image"
                    />
                  ) : (
                    <div className="project-placeholder">
                      <span className="project-placeholder-text">{project.title.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <div className="project-overlay">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link cursor-hover"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link cursor-hover"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Demo"
                  >
                    <FaExternalLinkAlt />
                  </motion.a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
