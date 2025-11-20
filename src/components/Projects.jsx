import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import GlassCard from './GlassCard';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Actavivo',
      description: 'A free team communication app that helps teams collaborate and stay connected. Built with modern web technologies for seamless user experience.',
      tech: ['Html', 'Css', 'Javascript', 'React', 'Redux', 'Firebase', 'Helcim Payment Gateway'],
      demo: 'https://demo.com',
      image: 'https://auth.actavivo.com/css/actavivopublicicon.png',
    },
    {
      title: 'Reality Works AI',
      description: 'RealityWorks AI is a medical training companion that merges immersive UI with AI-driven mentoring to guide students through complex clinical flows.',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Shadcn UI', 'TypeScript', 'Nest.js', 'Python'],
      demo: 'https://tutorpatient.com/',
      image: 'https://img.freepik.com/premium-photo/ai-artificial-intelligence-future-technology-icon-design_749601-5162.jpg',
      color: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
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
                <h3 className="project-title">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-title-link cursor-hover"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="project-description">{project.description}</p>
                {project.aiFeatures && (
                  <div className="project-ai">
                    <span className="ai-badge">AI Stack</span>
                    <ul className="project-ai-list">
                      {project.aiFeatures.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
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
